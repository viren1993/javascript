Environment Variables (for different deployment habitats like dev/prod)
Multi-Zone or Micro-Frontend Architecture (isolating parts of an app)
Dynamic Routing & ISR (serving content based on context)

## *Environment Variables (Different "Habitats" like Dev/Prod)
What?
Next.js supports environment variables (.env) to manage different configurations for various environments (development, staging, production).

Why?
Avoid hardcoding API keys, URLs.

Switch between dev/prod backends easily.

How?
1. Create .env.local (for local dev):
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DB_SECRET=my_dev_db_key

2. In production (e.g., Vercel), set variables in dashboard.
3. Access in Next.js:

// Public (exposed to browser)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Server-side only (secure)
export async function getServerSideProps() {
  const dbKey = process.env.DB_SECRET;
}

## * Multi-Zone / Micro-Frontend Architecture

What?
Splitting a Next.js app into isolated "habitats" (zones) that can be developed/deployed independently.

Why?
Scalability for large teams.

Independent deployments (e.g., /blog, /shop as separate apps).

How?
Next.js Multi-Zone Setup:

Deploy separate Next.js apps under one domain (e.g., via rewrites in next.config.js):
module.exports = {
  async rewrites() {
    return [
      { source: "/blog", destination: "https://blog.myapp.com" },
      { source: "/shop", destination: "https://shop.myapp.com" },
    ];
  },
};

Works with ISG/SSG for hybrid apps.
Module Federation (Advanced):
Use Webpack 5 to share components between apps.

## *Dynamic Routing + ISR (Content-Based "Habitats")
What?
Serve different static/dynamic content based on routes (e.g., localized sites, user-specific pages).

Why?
Optimized performance with ISR.

Personalization without SSR overhead.

How?
Dynamic Routes:
// pages/blog/[slug].js
export async function getStaticPaths() {
  return { paths: [...], fallback: 'blocking' };
}

ISR for Updates:
export async function getStaticProps({ params }) {
  return { props: {...}, revalidate: 60 };
}

Contextual "Habitats":
Use middleware to redirect/logic:
// middleware.js
export function middleware(req) {
  if (req.url.startsWith('/admin')) {
    return NextResponse.rewrite('/admin-habitat');
  }
}


Next.js doesn’t have a "Habitat" feature per se, but you can achieve similar results with:

Env vars for environment-specific setups.
Multi-zone for micro-frontends.
ISG + Dynamic routes for contextual content.


Micro-Frontend real work 

