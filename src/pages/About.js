import React from 'react';
import Layout from '../components/Layout';

function AboutPage() {
    return (
        <>
            <Layout>
                <div id="about" className="sa-section">
                    <div className="section-content section-padding">
                        <div className="container">
                            <div className="about-content">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="about-thumb">
                                            <img src="assets/images/others/about-thumb.jpg" alt="Vaibhaw Kumar Parashar - Full Stack Developer" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="section-title">
                                            <span>About Myself</span>
                                            <h1>About Me</h1>
                                        </div>
                                        <div className="about-text">
                                            <p>
                                                Hi there! I am <strong>Vaibhaw</strong>, born and brought up in the peaceful land of <strong>Saran, Bihar</strong>, India. A proud desi who survived the great “corona era” (yes, I’m still sneezing in fear of sanitizers 😷), and someone who grew up dancing between the 90s and 20s era – you know, cassette tapes to Spotify, landline phones to Face ID. Quite a ride!
                                            </p>

                                            <p>
                                                I completed my 10th and 12th from the <strong>BSEB Board, Patna</strong>, which taught me patience... mostly while waiting for results. Then, I went on to do my B.Tech in <strong>Computer Science</strong> at the <strong>Himalayan Institute of Engineering and Technology</strong>, Kala-Amb, Himachal Pradesh (2018–2022). Mountains, Maggi, and machines – that's how I rolled for four years!
                                            </p>

                                            <p>
                                                Now, I live in <strong>Chandigarh</strong>, working as a <strong>Web Developer</strong> and chasing bugs (not real ones, the software kind 🐞). I work with <strong>HTML, CSS, Bootstrap</strong> to <strong>PHP, jQuery, JS, WordPress, BigCommerce, Laravel, CS-Cart</strong>. I believe websites should look good, load fast, and not break after clicking a single button. Simple things, right?
                                            </p>

                                            <p>
                                                When I’m not busy coding or fixing someone’s “urgent bug,” I’m usually sipping on my forever love – <strong>tea</strong> (seriously, I should own a tea startup by now). I also enjoy cold drinks but somehow end up back with chai. It’s like a toxic relationship I enjoy too much.
                                            </p>

                                            <p>
                                                I’ve always been a tech lover. Even as a kid, I’d press every key on the keyboard just to “see what happens.” That curiosity led me here – designing smart, responsive websites and building stuff that people actually use. Whether it's a business site, blog, or eCommerce platform – I make sure everything works smooth like butter (Amul butter, of course 🧈).
                                            </p>

                                            <p>
                                                Apart from work, I’m all about good vibes and better jokes. I love connecting with like-minded folks, cracking harmless jokes, and sharing ideas over endless cups of tea. Whether you're looking to build your dream website, need a custom web solution, or just want to rant about your last client project – I’m all ears!
                                            </p>

                                            <p>
                                                So if you're someone who needs a <strong>friendly, reliable, and slightly tea-addicted developer</strong> for your next web adventure, don’t hesitate to say hi. You can find me coding away in Chandigarh or reaching caffeine overdose levels by evening. Let’s build something awesome together – with humor, hustle, and HTML!
                                            </p>

                                            <div className="buttons mt-4">
                                                <a href="/assets/cv.pdf" className="btn btn-primary" download>Download CV <span><i className="fas fa-download"></i></span></a>
                                                <a href="/contact" className="btn btn-white">Send Message <span><i className="fas fa-angle-double-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default AboutPage;
