import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NoiseDataEntry from "./NoiseDataEntry"; // This will be your existing noise data component
import Landing from "./Landing"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page as the default route */}
        <Route path="/" element={<Landing />} />
        
        {/* Your existing noise data entry page */}
        <Route path="/enter-noise-data" element={<NoiseDataEntry />} />
        
        {/* Placeholder for the noise map page -*/}
        <Route path="/noise-map" element={<div>Noise Map Page - Coming Soon</div>} />
        
        {/* Redirect any unknown routes back to the landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;