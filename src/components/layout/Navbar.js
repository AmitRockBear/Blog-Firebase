import React from 'react'
import {NavLink} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

function Navbar(props) {
    console.log(props)
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <NavLink to="/" className="brand-logo">Home</NavLink>
                {props.auth.uid ? <SignedInLinks profile = {props.profile} /> : <SignedOutLinks/>}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)