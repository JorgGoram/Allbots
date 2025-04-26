
import React, { useEffect } from 'react';
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
  '--dark-bg': '#050510',
  '--text-primary': '#FFFFFF',
} as React.CSSProperties;

const LandingPage: React.FC = () => {
  // Use effect to set document title and body style
  useEffect(() => {
    // Set document title
    document.title = 'AllBots.io - AI-Powered Process Automation';

    // Save original body style
    const originalBackgroundColor = document.body.style.backgroundColor;
    const originalOverflow = document.body.style.overflow;

    // Set body styles for landing page
    document.body.style.backgroundColor = '#050510';
    document.body.style.overflow = 'auto';

    // Cleanup function to restore original body style
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div style={cssVariables}>
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;
