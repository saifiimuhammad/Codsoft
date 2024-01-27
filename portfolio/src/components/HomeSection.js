import React from 'react'
import './style.css';
import img from './images/pic.jpeg';
import { Link } from 'react-router-dom';

function HomeSection(props) {
  return (
    <section id="home-section" className="home-section">
            <div className="container home-container">
                <div className="home-content">
                    <div className="home-introduction">
                        <span className="home-description">Yep, that's me! I'm your friendly <strong>Front-End and
                                JavaScript Developer, </strong> and I specialize in making websites not just look good,
                            but feel like a virtual hug.</span>
                        <Link to="/workwithme" className="home-btn btn" onClick={props.handleTitleChange}>Let's Connect</Link>
                    </div>
                    <div className="home-image"><img src={img} alt="" className="home-img image" /></div>
                </div>
            </div>
        </section>
  )
}

export default HomeSection
