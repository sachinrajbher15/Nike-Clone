import React, { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import 'src\components\NavBar\top-navbar\TopNavBar.css';

function MainNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="main-navbar">
            <div className="logo-container-2">
                <img src="/images/brand_logo.png" alt="Brand logo" />
            </div>

            {/* Hamburger Menu Icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <FaBars />
            </div>

            {/* Navbar Links */}
            <ul className={`main-navbar-links ${menuOpen ? 'show' : ''}`}>
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>SNKRS</li>
            </ul>

            <div className="right-section">
                <button className="search-icon">
                    <FaSearch />
                </button>
                <input type="text" placeholder="Search" className="search-input" />
                <button className="heart-icon">
                    <FaHeart />
                </button>
                <button className="cart-icon">
                    <FaShoppingCart />
                </button>
            </div>
        </nav>
    );
}

export default MainNavbar;
