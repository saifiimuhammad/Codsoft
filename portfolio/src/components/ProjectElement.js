import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectElement(props) {

    useEffect(() => {
        let projElements = document.querySelectorAll(".project-elements");

        projElements.forEach(element => {
            element.addEventListener("mousemove", () => {
                element.lastElementChild.classList.add('hover-project');
            })
        });
        projElements.forEach(element => {
            element.addEventListener("mouseleave", () => {
                element.lastElementChild.classList.remove('hover-project');
            })
        });
    }, []);

    return (
        
        <Link to={props.link} target="_blank" className="project-elements">
            <div className="element-content">
            <h2 className="element-title">{props.title}</h2>
                <span className="element-tools">
                    {props.tool}
                </span>
            </div>
            <i className="ri-arrow-drop-right-line element-btn"></i>
        </Link>
    )
}

export default ProjectElement
