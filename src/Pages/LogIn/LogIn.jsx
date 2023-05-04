import React, { useContext, useState } from 'react';
import './login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const LogIn = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const {signIn, googleSignIn, gitHubSignIn} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
        .then(result=>{
            const signInUser = result.user
            navigate(from)
        })
        .catch(error=>{
            setError("Your email or password doesn't match");
            console.log(error.message);
        })
    }

    const googleLogIn = () =>{
        googleSignIn()
        .then (result => {
            console.log(result);
        })
    }

    
    const gitHubLogIn = () =>{
        gitHubSignIn()
        .then(result => {
            console.log(result);
        })
    }
    console.log(error);
    
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
                <p className="error-message">{error}</p>
                <p>New in Chinese Food? <Link to='/register'>create an account</Link></p>
                <input type="submit" value="Log In" className='btn-primary' />
            </form>
            <button onClick={googleLogIn} className="btn-outline">Google Sign In</button>
            <button onClick={gitHubLogIn} className="btn-outline">GitHub Sign In</button>
        </div>
    );
};

export default LogIn;