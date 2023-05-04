import React, { useContext, useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;

    setError('')
    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error=> {
      setError('This Email Already in use')
      console.log(error);
    })

    setError("");
    if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
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
          <label>Your Photo URL</label>
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="Your photo url"
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
        <input className="btn-primary" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Register;
