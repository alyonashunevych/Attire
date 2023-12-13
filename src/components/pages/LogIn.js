import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';


export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    window.scrollTo(0, 0);
    return (
        <div className='content'>
            <Helmet>
                <title>Attire - Log in</title>
            </Helmet>
            <div className='accmainbox'>
                <div className='login_img1' />
                <div className='acc_box'>
                    <h1 className="title_MA40_3">Welcome back!</h1>
                    <p className="acc_text">Log in with your email and password</p>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Email'
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Password'
                    />
                    <p className="acc_text">Forgot your password?</p>
                    <NavLink to="/account" className='log_in_butt'>Log in</NavLink>
                </div>
                <div className='login_img2' />
            </div>
        </div>
    )
}
