import React from 'react';
import '../top-navbar/TopNavbar.css';

function TopNavbar() {
    return (
        <nav className="top-navbar">
            <div className="logo-container-1">
                <img src="/images/jumpman-logo.jpg" alt="Jumpman logo" />
            </div>
            <ul className="top-navbar-links">
                <li>Find a Store</li>
                <span>|</span>
                <li>Help</li>
                <span>|</span>
                <li>Join Us</li>
                <span>|</span>
                <li>Sign In</li>
            </ul>
        </nav>
    );
}

export default TopNavbar;
