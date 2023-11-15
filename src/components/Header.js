import React from 'react'

export default function Header() {
    return (
        <header>
            <ul className='navigation'>
                <li><a href="#" className='link'>Women</a></li>
                <li><a href="#" className='link'>Men</a></li>
                <li><a href="#" className='link'>Home</a></li>
            </ul>

            <span className='logo'>Attire</span>
            
            <ul className='menu'>
                <button className='search'></button>
                <button className='account'></button>
                <button className='liked'></button>
                <button className='basket'></button>
            </ul>
        </header>
    )
}
