import React, { useState, useRef } from 'react';
import Grid from "../components/SpotifyGrid.jsx"
import '../CSS/Spotify.css';

function Games(){
    const [showComponent, setComponent] = useState(false);
    const formRef = useRef(null);
    const handleAnswer = (event) => {
        event.preventDefault();
        formRef.current.reset();
        setComponent(true);
    }
    return (
        <div className="Games">
            <div className="games-container">
                <form ref={formRef} onSubmit={handleAnswer}>
                    <input type="text"action="submitAnswer" name="guess" placeholder="What's your guess?" />
                </form>
                {showComponent && <Grid />}
            </div>
        </div> 
    );
}
export default Games;