import React, { useContext } from 'react';
import './header.css';
import logo from '/Logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-link">
                    <NavLink to='/' className={({isActive}) => isActive? 'active' : ''}>Home</NavLink>
                    <NavLink to='/blog' className={({isActive}) => isActive? 'active' : ''}>Blog</NavLink>
                    <NavLink to='/register' className={({isActive}) => isActive? 'active' : ''}>Register</NavLink>
                    <NavLink to='/login' className={({isActive}) => isActive? 'active' : ''}>Log In</NavLink>
                </div>
                <div className="user">
                    <div className="user-img"></div>
                    {
                        user? <button className="user-btn">Log Out</button> :
                        <Link to='/login' className="user-btn">Log In</Link>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;