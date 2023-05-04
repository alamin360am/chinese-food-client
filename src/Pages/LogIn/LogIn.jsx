import React, { useContext } from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const LogIn = () => {
    const navigate = useNavigate();
    const {signIn} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
        .then(result=>{
            const signInUser = result.user
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })
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