import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function LearningStyleSurvey() {
  const [visualScore, setVisualScore] = useState(0);
  const [auditoryScore, setAuditoryScore] = useState(0);
  const [kinestheticScore, setKinestheticScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  const handleAnswer = (learningStyle, value) => {
    if (learningStyle === "visual") setVisualScore(visualScore + value);
    if (learningStyle === "auditory") setAuditoryScore(auditoryScore + value);
    if (learningStyle === "kinesthetic") setKinestheticScore(kinestheticScore + value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Navigate to user dashboard after 3 seconds
    setTimeout(() => {
      navigate("/user-dashboard"); // Replace with your actual UserDashboard route
    }, 3000); // 3-second delay before navigating
  };

  const getLearningStyle = () => {
    if (visualScore > auditoryScore && visualScore > kinestheticScore) {
      return "Visual Learner";
    } else if (auditoryScore > visualScore && auditoryScore > kinestheticScore) {
      return "Auditory Learner";
    } else if (kinestheticScore > visualScore && kinestheticScore > auditoryScore) {
      return "Kinesthetic Learner";
    } else {
      return "A combination of learning styles";
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Your Learning Style</h2>
        <p>
          Based on your answers, you are a <strong>{getLearningStyle()}</strong>.
        </p>
        <p>Redirecting to your dashboard in 3 seconds...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Learning Style Survey</h2>
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div style={{ marginBottom: "20px" }}>
          <p><strong>1. When you are learning new information, do you:</strong></p>
          <label>
            <input
              type="radio"
              name="question1"
              onClick={() => handleAnswer("visual", 1)}
            />{" "}
            Prefer diagrams, charts, and visual aids (Visual)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="question1"
              onClick={() => handleAnswer("auditory", 1)}
            />{" "}
            Prefer listening to explanations or verbal instructions (Auditory)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="question1"
              onClick={() => handleAnswer("kinesthetic", 1)}
            />{" "}
            Prefer hands-on activities and practical experience (Kinesthetic)
          </label>
        </div>

        {/* Question 2 */}
        <div style={{ marginBottom: "20px" }}>
          <p><strong>2. In a classroom, what do you prefer:</strong></p>
          <label>
            <input
              type="radio"
              name="question2"
              onClick={() => handleAnswer("visual", 1)}
            />{" "}
            Looking at the whiteboard or reading notes (Visual)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="question2"
              onClick={() => handleAnswer("auditory", 1)}
            />{" "}
            Listening to the teacher or classmates discuss the topic (Auditory)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="question2"
              onClick={() => handleAnswer("kinesthetic", 1)}
            />{" "}
            Participating in activities or experiments (Kinesthetic)
          </label>
        </div>

        {/* Question 3 */}
        <div style={{ marginBottom: "20px" }}>
          <p><strong>3. When you are trying to remember information, do you:</strong></p>
          <label>
            <input
              type="radio"
              name="question3"
              onClick={() => handleAnswer("visual", 1)}
            />{" "}
            Picture it in your mind (Visual)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="question3"
              onClick={() => handleAnswer("auditory", 1)}
            />{" "}
            Repeat it out loud to yourself (Auditory)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="question3"
              onClick={() => handleAnswer("kinesthetic", 1)}
            />{" "}
            Practice doing something related to it (Kinesthetic)
          </label>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LearningStyleSurvey;
