import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBriefcase } from "react-icons/pi";
import './home.css'; // Reusing home styles for consistency
import Header from '../components/Header';
import ChatPanel from '../components/ChatPanel';
import { IoLocationOutline } from "react-icons/io5";
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function DesignSystems() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-container">
            <div className={`main-content ${isPanelOpen ? 'panel-open' : ''}`}>
                <Header onChatToggle={() => setIsPanelOpen(!isPanelOpen)} isChatOpen={isPanelOpen} />
                <main className="home-page">
                    <header className="page-header">
                        <h1 className="page-title">Design Systems</h1>
                        <p className="page-subtitle">A collection of foundational systems, components, and documentation built to scale product consistency.</p>
                    </header>

                    <section className="portfolio-section">
                        <div className="portfolio-grid">
                            <div className="portfolio-item-wrapper">
                                <div className={`portfolio-item order-tracker-item`}>
                                    <img className="order-tracker-image" src={require('../assets/profile/Delivery-tracker.png')} alt="Order Tracker Redesign" />
                                </div>
                                <div className="portfolio-label">
                                    <p className="portfolio-project">Order Tracker Redesign</p>
                                    <p className="portfolio-company">The future of post-purchase logistics. A complete overhaul of the tracking experience to provide zero-friction visibility for millions of deliveries.</p>
                                </div>
                            </div>

                            {/* You can add more design system projects here in the future */}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
            <ChatPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
        </div>
    );
}
