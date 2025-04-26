
import React from 'react';
import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: 1,
    title: 'Design Your Bot',
    description: 'Use our intuitive visual designer to create your chatbot's personality, knowledge base, and conversation flows without writing any code.',
    imageUrl: '/placeholder-image-1.png', // Will be replaced with actual assets
  },
  {
    number: 2,
    title: 'Train with Your Data',
    description: 'Upload your FAQs, documents, and knowledge base to train your bot. Our AI automatically understands your content and creates natural responses.',
    imageUrl: '/placeholder-image-2.png', // Will be replaced with actual assets
  },
  {
    number: 3,
    title: 'Deploy Everywhere',
    description: 'One-click deployment to your website, WhatsApp, Facebook Messenger, or any other platform. Your bot is ready to engage with customers 24/7.',
    imageUrl: '/placeholder-image-3.png', // Will be replaced with actual assets
  },
  {
    number: 4,
    title: 'Analyze & Optimize',
    description: 'Track performance with detailed analytics. See what users are asking and how your bot is performing. Continuously improve with AI-powered suggestions.',
    imageUrl: '/placeholder-image-4.png', // Will be replaced with actual assets
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className={styles.howItWorksSection} id="how-it-works">
      <div className="landing-container">
        <div className={styles.sectionHeader}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Follow these simple steps to create your AI-powered chatbot in minutes.
          </motion.p>
        </div>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              
              <div className={styles.stepImageContainer}>
                <div className={styles.stepImage}>
                  {/* Placeholder for step image */}
                  {/* Will be replaced with actual image components later */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
