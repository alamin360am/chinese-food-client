import React, { useContext } from "react";
import "./header.css";
import logo from "/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOUt = () => {
    logOut();
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-link">
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
            <sapn>
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
            </sapn>
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
            <button onClick={handleLogOUt} className="user-btn">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="user-btn">
              Log In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
