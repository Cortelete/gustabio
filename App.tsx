import React, { useState } from 'react';
import Profile from './components/Profile';
import LinkCarousel from './components/LinkCarousel';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ComingSoonModal from './components/ComingSoonModal';
import { SOCIAL_LINKS, USER_DATA } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-evenly p-4 text-white overflow-hidden animated-gradient">
      <div className="sparkle-bg"></div>
      <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] z-0"></div>
      
      <Profile 
        imageUrl={USER_DATA.imageUrl}
        name={USER_DATA.name}
        subtitle={USER_DATA.subtitle}
      />
      <LinkCarousel 
        links={SOCIAL_LINKS} 
        onPlaceholderClick={() => setIsComingSoonModalOpen(true)}
      />

      <Footer onCtaClick={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <Modal 
          clientName={USER_DATA.name}
          developerWhatsapp={USER_DATA.developerWhatsapp}
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      {isComingSoonModalOpen && (
        <ComingSoonModal onClose={() => setIsComingSoonModalOpen(false)} />
      )}
    </div>
  );
};

export default App;