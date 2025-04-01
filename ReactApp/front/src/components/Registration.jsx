import React from 'react'
import '../CSS/Signin.css';

function Registration(){
    return (
        <div className="main-container">
            <div class="form-container">
            <h1>Registration</h1>
            <form>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Grade" />
                <button class="opacity">SUBMIT</button>
            </form>
        </div>
        </div>
    );
}
export default Registration;