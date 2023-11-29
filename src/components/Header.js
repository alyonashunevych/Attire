import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <ul className='navigation'>
                <li><NavLink to="/" className='link'>Women</NavLink></li>
                <li><NavLink to="/men" className='link'>Men</NavLink></li>
                <li><NavLink to="/" className='link'>Home</NavLink></li>
            </ul>

            <NavLink to="/"><span className='logo'>Attire</span></NavLink>
            
            <ul className='menu'>
                <button className='search'></button>
                <button className='account'></button>
                <button className='liked'></button>
                <button className='basket'></button>
            </ul>
        </header>
    )
}
