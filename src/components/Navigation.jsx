import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faBook, faCog } from "@fortawesome/free-solid-svg-icons"; // Import the icons you need

function Navigation({ userEmail }) {
  return (
    <nav
      style={{
        width: "200px",
        backgroundColor: "#1f2937", // Darker background for a cleaner look
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        height: "100vh", // Full height of the viewport
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)", // Subtle shadow to create depth
      }}
    >
      <h2 style={{ color: "white", marginBottom: "30px", fontSize: "24px" }}>Menu</h2>

      {/* Navigation Links */}
      <div style={{ flexGrow: 1, width: "100%", textAlign: "center" }}>
        <Link
          to="/home"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            marginBottom: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
            display: "block",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px" }} />
          Overview
        </Link>

        <Link
          to="/sensor"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            marginBottom: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
            display: "block",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: "10px" }} />
          Timetable
        </Link>

        <Link
          to="/learning-material"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            marginBottom: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
            display: "block",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <FontAwesomeIcon icon={faBook} style={{ marginRight: "10px" }} />
          Learning Material
        </Link>

        <Link
          to="/settings"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            marginBottom: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
            display: "block",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <FontAwesomeIcon icon={faCog} style={{ marginRight: "10px" }} />
          Settings
        </Link>
      </div>

      {/* Display logged-in user's email at the bottom */}
      <div
        style={{
          color: "white",
          fontSize: "16px",
          borderTop: "1px solid #3b82f6",
          paddingTop: "10px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <strong>Logged in as:</strong>
        <p>{userEmail}</p>
      </div>
    </nav>
  );
}

export default Navigation;
