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
    '/blog/posts/react-native-vs-flutter',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 
                    route.includes('/blog/') ? 'weekly' :
                    route === '/blog' ? 'weekly' :
                    'weekly' as 'daily' | 'weekly',
    priority: route === '' ? 1 : 
             route.startsWith('/services/') ? 0.9 : 
             route === '/services' ? 0.9 :
             route === '/blog' ? 0.9 :
             route.includes('/blog/posts/') ? 0.8 :
             0.8,
  }))
  
  return routes
} 