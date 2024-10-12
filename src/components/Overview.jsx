import React from "react";
import { Bar, Line } from "react-chartjs-2";
import Navigation from "./Navigation";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

function Overview() {
  const userEmail = "user@example.com"; // Dynamically get this from your auth state

  // Mock data from survey
  const surveyData = {
    labels: ["Visual", "Auditory", "Kinesthetic"],
    datasets: [
      {
        label: "User Survey Results",
        data: [70, 50, 30], // Mocked survey result scores (visual, auditory, kinesthetic)
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Average Survey Data",
        data: [50, 60, 40], // Mocked average comparison scores
        backgroundColor: "rgba(153, 102, 255, 0.5)",
      },
    ],
  };

  // Mock concentration data during study sessions
  const concentrationData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"], // Weeks
    datasets: [
      {
        label: "Focus Level (%)",
        data: [70, 65, 75, 80], // Mock focus levels
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Pass the userEmail prop to Navigation */}
      <Navigation userEmail={userEmail} />

      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Overview of Learning Style and Concentration</h2>

        {/* Bar chart comparing user survey data with averages */}
        <div style={{ marginBottom: "50px" }}>
          <h3>Learning Style Comparison</h3>
          <Bar
            data={surveyData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Comparison of User's Learning Style with Averages",
                },
              },
            }}
          />
        </div>

        {/* Line chart showing concentration levels over time */}
        <div style={{ marginBottom: "50px" }}>
          <h3>Concentration Levels Over Time</h3>
          <Line
            data={concentrationData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "User's Concentration While Studying",
                },
              },
            }}
          />
        </div>

        {/* Summary stats on focus */}
        <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h3>Concentration Focus Statistics</h3>
          <p><strong>Average Focus Level:</strong> 72.5%</p>
          <p><strong>Best Focus Week:</strong> Week 4 (80%)</p>
          <p><strong>Lowest Focus Week:</strong> Week 2 (65%)</p>
          <p>This data helps identify how well you focus during study sessions, showing trends in your ability to concentrate over time.</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
