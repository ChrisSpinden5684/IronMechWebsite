import React from 'react'
import Box from "../components/Box.jsx"
import '../CSS/Spotify.css';

function SpotifyGrid(){
    return (
        <div className="container">
             <input type="text" name="guess" placeholder="What's your guess?" />
            <div className="grid-container">
                <Box topic={"Debut: "} data={"1997"} />
                <Box topic={"Members: "} data={"2"}/>
                <Box topic={"Popularity: "} data={"90"} />
                <Box topic={"Gender: "}data={"Male"} />
                <Box topic={"Genre:  "} data={"Country"}/>
                <Box topic={"Country: "} data={"USA"}/>
            </div>
        </div>    
    );
}
export default SpotifyGrid;