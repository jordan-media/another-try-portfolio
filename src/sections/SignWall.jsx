import React, { useRef, useState, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "./SignWall.css";

export default function SignWall() {
  const canvasRef = useRef();
  const [userDrawing, setUserDrawing] = useState(null);

  // Load saved drawing from localStorage on page load
  useEffect(() => {
    const saved = localStorage.getItem("mySavedSketch");
    if (saved) {
      setUserDrawing(saved);
    }
  }, []);

  const clearCanvas = () => canvasRef.current.clearCanvas();
  const undoLast = () => canvasRef.current.undo();

  const handleSubmit = async () => {
    try {
      const imageData = await canvasRef.current.exportImage("png");
      localStorage.setItem("mySavedSketch", imageData); // Save to localStorage
      setUserDrawing(imageData);
      alert("Drawing saved locally! Only you can see it.");
      canvasRef.current.clearCanvas();
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <div className="signwall-container">
      <h2 className="signwall-title">Digital Graffiti Wall</h2>

      <ReactSketchCanvas
        className="signwall-canvas"
        ref={canvasRef}
        width="100%"
        height="400px"
        strokeWidth={4}
        strokeColor="#222"
        withBackgroundImage={false}
      />

      <div className="signwall-controls">
        <button onClick={undoLast}>Undo</button>
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {userDrawing && (
        <div className="user-saved">
          <h3>Your Saved Drawing:</h3>
          <img src={userDrawing} alt="Your saved graffiti" className="submitted-image" />
        </div>
      )}
    </div>
  );
}
