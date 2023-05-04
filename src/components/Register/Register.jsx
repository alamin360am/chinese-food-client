import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setError('');
    if(password.length < 6) {
        setError('Please add at least 6 characters in your password');
        return;
    }
  };

  return (
    <div className="form">
      <h2 className="section-title">Please Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="input">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="input">
          <label>Your Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            required
          />
        </div>
        <p>
          Have an account? <Link to="/login">Log In</Link>
        </p>
        <p className="error-message">{error}</p>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Register;
