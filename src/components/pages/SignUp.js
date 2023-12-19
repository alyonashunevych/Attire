import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase.js';

export default function SignUp() {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleFirstNameChange = (e) => {
        setFirst_name(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLast_name(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        try {
            // Create a new user with email and password
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    
            // Update the user's profile with first_name and last_name
            await userCredential.user.updateProfile({
                displayName: `${first_name} ${last_name}`,
            });

            await userCredential.user.sendEmailVerification();
    
            // If successful, you can redirect the user to a new page or perform other actions
            console.log('User signed up successfully');
        } catch (error) {
            setError(error.message); // Set error message state
        }
    };

    window.scrollTo(0, 0);

    return (
        <div className='content'>
            <Helmet>
                <title>Attire - Sign up</title>
            </Helmet>
            <div className='signmainbox'>
                <div className='signup_img1' />
                <div className='acc_box'>
                    <h1 className="title_MA40_3">Hello!</h1>
                    <p className="acc_text">Create an account and enjoy the benefits of a more personal shopping experience</p>

                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={first_name}
                        onChange={handleFirstNameChange}
                        placeholder='First name'
                    />
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={last_name}
                        onChange={handleLastNameChange}
                        placeholder='Last name'
                    />
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
                    <p className="acc_text">By creating an account, I agree to Attire's <NavLink to="/privacypolicy" className='privacy'>Privacy Policy</NavLink> and Legal Statement.</p>
                    {error && <p className="error-text">{error}</p>}
                    <button className='log_in_butt2' onClick={handleSignUp}>Continue</button>
                </div>
                <div className='signup_img2' />
            </div>
        </div>
    );
}
