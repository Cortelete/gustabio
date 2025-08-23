import type { SocialLink } from './types';
import { InstagramIcon, YouTubeIcon, TikTokIcon, ComandoAutoservicesIcon } from './components/SocialIcons';

export const USER_DATA = {
    name: 'Gusta',
    subtitle: 'Tudo posso naquele que me fortalece',
    imageUrl: 'profile.png',
    developerWhatsapp: '5541988710303',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/gusta.almeid/',
    icon: InstagramIcon,
    brandColor: '#F58529'
  },
  {
    name: 'YouTube',
    url: '#', // Placeholder link
    icon: YouTubeIcon,
    brandColor: '#FF0000'
  },
  {
    name: 'TikTok',
    url: '#', // Placeholder link
    icon: TikTokIcon,
    brandColor: '#00F2EA'
  },
  {
    name: 'Comando Autoservices',
    url: 'https://comandoauto.vercel.app/',
    icon: ComandoAutoservicesIcon,
    brandColor: '#DC2626'
  },
];