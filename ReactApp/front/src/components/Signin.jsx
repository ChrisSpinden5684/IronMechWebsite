import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Signin.css';

function submitLogin(formData){
    const pass = formData.get("password");
    const email = formData.get("email");
    alert(`You entered '${pass}' for password and '${email}' for email`);
}

function Signin(){
    return (
        <div className="main-container">
            <div class="form-container">
            <h1>Member Login</h1>
            <form action={submitLogin}>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name= "password" placeholder="Password" />
                <button class="opacity">SUBMIT</button>
            </form>
            <div class="register-forget opacity">
                <Link to="/Register">Sign Up</Link>
                <Link to="/">Forgot Credentials</Link>
            </div>
        </div>
        </div>

    );
}
export default Signin;