import React from 'react';
import './style.css';
import FooterSection from './FooterSection';
import { Link } from 'react-router-dom';

function ContactSection(props) {
  return (
    <div>
       {/* ------------------ Contact Section - Links to contact me via Email ------------------ */}

        <section className="contact-section" id="contact-section">
            <div className="contact-container container">
                <div className="contact-content">
                    <h1 className="contact-title">Let's work together</h1>
                    <Link to="/workwithme" className="contact-btn btn" onClick={props.handleTitleChange}>Work with me</Link>
                </div>
                {/* Footer Section inside Contact Section */}
                <FooterSection handleTitleChange={props.handleTitleChange} />
            </div>
        </section>
    </div>
  )
}

export default ContactSection
