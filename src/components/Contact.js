import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
        <div id="contact" className="sa-section">
            <div className="section-content section-padding bg-color">
                <div className="container">
                    <div className="section-title">
                        <span>Here I'm</span>
                        <h1>Contact Me</h1>
                    </div>

                    <div className="contact-content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-info">
                                    <ul className="global-list">
                                        <li>
                                            <div className="contact">
                                                <div className="icon">
                                                    <i className="fas fa-envelope-open"></i>
                                                </div>
                                                <h2>E-mail</h2>
                                                <a href="#">imvaibhaw@gmail.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact">
                                                <div className="icon">
                                                    <i className="fas fa-phone-alt"></i>
                                                </div>
                                                <h2>Phone</h2>
                                                <a href="tel:01234567890"> +91-95081-76840</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact">
                                                <div className="icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <h2>Location</h2>
                                                <address>Punjab, Chandigarh, India</address>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-content">
                                    <h3>Type Message</h3>
                                    <form id="contactform" className="contact-form" onSubmit={handleSubmit} noValidate>
                                        <input 
                                            className="form-control" 
                                            name="name" 
                                            type="text" 
                                            placeholder="Name*" 
                                            value={formData.name}
                                            onChange={handleChange}
                                            size="30" 
                                            aria-required="true" 
                                            required
                                        />

                                        <input 
                                            className="form-control" 
                                            name="email" 
                                            type="email"
                                            placeholder="Email address" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            size="30" 
                                            aria-required="true"
                                            required
                                        />

                                        <input 
                                            className="form-control" 
                                            name="phone" 
                                            type="text"
                                            placeholder="Phone number / website (optional)" 
                                            value={formData.phone}
                                            onChange={handleChange}
                                            size="30"
                                        />

                                        <textarea 
                                            name="message" 
                                            className="form-control" 
                                            required 
                                            rows="7"
                                            placeholder="Message..."
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        <div className="flashinfo"></div>
                                        <input type="submit" className="btn btn-primary btn-l" value="Send Your Message"/>
                                    </form>
                                    <div className="social">
                                        <h3>Social Media</h3>
                                        <ul className="global-list">
                                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-square"></i></a></li>
                                            <li><a href="https://www.instagram.com/itsvaibhaw"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-snapchat-ghost"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}