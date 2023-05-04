import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';

const LogIn = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='form'>
            <h2 className="section-title">Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Your Email</label>
                    <input type="email" name="email" id="email" placeholder='Your Email' required />
                </div>
                <div className="input">
                    <label>Your Password</label>
                    <input type="password" name="password" id="password" placeholder='Your password' required />
                </div>
                <p>New in Chinese Food? <Link to='/register'>create an account</Link></p>
                <input type="submit" value="Log In" />
            </form>
            <button className="btn-outline">Google Sign In</button>
            <button className="btn-outline">GitHub Sign In</button>
        </div>
    );
};

export default LogIn;