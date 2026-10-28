import type { APIRoute } from 'astro';
import { programs, programUrl } from '../data/programs';
import { activeKajian, kajianUrl } from '../data/kajian';

const staticPaths = ['/', '/program', '/kajian', '/cara-belajar', '/tentang', '/bantuan', '/kontak'];

export const GET: APIRoute = ({ site }) => {
  const urls = [...staticPaths, ...programs.filter((p) => p.status === 'active').map(programUrl), ...activeKajian.map(kajianUrl)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${new URL(u, site).href}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
