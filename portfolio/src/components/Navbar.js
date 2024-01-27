import React, { useEffect, useRef } from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { Link as LinkSc } from 'react-scroll';

function Navbar(props) {

    const menuToggle = useRef(null);
    const menuClose = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
        menuToggle.current.addEventListener('click', handleToggle);
        menuClose.current.addEventListener('click', handleClose);
    }, [])

    // Navigation Bar on scroll function

    const scrollHeader = () => {
        if (window.scrollY >= 50) {
            document.querySelector("#nav").classList.add("scroll-header-nav");
            document.querySelector(".nav-title-link").classList.add("scroll-header-title");
        }
        else {
            document.querySelector("#nav").classList.remove("scroll-header-nav");
            document.querySelector(".nav-title-link").classList.remove("scroll-header-title");
        }
    }

    // Navigation Toggle and Close functions

    const handleToggle = () => {
        document.querySelector(".nav-menu").classList.add('show-navigation');
    }
    const handleClose = () => {
        document.querySelector(".nav-menu").classList.remove('show-navigation');
    }

    const handleDefaultTitle = () => {
        document.title = "Developer.";
    }

    return (
        <header className="header">
            <nav id="nav" className="nav">
                <h1 className="nav-title"><Link to="/" className="nav-title-link" onClick={handleDefaultTitle}>Muhammad Saif</Link></h1>
                <ul className="nav-menu">
                    <li className="nav-items"><LinkSc activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-links hover-effect">projects</LinkSc></li>
                    <li className="nav-items"><LinkSc activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-links hover-effect">about me</LinkSc></li>
                    <li className="nav-items"><Link to="/workwithme" className="nav-links btn" onClick={props.handleTitleChange}>Work with me</Link></li>
                    <i ref={menuClose} className="ri-close-circle-line menu-close"></i>
                </ul>
                <i ref={menuToggle} className="ri-menu-line menu-toggle"></i>
            </nav>
        </header>
    )
}

export default Navbar
