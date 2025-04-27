import React, { useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesGrid from './FeaturesGrid';
import HowItWorks from './HowItWorks';
import CallToAction from './CallToAction';
import Footer from './Footer';

// Define CSS variables for the theme
const cssVariables = {
  '--accent-color': '#2E6FF3',
  '--accent-color-rgb': '46, 111, 243',
  '--accent-secondary': '#7B5CFA',
  '--accent-secondary-rgb': '123, 92, 250',
  '--accent-tertiary': '#00F7FF',
  '--accent-tertiary-rgb': '0, 247, 255',
  '--dark-bg': '#050510',
  '--dark-bg-lighter': '#090919',
  '--text-primary': '#FFFFFF',
  '--text-secondary': 'rgba(255, 255, 255, 0.7)',
  '--surface-card': 'rgba(255, 255, 255, 0.03)',
  '--surface-card-hover': 'rgba(46, 111, 243, 0.08)',
  '--border-light': 'rgba(255, 255, 255, 0.05)',
  '--border-accent': 'rgba(46, 111, 243, 0.2)',
  '--glow-accent': '0 0 20px rgba(46, 111, 243, 0.3)',
  '--glow-blue': '0 0 15px rgba(0, 247, 255, 0.5)',
} as React.CSSProperties;

const LandingPage: React.FC = () => {
  // Use effect to set document title and body style
  useEffect(() => {
    // Set document title
    document.title = 'AllBots.io - AI-Powered Process Automation';

    // Apply CSS variables to document root
    const rootElement = document.documentElement;
    Object.entries(cssVariables).forEach(([key, value]) => {
      rootElement.style.setProperty(key, value as string);
    });

    // Save original body style
    const originalBackgroundColor = document.body.style.backgroundColor;
    const originalOverflow = document.body.style.overflow;

    // Set body styles for landing page
    document.body.style.backgroundColor = '#050510';
    document.body.style.overflow = 'auto';

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Cleanup function to restore original body style and remove event listeners
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
      document.body.style.overflow = originalOverflow;

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="landing-page min-h-screen" style={cssVariables}>
      <Header />
      <div className="pt-14">
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <CallToAction />
        <Footer/>
      </div>
    </div>
  );
};

export default LandingPage;