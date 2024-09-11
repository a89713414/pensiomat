import React from 'react'
import "./Header.css"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container d-flex justify-content-center align-items-center">
                <img className='logo' src={logo} alt={"logo"} />
            </div>
        </nav>
    )
}

export default Header
