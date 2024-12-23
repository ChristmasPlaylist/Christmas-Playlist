import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  children: React.ReactNode;
  isActive: boolean;
}

export function NavLink({ to, icon: Icon, children, isActive }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-4 transition ${
        isActive ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
      }`}
    >
      <Icon size={24} />
      <span className="font-medium">{children}</span>
    </Link>
  );
}