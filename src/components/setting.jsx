import React, { useState } from 'react';

function Settings() {
  const [username, setUsername] = useState('user');
  const [email, setEmail] = useState('user@example.com');
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert('Settings saved!');
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Settings</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#333' }}>Profile Settings</h3>
        <label style={{ display: 'block', margin: '10px 0', fontSize: '1rem' }}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box',
            }}
          />
        </label>

        <label style={{ display: 'block', margin: '10px 0', fontSize: '1rem' }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box',
            }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#333' }}>Preferences</h3>
        <label style={{ fontSize: '1rem' }}>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            style={{ marginRight: '10px' }}
          />
          Enable Notifications
        </label>
      </div>

      <button
        onClick={handleSave}
        style={{
          display: 'block',
          width: '100%',
          padding: '12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Save Settings
      </button>
    </div>
  );
}

export default Settings;
