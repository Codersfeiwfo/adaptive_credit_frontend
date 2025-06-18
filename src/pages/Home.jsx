import React, { useState } from 'react';
import UploadForm from '../components/UploadForm';
import ScheduleChart from '../components/ScheduleChart.jsx';
import SummaryCard from '../components/SummaryCard.jsx';
import './Home.css';

function Home() {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = async (file) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Uploading file:', file.name, 'Type:', file.type);
      
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/generate-schedule`, {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        console.error('Server response:', data);
        throw new Error(data.error || 'Failed to generate schedule');
      }
      
      setSchedule(data);
    } catch (err) {
      console.error('Upload error details:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="upload-section">
        <h2>Upload Income Data</h2>
        <UploadForm onFileUpload={handleFileUpload} />
        {error && <div className="error-message">{error}</div>}
      </div>
      
      {loading && <div className="loading">Generating schedule...</div>}
      
      {schedule && (
        <div className="results-section">
          <SummaryCard metrics={schedule.metrics} />
          <ScheduleChart data={schedule.data} />
        </div>
      )}
    </div>
  );
}

export default Home; 