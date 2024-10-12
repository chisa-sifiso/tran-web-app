import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import CookieConsent from '../CookieConsent';

const LandingPage = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (accepted) {
      setCookiesAccepted(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  // Function to handle form submission and navigate to the login page
  const handleLoginPage = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way
    navigate('/login'); // Navigate to /login route
  };

  return (
    <div>
      <header className="hero">
        
        <div className="hero-content">

          <h1>Personalized Learning for All</h1>
          <p>
            Our AI-driven solution helps identify learning difficulties like ADHD while recommending study material tailored to your unique style.
          </p>
          <a href="/login" className="btn-primary">Get Started</a>
        </div>
      </header>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          We believe in leveraging AI to empower learners of all kinds. Our goal is to make education accessible, engaging, and tailored to each individual's needs.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or need help? Reach out to our support team.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" onClick={handleLoginPage}>Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 AI Learning Assistant. All rights reserved.</p>
      </footer>

      {!cookiesAccepted && <CookieConsent onAccept={handleAcceptCookies} />}
    </div>
  );
};

export default LandingPage;
