import React from 'react';
import './FooterFeature.css';

const FooterFeature = () => {
    return (
        <div className="footer-feature">
            <h2>RealAnime: Create Authentic Ghibli-Style Anime Videos with Ease</h2>
            <div className="features">
                <div className="feature-box">
                    <h3>1. Visit RealAnime</h3>
                    <p>Head over to our website and discover the magic of anime transformation.</p>
                </div>
                <div className="feature-box">
                    <h3>2. Upload your video</h3>
                    <p>Select the video you want to Ghiblify and upload it to our platform. It's quick and easy!</p>
                </div>
                <div className="feature-box">
                    <h3>3. Watch Transformation</h3>
                    <p>Our AI works its magic, converting your video into a stunning Ghibli-style animation. Sit back and enjoy the show!</p>
                </div>
                <div className="feature-box">
                    <h3>4. Download and Share:</h3>
                    <p>Once the conversion is complete, download your new anime video and share it with the world!</p>
                </div>
            </div>
        </div>
    );
};

export default FooterFeature;