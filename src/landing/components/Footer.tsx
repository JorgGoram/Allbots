
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="landing-container">
        <div className={styles.footerContainer}>
          <div>
            <div className={styles.footerLogo}>AllBots.io</div>
            <p className={styles.footerAbout}>
              Creating intelligent AI chatbots for businesses of all sizes. Enhance customer experience, reduce costs, and drive growth with conversational AI.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}><Facebook size={18} /></a>
              <a href="#" className={styles.socialLink}><Twitter size={18} /></a>
              <a href="#" className={styles.socialLink}><Instagram size={18} /></a>
              <a href="#" className={styles.socialLink}><Linkedin size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className={styles.columnTitle}>Products</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}><a href="#">Website Chatbots</a></li>
              <li className={styles.footerLink}><a href="#">WhatsApp Bots</a></li>
              <li className={styles.footerLink}><a href="#">Facebook Messenger</a></li>
              <li className={styles.footerLink}><a href="#">Custom Solutions</a></li>
              <li className={styles.footerLink}><a href="#">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.columnTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLink}><a href="#">Documentation</a></li>
              <li className={styles.footerLink}><a href="#">API Reference</a></li>
              <li className={styles.footerLink}><a href="#">Blog</a></li>
              <li className={styles.footerLink}><a href="#">Case Studies</a></li>
              <li className={styles.footerLink}><a href="#">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.columnTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <Mail size={16} />
              <span>contact@allbots.io</span>
            </div>
            <div className={styles.contactInfo}>
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.contactInfo}>
              <MapPin size={16} />
              <span>123 Innovation Drive, San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} AllBots.io. All rights reserved.
          </div>
          
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <a href="#" className={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
