import React from 'react'
import PropTypes from 'prop-types'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content black-text text-darken-4">
                <span className="card-title">{project.title}</span>
                <p>Posted By {project.authorFirstname} {project.authorLastname}</p>
                <p className="grey-text">3rd October, 5am</p>
            </div>
        </div>
    )
}

export default ProjectSummary

