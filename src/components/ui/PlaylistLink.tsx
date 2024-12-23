import React from 'react';
import { Link } from 'react-router-dom';

interface PlaylistLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

export function PlaylistLink({ to, isActive, children }: PlaylistLinkProps) {
  return (
    <Link 
      to={to}
      className={`block transition ${
        isActive 
          ? 'text-[#FFD700]' 
          : 'text-white hover:text-[#FFD700]'
      }`}
    >
      {children}
    </Link>
  );
}