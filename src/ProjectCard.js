import React from "react";

function ProjectCard(props){
    return (
        <div className="flip-project-card">
            <a href={props.url} className="project-card-link-mobile">
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
            </a>
            
        </div>
    )
}

export default ProjectCard;
