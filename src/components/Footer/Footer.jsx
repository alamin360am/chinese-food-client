import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src="/Logo.png" alt="Logo" />
            </div>
            <div className="address">
                <h2>Address</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos at modi consequatur amet aperiam debitis sapiente obcaecati iusto eligendi?</p>
            </div>
            <div className="link">
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