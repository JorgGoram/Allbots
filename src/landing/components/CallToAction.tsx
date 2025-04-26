
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Calendar, Shield, Bot, Users } from 'lucide-react';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => {
  const packages = [
    {
      name: 'AI Executive Advisory',
      price: '$4,997',
      description: 'Strategic AI consultation and implementation planning for executives.',
      features: [
        'One-on-one AI strategy sessions',
        'Custom AI solution development',
        'Expedited AI solutions',
        'Direct access to AI experts',
        'Weekly progress reviews'
      ],
      recommended: true
    },
    {
      name: 'AI Integration Pro',
      price: '$12,997',
      description: 'Full-scale AI implementation and technical integration.',
      features: [
        'Complete system integration',
        'Custom process automation',
        'Multi-platform deployment',
        'Data migration & security',
        'Ongoing technical support',
        'Team training & onboarding'
      ],
      recommended: false
    }
  ];
  
  return (
    <section className={styles.ctaSection} id="get-started">
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionTag}>START YOUR TRANSFORMATION</span>
          <h2 className={styles.sectionTitle}>Ready to Transform Your Business with AI Automation?</h2>
          <p className={styles.sectionDescription}>
            Choose the package that best fits your organization's needs and start your journey to 
            AI-powered process automation. All packages include our 100% satisfaction guarantee.
          </p>
        </motion.div>
        
        <div className={styles.packagesContainer}>
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              className={`${styles.packageCard} ${pkg.recommended ? styles.recommendedPackage : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {pkg.recommended && (
                <div className={styles.recommendedBadge}>Most Popular</div>
              )}
              
              <h3 className={styles.packageTitle}>{pkg.name}</h3>
              <div className={styles.packagePrice}>
                <span>{pkg.price}</span>
                {pkg.recommended && <div className={styles.priceSaving}>Save 20%</div>}
              </div>
              
              <p className={styles.packageDescription}>{pkg.description}</p>
              
              <ul className={styles.packageFeatures}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <Check className={styles.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.a
                href={`#book-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`${styles.packageButton} ${pkg.recommended ? styles.primaryButton : styles.secondaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className={styles.buttonIcon} />
                {pkg.recommended ? 'Book a Consultation' : 'Learn More'}
                <ArrowRight className={styles.arrowIcon} />
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.guaranteeSection}>
          <div className={styles.guaranteeIcon}>
            <Shield className={styles.shieldIcon} />
          </div>
          <div className={styles.guaranteeContent}>
            <h3 className={styles.guaranteeTitle}>100% Money-Back Guarantee</h3>
            <p className={styles.guaranteeDescription}>
              If you're not completely satisfied with our services within the first 30 days, 
              we'll refund your investment in full. We're committed to your success.
            </p>
          </div>
        </div>
        
        <div className={styles.clientsSection}>
          <h3 className={styles.clientsTitle}>Trusted by Industry Leaders</h3>
          <div className={styles.clientLogos}>
            {/* Placeholder for client logos - will be replaced with actual logos */}
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
          </div>
          
          <div className={styles.testimonialHighlight}>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialQuote}>
                "AllBots.io transformed our customer service operations, reducing response times by 
                80% while improving satisfaction scores. The ROI has been incredible."
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <Users className={styles.avatarIcon} />
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>Sarah Johnson</div>
                  <div className={styles.authorTitle}>CTO, Enterprise Solutions Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.finalCta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.finalCtaTitle}>Ready to start your AI automation journey?</h3>
            <p className={styles.finalCtaDescription}>
              Book a free 30-minute consultation with our AI automation experts to 
              discuss your specific needs and how we can help transform your business.
            </p>
          </div>
          
          <motion.a
            href="#book-consultation"
            className={styles.finalCtaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bot className={styles.buttonIcon} />
            Book Your Free Consultation
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
