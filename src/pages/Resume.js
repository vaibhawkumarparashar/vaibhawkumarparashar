import React from 'react';
import Layout from '../components/Layout';
import '../styles/Resume.css';

function Resume() {
  return (
    <Layout>
      <div id="resume" className="sa-section resume-section">
        <div className="section-content">
          <div className="container">
            <div className="section-title text-center animate-fade-in">
              <span className="subtitle">My Journey</span>
              <h1 className="main-title">Experience & Education</h1>
              <div className="title-separator"></div>
            </div>

            <div className="resume-content">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="experience-card animate-slide-up">
                    <div className="card-header">
                      <i className="fas fa-briefcase"></i>
                      <h2>Work Experience</h2>
                    </div>

                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <div className="experience-header">
                            <h3>Web Developer</h3>
                            <span className="badge">2022 - Present</span>
                          </div>
                          <h4>Chandigarh, India</h4>
                          <p>Working as a Full Stack Developer, specializing in creating responsive and user-friendly web applications.</p>
                          <div className="skills-tags">
                            <span>HTML/CSS</span>
                            <span>JavaScript</span>
                            <span>PHP</span>
                            <span>Laravel</span>
                            <span>WordPress</span>
                          </div>
                          <ul className="achievement-list">
                            <li><i className="fas fa-check"></i> Developing and maintaining multiple client websites</li>
                            <li><i className="fas fa-check"></i> Implementing responsive designs</li>
                            <li><i className="fas fa-check"></i> Building backend solutions</li>
                            <li><i className="fas fa-check"></i> Managing e-commerce platforms</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="education-card animate-slide-up">
                    <div className="card-header">
                      <i className="fas fa-graduation-cap"></i>
                      <h2>Education</h2>
                    </div>

                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <div className="education-header">
                            <h3>B.Tech in Computer Science</h3>
                            <span className="badge">2018 - 2022</span>
                          </div>
                          <h4>Himalayan Institute of Engineering and Technology</h4>
                          <p>Kala-Amb, Himachal Pradesh</p>
                          <div className="education-details">
                            <div className="detail-item">
                              <i className="fas fa-book"></i>
                              <span>Specialized in Web Development</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <div className="education-header">
                            <h3>Higher Secondary Education</h3>
                            <span className="badge">2016 - 2018</span>
                          </div>
                          <h4>BSEB Board, Patna</h4>
                          <p>Completed Matriculation & Intermediate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">

                  <div className="skills-card mt-4 animate-slide-up">
                    <div className="card-header">
                      <i className="fas fa-code"></i>
                      <h2>Technical Skills</h2>
                    </div>

                    <div className="skills-grid">
                      <div className="skill-category">
                        <h4><i className="fas fa-paint-brush"></i> Frontend</h4>
                        <div className="skill-bars">
                          <div className="skill-bar">
                            <div className="skill-info">
                              <span>HTML/CSS</span>
                              <span>95%</span>
                            </div>
                            <div className="progress-bar">
                              <div className="progress animate-progress" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                          <div className="skill-bar">
                            <div className="skill-info">
                              <span>JavaScript</span>
                              <span>75%</span>
                            </div>
                            <div className="progress-bar">
                              <div className="progress animate-progress" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <div className="skill-bar">
                            <div className="skill-info">
                              <span>React</span>
                              <span>50%</span>
                            </div>
                            <div className="progress-bar">
                              <div className="progress animate-progress" style={{ width: '50%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skill-category">
                        <h4><i className="fas fa-server"></i> Backend</h4>
                        <div className="skill-bars">
                          <div className="skill-bar">
                            <div className="skill-info">
                              <span>PHP</span>
                              <span>90%</span>
                            </div>
                            <div className="progress-bar">
                              <div className="progress animate-progress" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                          <div className="skill-bar">
                            <div className="skill-info">
                              <span>Laravel</span>
                              <span>75%</span>
                            </div>
                            <div className="progress-bar">
                              <div className="progress animate-progress" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <div className="skill-bar">
                            <div className="skill-info">
                              <span>MySQL</span>
                              <span>80%</span>
                            </div>
                            <div className="progress-bar">
                              <div className="progress animate-progress" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="skill-category">
                        <h4><i className="fas fa-shopping-cart"></i> CMS & E-commerce</h4>
                        <div className="skill-bars">
                          <div className="skill-bar">
                            <div className="skill-info">
                              <span>WordPress</span>
                              <span>80%</span>
                            </div>
                            <div className="progress-bar">
                              <div className="progress animate-progress" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                          <div className="skill-bar">
                            <div className="skill-info">
                              <span>CS-Cart</span>
                              <span>70%</span>
                            </div>
                            <div className="progress-bar">
                              <div className="progress animate-progress" style={{ width: '70%' }}></div>
                            </div>
                          </div>
                          <div className="skill-bar">
                            <div className="skill-info">
                              <span>BigCommerce</span>
                              <span>85%</span>
                            </div>
                            <div className="progress-bar">
                              <div className="progress animate-progress" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume; 