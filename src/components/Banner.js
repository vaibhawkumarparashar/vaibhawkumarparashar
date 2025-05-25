import React from 'react';

const Banner = () => {
    return (
        <div id="home" className="sa-banner text-center">
            <div className="banner-content" style={{backgroundImage: 'url(assets/images/bg/bg1.jpg)'}}>
                <div className="video-content">
                    <video 
                        className="video-player"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: -1
                        }}
                    >
                        <source src="assets/videos/bg.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="container">
                    <div className="profile-thumb">
                        <img src="assets/images/others/profile1.png" alt="Image" className="img-fluid"/>
                    </div>
                    <div className="profile-info">
                        <h1>Vaibhaw<span> Kumar </span>Parashar</h1>
                        <span>I'm a </span>
                        <span className="typewrite" data-period="2000"
                            data-type='[ "Web Developer", "Backend Developer" ]'></span>
                        <span className="wrap"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;