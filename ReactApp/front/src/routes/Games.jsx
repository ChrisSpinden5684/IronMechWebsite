import React, { useState, useRef } from 'react';
import Grid from "../components/SpotifyGrid.jsx"
import '../CSS/Spotify.css';

function Games(){
    const [showComponents, setComponents] = useState([]);
    const guessNum = showComponents.length;
    const formRef = useRef(null);
    const handleAnswer = (event) => {
        event.preventDefault();
        if(guessNum < 10){
            formRef.current.reset();
            setComponents((prev) => [...prev, <Grid />]);
        } else {
            formRef.current.reset();
            alert("Total Guesses have been reached.")
        }
    }
    return (
        <div className="Games">
            <div className="games-container">
                <span>Guesses remaining: {10 - guessNum}</span>
                <form ref={formRef} onSubmit={handleAnswer} className = "sticky-form">
                    <input type="text"action="submitAnswer" name="guess" placeholder="What's your guess?" />
                </form>
                <div className="scrollable-container">
                    {showComponents}
                </div>
            </div>
        </div> 
    );
}
export default Games;