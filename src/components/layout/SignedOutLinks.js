import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SignedInLinks() {
    return (
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul>
    )
}
