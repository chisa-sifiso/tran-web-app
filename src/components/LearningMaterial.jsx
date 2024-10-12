import React from 'react';
import kinatic from '../assets/Kinaesthic.jpg';
import auditory from '../assets/Auditory.jpg';
import visual from '../assets/Visual.jpg';
import write from '../assets/Write.jpg';
import Navigation from './Navigation'; // Moved the import statement to the top

const userEmail = "user@example.com";

const LearningMaterial = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navigation userEmail={userEmail} />
      <div className="learning-material-container" style={{ flex: 1 }}>
        <div className="grid-item" style={{ backgroundImage: `url(${kinatic})` }}>
          <div className="overlay-text">Kinaesthetic Learning</div>
          <button className="learning-button">Explore More</button>
        </div>
        <div className="grid-item" style={{ backgroundImage: `url(${auditory})` }}>
          <div className="overlay-text">Auditory Learning</div>
          <button className="learning-button">Explore More</button>
        </div>
        <div className="grid-item" style={{ backgroundImage: `url(${visual})` }}>
          <div className="overlay-text">Visual Learning</div>
          <button className="learning-button">Explore More</button>
        </div>
        <div className="grid-item" style={{ backgroundImage: `url(${write})` }}>
          <div className="overlay-text">Reading/Writing Learning</div>
          <button className="learning-button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default LearningMaterial;
