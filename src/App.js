import React, { useState } from 'react';
import './App.css';

function App() {
  const [showReportForm, setShowReportForm] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleReportSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value || 'Anonymous';
    const crimeType = e.target.crimeType.value;
    const location = e.target.location.value;
    const description = e.target.description.value;

    setSubmittedData({ name, crimeType, location, description });
    setShowReportForm(false);
  };

  return (
    <div className="app">
      <header>
        <img src="/Gemini_Generated_Image_o1c19wo1c19wo1c1-removebg-preview.png" alt="Logo" className="logo" />
        <div className="header-text">
          <img src="/indian-policeman-police-removebg-preview.png" alt="Police" className="police-image" />
          INDIA CRIME AWARENESS PORTAL
        </div>
        <a href="#login" className="login-btn">Login/Signup</a>
      </header>

      <nav>
        <a href="#heatmaps">Heatmaps</a>
        <a href="#recent-posts">Recent Posts</a>
        <a href="#report" onClick={() => setShowReportForm(true)}>Report Crime</a>
        <a href="#live-alerts">Live Location Alerts</a>
        <a href="#cyber-crime">Cybercrime Report</a>
      </nav>

      {!showReportForm && !submittedData && (
        <div className="main-content">
          <div className="main-left">
            <h2>About Our Portal</h2>
            <p>
              Our mission is to empower citizens by providing real-time crime awareness across India.
              Report incidents, receive live alerts based on your location, and stay updated with
              heatmaps and statistics on crime patterns. Together, let's build a safer India.
            </p>
            <p>
              Share your experiences, report anonymously, and help others stay safe.
              Your report matters. Your awareness saves lives.
            </p>
            <p>
              Through data visualizations, heatmaps, and real-time location-based alerts, we aim to
              reduce risk and enhance safety for everyone.
            </p>
            <p>
              Stay informed, stay safe. Together, let's build a stronger, more aware India.
            </p>
          </div>
          <div className="main-right">
            <img src="/safe india.jpeg" alt="Safe India" />
          </div>
        </div>
      )}

      {showReportForm && (
        <div className="report-form">
          <h2>Report a Crime</h2>
          <form onSubmit={handleReportSubmit}>
            <label>Full Name (Optional):</label>
            <input type="text" name="name" placeholder="Your name (optional)" />

            <label>Crime Type:</label>
            <select name="crimeType" required>
              <option value="">Select</option>
              <option>Theft</option>
              <option>Assault</option>
              <option>Harassment</option>
              <option>Cybercrime</option>
              <option>Other</option>
            </select>

            <label>Location:</label>
            <input type="text" name="location" placeholder="Enter location" required />

            <label>Description:</label>
            <textarea name="description" placeholder="Describe the incident" required></textarea>

            <button type="submit">Submit Report</button>
          </form>
        </div>
      )}

      {submittedData && (
        <div className="report-submitted">
          <h2>Report Submitted Successfully</h2>
          <div className="submitted-box">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Crime Type:</strong> {submittedData.crimeType}</p>
            <p><strong>Location:</strong> {submittedData.location}</p>
            <p><strong>Description:</strong> {submittedData.description}</p>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; 2025 India Crime Awareness Portal | All Rights Reserved</p>
        <p>
          <a href="#">Privacy Policy</a> |
          <a href="#">Terms of Service</a> |
          <a href="#">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
