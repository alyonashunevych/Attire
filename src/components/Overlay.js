import React from 'react';
import { NavLink } from 'react-router-dom';

const Overlay = ({ onClose }) => (
    <div className="overlay" onClick={onClose}>
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <p className="overlay_text">Do you have an account?</p>
            <NavLink to="/login"><button className="overlay_butt1">Log in</button></NavLink>
            <p className="overlay_text">First time on the site?</p>
            <NavLink to="/signup"><button className="overlay_butt2">Sign up</button></NavLink>
        </div>
    </div>
);

export default Overlay;
