import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';  // Import social media icons
import '../DevelopedBy/DevelopedBy.css';

function DevelopedBy() {
  return (
    <div className='devBy-container'>
        <p>© 2024</p>
        <p>Made with <span>❤️</span> ~Sachin Rajbher</p>
        <div className="social-links-container">
            <a href="https://x.com/sachin_kumar_15" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/sachinrajbher15/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
            </a>
            <a href="https://github.com/sachinrajbher15" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/sachin_kumar_15/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
            </a>
        </div>   
    </div>
  );
}

export default DevelopedBy;
