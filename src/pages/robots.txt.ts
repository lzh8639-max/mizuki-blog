import type { APIRoute } from 'astro'

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL(import.meta.env.BASE_URL, import.meta.env.SITE).href}sitemap-index.xml
`.trim()

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
