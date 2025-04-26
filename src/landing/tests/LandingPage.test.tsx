
import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../components/LandingPage';

// Mock the components to isolate testing
jest.mock('../components/HeroSection', () => () => <div data-testid="hero-section">Hero Section</div>);
jest.mock('../components/FeaturesGrid', () => () => <div data-testid="features-grid">Features Grid</div>);
jest.mock('../components/HowItWorks', () => () => <div data-testid="how-it-works">How It Works</div>);
jest.mock('../components/Testimonials', () => () => <div data-testid="testimonials">Testimonials</div>);
jest.mock('../components/CallToAction', () => () => <div data-testid="call-to-action">Call To Action</div>);
jest.mock('../components/Footer', () => () => <div data-testid="footer">Footer</div>);

describe('LandingPage', () => {
  it('renders without crashing', () => {
    render(<LandingPage />);
    
    // Check if the component rendered
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });
  
  it('renders all sections in correct order', () => {
    render(<LandingPage />);
    
    // Get all sections
    const sections = [
      screen.getByTestId('hero-section'),
      screen.getByTestId('features-grid'),
      screen.getByTestId('how-it-works'),
      screen.getByTestId('testimonials'),
      screen.getByTestId('call-to-action'),
      screen.getByTestId('footer')
    ];
    
    // Check if each section exists
    sections.forEach(section => {
      expect(section).toBeInTheDocument();
    });
    
    // Check the order of sections
    const landingPage = document.querySelector('.landing-page');
    const orderedSections = Array.from(landingPage?.children || []);
    
    orderedSections.forEach((section, index) => {
      expect(section).toContainElement(sections[index]);
    });
  });
});
