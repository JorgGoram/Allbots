
import React from 'react';
import { motion } from 'framer-motion';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => {
  return (
    <section className={styles.ctaSection} id="get-started">
      <div className={styles.backgroundElement1} />
      <div className={styles.backgroundElement2} />
      
      <motion.div
        className={styles.ctaContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to Transform Your Customer Experience?
        </motion.h2>
        
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join thousands of businesses using AllBots.io to create intelligent, scalable conversations that convert and delight customers.
        </motion.p>
        
        <motion.div
          className={styles.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className={styles.primaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>
          
          <motion.button
            className={styles.secondaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Demo
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
