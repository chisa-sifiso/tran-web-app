import React from 'react';
import './CookieConsent.css';

const CookieConsent = ({ onAccept }) => {
  return (
    <div className="cookie-consent">
      <p>This website uses cookies to ensure you get the best experience. <a href="#">Learn more</a></p>
      <button onClick={onAccept}>Accept</button>
    </div>
  );
};

export default CookieConsent;
