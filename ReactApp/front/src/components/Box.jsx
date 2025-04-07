import React from "react";
import '../CSS/Spotify.css';


function Box({topic, data}){

    return(
        <div className="box-container">
            <span>{topic}</span>
            <span>{data}</span>
        </div>

    );

}
export default Box;