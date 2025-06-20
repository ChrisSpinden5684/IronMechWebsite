import React, { useState } from 'react';
function ScoutingPlatform() {
  const [rawJson, setRawJson] = useState(null);
  const [teamNumber, setTeamNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/api/frc/team/${teamNumber}`)
      .then(res => res.json())
      .then(data => {
        console.log('Raw API response:', data);
        setRawJson(data);
  });
}
  return (
    <div className="ScoutingPlatform">
      <h1>Scouting Platform</h1>
      <form className="scout-form-container" onSubmit={handleSubmit}>
        <input 
          name="team-num" 
          type="text" 
          placeholder="Search Team" 
          value={teamNumber} 
          onChange={(e) => setTeamNumber(e.target.value)}
        />
        <button type="submit">Search</button>
        
      </form>
      {rawJson ? (
        <pre style={{ textAlign: 'left', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
          {JSON.stringify(rawJson, null, 2)}
        </pre>
      ) : (
        <p>Loading raw JSON...</p>
      )}
    </div>
    );
  }

export default ScoutingPlatform;