import React from "react";  

export default function Experience() {
    return (
        <>
        <div id="resume" className="sa-section">
            <div className="section-content section-padding">
                <div className="container">
                    <div className="section-title">
                        <span>Experience</span>
                        <h1>My Experience</h1>
                    </div>
                    <div className="experience-content">
                        <div className="tab-menu">
                            <ul className="nav nav-tabs text-center">
                                <li className="nav-item">
                                    <a className="nav-link active" id="education-tab" data-toggle="tab" href="#education"
                                        aria-controls="education"><span><img src="assets/images/others/icon2.png"
                                                alt="Image" className="img-fluid icon"/> <img
                                                src="assets/images/others/icon4-hover.png" alt="Image"
                                                className="img-fluid icon-hover"/></span>My Experience</a>
                                </li>
                            </ul>
                        </div>
                        <div className="experience-tab-content">
                            <div className="tab-content">
                                <div className="tab-pane fade  show active" id="education">
                                    <div className="experience">
                                        <ul className="global-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-briefcase"></i>
                                                </div>
                                                <div className="experience-info">
                                                    <h2>Website Developer</h2>
                                                    <h3>Tech Prastish Software Solutions Pvt. Ltd., Mohali</h3>
                                                    <p>2022 - Present</p>
                                                </div>
                                            </li>
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