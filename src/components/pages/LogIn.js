import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from '../firebase.js';


export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    /*const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    */

    const handleLogin = async () => {
        try {
          await auth.signInWithEmailAndPassword(email, password);
          console.log('Successfully logged in:', auth.currentUser.email);
          // User is signed in
          navigate('/account'); // Redirects to /account page
        } catch (error) {
          // Handle login error
          console.error('Login error:', error.message);
          setError(error.message);
        }
      };

      const handleGoogleLogin = async () => {
        try {
            // Sign in with Google using Firebase's GoogleAuthProvider
            await auth.signInWithPopup(googleAuthProvider);
            console.log('Successfully logged in with Google:', auth.currentUser.email);
            navigate('/account'); // Redirects to /account page
        } catch (error) {
            console.error('Google login error:', error.message);
            setError(error.message);
        }
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
                        onChange={(e) => setEmail(e.target.value)} //
                        placeholder='Email'
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} //
                        placeholder='Password'
                    />
                    {error && <p className="error-text">{error}</p>}
                    <p className="acc_text">Forgot your password?</p>
                    <button className='log_in_butt' onClick={handleLogin}>
                      Log in
                    </button>

                    <button className='log_in_butt2' onClick={handleGoogleLogin}>
                    Log in with Google
                </button>
                </div>

                <div className='login_img2' />
            </div>
        </div>
    )
}
