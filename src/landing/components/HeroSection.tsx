
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './HeroSection.module.css';
import { ArrowRight, CheckCircle, Bot } from 'lucide-react';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Trigger animation when component mounts
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Stats with compelling metrics
  const stats = [
    { value: '85%', label: 'Reduced Process Time', highlight: true },
    { value: '3.5x', label: 'ROI Within 6 Months', highlight: true },
    { value: '24/7', label: 'Automated Operations', highlight: false },
    { value: '10K+', label: 'Business Users', highlight: false },
  ];
  
  // Benefits as bullet points
  const benefits = [
    'Eliminate manual data processing tasks',
    'Seamless integration with existing systems',
    'No coding required for automation setup',
    'Enterprise-grade security protocols'
  ];

  return (
    <section className={styles.hero}>
      {/* Animated background effect */}
      <div className={styles.heroGraphic}>
        <div className={styles.gridLines}></div>
        <div className={styles.pulseDots}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Main content */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow text */}
            <motion.div 
              className={styles.eyebrow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className={styles.badge}>ENTERPRISE AI SOLUTION</span>
            </motion.div>
            
            {/* Primary headline with highlight */}
            <h1 className={styles.title}>
              <span>Transform Your Business with</span>
              <span className={styles.gradientText}>AI-Powered Process Automation</span>
            </h1>
            
            {/* Refined subtitle with clear value proposition */}
            <p className={styles.subtitle}>
              Automate complex business workflows, reduce operational costs by up to 85%, and free your team from repetitive tasks with our enterprise-grade AI automation platform.
            </p>
            
            {/* Quick benefits list */}
            <motion.ul 
              className={styles.benefitsList}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                }
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <CheckCircle className={styles.checkIcon} />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            {/* Enhanced CTA section */}
            <div className={styles.ctaContainer}>
              <motion.a
                href="#get-started"
                className={styles.primaryButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started with a Free Assessment
                <ArrowRight className={styles.buttonIcon} />
              </motion.a>
              
              <motion.a
                href="#demo"
                className={styles.secondaryButton}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo <span className={styles.timeIndicator}>(2 min)</span>
              </motion.a>
              
              <p className={styles.noCreditCard}>No credit card required • Free consultation</p>
            </div>
          </motion.div>
          
          {/* Visual side - AI automation illustration or animation */}
          <motion.div 
            className={styles.visualContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.heroIllustration}>
              <div className={styles.automationFlowVisual}>
                <Bot className={styles.botIcon} />
                <div className={styles.connectionLines}></div>
                <div className={styles.processNodes}>
                  {/* Visual representation of workflow automation */}
                  <div className={styles.node}></div>
                  <div className={styles.node}></div>
                  <div className={styles.node}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div 
          className={styles.statsContainer}
          ref={statsRef}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.3, staggerChildren: 0.1 }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={`${styles.statItem} ${stat.highlight ? styles.highlightStat : ''}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust signals section */}
        <motion.div 
          className={styles.trustSignals}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className={styles.trustedBy}>Trusted by innovative companies:</p>
          <div className={styles.clientLogos}>
            {/* Placeholder for client logos */}
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
