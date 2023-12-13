// Header.js
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Overlay from './Overlay';

export default function Header() {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleOverlayToggle = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <>
            <header>
                <ul className="navigation">
                    <li><NavLink to="/" className="link">Women</NavLink></li>
                    <li><NavLink to="/men" className="link">Men</NavLink></li>
                    <li><NavLink to="/" className="link">Home</NavLink></li>
                </ul>

                <NavLink to="/"><span className="logo">Attire</span></NavLink>

                <ul className="menu">
                    <button className="search"></button>
                    <button onClick={handleOverlayToggle} className="account"></button>
                    <button className="liked"></button>
                    <button className="basket"></button>
                </ul>
            </header>
            {showOverlay && <Overlay onClose={handleOverlayToggle} />}
        </>
    );
}
