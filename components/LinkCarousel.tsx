import React from 'react';
import type { SocialLink } from '../types';

interface LinkListProps {
  links: SocialLink[];
  onPlaceholderClick: () => void;
}

const LinkList: React.FC<LinkListProps> = ({ links, onPlaceholderClick }) => {
  return (
    <div className="z-10 w-full max-w-sm flex flex-col items-center space-y-4">
      {links.map((link, index) => {
        const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
          if (link.url === '#') {
            e.preventDefault();
            onPlaceholderClick();
          }
        };

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="group rainbow-border relative fade-in-up w-full rounded-2xl transform transition-all duration-300 hover:scale-105 shadow-[0_0_40px_-10px_var(--brand-color)] hover:shadow-[0_0_60px_-10px_var(--brand-color)]"
            style={{
              animationDelay: `${0.4 + index * 0.1}s`, // Staggered animation
              '--brand-color': link.brandColor,
            } as React.CSSProperties}
          >
            <div className="bg-gradient-to-br from-emerald-900/50 to-teal-800/40 backdrop-blur-lg rounded-2xl p-4 flex items-center text-white w-full h-full transition-colors duration-300 group-hover:bg-gray-900">
              <link.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              <span className="flex-1 text-center text-base sm:text-lg font-semibold tracking-wide px-3 sm:px-4">{link.name}</span>
              {/* Spacer to keep the text centered */}
              <div className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default LinkList;