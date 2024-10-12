import React from "react";
import Navigation from "./Navigation";

function Timetable() {
  const userEmail = "user@example.com"; // Dynamically get this from your auth state

  // Generate time blocks (each block is 16 minutes with 5-minute breaks in between)
  const generateTimeBlocks = (startHour, startMinute, numBlocks, blockLength = 16, breakLength = 5) => {
    const timetable = [];
    let hour = startHour;
    let minute = startMinute;

    for (let i = 0; i < numBlocks; i++) {
      const blockEndMinute = (minute + blockLength) % 60;
      const blockEndHour = hour + Math.floor((minute + blockLength) / 60);

      const blockStartTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      const blockEndTime = `${String(blockEndHour).padStart(2, "0")}:${String(blockEndMinute).padStart(2, "0")}`;

      // Study session
      timetable.push({
        start: blockStartTime,
        end: blockEndTime,
        activity: `Study Session ${i + 1}`,
      });

      // Update the time for the break
      minute = blockEndMinute;
      hour = blockEndHour;

      const breakEndMinute = (minute + breakLength) % 60;
      const breakEndHour = hour + Math.floor((minute + breakLength) / 60);

      const breakStartTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      const breakEndTime = `${String(breakEndHour).padStart(2, "0")}:${String(breakEndMinute).padStart(2, "0")}`;

      // Break
      timetable.push({
        start: breakStartTime,
        end: breakEndTime,
        activity: "Break",
      });

      // Update the time for the next study block
      minute = breakEndMinute;
      hour = breakEndHour;
    }

    return timetable;
  };

  const timeBlocks = generateTimeBlocks(9, 0, 8); // Generate 8 blocks starting at 9:00 AM

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navigation userEmail={userEmail} />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Timetable</h1>
        <p>Study sessions are split into 16-minute blocks with a 5-minute break in between.</p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>Start Time</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>End Time</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f4f4f4" }}>Activity</th>
            </tr>
          </thead>
          <tbody>
            {timeBlocks.map((block, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{block.start}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{block.end}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{block.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Timetable;
