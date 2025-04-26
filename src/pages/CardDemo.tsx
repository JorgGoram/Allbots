import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Shield, 
  Brain, 
  Sparkles,
  BarChart2,
  ArrowRight
} from 'lucide-react';
import { 
  ThreeDCard, 
  ThreeDCardTitle, 
  ThreeDCardContent, 
  ThreeDCardFooter,
  ThreeDCardIcon
} from '@/components/ui/3d-card';
import { ThreeDCardContainer } from '@/components/ui/3d-card-container';
import { Button } from '@/components/ui/button';

const CardDemo = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">3D Card System</h1>
        <p className="text-white/60">Interactive cards with depth perception and visual effects</p>
      </div>

      <div className="space-y-8">
        {/* Basic Cards */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Cards</h2>
          <ThreeDCardContainer columns={3}>
            <ThreeDCard depth="shallow" glowColor="accent-blue">
              <ThreeDCardIcon>
                <Bot className="w-6 h-6 text-accent-blue" />
              </ThreeDCardIcon>
              <ThreeDCardTitle>AI Assistant</ThreeDCardTitle>
              <ThreeDCardContent>
                <p>Intelligent virtual assistant powered by advanced machine learning algorithms.</p>
              </ThreeDCardContent>
              <ThreeDCardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </ThreeDCardFooter>
            </ThreeDCard>

            <ThreeDCard depth="medium" glowColor="accent-secondary">
              <ThreeDCardIcon>
                <Brain className="w-6 h-6 text-accent-secondary" />
              </ThreeDCardIcon>
              <ThreeDCardTitle>Neural Networks</ThreeDCardTitle>
              <ThreeDCardContent>
                <p>Deep learning systems that mimic the human brain's neural structure.</p>
              </ThreeDCardContent>
              <ThreeDCardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Explore
                </Button>
              </ThreeDCardFooter>
            </ThreeDCard>

            <ThreeDCard depth="deep" glowColor="accent-cyan">
              <ThreeDCardIcon>
                <Sparkles className="w-6 h-6 text-accent-cyan" />
              </ThreeDCardIcon>
              <ThreeDCardTitle>Quantum Computing</ThreeDCardTitle>
              <ThreeDCardContent>
                <p>Next-generation computing using quantum mechanical phenomena.</p>
              </ThreeDCardContent>
              <ThreeDCardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Discover
                </Button>
              </ThreeDCardFooter>
            </ThreeDCard>
          </ThreeDCardContainer>
        </section>

        {/* Feature Cards */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Feature Cards</h2>
          <ThreeDCardContainer columns={2}>
            <ThreeDCard className="bg-gradient-to-br from-accent-blue/10 to-accent-cyan/5" glowColor="accent-blue">
              <div className="flex justify-between items-start">
                <ThreeDCardIcon className="bg-accent-blue/20">
                  <Zap className="w-6 h-6 text-accent-blue" />
                </ThreeDCardIcon>
                <span className="text-xs bg-white/10 px-2 py-1 rounded-full">Premium</span>
              </div>
              <ThreeDCardTitle>Performance Boost</ThreeDCardTitle>
              <ThreeDCardContent>
                <p>Optimize your system with our advanced performance enhancement tools.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
                    <span>Real-time optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
                    <span>Resource management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
                    <span>Intelligent scaling</span>
                  </li>
                </ul>
              </ThreeDCardContent>
              <ThreeDCardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">$49/mo</span>
                <Button variant="default" size="sm" className="gap-1">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </ThreeDCardFooter>
            </ThreeDCard>

            <ThreeDCard className="bg-gradient-to-br from-accent-secondary/10 to-accent-blue/5" glowColor="accent-secondary">
              <div className="flex justify-between items-start">
                <ThreeDCardIcon className="bg-accent-secondary/20">
                  <Shield className="w-6 h-6 text-accent-secondary" />
                </ThreeDCardIcon>
                <span className="text-xs bg-white/10 px-2 py-1 rounded-full">Enterprise</span>
              </div>
              <ThreeDCardTitle>Advanced Security</ThreeDCardTitle>
              <ThreeDCardContent>
                <p>Enterprise-grade security solutions to protect your critical data.</p>
                <div className="mt-4 p-3 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Protection Level</span>
                    <span className="text-sm font-medium">Military Grade</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full">
                    <div className="h-full w-[95%] bg-accent-secondary rounded-full"></div>
                  </div>
                </div>
              </ThreeDCardContent>
              <ThreeDCardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">$199/mo</span>
                <Button variant="default" size="sm" className="gap-1 bg-accent-secondary hover:bg-accent-secondary/90">
                  Contact Sales <ArrowRight className="w-4 h-4" />
                </Button>
              </ThreeDCardFooter>
            </ThreeDCard>
          </ThreeDCardContainer>
        </section>

        {/* Interactive Cards */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Interactive Cards</h2>
          <ThreeDCardContainer columns={3}>
            <ThreeDCard className="relative overflow-hidden" glowColor="accent-yellow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-yellow/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <ThreeDCardIcon className="bg-accent-yellow/20">
                <BarChart2 className="w-6 h-6 text-accent-yellow" />
              </ThreeDCardIcon>
              <ThreeDCardTitle>Analytics Dashboard</ThreeDCardTitle>
              <ThreeDCardContent>
                <p>Real-time data visualization and business intelligence tools.</p>
                <div className="mt-4 flex items-end gap-1 h-12">
                  {[40, 70, 30, 85, 50, 65, 75].map((height, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-accent-yellow/30 rounded-t-sm" 
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </ThreeDCardContent>
              <ThreeDCardFooter>
                <Button variant="outline" size="sm" className="w-full text-accent-yellow border-accent-yellow/20 hover:bg-accent-yellow/10">
                  View Dashboard
                </Button>
              </ThreeDCardFooter>
            </ThreeDCard>

            <ThreeDCard disabled>
              <ThreeDCardIcon className="bg-white/10">
                <Bot className="w-6 h-6 text-white/40" />
              </ThreeDCardIcon>
              <ThreeDCardTitle>Disabled Card</ThreeDCardTitle>
              <ThreeDCardContent>
                <p>This card is currently disabled and doesn't respond to interactions.</p>
              </ThreeDCardContent>
              <ThreeDCardFooter>
                <Button variant="outline" size="sm" className="w-full" disabled>
                  Unavailable
                </Button>
              </ThreeDCardFooter>
            </ThreeDCard>

            <ThreeDCard className="relative overflow-hidden" glowColor="success">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-success/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
              <ThreeDCardIcon className="bg-success/20">
                <Zap className="w-6 h-6 text-success" />
              </ThreeDCardIcon>
              <ThreeDCardTitle>Quick Actions</ThreeDCardTitle>
              <ThreeDCardContent>
                <div className="space-y-2">
                  {['Optimize System', 'Run Diagnostics', 'Update Software'].map((action, i) => (
                    <button 
                      key={i}
                      className="w-full p-2 text-left rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between"
                    >
                      <span>{action}</span>
                      <ArrowRight className="w-4 h-4 text-success" />
                    </button>
                  ))}
                </div>
              </ThreeDCardContent>
              <ThreeDCardFooter>
                <Button variant="outline" size="sm" className="w-full text-success border-success/20 hover:bg-success/10">
                  View All Actions
                </Button>
              </ThreeDCardFooter>
            </ThreeDCard>
          </ThreeDCardContainer>
        </section>
      </div>
    </div>
  );
};

export default CardDemo;