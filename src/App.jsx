import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import ForgotPassword from "./components/ForgotPassword"; 
import Register from "./components/Register"; // Import this
import './index.css';


function App() {
  const [userType, setUserType] = useState(null); // 'admin' or 'user' based on login

  const handleLogin = (type) => {
    setUserType(type);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        {userType === 'admin' && (
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        )}
        {userType === 'user' && (
          <Route path="/user-dashboard" element={<UserDashboard />} />
        )}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
