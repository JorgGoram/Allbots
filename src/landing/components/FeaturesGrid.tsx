
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Database, Shield, Globe, Zap, BarChart, Clock } from 'lucide-react';
import styles from './FeaturesGrid.module.css';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  index: number;
  isPrimary?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, benefits, index, isPrimary }) => {
  return (
    <motion.div 
      className={`${styles.featureCard} ${isPrimary ? styles.primaryFeature : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8, 
        boxShadow: isPrimary 
          ? '0 20px 30px rgba(var(--accent-color-rgb), 0.2)' 
          : '0 20px 30px rgba(0, 0, 0, 0.2)' 
      }}
    >
      <div className={styles.cardGlow}></div>
      
      <div className={styles.featureIconContainer}>
        <div className={styles.featureIcon}>
          {icon}
        </div>
        {isPrimary && <div className={styles.iconGlow}></div>}
      </div>
      
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      
      <ul className={styles.benefitsList}>
        {benefits.map((benefit, idx) => (
          <motion.li 
            key={idx} 
            className={styles.benefitItem}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
          >
            <div className={styles.bulletPoint}></div>
            {benefit}
          </motion.li>
        ))}
      </ul>
      
      <motion.div
        className={styles.learnMore}
        whileHover={{ x: 5, color: 'var(--accent-color)' }}
      >
        Learn more
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.learnMoreIcon}>
          <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.div>
  );
};

const FeaturesGrid: React.FC = () => {
  const featuresData = [
    {
      icon: <Bot size={28} />,
      title: 'Intelligent Workflow Automation',
      description: 'Transform complex business processes into automated workflows without coding.',
      benefits: [
        'Reduce manual tasks by up to 85%',
        'Minimize human error in critical processes',
        'Deploy in days, not months'
      ],
      isPrimary: true
    },
    {
      icon: <Database size={28} />,
      title: 'Seamless Data Integration',
      description: 'Connect to your existing systems and databases with pre-built connectors.',
      benefits: [
        'Integrate with 100+ enterprise systems',
        'Real-time data synchronization',
        'No custom API development needed'
      ]
    },
    {
      icon: <Workflow size={28} />,
      title: 'Process Optimization',
      description: 'Identify bottlenecks and optimize your operations with AI-powered insights.',
      benefits: [
        'Reduce process execution time by 65%',
        'Continuous improvement recommendations',
        'Visual process analytics dashboard'
      ],
      isPrimary: true
    },
    {
      icon: <Shield size={28} />,
      title: 'Enterprise-Grade Security',
      description: 'Rest easy with SOC 2, GDPR, and HIPAA compliant security infrastructure.',
      benefits: [
        'End-to-end data encryption',
        'Role-based access controls',
        'Compliance certification support'
      ]
    },
    {
      icon: <Globe size={28} />,
      title: 'Multi-channel Deployment',
      description: 'Deploy your automated processes across all channels and touchpoints.',
      benefits: [
        'Web, mobile, and API accessibility',
        'White-label customer portals',
        'Seamless omnichannel experience'
      ]
    },
    {
      icon: <BarChart size={28} />,
      title: 'Advanced Analytics',
      description: 'Gain actionable insights with comprehensive performance analytics.',
      benefits: [
        'Real-time process monitoring',
        'Custom KPI dashboards',
        'ROI and performance tracking'
      ]
    },
    {
      icon: <Zap size={28} />,
      title: 'No-Code AI Builder',
      description: 'Create and deploy AI models with an intuitive visual interface.',
      benefits: [
        'Drag-and-drop AI components',
        'Custom ML model integration',
        'Continuous AI improvement'
      ],
      isPrimary: true
    },
    {
      icon: <Clock size={28} />,
      title: 'Rapid Implementation',
      description: 'Get up and running in days with our guided implementation process.',
      benefits: [
        'Pre-built industry templates',
        'Dedicated implementation team',
        '24/7 technical support'
      ]
    }
  ];

  return (
    <section className={styles.featuresSection} id="features">
      <div className={styles.featuresBackground}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.backgroundGrid}></div>
      </div>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className={styles.sectionTag}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            POWERFUL CAPABILITIES
          </motion.span>
          
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Transform Your Business with
            <span className={styles.titleGradient}> AI Process Automation</span>
          </motion.h2>
          
          <motion.p 
            className={styles.sectionDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our comprehensive platform combines intelligent automation, data integration, and 
            AI-powered optimization to revolutionize how your business operates.
          </motion.p>
        </motion.div>
        
        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
              index={index}
              isPrimary={feature.isPrimary}
            />
          ))}
        </div>
        
        <motion.div 
          className={styles.featuresCta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className={styles.ctaCard}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(var(--accent-color-rgb), 0.2)' }}
          >
            <div className={styles.ctaGlow}></div>
            
            <motion.h3 
              className={styles.ctaTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to transform your business processes?
            </motion.h3>
            
            <motion.p 
              className={styles.ctaDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join 10,000+ companies using AllBots.io to automate their operations
            </motion.p>
            
            <motion.a
              href="#schedule-demo"
              className={styles.ctaButton}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 10px 30px rgba(var(--accent-color-rgb), 0.4)' 
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span>Schedule a Personalized Demo</span>
              <span className={styles.buttonGlow}></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
