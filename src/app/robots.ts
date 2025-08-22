import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://wolter-bau.de'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/_next/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}