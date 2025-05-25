import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const texts = ["Web Developer", "Backend Developer"];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    useEffect(() => {
        let timeout;
        const current = textIndex % texts.length;
        const fullText = texts[current];

        if (!isDeleting && currentText === fullText) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setTextIndex(prev => prev + 1);
            return;
        }

        const delta = isDeleting ? -1 : 1;
        const nextText = fullText.substring(0, currentText.length + delta);
        timeout = setTimeout(() => {
            setCurrentText(nextText);
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex, texts]);

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
                        preload="auto"
                        onLoadedData={() => setIsVideoLoaded(true)}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: -1,
                            opacity: isVideoLoaded ? 1 : 0,
                            transition: 'opacity 0.5s ease-in'
                        }}
                    >
                        <source src="assets/videos/bg.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="container">
                    <div className="profile-thumb">
                        <img 
                            src="assets/images/others/profile1.png" 
                            alt="Profile" 
                            className="img-fluid"
                            loading="eager"
                        />
                    </div>
                    <div className="profile-info">
                        <h1>Vaibhaw<span> Kumar </span>Parashar</h1>
                        <span>I'm a </span>
                        <span className="typewriter">{currentText}</span>
                        <span className="cursor">|</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;