import React from 'react';
import './style.css';
import Watermark from './Watermark';
import { Link } from 'react-router-dom';
import { Link as LinkSc } from 'react-scroll';

function FooterSection(props) {
    return (
            <div className="footer-content">
                {/* Footer navigation bar - Copied from the header navigation bar */}
                <ul className="nav-menu">
                    <li className="nav-items"><LinkSc activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}
                        className="nav-links footer-links hover-effect">projects</LinkSc></li>
                    <li className="nav-items"><LinkSc activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}
                        className="nav-links footer-links hover-effect">about me</LinkSc></li>
                    <li className="nav-items"><Link to="/workwithme" className="nav-links footer-links hover-effect" onClick={props.handleTitleChange}>work with me</Link>
                    </li>
                </ul>
                {/* Social links list - Copied from the about section list */}
                <ul className="social-list social-footer">
                    <li className="social-items"><Link to="https://linkedin.com/in/muhammad-saif-msa" className="social-link"><i
                        className="ri-linkedin-box-fill"></i></Link></li>
                    <li className="social-items"><Link to="https://github.com/saifiimuhammad" className="social-link"><i className="ri-github-fill"></i></Link></li>
                    <li className="social-items"><Link to="https://www.upwork.com/freelancers/~016aa64abd54c8ba20" className="social-link"><i
                        className="ri-external-link-line"></i></Link></li>
                </ul>
                {/* Copyright Watermark */}
                <Watermark/>
            </div>
    )
}

export default FooterSection
