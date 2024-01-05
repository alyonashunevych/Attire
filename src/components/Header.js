// Header.js
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { auth } from './firebase.js';
import Overlay from './Overlay';
import Bag from './Bag.js';

export default function Header() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showBagOverlay, setShowBagOverlay] = useState(false);
    const navigate = useNavigate();

    const handleOverlayToggle = () => {
        setShowOverlay(!showOverlay);
    };

    const handleAccountClick = () => {
        // Check if the user is logged in using Firebase's onAuthStateChanged
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is logged in, redirect to the "/account" page
                navigate('/account');
            } else {
                // User is not logged in, show the overlay
                setShowOverlay(true);
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => {
            unsubscribe();
        };
    };

    const handleBagClick = () => {
        setShowBagOverlay(true);
    };

    const closeBagOverlay = () => {
        setShowBagOverlay(false);
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
                    <button onClick={handleAccountClick} className="account"></button>
                    <button className="liked"></button>
                    <button onClick={handleBagClick} className="basket"></button>

                </ul>
            </header>
            {showOverlay && <Overlay onClose={handleOverlayToggle} />}
            {showBagOverlay && (
                <Bag onClose={closeBagOverlay}/>
            )}
        </>
    );
}
