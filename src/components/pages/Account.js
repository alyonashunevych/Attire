import React from 'react'
import { Helmet } from 'react-helmet';

export default function Account() {
    return (
        <div className='content'>
            <Helmet>
                <title>Attire - Log in</title>
            </Helmet>
            <div className='accmainbox'>
                <div className='acc_img1' />
                <div className='login_box2'>
                    <p className="login_text">My account</p>
                    {/* Сюди передаєш ім'я користувача */}
                    <h1 className="title_MA40_2">Alyona Shunevych</h1>
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
                        
                    </div>
                </div>
                <div className='acc_img2' />
            </div>
        </div>
    )
}
