import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import ForgotPassword from "./components/ForgotPassword"; 
import Register from "./components/Register";
import Learning from "./components/LearningStyleSurvey";
import Overview from "./components/Overview";
import './index.css';
import Timetable from "./components/Timetable";
import LearningMaterialWithCamera from "./components/LearningMaterialWithCamera";
import LandingPage from "./components/LandingPage";
import Settings from "./components/setting";

function App() {
  const [userType, setUserType] = useState(null); // 'admin' or 'user' based on login

  const handleLogin = (type) => {
    setUserType(type);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {userType === 'admin' && (
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        )}
        {userType === 'user' && (
          <>
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/overview" element={<Overview />} /> {/* Add Overview route */}
            <Route path="/timetable" element={<Timetable />} /> {/* Add Overview route */}
            <Route path="/camera" element={<LearningMaterialWithCamera />} /> {/* Add Overview route */}
            <Route path="/setting" element={<Settings />} /> {/* Add Overview route */}
          </>
        )}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </Router>
  );
}

export default App;
