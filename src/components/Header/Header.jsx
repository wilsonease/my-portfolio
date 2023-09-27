import React from 'react'
import Logo from "../../assets/img/logo.png"
import "./Header.css"
import { Button } from '../Button/Button'

export const Header = () => {
    return (
        <header className='header container'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
                <span>
                <span className='left'>Wilson</span>
                <span className='right'>Ease</span>
                </span>
              
            </div>

            <nav className='nav'>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact Me</li>
                </ul>

               <Button>Lets Chat</Button>
            </nav>
        </header>
    )
}
