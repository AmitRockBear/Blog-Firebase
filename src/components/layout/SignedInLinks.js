import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  console.log(props)

  const handleLogOut = () => {
    props.signOut()
  }

  return (
    <div>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/' onClick={handleLogOut}>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
      signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)