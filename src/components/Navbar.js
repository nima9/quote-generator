import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper indigo darken-4">
            <div className="container">
                <li className="brand-logo" ><Link to ="/">Quote Generator</Link></li>
                <ul className="right" /* ul = unordered list */>
                    <li /*item in a list */><Link to="/">Home</Link></li/*use "Link" tag rather than "a" (ancor) tag so page doesn't have to refresh everytime */>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>

        </nav>
    )
}

export default withRouter(Navbar)