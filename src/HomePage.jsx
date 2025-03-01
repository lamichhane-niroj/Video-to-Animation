import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Examples from './components/Examples';
import AnimeSection from './components/AnimeSection';
import FooterFeature from './components/FooterFeature';
import Footer from './components/Footer';
import './HomePage.css';

export default function HomePage() {
    return (
        <div>
            <div className="home-page-header">
                <Navbar />
                <main className="main-content">
                    <Hero />
                    <Examples />
                </main>
            </div>
            <AnimeSection />
            <FooterFeature />
            <Footer />
        </div>
    );
}