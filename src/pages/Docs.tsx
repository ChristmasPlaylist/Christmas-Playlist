import React from 'react';
import { ExternalLink, Gift, BellRing, Music, Star } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export default function Docs() {
  return (
    <div className="h-full bg-gradient-to-b from-christmas-green to-black overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8 pb-32">
        <div className="flex items-center gap-4 mb-8">
          <Gift className="w-12 h-12 text-christmas-gold animate-jingle" />
          <h1 className="text-4xl font-bold text-christmas-gold">Documentation</h1>
        </div>
        
        <div className="bg-christmas-green-dark p-6 rounded-lg mb-12 backdrop-blur-sm border border-christmas-gold/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green animate-twinkle" />
          <h2 className="text-2xl font-semibold text-christmas-gold mb-4 flex items-center gap-2">
            <BellRing className="animate-jingle" />
            Official Documentation
          </h2>
          <p className="text-white/70 mb-4">
            For comprehensive guides, API references, and detailed documentation about {SITE_CONFIG.name}, visit our GitBook documentation.
          </p>
          <a 
            href="https://christmas-playlist.gitbook.io/christmas-playlist/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-christmas-red hover:bg-christmas-red-dark text-white px-4 py-2 rounded-lg transition-all group/link"
          >
            View Documentation
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-christmas-gold mb-4 flex items-center gap-2">
            <Star className="animate-twinkle" />
            Getting Started
          </h2>
          <div className="prose prose-invert">
            <p className="text-white/70">
              {SITE_CONFIG.name} is your festive music companion, bringing the joy of Christmas through carefully curated playlists and holiday favorites.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-christmas-gold mb-4 flex items-center gap-2">
            <Music className="animate-jingle" />
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-christmas-green-dark p-4 rounded-lg border border-christmas-gold/10">
              <h3 className="text-xl font-medium text-christmas-gold mb-2">Holiday Music Player</h3>
              <p className="text-white/70">Full-featured music player with festive visualizations and controls.</p>
            </div>
            <div className="bg-christmas-green-dark p-4 rounded-lg border border-christmas-gold/10">
              <h3 className="text-xl font-medium text-christmas-gold mb-2">Christmas Collections</h3>
              <p className="text-white/70">Curated playlists featuring classic and modern holiday music.</p>
            </div>
            <div className="bg-christmas-green-dark p-4 rounded-lg border border-christmas-gold/10">
              <h3 className="text-xl font-medium text-christmas-gold mb-2">Festive Experience</h3>
              <p className="text-white/70">Immersive Christmas-themed interface with animated elements.</p>
            </div>
            <div className="bg-christmas-green-dark p-4 rounded-lg border border-christmas-gold/10">
              <h3 className="text-xl font-medium text-christmas-gold mb-2">Smart Library</h3>
              <p className="text-white/70">Organize and manage your favorite holiday tracks.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-christmas-gold mb-4">Keyboard Shortcuts</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-christmas-green-dark p-4 rounded-lg border border-christmas-gold/10">
              <kbd className="bg-black/30 px-2 py-1 rounded text-christmas-gold">Space</kbd>
              <span className="text-white/70 ml-3">Play/Pause</span>
            </div>
            <div className="bg-christmas-green-dark p-4 rounded-lg border border-christmas-gold/10">
              <kbd className="bg-black/30 px-2 py-1 rounded text-christmas-gold">→</kbd>
              <span className="text-white/70 ml-3">Next Track</span>
            </div>
            <div className="bg-christmas-green-dark p-4 rounded-lg border border-christmas-gold/10">
              <kbd className="bg-black/30 px-2 py-1 rounded text-christmas-gold">←</kbd>
              <span className="text-white/70 ml-3">Previous Track</span>
            </div>
            <div className="bg-christmas-green-dark p-4 rounded-lg border border-christmas-gold/10">
              <kbd className="bg-black/30 px-2 py-1 rounded text-christmas-gold">M</kbd>
              <span className="text-white/70 ml-3">Mute/Unmute</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-christmas-gold mb-4">Support</h2>
          <div className="bg-christmas-green-dark p-6 rounded-lg border border-christmas-gold/10">
            <p className="text-white/70 mb-4">
              Need help with {SITE_CONFIG.name}? Check our documentation or contact our support team.
            </p>
            <a 
              href="mailto:support@christmas-playlist.com" 
              className="text-christmas-gold hover:text-christmas-gold-light transition-colors"
            >
              Contact Support →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}