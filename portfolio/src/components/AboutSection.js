import React from 'react';
import Breaker from './Breaker';
import './style.css';

function AboutSection(props) {
    return (
        <div>
            {/* ------------------ About Section - About Me, My Education, My Skills ------------------ */}
            <hr className="about-line container" />
            <Breaker />

            <section id={props.id} className="about-section">
                <div className="container about-container">

                    <div className="about-content">
                        <h2 className="about-title">Meet Muhammad Saif</h2>
                        <p className="about-description">Passionate Frontend Web Developer. I specialize in creating modern and
                            responsive websites. With a strong focus on clean code and attention to detail, I deliver
                            high-quality work that stand out from the competition. Let's bring your vision to life!</p>
                        <div className="skills-container">
                            <ul className="skill-list">
                                <li className="skill-items"><abbr title="Hyper Text Markup Language"><i
                                    className="ri-html5-fill"></i></abbr></li>
                                <li className="skill-items"><abbr title="Cascading Styles Sheet"><i
                                    className="ri-css3-fill"></i></abbr></li>
                                <li className="skill-items"><abbr title="JavaScript ES6"><i
                                    className="ri-javascript-fill"></i></abbr></li>
                                <li className="skill-items"><abbr title="Github"><i className="ri-github-fill"></i></abbr></li>
                                <li className="skill-items dot">•</li>
                                <li className="skill-items"><abbr title="BootStrap"><i className="ri-bootstrap-fill"></i></abbr>
                                </li>
                                <li className="skill-items"><abbr title="React.js"><i className="ri-reactjs-fill"></i></abbr></li>
                            </ul>
                        </div>
                        <div className="misc-container">
                            <div className="education-content"><i className="ri-graduation-cap-fill"></i> Software Engg. Student
                                @UOS</div>
                            <span className="v-line"></span>
                            <ul className="social-list">
                                <li className="social-items"><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/muhammad-saif-msa" className="social-link"><i
                                    className="ri-linkedin-box-fill"></i></a></li>
                                <li className="social-items"><a target="_blank" rel="noreferrer" href="https://github.com/saifiimuhammad" className="social-link"><i className="ri-github-fill"></i></a>
                                </li>
                                <li className="social-items"><a target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~016aa64abd54c8ba20" className="social-link"><i
                                    className="ri-external-link-line"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <Breaker />
            <hr className="about-line container" />

        </div>
    )
}

export default AboutSection
