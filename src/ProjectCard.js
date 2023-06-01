import React from "react";

function ProjectCard(props){
    return (
        <div className="flip-project-card">
            <div className="project-card">
                <div className="card-back">
                    <div className="about">
                        <h2><a href={props.url} className="link-footer">{props.name}</a></h2>
                        {props.about}
                    </div>
                </div>
                <div className="card-front">
                    <div className="img-box">
                        {props.img}
                    </div>
                    <div>
                        {props.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
