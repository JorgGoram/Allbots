
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Calendar, Shield, Bot, Users, Sparkles, Zap } from 'lucide-react';
import styles from './CallToAction.module.css';

interface PackageFeature {
  text: string;
  highlighted?: boolean;
}

interface Package {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: PackageFeature[];
  recommended: boolean;
  buttonText: string;
  icon: React.ReactNode;
}

const CallToAction: React.FC = () => {
  const packages: Package[] = [
    {
      name: 'AI Executive Advisory',
      price: '$4,997',
      originalPrice: '$6,250',
      description: 'Strategic AI consultation and implementation planning for executives.',
      features: [
        { text: 'One-on-one AI strategy sessions', highlighted: true },
        { text: 'Custom AI solution development', highlighted: true },
        { text: 'Expedited AI solutions' },
        { text: 'Direct access to AI experts' },
        { text: 'Weekly progress reviews' }
      ],
      recommended: true,
      buttonText: 'Book a Consultation',
      icon: <Bot size={28} />
    },
    {
      name: 'AI Integration Pro',
      price: '$12,997',
      originalPrice: '$15,750',
      description: 'Full-scale AI implementation and technical integration.',
      features: [
        { text: 'Complete system integration', highlighted: true },
        { text: 'Custom process automation', highlighted: true },
        { text: 'Multi-platform deployment' },
        { text: 'Data migration & security' },
        { text: 'Ongoing technical support' },
        { text: 'Team training & onboarding' }
      ],
      recommended: false,
      buttonText: 'Learn More',
      icon: <Zap size={28} />
    }
  ];
  
  return (
    <section className={styles.ctaSection} id="get-started">
      <div className={styles.ctaBackground}>
        <div className={styles.bgPattern}></div>
        <div className={styles.bgGradient}></div>
      </div>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className={styles.sectionTag}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            START YOUR TRANSFORMATION
          </motion.span>
          
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Transform Your Business with
            <span className={styles.titleAccent}> AI Automation?</span>
          </motion.h2>
          
          <motion.p 
            className={styles.sectionDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Choose the package that best fits your organization's needs and start your journey to 
            AI-powered process automation. All packages include our 100% satisfaction guarantee.
          </motion.p>
        </motion.div>
        
        <div className={styles.packagesContainer}>
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              className={`${styles.packageCard} ${pkg.recommended ? styles.recommendedPackage : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                boxShadow: pkg.recommended 
                  ? '0 25px 50px rgba(var(--accent-color-rgb), 0.3)' 
                  : '0 25px 50px rgba(0, 0, 0, 0.15)'
              }}
            >
              <div className={styles.packageGlow}></div>
              
              {pkg.recommended && (
                <motion.div 
                  className={styles.recommendedBadge}
                  animate={{ 
                    y: [0, -5, 0],
                    boxShadow: [
                      '0 4px 15px rgba(var(--accent-color-rgb), 0.3)',
                      '0 8px 20px rgba(var(--accent-color-rgb), 0.5)',
                      '0 4px 15px rgba(var(--accent-color-rgb), 0.3)'
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                >
                  <Sparkles className={styles.recommendedIcon} size={14} />
                  <span>Most Popular</span>
                </motion.div>
              )}
              
              <div className={styles.packageIconContainer}>
                <motion.div 
                  className={styles.packageIcon}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 0 rgba(var(--accent-color-rgb), 0.4)',
                      '0 0 20px rgba(var(--accent-color-rgb), 0.6)',
                      '0 0 0 rgba(var(--accent-color-rgb), 0.4)'
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                >
                  {pkg.icon}
                </motion.div>
              </div>
              
              <h3 className={styles.packageTitle}>{pkg.name}</h3>
              
              <div className={styles.packagePrice}>
                <motion.span 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {pkg.price}
                </motion.span>
                
                {pkg.originalPrice && (
                  <div className={styles.priceSaving}>
                    <span className={styles.originalPrice}>{pkg.originalPrice}</span>
                    <span className={styles.savingLabel}>Save 20%</span>
                  </div>
                )}
              </div>
              
              <p className={styles.packageDescription}>{pkg.description}</p>
              
              <ul className={styles.packageFeatures}>
                {pkg.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className={`${styles.featureItem} ${feature.highlighted ? styles.highlightedFeature : ''}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Check className={styles.featureIcon} />
                    <span>{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.a
                href={`#book-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`${styles.packageButton} ${pkg.recommended ? styles.primaryButton : styles.secondaryButton}`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: pkg.recommended
                    ? '0 10px 25px rgba(var(--accent-color-rgb), 0.4)'
                    : '0 10px 25px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.buttonContent}>
                  <Calendar className={styles.buttonIcon} />
                  {pkg.buttonText}
                  <ArrowRight className={styles.arrowIcon} />
                </span>
                {pkg.recommended && <span className={styles.buttonGlow}></span>}
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={styles.guaranteeSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
        >
          <motion.div 
            className={styles.guaranteeIcon}
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Shield className={styles.shieldIcon} />
          </motion.div>
          
          <div className={styles.guaranteeContent}>
            <motion.h3 
              className={styles.guaranteeTitle}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              100% Money-Back Guarantee
            </motion.h3>
            
            <motion.p 
              className={styles.guaranteeDescription}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              If you're not completely satisfied with our services within the first 30 days, 
              we'll refund your investment in full. We're committed to your success.
            </motion.p>
          </div>
        </motion.div>
        
        <div className={styles.clientsSection}>
          <motion.h3 
            className={styles.clientsTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Industry Leaders
          </motion.h3>
          
          <motion.div 
            className={styles.clientLogos}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                className={styles.logoPlaceholder}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5, opacity: 1, filter: 'brightness(1.2)' }}
              />
            ))}
          </motion.div>
          
          <motion.div 
            className={styles.testimonialHighlight}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
          >
            <div className={styles.testimonialContent}>
              <motion.div 
                className={styles.quoteMarks}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              >
                "
              </motion.div>
              
              <motion.p 
                className={styles.testimonialQuote}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                AllBots.io transformed our customer service operations, reducing response times by 
                <span className={styles.highlightedText}> 80%</span> while improving satisfaction scores. The ROI has been incredible.
              </motion.p>
              
              <div className={styles.testimonialAuthor}>
                <motion.div 
                  className={styles.authorAvatar}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0 0 20px rgba(var(--accent-color-rgb), 0.4)' 
                  }}
                >
                  <Users className={styles.avatarIcon} />
                </motion.div>
                
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>Sarah Johnson</div>
                  <div className={styles.authorTitle}>CTO, Enterprise Solutions Inc.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.finalCta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className={styles.ctaCard}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(var(--accent-color-rgb), 0.2)' }}
          >
            <div className={styles.ctaGradient}></div>
            
            <div className={styles.ctaContent}>
              <motion.h3 
                className={styles.finalCtaTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Ready to start your AI automation journey?
              </motion.h3>
              
              <motion.p 
                className={styles.finalCtaDescription}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Book a free 30-minute consultation with our AI automation experts to 
                discuss your specific needs and how we can help transform your business.
              </motion.p>
            </div>
            
            <motion.a
              href="#book-consultation"
              className={styles.finalCtaButton}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(var(--accent-color-rgb), 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.buttonContent}>
                <Bot className={styles.buttonIcon} />
                <span>Book Your Free Consultation</span>
              </span>
              <span className={styles.buttonGlow}></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
