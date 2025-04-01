import React from 'react'
import '../CSS/Signin.css';

function Signin(){
    return (
        <div className="main-container">
            <div class="form-container">
            <form>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button class="opacity">SUBMIT</button>
            </form>
            <div class="register-forget opacity">
                <a href="">Sign Up</a>
                <a href="">Forgot Credentials</a>
            </div>
        </div>
        </div>

    );
}
export default Signin;