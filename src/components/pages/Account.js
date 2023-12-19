import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';

export default function Account() {
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is signed in
        const user = auth.currentUser;
        if (user) {
            // User is signed in, so you can access the display name
            setDisplayName(user.displayName);
        }
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/login');

            // Redirect or perform any other action after logout if needed
            // For example, you can redirect to the login page
        } catch (error) {
            console.error('Logout error:', error.message);
            // Handle logout error if necessary
        }
    };

    return (
        <div className='content'>
            <Helmet>
                <title>Attire - My account</title>
                <meta property="og:description" content="Attire - User account"/>
            
            </Helmet>
            <div className='accmainbox'>
                <div className='acc_img1' />
                <div className='login_box2'>
                    <p className="login_text">My account</p>
                    <h1 className="title_MA40_2">{displayName}</h1> {/* Display the display name here */}
                    <div className='log_in_box'>
                        <div className='acc_butt'>
                            <p className='login_text'>Personal details</p>
                            <div className='arrow_login' />
                        </div>
                        <div className='acc_butt'>
                            <p className='login_text'>My addresses</p>
                            <div className='arrow_login' />
                        </div>
                        <div className='acc_butt'>
                            <p className='login_text'>My purchases</p>
                            <div className='arrow_login' />
                        </div>
                        <div className='acc_butt'>
                            <p className='login_text'>Favorites</p>
                            <div className='arrow_login' />
                        </div>
                        <div className='acc_butt'>
                            <p className='login_text'>Help</p>
                            <div className='arrow_login' />
                        </div>
                        
                        <button className='log_in_butt' onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
                <div className='acc_img2' />
            </div>
        </div>
    );
}
