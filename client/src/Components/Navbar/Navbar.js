import React from 'react';

//  styles
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper navbar green">
                <a href="/" className="brand-logo">MERN</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Войти</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
