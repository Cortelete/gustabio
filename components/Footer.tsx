import React from 'react';

interface FooterProps {
  onCtaClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCtaClick }) => {
  return (
    <footer className="z-10 w-full max-w-md text-center py-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
      <button 
        onClick={onCtaClick}
        className="animated-cta relative overflow-hidden w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-green-500 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-teal-400/40 mb-4 text-sm sm:text-base"
      >
        Quer um site incrível como esse? Fale comigo! 🚀
      </button>
      <p className="text-xs sm:text-sm text-white/60">
        Desenvolvido por 
        <a 
          href="https://www.instagram.com/inteligenciarte.ia" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold text-white/80 hover:text-emerald-300 transition-colors"
        >
          {' '}InteligenciArte.IA ✨
        </a>
      </p>
    </footer>
  );
};

export default Footer;