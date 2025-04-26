
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  ChevronRight, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Send, 
  ExternalLink 
} from 'lucide-react';
import styles from './Footer.module.css';

const FooterNavGroup = ({ title, links }: { title: string, links: string[] }) => (
  <motion.div 
    className={styles.footerNavGroup}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className={styles.navGroupTitle}>{title}</h3>
    <ul className={styles.navList}>
      {links.map((link, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
        >
          <a href="#" className={styles.navItem}>
            <ChevronRight size={14} className={styles.navIcon} />
            <span className={styles.navItemText}>{link}</span>
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Footer: React.FC = () => {
  const productLinks = [
    'AI Automation Platform', 
    'Process Optimization', 
    'Enterprise Integration', 
    'Advanced Analytics',
    'Security Features'
  ];
  
  const companyLinks = [
    'About Us', 
    'Our Team', 
    'Careers', 
    'Press', 
    'Contact Us'
  ];
  
  const resourceLinks = [
    'Documentation',
    'Knowledge Base',
    'API Reference',
    'Case Studies',
    'Blog'
  ];
  
  const socialLinks = [
    { icon: <Twitter size={18} />, url: '#' },
    { icon: <Linkedin size={18} />, url: '#' },
    { icon: <Facebook size={18} />, url: '#' },
    { icon: <Instagram size={18} />, url: '#' },
  ];
  
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerBackground}>
        <div className={styles.footerGrid}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <motion.div 
            className={styles.companyInfo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className={styles.logoContainer}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.logo}>
                <Bot className={styles.logoIcon} />
                AllBots.io
              </div>
            </motion.div>
            
            <p className={styles.companyDescription}>
              Leading the innovation in enterprise AI automation solutions, 
              enabling businesses to transform their operations with cutting-edge 
              technology and actionable insights.
            </p>
            
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url}
                  className={styles.socialLink}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(var(--accent-color-rgb), 0.2)' }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <FooterNavGroup title="Product" links={productLinks} />
          <FooterNavGroup title="Company" links={companyLinks} />
          <FooterNavGroup title="Resources" links={resourceLinks} />
          
          <motion.div 
            className={styles.newsletterContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.navGroupTitle}>Subscribe to Our Newsletter</h3>
            <p className={styles.newsletterDescription}>
              Stay updated with the latest in AI automation and get exclusive insights and tips delivered to your inbox.
            </p>
            
            <form className={styles.newsletterForm}>
              <motion.input 
                type="email" 
                placeholder="Your email address" 
                className={styles.newsletterInput}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileFocus={{ borderColor: 'var(--accent-color)' }}
              />
              <motion.button 
                type="submit" 
                className={styles.newsletterButton}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'var(--accent-secondary)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.divider}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        ></motion.div>
        
        <div className={styles.footerBottom}>
          <motion.div 
            className={styles.copyright}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            © {new Date().getFullYear()} AllBots.io. All rights reserved.
          </motion.div>
          
          <div className={styles.legalLinks}>
            {['Terms of Service', 'Privacy Policy', 'Cookies', 'Accessibility'].map((link, index) => (
              <motion.a 
                key={index}
                href="#"
                className={styles.legalLink}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ color: 'var(--accent-color)' }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
