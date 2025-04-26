
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageCircle, Zap, Shield, Globe, BarChart } from 'lucide-react';
import styles from './FeaturesGrid.module.css';

const features = [
  {
    icon: <Brain />,
    title: 'Advanced AI Understanding',
    description: 'Our bots leverage cutting-edge LLM technology to understand context and provide human-like conversation.',
  },
  {
    icon: <MessageCircle />,
    title: 'Multi-channel Deployment',
    description: 'Deploy your chatbots across various platforms including website, WhatsApp, Facebook, and more.',
  },
  {
    icon: <Zap />,
    title: 'No-code Builder',
    description: 'Create sophisticated chatbots with our intuitive visual builder - no coding required.',
  },
  {
    icon: <Shield />,
    title: 'Enterprise-grade Security',
    description: 'Bank-level security and data protection to keep your conversations and customer data safe.',
  },
  {
    icon: <Globe />,
    title: 'Multilingual Support',
    description: 'Support customers in over 95 languages with automatic translation and localization.',
  },
  {
    icon: <BarChart />,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with comprehensive analytics on user interactions and bot performance.',
  },
];

const FeaturesGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={styles.featuresSection}>
      <div className="landing-container">
        <div className={styles.sectionHeader}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features for Your Chatbots
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to build, deploy, and manage intelligent conversational experiences.
          </motion.p>
        </div>
        
        <motion.div
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              variants={itemVariants}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
