import React from 'react';
import m1 from "../assest/m1.jpg";
import m2 from "../assest/m2.jpg";
import m3 from "../assest/m3.jpg";
import './AnimeSection.css'

const AnimeSection = () => {
    const animeStyles = [
        {
            id: 1,
            name: 'Anish',
            imgUrl: m2,
        },
        {
            id: 2,
            name: 'Bibek',
            imgUrl: m1,
        },
        {
            id: 3,
            name: 'Niroj',
            imgUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/7gkyreyl-1920.jpg",
        },
        {
            id: 4,
            name: 'Prasit',
            imgUrl: m3,
        }
    ];

    return (
        <div className="anime-section-container">
            <div className="anime-section-heading">
                <h2>See Our Team Reimagined in the World of Ghibli</h2>
                <p>
                Anime transformation made easy. Upload, select, and watch your video become a stunning animation.</p>
            </div>

            <div className="anime-grid">
                {animeStyles.map((style) => (
                    <div key={style.id} className="anime-card">
                        <img
                            src={style.imgUrl}
                            alt={style.name}
                            className="anime-image"
                        />

                        <div className="anime-card-overlay">
                            <div className="anime-card-title">
                                <h3>{style.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimeSection;