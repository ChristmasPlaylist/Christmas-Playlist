import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Library, PlusSquare, Heart, FileText, Home } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { SocialLinks } from './social/SocialLinks';

export default function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="bg-christmas-green-dark w-60 flex flex-col h-full p-6">
      <Link 
        to="/" 
        className="mb-8 group"
      >
        <span className="text-2xl font-bold bg-gradient-to-r from-christmas-red to-christmas-gold bg-clip-text text-transparent group-hover:from-christmas-gold group-hover:to-christmas-red transition-all duration-300">
          {SITE_CONFIG.name}
        </span>
      </Link>
      
      <nav className="space-y-4 mb-8">
        <Link 
          to="/" 
          className={`flex items-center gap-4 transition ${
            isActive('/') ? 'text-christmas-gold' : 'text-white/70 hover:text-christmas-gold'
          }`}
        >
          <Home size={24} />
          <span className="font-medium">Home</span>
        </Link>
        <Link 
          to="/search" 
          className={`flex items-center gap-4 transition ${
            isActive('/search') ? 'text-christmas-gold' : 'text-white/70 hover:text-christmas-gold'
          }`}
        >
          <Search size={24} />
          <span className="font-medium">Search</span>
        </Link>
        <Link 
          to="/library" 
          className={`flex items-center gap-4 transition ${
            isActive('/library') ? 'text-christmas-gold' : 'text-white/70 hover:text-christmas-gold'
          }`}
        >
          <Library size={24} />
          <span className="font-medium">Your Library</span>
        </Link>
        <Link 
          to="/docs" 
          className={`flex items-center gap-4 transition ${
            isActive('/docs') ? 'text-christmas-gold' : 'text-white/70 hover:text-christmas-gold'
          }`}
        >
          <FileText size={24} />
          <span className="font-medium">Docs</span>
        </Link>
      </nav>

      <div className="space-y-4 mb-8">
        <Link 
          to="/create-playlist"
          className={`flex items-center gap-4 transition ${
            isActive('/create-playlist') ? 'text-christmas-gold' : 'text-white/70 hover:text-christmas-gold'
          }`}
        >
          <PlusSquare size={24} />
          <span className="font-medium">Create Playlist</span>
        </Link>
        <Link 
          to="/liked-songs"
          className={`flex items-center gap-4 transition ${
            isActive('/liked-songs') ? 'text-christmas-gold' : 'text-white/70 hover:text-christmas-gold'
          }`}
        >
          <Heart size={24} />
          <span className="font-medium">Liked Songs</span>
        </Link>
      </div>

      {/* Enhanced Social Links */}
      <div className="mt-4 mb-8">
        <SocialLinks />
      </div>

      {/* Playlists Section */}
      <div className="mt-auto">
        <div className="text-xs text-christmas-gold/70 mb-3">
          Your Playlists
        </div>
        <div className="space-y-3">
          <Link 
            to="/playlist/classics" 
            className="block text-white/70 hover:text-christmas-gold transition"
          >
            Christmas Classics
          </Link>
          <Link 
            to="/playlist/modern" 
            className="block text-white/70 hover:text-christmas-gold transition"
          >
            Modern Christmas
          </Link>
        </div>
      </div>
    </div>
  );
}