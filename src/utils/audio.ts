import { CLOUDINARY_CONFIG } from '../config/cloudinary';
import { getSupportedFormats } from './audioFormats';

function getFallbackUrl(cloudinaryId: string): string {
  // Default to MP3 with lower quality as fallback
  return `${CLOUDINARY_CONFIG.baseURL}/q_auto:eco,f_mp3/${cloudinaryId}`;
}

export function getAudioUrl(cloudinaryId: string): string {
  const formats = getSupportedFormats();
  
  if (formats.length === 0) {
    console.warn('No supported audio formats detected, using fallback');
    return getFallbackUrl(cloudinaryId);
  }

  // Try highest quality with best supported format
  return `${CLOUDINARY_CONFIG.baseURL}/q_auto:best,f_${formats[0]}/${cloudinaryId}`;
}

export async function preloadAudio(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.crossOrigin = 'anonymous';
    
    const timeoutId = setTimeout(() => {
      cleanup();
      // Try fallback URL if initial load fails
      const fallbackUrl = url.replace('q_auto:best', 'q_auto:eco');
      const fallbackAudio = new Audio();
      fallbackAudio.crossOrigin = 'anonymous';
      
      fallbackAudio.addEventListener('canplaythrough', () => {
        resolve();
      });
      
      fallbackAudio.addEventListener('error', () => {
        reject(new Error('Audio loading failed after fallback attempt'));
      });
      
      fallbackAudio.src = fallbackUrl;
      fallbackAudio.load();
    }, 5000); // 5 second timeout before trying fallback
    
    const handleCanPlay = () => {
      clearTimeout(timeoutId);
      cleanup();
      resolve();
    };
    
    const handleError = () => {
      clearTimeout(timeoutId);
      cleanup();
      // Don't reject here - let the fallback attempt handle it
    };
    
    const cleanup = () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.src = '';
    };
    
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.src = url;
    audio.load();
  });
}