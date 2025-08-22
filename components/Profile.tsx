import React from 'react';

interface ProfileProps {
  imageUrl: string;
  name: string;
  subtitle: string;
}

const Profile: React.FC<ProfileProps> = ({ imageUrl, name, subtitle }) => {
  return (
    <div className="z-10 flex flex-col items-center text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 animate-spin [animation-duration:3s]"></div>
        <div className="relative w-full h-full p-1 bg-transparent rounded-full">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                 <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        const initial = name.charAt(0).toUpperCase();
                        target.src = `https://placehold.co/144x144/111827/4ade80/png?text=${initial}`;
                    }}
                 />
            </div>
        </div>
      </div>
     
      <h1 className="text-4xl sm:text-5xl font-bold tracking-widest bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
        {name}
      </h1>
      <p className="text-sm sm:text-base text-green-200/90 mt-3 font-light tracking-wider opacity-90">
        {subtitle}
      </p>
    </div>
  );
};

export default Profile;