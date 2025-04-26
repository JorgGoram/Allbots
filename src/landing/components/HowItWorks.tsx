
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { 
  Search, 
  Settings, 
  Zap, 
  BarChart, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import styles from './HowItWorks.module.css';

// Timeline step interface
interface TimelineStep {
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  activities: string[];
  deliverables: string[];
  color: string;
}

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const stepContentControls = useAnimation();
  
  // Implementation timeline steps with detailed information and brand colors
  const timelineSteps: TimelineStep[] = [
    {
      phase: 'Phase 1',
      title: 'Analysis & Planning',
      description: 'We begin with a comprehensive assessment of your business processes and develop a strategic implementation plan tailored to your specific needs.',
      icon: <Search className={styles.stepIcon} />,
      duration: '1-2 Weeks',
      activities: [
        'Business process analysis',
        'Technical requirements gathering',
        'Integration planning',
        'Timeline development',
        'Stakeholder alignment sessions'
      ],
      deliverables: [
        'Process optimization report',
        'Technical implementation blueprint',
        'ROI projection document',
        'Project timeline with milestones'
      ],
      color: 'var(--accent-color)'
    },
    {
      phase: 'Phase 2',
      title: 'System Integration',
      description: 'Our team configures the AI automation platform and integrates it with your existing systems to ensure seamless data flow and operational continuity.',
      icon: <Settings className={styles.stepIcon} />,
      duration: '2-4 Weeks',
      activities: [
        'AI model configuration',
        'CRM/ERP integration',
        'Security implementation',
        'Initial testing',
        'Data migration setup'
      ],
      deliverables: [
        'Integrated system architecture',
        'API connection documentation',
        'Security compliance report',
        'Initial performance metrics'
      ],
      color: 'var(--accent-secondary)'
    },
    {
      phase: 'Phase 3',
      title: 'Pilot Program',
      description: 'We launch a controlled deployment to validate the solution in a real-world environment, gathering feedback and making necessary adjustments.',
      icon: <Zap className={styles.stepIcon} />,
      duration: '2-3 Weeks',
      activities: [
        'Limited deployment',
        'Performance monitoring',
        'User feedback collection',
        'System optimization',
        'Process refinement'
      ],
      deliverables: [
        'Pilot performance report',
        'User experience analysis',
        'System optimization recommendations',
        'Go/no-go assessment for full deployment'
      ],
      color: '#4FACFE'
    },
    {
      phase: 'Phase 4',
      title: 'Full Deployment',
      description: 'Following successful pilot validation, we implement the full solution across your organization with comprehensive training and support.',
      icon: <BarChart className={styles.stepIcon} />,
      duration: '2-4 Weeks',
      activities: [
        'Staff training',
        'Full system deployment',
        'Ongoing support setup',
        'Performance tracking',
        'Knowledge transfer'
      ],
      deliverables: [
        'Complete implementation documentation',
        'Training materials and resources',
        'Performance dashboard access',
        'Support and maintenance plan'
      ],
      color: '#00F2FE'
    }
  ];

  // Auto-advance through timeline steps
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % timelineSteps.length);
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, timelineSteps.length]);
  
  // Reset content animation when active step changes
  useEffect(() => {
    stepContentControls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1
      }
    });
  }, [activeStep, stepContentControls]);
  
  // Only scroll into view when manually clicking
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsPaused(true);
    
    // Only scroll on mobile devices when clicked
    if (window.innerWidth <= 768) {
      stepRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  // Improve mobile touch handling
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // Prevent default touch behavior on timeline steps
      if ((e.target as HTMLElement).closest(`.${styles.timelineStep}`)) {
        setIsPaused(true);
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <section className={styles.howItWorksSection} id="implementation-timeline">
      <div className={styles.timelineBackground}>
        <div className={styles.backgroundPattern}></div>
        <div className={styles.backgroundGradient}></div>
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
            IMPLEMENTATION PROCESS
          </motion.span>
          
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your Journey to&nbsp;
            <span className={styles.titleHighlight}>AI-Powered Process Automation</span>
          </motion.h2>
          
          <motion.p 
            className={styles.sectionDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our structured implementation approach ensures a smooth transition 
            to automated operations with minimal disruption to your business.
          </motion.p>
        </motion.div>
        
        <div className={styles.timelineContainer} ref={timelineRef}>
          {/* Interactive timeline navigation */}
          <div className={styles.timelineNav} role="tablist" aria-label="Implementation Timeline">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                ref={el => stepRefs.current[index] = el}
                className={`${styles.timelineStep} ${activeStep === index ? styles.activeStep : ''}`}
                onClick={() => handleStepClick(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  '--step-color': step.color
                } as React.CSSProperties}
              >
                <div className={styles.stepNumberContainer}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  {activeStep === index && (
                    <motion.div 
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    ></motion.div>
                  )}
                </div>
                
                <div className={styles.stepInfo}>
                  <div className={styles.stepPhase}>{step.phase}</div>
                  <div className={styles.stepTitle}>{step.title}</div>
                </div>
                
                <motion.div 
                  className={styles.stepArrow}
                  animate={{ x: activeStep === index ? 0 : -10, opacity: activeStep === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight size={16} />
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Timeline progress bar */}
          <div className={styles.timelineProgress}>
            <motion.div 
              className={styles.timelineProgressBar} 
              animate={{ 
                width: `${(activeStep / (timelineSteps.length - 1)) * 100}%`,
                background: timelineSteps[activeStep].color
              }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          
          {/* Timeline content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className={styles.timelineContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className={styles.stepContentWrapper}
                animate={stepContentControls}
                initial={{ opacity: 0, y: 20 }}
              >
                <motion.div 
                  className={styles.stepIconContainer}
                  style={{ 
                    background: `linear-gradient(135deg, ${timelineSteps[activeStep].color}, ${timelineSteps[activeStep].color}88)` 
                  }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      `0 0 20px rgba(0, 0, 0, 0.2)`,
                      `0 0 30px ${timelineSteps[activeStep].color}33`,
                      `0 0 20px rgba(0, 0, 0, 0.2)`
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {timelineSteps[activeStep].icon}
                </motion.div>
                
                <div className={styles.stepContentMain}>
                  <div className={styles.stepHeader}>
                    <motion.h3 
                      className={styles.stepTitleLarge}
                      style={{ color: timelineSteps[activeStep].color }}
                    >
                      {timelineSteps[activeStep].title}
                    </motion.h3>
                    <motion.div 
                      className={styles.stepDuration}
                      whileHover={{ scale: 1.05, backgroundColor: `${timelineSteps[activeStep].color}22` }}
                    >
                      <Clock className={styles.durationIcon} size={16} />
                      <span>{timelineSteps[activeStep].duration}</span>
                    </motion.div>
                  </div>
                  
                  <motion.p 
                    className={styles.stepDescription}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {timelineSteps[activeStep].description}
                  </motion.p>
                  
                  <div className={styles.stepDetails}>
                    <div className={styles.stepActivities}>
                      <h4 className={styles.detailsTitle}>
                        <CheckCircle className={styles.detailsIcon} style={{ color: timelineSteps[activeStep].color }} />
                        Key Activities
                      </h4>
                      <ul className={styles.detailsList}>
                        {timelineSteps[activeStep].activities.map((activity, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                            whileHover={{ x: 5, color: timelineSteps[activeStep].color }}
                          >
                            <span className={styles.detailBullet} style={{ backgroundColor: timelineSteps[activeStep].color }}></span>
                            <span>{activity}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.stepDeliverables}>
                      <h4 className={styles.detailsTitle}>
                        <Shield className={styles.detailsIcon} style={{ color: timelineSteps[activeStep].color }} />
                        Deliverables
                      </h4>
                      <ul className={styles.detailsList}>
                        {timelineSteps[activeStep].deliverables.map((deliverable, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                            whileHover={{ x: 5, color: timelineSteps[activeStep].color }}
                          >
                            <span className={styles.detailBullet} style={{ backgroundColor: timelineSteps[activeStep].color }}></span>
                            <span>{deliverable}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className={styles.timelineFooter}>
          <motion.div 
            className={styles.clientSuccess}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
          >
            <div className={styles.clientSuccessHeader}>
              <motion.div 
                className={styles.clientSuccessIcon}
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 20px rgba(var(--accent-color-rgb), 0.2)',
                    '0 0 30px rgba(var(--accent-color-rgb), 0.4)',
                    '0 0 20px rgba(var(--accent-color-rgb), 0.2)'
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Users size={28} />
              </motion.div>
              
              <h3 className={styles.clientSuccessTitle}>Client Success Guarantee</h3>
            </div>
            
            <p className={styles.clientSuccessDescription}>
              Our implementation process is backed by a 100% satisfaction guarantee. If you're not completely satisfied with the results after the pilot phase, we'll refine the solution at no additional cost until you achieve your desired outcomes.
            </p>
            
            <motion.div 
              className={styles.successMetrics}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { value: '98%', label: 'Implementation Success Rate' },
                { value: '3.5x', label: 'Average ROI within 6 months' },
                { value: '24/7', label: 'Expert Support' }
              ].map((metric, index) => (
                <motion.div 
                  key={index}
                  className={styles.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, background: 'rgba(var(--accent-color-rgb), 0.1)' }}
                >
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.timelineCta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h3 
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to start your transformation journey?
          </motion.h3>
          
          <motion.a
            href="#schedule-assessment"
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 10px 30px rgba(var(--accent-color-rgb), 0.4)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Schedule a Free Assessment Call</span>
            <ArrowRight className={styles.buttonIcon} size={18} />
            <span className={styles.buttonGlow}></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
