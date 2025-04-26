
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Onboarding.module.css';

const steps = [
  {
    id: 'business',
    title: 'Business Details',
    description: 'Tell us about your business',
  },
  {
    id: 'contact',
    title: 'Point of Contact',
    description: 'Who should we contact?',
  },
  {
    id: 'branding',
    title: 'AI Agent Branding',
    description: 'Customize your AI assistant',
  },
  {
    id: 'voice',
    title: 'Voice & Language',
    description: 'Set communication preferences',
  },
  {
    id: 'knowledge',
    title: 'Knowledge Base',
    description: 'Configure information sources',
  },
  {
    id: 'settings',
    title: 'Assistant Settings',
    description: 'Fine-tune your assistant',
  },
  {
    id: 'review',
    title: 'Review & Submit',
    description: 'Finalize your setup',
  },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    business: {
      name: '',
      industry: '',
      size: '',
    },
    contact: {
      name: '',
      email: '',
      phone: '',
      timezone: '',
    },
    branding: {
      agentName: '',
      personality: '',
      avatar: '',
    },
    voice: {
      language: 'en-US',
      accent: 'neutral',
      speed: 1,
    },
    knowledge: {
      sources: [],
      customInstructions: '',
    },
    settings: {
      responseStyle: 'professional',
      proactiveAssistance: true,
      learningEnabled: true,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      // Save current step data
      try {
        const response = await fetch(`/api/onboarding/step/${steps[currentStep].id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(formData[steps[currentStep].id as keyof typeof formData]),
        });

        if (!response.ok) {
          throw new Error('Failed to save step data');
        }

        setCurrentStep(prev => prev + 1);
        setError('');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to save progress');
      }
    } else {
      // Submit final form
      setIsLoading(true);
      try {
        const response = await fetch('/api/onboarding/complete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to complete onboarding');
        }

        navigate('/dashboard');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to complete onboarding');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className={styles.stepContent}>
            <div className={styles.formGroup}>
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                value={formData.business.name}
                onChange={(e) => handleInputChange('business', 'name', e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="industry">Industry</label>
              <select
                id="industry"
                value={formData.business.industry}
                onChange={(e) => handleInputChange('business', 'industry', e.target.value)}
                className={styles.input}
                required
              >
                <option value="">Select Industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="size">Company Size</label>
              <select
                id="size"
                value={formData.business.size}
                onChange={(e) => handleInputChange('business', 'size', e.target.value)}
                className={styles.input}
                required
              >
                <option value="">Select Size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
            </div>
          </div>
        );

      // Add more cases for other steps...
      
      default:
        return <div>Step content not implemented</div>;
    }
  };

  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.onboardingCard}>
        <div className={styles.progress}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`${styles.progressStep} ${
                index === currentStep
                  ? styles.active
                  : index < currentStep
                  ? styles.completed
                  : ''
              }`}
            >
              <div className={styles.progressDot} />
              <span className={styles.progressLabel}>{step.title}</span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.stepWrapper}
          >
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>{steps[currentStep].title}</h2>
              <p className={styles.stepDescription}>{steps[currentStep].description}</p>
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            {renderStepContent()}

            <div className={styles.stepActions}>
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className={styles.backButton}
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={isLoading}
                className={styles.nextButton}
              >
                {currentStep === steps.length - 1
                  ? isLoading
                    ? 'Completing...'
                    : 'Complete Setup'
                  : 'Next Step'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
