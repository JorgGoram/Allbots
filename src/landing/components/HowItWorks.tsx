
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Settings, 
  Zap, 
  BarChart, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield 
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
}

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  
  // Implementation timeline steps with detailed information
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section className={styles.howItWorksSection} id="implementation-timeline">
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionTag}>IMPLEMENTATION PROCESS</span>
          <h2 className={styles.sectionTitle}>Your Journey to AI-Powered Process Automation</h2>
          <p className={styles.sectionDescription}>
            Our structured implementation approach ensures a smooth transition to automated operations
            with minimal disruption to your business.
          </p>
        </motion.div>
        
        <div className={styles.timelineContainer}>
          {/* Timeline navigation */}
          <div className={styles.timelineNav}>
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`${styles.timelineStep} ${activeStep === index ? styles.activeStep : ''}`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepInfo}>
                  <div className={styles.stepPhase}>{step.phase}</div>
                  <div className={styles.stepTitle}>{step.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Timeline progress bar */}
          <div className={styles.timelineProgress}>
            <div 
              className={styles.timelineProgressBar} 
              style={{ width: `${(activeStep / (timelineSteps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          {/* Timeline content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className={styles.timelineContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.stepContentWrapper}>
                <div className={styles.stepIconContainer}>
                  {timelineSteps[activeStep].icon}
                </div>
                
                <div className={styles.stepContentMain}>
                  <div className={styles.stepHeader}>
                    <h3 className={styles.stepTitleLarge}>
                      {timelineSteps[activeStep].title}
                    </h3>
                    <div className={styles.stepDuration}>
                      <Clock className={styles.durationIcon} />
                      <span>{timelineSteps[activeStep].duration}</span>
                    </div>
                  </div>
                  
                  <p className={styles.stepDescription}>
                    {timelineSteps[activeStep].description}
                  </p>
                  
                  <div className={styles.stepDetails}>
                    <div className={styles.stepActivities}>
                      <h4 className={styles.detailsTitle}>
                        <CheckCircle className={styles.detailsIcon} />
                        Key Activities
                      </h4>
                      <ul className={styles.detailsList}>
                        {timelineSteps[activeStep].activities.map((activity, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            {activity}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.stepDeliverables}>
                      <h4 className={styles.detailsTitle}>
                        <Shield className={styles.detailsIcon} />
                        Deliverables
                      </h4>
                      <ul className={styles.detailsList}>
                        {timelineSteps[activeStep].deliverables.map((deliverable, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            {deliverable}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className={styles.timelineFooter}>
          <div className={styles.clientSuccess}>
            <div className={styles.clientSuccessHeader}>
              <Users className={styles.clientSuccessIcon} />
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
              <div className={styles.metric}>
                <div className={styles.metricValue}>98%</div>
                <div className={styles.metricLabel}>Implementation Success Rate</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricValue}>3.5x</div>
                <div className={styles.metricLabel}>Average ROI within 6 months</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricValue}>24/7</div>
                <div className={styles.metricLabel}>Expert Support</div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className={styles.timelineCta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.ctaTitle}>Ready to start your transformation journey?</h3>
          <motion.a
            href="#schedule-assessment"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Free Assessment Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
