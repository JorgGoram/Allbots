
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  Bot,
  ArrowRight
} from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Quick links for footer navigation
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Implementation', href: '#implementation-timeline' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];
  
  // Services links
  const servicesLinks = [
    { name: 'AI Strategy & Planning', href: '#services-strategy' },
    { name: 'AI Voice Development', href: '#services-voice' },
    { name: 'Process Automation', href: '#services-automation' },
    { name: 'CRM/ERP Integration', href: '#services-integration' },
    { name: 'Custom AI Solutions', href: '#services-custom' },
    { name: 'Training & Support', href: '#services-training' },
  ];
  
  // Industry solutions
  const industriesLinks = [
    { name: 'Healthcare', href: '#industry-healthcare' },
    { name: 'Finance', href: '#industry-finance' },
    { name: 'Retail', href: '#industry-retail' },
    { name: 'Manufacturing', href: '#industry-manufacturing' },
    { name: 'Telecommunications', href: '#industry-telecom' },
    { name: 'Education', href: '#industry-education' },
  ];
  
  // Social media links
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Youtube size={20} />, href: '#' },
  ];
  
  // Contact information
  const contactInfo = [
    { 
      icon: <Mail size={18} />, 
      label: 'Email', 
      value: 'contact@allbots.io',
      href: 'mailto:contact@allbots.io'
    },
    { 
      icon: <Phone size={18} />, 
      label: 'Phone', 
      value: '+1 (888) 123-4567',
      href: 'tel:+18881234567'
    },
    { 
      icon: <MessageSquare size={18} />, 
      label: 'Live Chat', 
      value: 'Start a conversation',
      href: '#chat'
    },
  ];
  
  // Awards and certifications
  const certifications = [
    'ISO 27001 Certified',
    'SOC 2 Compliant',
    'GDPR Compliant',
    'HIPAA Compliant',
    'AI Ethics Framework'
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogoSection}>
            <div className={styles.logo}>
              <Bot className={styles.logoIcon} />
              <span className={styles.logoText}>AllBots.io</span>
            </div>
            
            <p className={styles.companyDescription}>
              Transforming businesses through AI-powered process automation. 
              We help organizations streamline operations, reduce costs, and 
              deliver exceptional experiences.
            </p>
            
            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>Stay Updated</h4>
              <p className={styles.newsletterSubtitle}>
                Subscribe to our newsletter for AI automation insights
              </p>
              
              <form className={styles.subscribeForm}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className={styles.emailInput} 
                  required 
                />
                <motion.button 
                  type="submit" 
                  className={styles.subscribeButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.linksList}>
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Services</h4>
              <ul className={styles.linksList}>
                {servicesLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Industry Solutions</h4>
              <ul className={styles.linksList}>
                {industriesLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Contact Us</h4>
              <ul className={styles.contactList}>
                {contactInfo.map((contact, index) => (
                  <li key={index} className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      {contact.icon}
                    </div>
                    <div className={styles.contactDetails}>
                      <span className={styles.contactLabel}>{contact.label}</span>
                      <a href={contact.href} className={styles.contactValue}>{contact.value}</a>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.href}
                    className={styles.socialIcon}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.certifications}>
          <h4 className={styles.certificationsTitle}>Our Certifications</h4>
          <div className={styles.certificationsIcons}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certBadge}>{cert}</div>
            ))}
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} AllBots.io. All rights reserved.
          </div>
          
          <div className={styles.legalLinks}>
            <a href="#privacy" className={styles.legalLink}>Privacy Policy</a>
            <a href="#terms" className={styles.legalLink}>Terms of Service</a>
            <a href="#cookies" className={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
