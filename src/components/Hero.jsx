import './Hero.css'
import { useNavigate } from 'react-router-dom';


export default function Hero() {
    
    const navigate = useNavigate();

    const uploadVideoSection = () => {
        navigate('/uploadVideo');
      };

    return (
        <div className="hero">
            <h1 className="hero-title">Transform Your Videos into Magical Ghibli Style Animations
            </h1>

            <p className="hero-text">
                Relive your favorite moments in a whole new light. Transform your videos into heartwarming Ghibli-style animations, capturing the magic and wonder that make Studio Ghibli films so beloved.
            </p>

            <div className="hero-actions">
                <button className="button primary" onClick={uploadVideoSection}>
                    Have a try
                </button>
                {/* <button className="button secondary" onClick={uploadVideoSection}>
                    Take a look
                </button> */}
            </div>
        </div>
    );
}