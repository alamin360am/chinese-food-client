import React, { useContext, useState } from "react";
import "./header.css";
import logo from "/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [condition, setCondition] = useState(true);

  const handleLogOUt = () => {
    logOut();
  };

  const toggleButton = () => {
    setCondition(!condition);
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div onClick={toggleButton} className="icon-box">
          {
            condition? <FontAwesomeIcon icon={faBars} className="icon"/>:
            <FontAwesomeIcon icon={faXmark} className="icon"/>
          }
        </div>
        <div className={`nav-link ${condition? 'nav-hide' : 'nav-show'}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
          {user ? (
            ""
          ) : (
            <span className={condition? '' : 'show'}>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Log In
              </NavLink>
            </span>
          )}
        </div>
        <div className="user">
          <div className="user-img">
            {user ? (
              <img title={user.displayName} src={user.photoURL} alt="" />
            ) : (
              <img src={""} alt="" />
            )}
          </div>
          {user ? (
            <button onClick={handleLogOUt} className="btn-primary">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="btn-primary">
              Log In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
