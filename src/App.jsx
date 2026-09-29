import React, { useState, useEffect } from 'react';
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
import PrivacyPolicy from './components/PrivacyPolicy';
import DataDeletion from './components/DataDeletion';
import TermsOfService from './components/TermsOfService';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  // Legal & Meta Compliance Pages
  if (currentPath === '/privacy-policy') {
    return <PrivacyPolicy onBackHome={() => navigateTo('/')} />;
  }

  if (currentPath === '/data-deletion') {
    return <DataDeletion onBackHome={() => navigateTo('/')} />;
  }

  if (currentPath === '/terms-of-service') {
    return <TermsOfService onBackHome={() => navigateTo('/')} />;
  }

  // Default Landing Page
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
      <Footer onOpenWaitlist={openWaitlist} onNavigate={navigateTo} />

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}
