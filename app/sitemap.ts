import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://equantra.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://equantra.in/#services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://equantra.in/#contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://equantra.in/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://equantra.in/blog/hire-web-developer-fast-website-india',
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://equantra.in/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://equantra.in/services/end-to-end-web-app-development',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://equantra.in/services/scalable-mobile-app-development',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://equantra.in/blog/end-to-end-web-app-development-saves-time-cost',
      lastModified: new Date('2024-01-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://equantra.in/blog/build-scalable-mobile-application-from-day-one',
      lastModified: new Date('2024-01-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://equantra.in/hire-developers',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://equantra.in/blog/qualities-scalable-web-app-developers-near-you',
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
