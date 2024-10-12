import React from "react";
import Navigation from "./Navigation";

function UserDashboard() {
  const userEmail = "user@example.com";  // Get this dynamically from your auth state

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navigation userEmail={userEmail} />

      {/* Main Dashboard Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>User Dashboard</h1>
        
        {/* Add user-specific functionalities here */}
      </div>
    </div>
  );
}

export default UserDashboard;
