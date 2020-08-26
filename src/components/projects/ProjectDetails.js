import React from 'react'

const ProjectDetails = (props) => {
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project - {props.match.params.id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus excepturi earum laboriosam, quibusdam, non esse aliquid tempora debitis recusandae similique sint cupiditate, laudantium temporibus facilis quod assumenda. Voluptatem, non nostrum?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Ricardo</div>
                    <div>5 April, 8pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
