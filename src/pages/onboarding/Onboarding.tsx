
import React, { useState } from 'react';
import styles from './Onboarding.module.css';

const steps = [
  'business-details',
  'contact-info',
  'ai-branding',
  'voice-settings',
  'knowledge-base',
  'review'
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    businessUrl: '',
    industry: '',
    contactName: '',
    contactEmail: '',
    agentName: '',
    voiceStyle: '',
    primaryLanguage: '',
  });

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.progressBar}>
        {steps.map((step, index) => (
          <div
            key={step}
            className={`${styles.progressStep} ${
              index <= currentStep ? styles.active : ''
            }`}
          />
        ))}
      </div>
      
      <form className={styles.onboardingForm}>
        {/* Form content will change based on currentStep */}
        <div className={styles.navigationButtons}>
          {currentStep > 0 && (
            <button type="button" onClick={handlePrevStep}>
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button type="button" onClick={handleNextStep}>
              Next
            </button>
          ) : (
            <button type="submit">Complete Setup</button>
          )}
        </div>
      </form>
    </div>
  );
}
