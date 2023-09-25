import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createProject(this.state)
        this.setState({
            title: '',
            content: ''
        })
        this.props.history.push('/')
        
    }
    render() {
        const { auth } = this.props
        if(!auth.uid)
            return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" type="submit">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => {dispatch(createProject(project))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)