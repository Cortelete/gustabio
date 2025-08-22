
import type React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: (props: { className?: string }) => React.ReactNode;
  brandColor: string;
}
