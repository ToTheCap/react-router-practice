import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = ({navLinks}) => {
    const navLinkElements = navLinks.map(navLink => {
                                const {id, path, name} = navLink
                                return (
                                    <li key={id}>
                                        <NavLink 
                                        to={path}
                                        className={({ isActive }) => 
                                            isActive ? "activeNavLink" : "inactiveNavLink"
                                        }
                                        >
                                        {name}</NavLink>
                                    </li>
                                )
                            })

    return (
        <header className='header'>
            <h1><Link to={"/"} className='logo'>PORTFOLIO</Link></h1>
            <nav className='nav'>
                <ul>
                    {navLinkElements}
                </ul>
            </nav>
        </header>
    )
}

export default Header;