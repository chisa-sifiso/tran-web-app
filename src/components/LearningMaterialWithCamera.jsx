import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // To enable navigation when button is clicked
import kinatic from '../assets/Kinaesthic.jpg';
import auditory from '../assets/Auditory.jpg';
import visual from '../assets/Visual.jpg';
import write from '../assets/Write.jpg';
import Navigation from './Navigation'; // Assuming you have this component

const userEmail = "user@example.com";

function LearningMaterialWithCamera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [showLearningModules, setShowLearningModules] = useState(false); // To control when to show learning modules
  const navigate = useNavigate(); // For navigating to another page

  // Function to activate camera and take screenshot without displaying it
  const activateCamera = async () => {
    try {
      // Request access to the camera
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      // Wait until the video has loaded enough metadata (this ensures that the camera stream is active)
      videoRef.current.onloadedmetadata = () => {
        // Set a timeout to take a screenshot after 1 second
        setTimeout(() => {
          captureScreenshot(); // Take screenshot but don't display
          stopCamera(); // Stop the camera after screenshot
          setShowLearningModules(true); // Display learning modules after the screenshot
        }, 1000); // 1 second delay
      };
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  // Function to capture screenshot (but don't show it)
  const captureScreenshot = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    // Set canvas width and height to match the video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw current video frame onto canvas (this is the "screenshot")
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  // Function to stop the camera stream
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => {
      track.stop(); // Stop each track to turn off the camera
    });
    videoRef.current.srcObject = null; // Clear the video source
  };

  // Automatically activate the camera when the component mounts
  useEffect(() => {
    activateCamera();
  }, []);

  // Example function for handling "Explore More" clicks
  const handleExploreMore = (module) => {
    console.log(`Exploring more about: ${module}`);
    window.alert(`hello : ${module}`);

  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navigation userEmail={userEmail} />
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Learning Material</h2>

        {/* Video feed for the camera (visible while it's capturing) */}
        {!showLearningModules && (
          <>
            <video ref={videoRef} style={{ width: "400px", height: "300px", marginTop: "20px" }}></video>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          </>
        )}

        {/* Display learning modules only after the camera takes the screenshot */}
        {showLearningModules && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <div style={{
              backgroundImage: `url(${kinatic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
              width: 'calc(50% - 20px)',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Kinaesthetic Learning</div>
              <button onClick={() => handleExploreMore('Kinaesthetic')} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: 'black',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                position: 'absolute',
                bottom: '10px'
              }}>Explore More</button>
            </div>

            <div style={{
              backgroundImage: `url(${auditory})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
              width: 'calc(50% - 20px)',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Auditory Learning</div>
              <button onClick={() => handleExploreMore('Auditory')} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: 'black',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                position: 'absolute',
                bottom: '10px'
              }}>Explore More</button>
            </div>

            <div style={{
              backgroundImage: `url(${visual})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
              width: 'calc(50% - 20px)',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Visual Learning</div>
              <button onClick={() => handleExploreMore('Visual')} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: 'black',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                position: 'absolute',
                bottom: '10px'
              }}>Explore More</button>
            </div>

            <div style={{
              backgroundImage: `url(${write})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
              width: 'calc(50% - 20px)',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>Reading/Writing Learning</div>
              <button onClick={() => handleExploreMore('Reading/Writing')} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: 'black',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                position: 'absolute',
                bottom: '10px'
              }}>Explore More</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LearningMaterialWithCamera;
