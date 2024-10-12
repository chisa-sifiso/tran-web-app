import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLogin("admin");
      navigate("/admin-dashboard");
    } else if (username === "user" && password === "user123") {
      onLogin("user");
      navigate("/learning");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");  // Redirect to forgot password page
  };

  const handleFirstTimeSignIn = () => {
    navigate("/register");  // Redirect to registration page
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "32px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
              }}
            >
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                outline: "none",
                fontSize: "14px",
              }}
              placeholder="Enter username"
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                outline: "none",
                fontSize: "14px",
              }}
              placeholder="Enter password"
            />
          </div>
          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "12px",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          >
            Login
          </button>
        </form>

        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <button
            onClick={handleForgotPassword}
            style={{
              background: "none",
              border: "none",
              color: "#3b82f6",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "14px",
            }}
          >
            Forgot Password?
          </button>
        </div>

        <div style={{ marginTop: "8px", textAlign: "center" }}>
          <button
            onClick={handleFirstTimeSignIn}
            style={{
              background: "none",
              border: "none",
              color: "#3b82f6",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "14px",
            }}
          >
            First time sign-in?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
