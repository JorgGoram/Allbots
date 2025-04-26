
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: "AllBots.io transformed our customer service. We've reduced response time by 80% while maintaining a 95% customer satisfaction rating.",
    author: "Sarah Johnson",
    title: "CTO at TechCorp",
    avatarUrl: "/avatar1.png", // Will be replaced with actual assets
  },
  {
    text: "The no-code builder is incredible. We launched our first AI chatbot in less than a day, and it's already handling 60% of our customer inquiries.",
    author: "Michael Chen",
    title: "Head of Support at MarketPlace",
    avatarUrl: "/avatar2.png", // Will be replaced with actual assets
  },
  {
    text: "The multilingual support is a game-changer for our global business. Now our customers receive the same quality support regardless of language.",
    author: "Elena Rodriguez",
    title: "Director of Operations at GlobalTech",
    avatarUrl: "/avatar3.png", // Will be replaced with actual assets
  },
  {
    text: "The analytics dashboard provides insights we never had before. We understand our customers better and continuously improve our bot's performance.",
    author: "David Park",
    title: "Marketing Director at SaaS Solutions",
    avatarUrl: "/avatar4.png", // Will be replaced with actual assets
  },
  {
    text: "AllBots.io offers enterprise-grade AI capabilities at a fraction of what we'd pay to build it in-house. ROI in just two months.",
    author: "Amanda Thompson",
    title: "CEO at StartupX",
    avatarUrl: "/avatar5.png", // Will be replaced with actual assets
  },
];

const Testimonials: React.FC = () => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className={styles.testimonialsSection}>
      <div className="landing-container">
        <div className={styles.sectionHeader}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of businesses transforming their customer experience with AllBots.io
          </motion.p>
        </div>
        
        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.quoteMark}>"</div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  {/* Will be replaced with actual images */}
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorTitle}>{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.navigation}>
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`${styles.navDot} ${index === activeDot ? styles.active : ''}`}
              onClick={() => setActiveDot(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
