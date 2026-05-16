import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkflowSection from './components/WorkflowSection';
import BentoSection from './components/BentoSection';
import IndustrySection from './components/IndustrySection';
import FeatureShowcase from './components/FeatureShowcase';
import GetStartedSection from './components/GetStartedSection';
import LaunchingSoonSection from './components/LaunchingSoonSection';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenWaitlist={openWaitlist} />
      <Hero onOpenWaitlist={openWaitlist} />
      <Features />
      <WorkflowSection />
      <BentoSection />
      <IndustrySection />
      <FeatureShowcase />
      <GetStartedSection onOpenWaitlist={openWaitlist} />
      <LaunchingSoonSection onOpenWaitlist={openWaitlist} />
      <Footer onOpenWaitlist={openWaitlist} />

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}
