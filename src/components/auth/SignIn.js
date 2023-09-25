import React, { Component } from 'react'
import { connect } from 'react-redux'
import signIn from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signIn(this.state)
        this.setState({
            email: "",
            password:""
        })
        console.log(event)
    }
    render() {
        const { auth } = this.props
        if(auth.uid)
            return <Redirect to='/' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" type="submit">Login</button>
                    </div>
                    <div className="red-text center">
                       <p>{this.props.authError ? this.props.authError.message : ''}</p>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => {dispatch(signIn(credentials))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)