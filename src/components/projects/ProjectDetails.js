import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom' 
import moment from 'moment'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  console.log(props)
  const { auth, project } = props
  if(!auth.uid)
      return <Redirect to='/signin' />
  if(project){
    return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - { id }</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
          <div>{moment(project.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
    )
  }
  else
  return (
    <p className="center">Loading Data</p>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id)
  const projects = state.firestore.data.projects
  const p = projects ? projects[id] : null
  return {
    project: p,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ]) //Once firestore's data changes firestoreReducer will activate and change the firestore state too
  )
(ProjectDetails)