import React from 'react';
import ProjectElement from './ProjectElement';
import Breaker from './Breaker';
import ReactProjectToolsIcon from './ProjectTools/ReactProjectToolsIcon'
import JsProjectToolsIcon from './ProjectTools/JsProjectToolsIcon'
import './style.css';

function ProjectSection(props) {
    const reactTool = <ReactProjectToolsIcon/>;
    const jsTool = <JsProjectToolsIcon/>;

    return (
        <section id={props.id} className="projects-section">
            <div className="container projects-container">
                <h2 className="section-title">Projects</h2>

                <div className="projects-content">
                <ProjectElement title="Times of News - React Web App" tool={reactTool} link="https://github.com/saifiimuhammad/TimesOfNews" />
                <Breaker />
                <ProjectElement title="TextUtils - React Web App" tool={reactTool} link="https://github.com/saifiimuhammad/TextUtils" />
                <Breaker />
                <ProjectElement title="TicTacToe Game using JavaScript" tool={jsTool} link="https://github.com/saifiimuhammad/TicTacToe-Game" />
                <Breaker />
                <ProjectElement title="Headphones Landing Page" tool={jsTool} link="https://github.com/saifiimuhammad/Headphones-Landing-page" />
                <Breaker />
                <ProjectElement title="To-do List Web App" tool={jsTool} link="https://github.com/saifiimuhammad/To-Do-List-App" />
                <Breaker />
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
