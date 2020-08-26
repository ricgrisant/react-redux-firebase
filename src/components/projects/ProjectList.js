import React from 'react'
import PropTypes from 'prop-types'
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    return (
        <div className="project-list section">
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
        </div>
    )
}

export default ProjectList

