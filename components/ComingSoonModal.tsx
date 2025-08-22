import React, { useEffect } from 'react';

interface ComingSoonModalProps {
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 card-enter"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-black/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-sm text-white border border-teal-500/30 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center mb-2 -mt-4 -mr-2">
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl leading-none p-2">&times;</button>
        </div>
        <div className="flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-teal-400 mb-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl sm:text-3xl font-bold text-teal-300 mb-2">Em Breve!</h2>
            <p className="text-gray-300 text-sm sm:text-base">
                Este link está em construção. Volte em breve para mais novidades!
            </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
