import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content black-text text-darken-4">
                <span className="card-title">{project.title}</span>
                <p>Posted By {project.authorFirstname} {project.authorLastname}</p>
                <p className="grey-text">{project.createdAt && moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary

