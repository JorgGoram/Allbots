
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import styles from './HeroSection.module.css';
import { ArrowRight, CheckCircle, Bot, Zap, Shield, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const textControls = useAnimation();
  const statsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger animations when component mounts and when in view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      textControls.start('visible');
      
      // Set loaded after initial animations
      setTimeout(() => setIsLoaded(true), 800);
    }
  }, [controls, textControls, isInView]);

  // Kinetic typography - Split the title text for individual letter animations
  const titleWords = ["Transform Your Business with", "AI-Powered Process Automation"];
  
  // Enhanced stats with compelling metrics
  const stats = [
    { value: '85%', label: 'Reduced Process Time', highlight: true },
    { value: '3.5x', label: 'ROI Within 6 Months', highlight: true },
    { value: '24/7', label: 'Automated Operations', highlight: false },
    { value: '10K+', label: 'Business Users', highlight: false },
  ];
  
  // Comprehensive benefits with enhanced messaging
  const benefits = [
    { text: 'Eliminate manual data processing tasks', icon: <Zap className={styles.benefitIcon} size={18} /> },
    { text: 'Seamless integration with existing systems', icon: <Shield className={styles.benefitIcon} size={18} /> },
    { text: 'No coding required for automation setup', icon: <Bot className={styles.benefitIcon} size={18} /> },
    { text: 'Enterprise-grade security protocols', icon: <Sparkles className={styles.benefitIcon} size={18} /> }
  ];

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Enhanced animated background effect with modern patterns */}
      <div className={styles.heroGraphic}>
        <div className={styles.gridLines}></div>
        <div className={styles.pulseDots}></div>
        <div className={styles.glowOrbs}>
          <div className={styles.orb} style={{ '--delay': '0s' } as React.CSSProperties}></div>
          <div className={styles.orb} style={{ '--delay': '2s' } as React.CSSProperties}></div>
          <div className={styles.orb} style={{ '--delay': '4s' } as React.CSSProperties}></div>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Main content with enhanced animations */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow text with badge animation */}
            <motion.div 
              className={styles.eyebrow}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.span 
                className={styles.badge}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 15px rgba(var(--accent-color-rgb), 0.5)' 
                }}
              >
                ENTERPRISE AI SOLUTION
              </motion.span>
            </motion.div>
            
            {/* Primary headline with kinetic typography for each character */}
            <h1 className={styles.title}>
              {titleWords.map((line, lineIndex) => (
                <div key={lineIndex} className={styles.titleLine}>
                  {lineIndex === 1 && <div className={styles.titleLineGradient}>
                    {line.split('').map((char, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.3 + index * 0.03,
                          ease: "easeOut" 
                        }}
                        className={styles.gradientChar}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </div>}
                  {lineIndex === 0 && <span>
                    {line.split('').map((char, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.2 + index * 0.02,
                          ease: "easeOut" 
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </span>}
                </div>
              ))}
            </h1>
            
            {/* Enhanced subtitle with value proposition */}
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Automate complex business workflows, reduce operational costs by up to <strong>85%</strong>, and free your team from repetitive tasks with our enterprise-grade AI automation platform.
            </motion.p>
            
            {/* Quick benefits list with improved animations */}
            <motion.ul 
              className={styles.benefitsList}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.8 }
                }
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className={styles.benefitItem}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ x: 5, color: 'var(--accent-color)' }}
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            {/* Enhanced CTA section with dynamic hover effects */}
            <div className={styles.ctaContainer}>
              <motion.a
                href="#get-started"
                className={styles.primaryButton}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 8px 30px rgba(var(--accent-color-rgb), 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.buttonContent}>
                  <span>Get Started with a Free Assessment</span>
                  <ArrowRight className={styles.buttonIcon} />
                </span>
                <span className={styles.buttonGlow}></span>
              </motion.a>
              
              <motion.a
                href="#demo"
                className={styles.secondaryButton}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'var(--accent-color)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo <span className={styles.timeIndicator}>(2 min)</span>
              </motion.a>
              
              <motion.p 
                className={styles.noCreditCard}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                No credit card required • Free consultation
              </motion.p>
            </div>
          </motion.div>
          
          {/* Enhanced visual side with interactive animation */}
          <motion.div 
            className={styles.visualContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className={styles.heroIllustration}>
              <motion.div 
                className={styles.automationFlowVisual}
                animate={{ 
                  rotateY: [0, 10, 0, -10, 0],
                  rotateX: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <motion.div 
                  className={styles.botIconContainer}
                  animate={{ 
                    y: [0, -10, 0],
                    filter: [
                      'drop-shadow(0 0 20px rgba(var(--accent-color-rgb), 0.3))',
                      'drop-shadow(0 0 30px rgba(var(--accent-color-rgb), 0.6))',
                      'drop-shadow(0 0 20px rgba(var(--accent-color-rgb), 0.3))'
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Bot className={styles.botIcon} />
                </motion.div>
                <div className={styles.connectionLines}>
                  {[1, 2, 3, 4].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className={styles.pulsingLine}
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ 
                        opacity: isLoaded ? 1 : 0, 
                        pathLength: isLoaded ? 1 : 0,
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 1.5 + i * 0.2, 
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2,
                        repeatType: "reverse"
                      }}
                      style={{ '--index': i } as React.CSSProperties}
                    />
                  ))}
                </div>
                <div className={styles.processNodes}>
                  {/* Visual representation of workflow automation with animated nodes */}
                  {[1, 2, 3].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className={styles.node}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 2 + i * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: '0 0 20px rgba(var(--accent-color-rgb), 0.6)'
                      }}
                    >
                      <motion.div 
                        className={styles.nodeRing}
                        animate={{ 
                          scale: [1, 1.2, 1], 
                          opacity: [0.2, 0.6, 0.2] 
                        }}
                        transition={{ 
                          duration: 3, 
                          delay: i * 1, 
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced stats section with counters */}
        <motion.div 
          className={styles.statsContainer}
          ref={statsRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 1.5, staggerChildren: 0.2 }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={`${styles.statItem} ${stat.highlight ? styles.highlightStat : ''}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -8, 
                boxShadow: stat.highlight 
                  ? '0 10px 30px rgba(var(--accent-color-rgb), 0.3)' 
                  : '0 10px 30px rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className={styles.statValue}>
                <CounterAnimation value={stat.value} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust signals section with logo animation */}
        <motion.div 
          className={styles.trustSignals}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.8 }}
        >
          <motion.p 
            className={styles.trustedBy}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            Trusted by innovative companies:
          </motion.p>
          <div className={styles.clientLogos}>
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className={styles.logoPlaceholder}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 2.6 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1.05, 
                  filter: 'brightness(1.2)' 
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Animated counter component for statistics
const CounterAnimation = ({ value }: { value: string }) => {
  // Extract number and unit from the value (e.g., "85%" -> "85" and "%")
  const numericMatch = value.match(/(\d+\.?\d*|\.\d+)/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const unit = value.replace(numeric.toString(), '');
  
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numeric;
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      
      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function for smooth slowdown
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress === 1) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numeric]);
  
  return (
    <span ref={countRef}>
      <span>{count}</span>{unit}
    </span>
  );
};

export default HeroSection;
