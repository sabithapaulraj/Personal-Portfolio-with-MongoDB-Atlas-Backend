import React from 'react';
import '../styles/Global.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <div>
                <a href="#profile">Profile</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
            </div>
        </nav>
    );
};

export default Navbar;
