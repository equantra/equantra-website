import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://equantra.in'
  
  // Main pages in the website
  const routes = [
    '',
    '/services',
    '/services/web-development',
    '/services/mobile-development',
    '/services/game-development',
    '/services/ui-ux-design',
    '/services/logo-design',
    '/case-studies',
    '/blog',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as 'daily' | 'weekly',
    priority: route === '' ? 1 : 
             route.startsWith('/services/') ? 0.9 : 
             route === '/services' ? 0.9 : 0.8,
  }))
  
  return routes
} 