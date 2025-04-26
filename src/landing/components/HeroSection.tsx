
import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGraphic}>
        {/* Optional: Add animated background */}
      </div>
      
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>Build Advanced AI Chatbots with AllBots.io</h1>
        <p className={styles.subtitle}>
          Create, deploy, and manage intelligent AI chatbots without coding. Powerful enough for developers, simple enough for everyone.
        </p>
        
        <div className={styles.cta}>
          <motion.a
            href="#get-started"
            className={styles.primaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.a>
          <motion.a
            href="#how-it-works"
            className={styles.secondaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See How It Works
          </motion.a>
        </div>
        
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>99.9%</div>
            <div className={styles.statLabel}>Uptime</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>10M+</div>
            <div className={styles.statLabel}>Conversations</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>5,000+</div>
            <div className={styles.statLabel}>Happy Clients</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
