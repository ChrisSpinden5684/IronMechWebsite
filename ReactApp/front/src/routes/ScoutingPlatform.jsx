import React, { useState, useEffect } from 'react';
function ScoutingPlatform() {
    const [rawJson, setRawJson] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:5000/api/spotify/artist/Drake')
        .then(res => res.json())
        .then(data => {
          console.log('Raw API response:', data);
          setRawJson(data);
        })
        .catch(err => console.error('Error:', err));
    }, []);
    console.log('Rendering component with data:', rawJson);
    return (
      <div className="ScoutingPlatform">
        <h1>Scouting Platform</h1>
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