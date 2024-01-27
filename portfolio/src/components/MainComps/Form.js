import React from 'react'
import '../style.css';
import img from '../images/pic.jpeg';
import SuccessMessage from '../SuccessMessage';
import { useState } from 'react';

function Form() {

    const [success, setSuccess] = useState("none");

    const handleFormClick = () => {
        setSuccess("initial");
        setInterval(() => {
            setSuccess("none");
        }, 3000)
    }

    return (
        <div>
            {/* --------------------- Contact Form Section --------------------- */}
            <SuccessMessage successClass={success} />
            <section className="contact-form-section">
                <div className="form-container">
                    <div className="form-header">
                        <img src={img} className="form-image image" alt="pic" />
                            <div className="form-content">
                                <div className="title-container">
                                    <h3 className="form-title">Say Hello to Muhammad Saif</h3>
                                    <a target="_blank" rel="noreferrer" href="https://wa.me/+923243191677" className="whatsapp-link">&#128075; Say Hi on WhatsApp</a>
                                </div>
                                <p className="form-subtitle">will receive your message on Gmail</p>
                            </div>
                    </div>
                    <form action="/work-with-me" className="form">
                        <div className="full-name-container input-container">
                            <label for="fullName" className="full-name-label labels">Full Name</label>
                            <input type="text" name="fullName" className="full-name inputs" required />
                        </div>

                        <div className="email-container input-container">
                            <label for="email" className="email-label labels">Email Address</label>
                            <input type="email" name="email" className="email inputs" required />
                        </div>

                        <div className="subject-container input-container">
                            <label for="subject" className="subject-label labels">Subject</label>
                            <input type="text" name="subject" className="subject inputs" required />
                        </div>

                        <div className="message-container input-container">
                            <label for="messsage" className="message-label labels">Message</label>
                            <textarea name="message" className="message textarea" required></textarea>
                        </div>

                        <div className="btn-container">
                            <input type="submit" value="Send" className="submit-btn btn" onClick={handleFormClick} />
                        </div>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Form
