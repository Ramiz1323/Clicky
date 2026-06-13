import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <main className="hero-section">
        <h1 className="hero-title">Welcome to Clickly</h1>
        <p className="hero-subtitle">
          Connect, share, and engage with your community in real-time. 
          Experience a beautiful and fast social platform tailored for you.
        </p>
        
        <div className="cta-buttons">
          <Link to="/register" className="cta-button cta-primary">
            Get Started
          </Link>
          <Link to="/login" className="cta-button cta-secondary">
            Sign In
          </Link>
        </div>
      </main>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3 className="feature-title">Share Moments</h3>
          <p className="feature-description">Post photos and updates to keep your friends in the loop with what's happening in your life.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3 className="feature-title">Engage Instantly</h3>
          <p className="feature-description">Like, comment, and react to posts from people you care about seamlessly.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3 className="feature-title">Blazing Fast</h3>
          <p className="feature-description">Built with modern technologies to ensure a smooth and responsive experience across all devices.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;