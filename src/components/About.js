import React from 'react';

function About() {
    return (
        <>
        <div id="about" className="sa-section">
            <div className="section-content section-padding">
                <div className="container">
                    <div className="about-content">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="about-thumb">
                                    <img src="assets/images/others/about-thumb.jpg" alt="Image" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="section-title">
                                    <span>About Myself</span>
                                    <h1>About Me</h1>
                                </div>
                                <div className="about-text">
                                    <p>Yo, what's good? I'm Vaibhaw Kumar Parashar, your friendly neighborhood web
                                        developer, slinging code and cooking up fresh websites like a tech chef! 🍳 I’m
                                        always tinkering with my portfolio, dropping new projects, and sharing my wild
                                        ride through the ever-changing world of tech. Stick around for some coding magic
                                        and a sprinkle of cricket obsession!</p>
                                    <ul className="global-list">
                                        <li><span><i className="fas fa-user-alt"></i></span>Name: Vaibhaw Kumar Parashar
                                        </li>
                                        <li><span><i className="fas fa-calendar-alt"></i></span>Birthday: 31 August 2000
                                        </li>
                                        <li><span><i className="fas fa-user-alt"></i></span>Age: 25 Years</li>
                                        <li><span><i className="fas fa-envelope"></i></span>Email:
                                            adminvaibhawkumarparshar@gmail.com</li>
                                        <li><span><i className="fas fa-phone-alt"></i></span>Phone: +91 9508176840</li>
                                        <li><span><i className="fas fa-calendar-alt"></i></span>Interested: Cricket</li>
                                        <li><span><i className="fas fa-graduation-cap"></i></span>Degree: B.Tech in CSE</li>
                                    </ul>
                                    <div className="buttons">
                                        <a href="#" className="btn btn-primary">Download CV <span><i
                                                    className="fas fa-download"></i></span></a>
                                        <a href="#" className="btn btn-white">Send Message <span><i
                                                    className="fas fa-angle-double-right"></i></span></a>
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

export default About;