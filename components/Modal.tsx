import React, { useState, useEffect } from 'react';

interface ModalProps {
  onClose: () => void;
  clientName: string;
  developerWhatsapp: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, clientName, developerWhatsapp }) => {
  const [userName, setUserName] = useState('');

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

  const handleGenerateLink = () => {
    if (userName.trim() === '') {
      alert('Por favor, insira seu nome.');
      return;
    }
    const message = `Olá, vi o link de ${clientName} e quero um site igual! Meu nome é ${userName}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${developerWhatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 card-enter"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-black/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md text-white border border-emerald-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-400">Fale com o desenvolvedor</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl leading-none">&times;</button>
        </div>
        <p className="mb-4 text-gray-300 text-sm sm:text-base">
          Para criar sua mensagem personalizada, por favor, insira seu nome abaixo.
        </p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Seu nome"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 mb-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all text-sm sm:text-base"
        />
        <button
          onClick={handleGenerateLink}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-emerald-400/50 text-base sm:text-lg"
        >
          Gerar Link do WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Modal;