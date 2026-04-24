import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://babacanserviscilik.com',            lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://babacanserviscilik.com/hizmetler',  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://babacanserviscilik.com/hakkimizda', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://babacanserviscilik.com/iletisim',   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ]
}
