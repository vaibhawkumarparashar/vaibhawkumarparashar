import React from "react";

export default function Resume() {
    return (
        <div id="resume" className="sa-section">
            <div className="section-content section-padding">
                <div className="container">
                    <div className="section-title">
                        <span>More About of Me</span>
                        <h1>My Education</h1>
                    </div>
                    <div className="experience-content">
                        <div className="tab-menu">
                            <ul className="nav nav-tabs text-center">
                                <li className="nav-item">
                                    <a className="nav-link active" id="education-tab" data-toggle="tab" href="#education"
                                        aria-controls="education"><span>
                                            <img src="assets/images/others/icon2.png"
                                                alt="Image" className="img-fluid icon" />
                                            <img
                                                src="assets/images/others/icon2-hover.png" alt="Image"
                                                className="img-fluid icon-hover" /></span>My Education</a>
                                </li>
                            </ul>
                        </div>
                        <div className="experience-tab-content">
                            <div className="tab-content">
                                <div className="tab-pane fade" id="personal">
                                    <div className="personal">
                                        <ul className="global-list">
                                            <li>
                                                <span className="icon"><i className="fas fa-address-card"></i></span>
                                                <strong>Address</strong>
                                                I'm currently living in Punjab, India
                                            </li>
                                            <li>
                                                <span className="icon"><i className="fas fa-birthday-cake"></i></span>
                                                <strong>Birth Date</strong>
                                                31 August 2000, Bihar, India
                                            </li>
                                            <li>
                                                <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                                                <strong>Location</strong>
                                                Punjab, Chandigarh, India
                                            </li>
                                            <li>
                                                <span className="icon"><i className="fas fa-envelope"></i></span>
                                                <strong>E-Mail</strong>
                                                imvaibhaw@gmail.com
                                            </li>
                                            <li>
                                                <span className="icon"><i className="fas fa-phone-alt"></i></span>
                                                <strong>Phone</strong>
                                                +91-9508176840
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane fade  show active" id="education">
                                    <div className="experience">
                                        <ul className="global-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-school"></i>
                                                </div>
                                                <div className="experience-info">
                                                    <h2>School</h2>
                                                    <h3>S.N.G. High School</h3>
                                                    <p>Completed my 10th from here in 2015.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-graduation-cap"></i>
                                                </div>
                                                <div className="experience-info">
                                                    <h2>College</h2>
                                                    <h3>LOK Mahavidyalaya Hafizpur</h3>
                                                    <p>Completed my 11th &12th from here in 2017.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-graduation-cap"></i>
                                                </div>
                                                <div className="experience-info">
                                                    <h2>College</h2>
                                                    <h3>Himalayan Institute of Engineering & Technology</h3>
                                                    <p>Completed my B.Tech in Computer Science & Engineering in 2022.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="quick-manage text-center">
                            <div className="manage-content">
                                <h2>Quick Manage</h2>
                                <div className="manage-list">
                                    <a href="#" className="manage">
                                        <div className="icon">
                                            <img src="assets/images/others/icon5.png" alt="Image" className="img-fluid" />
                                        </div>
                                        <span>Preview CV</span>
                                    </a>
                                    <a href="#" className="manage">
                                        <div className="icon">
                                            <img src="assets/images/others/icon6.png" alt="Image" className="img-fluid" />
                                        </div>
                                        <span>Download CV</span>
                                    </a>
                                    <a href="#" className="manage">
                                        <div className="icon">
                                            <img src="assets/images/others/icon7.png" alt="Image" className="img-fluid" />
                                        </div>
                                        <span>Contact Me</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}