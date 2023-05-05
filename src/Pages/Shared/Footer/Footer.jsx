import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='grid col-3'>
            <div className="footer-logo">
                <img src="/Logo.png" alt="Logo" />
            </div>
            <div className="address">
                <h2>Address</h2>
                <p>
                    Road No: 22C <br />
                    House No: 110A <br />
                    New Engineer Para, <br />
                    Rangpur, Bangladesh
                </p>
            </div>
            <div className="link">
                <h2>Links</h2>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blogs</Link>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
                <a href="#">Terms and Conditions</a>
            </div>
        </footer>
    );
};

export default Footer;