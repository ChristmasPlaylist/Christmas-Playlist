import { CLOUDINARY_CONFIG } from '../config/cloudinary';

export function getCloudinaryVideoUrl(cloudinaryId: string): string {
  return `${CLOUDINARY_CONFIG.baseURL}/${cloudinaryId}`;
}