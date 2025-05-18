1. Static Site Generation (SSG)

Definition:
SSG pre-builds all pages of a website at build time (during deployment). The pages are served as static HTML files, making them extremely fast and cache-friendly.

How It Works:
Build Phase:

All pages are generated when the site is deployed (e.g., using npm run build in Next.js).
Data is fetched from APIs, CMS (like WordPress, Sanity), or Markdown files.
HTML, CSS, and JS files are pre-rendered.

Serving Phase:

The pre-built static files are served via a CDN (e.g., Vercel, Netlify, AWS CloudFront).
No server-side processing is needed for each request.

Advantages:
✅ Blazing Fast (No server-side rendering delay)
✅ Great for SEO (Pre-rendered HTML is crawlable)
✅ Scalable (CDN handles traffic effortlessly)
✅ Security (No direct server/database exposure)

Disadvantages:
❌ Not ideal for highly dynamic content (Requires rebuild for updates)
❌ Longer build times for large sites

Best Use Cases:
Blogs (e.g., Gatsby, Hugo)
Marketing websites
Documentation sites
E-commerce product pages (if content doesn’t change often)

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}


2. Incremental Static Regeneration (ISG)
ISG is an advanced SSG where static pages are regenerated on-demand after deployment, either at a set interval or when triggered.

How It Works:
1. Initial Build:
Pages are pre-rendered at build time (like SSG).

2. Revalidation:
After deployment, pages can be updated:
    Time-based (Stale-While-Revalidate):

    export async function getStaticProps() {
        return { props: {}, revalidate: 60 }; // Regenerate every 60 seconds
    }

    await res.revalidate('/page-path');

3. Serving:

Users see the cached version until the page regenerates.

Advantages:
✅ Best of both worlds (Static + Dynamic updates)
✅ No full rebuild needed (Only updates changed pages)
✅ Great for frequently changing data (e.g., e-commerce, news)

Disadvantages:
❌ Slightly slower than pure SSG (First request after revalidation may be delayed)
❌ Requires serverless/edge functions (For on-demand revalidation)

Best Use Cases:
News websites
E-commerce (product prices/availability)
Dashboards with semi-real-time data
User-generated content (with caching)

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/latest-news');
  const news = await res.json();
  return { 
    props: { news },
    revalidate: 30, // Regenerate every 30 seconds
  };
}

SSG vs ISG Comparison
Feature	SSG	ISG
Build Time	All pages built at deploy	Only initial pages built
Updates	Requires full rebuild	Revalidates in the background
Performance	Fastest	Slightly slower (if regenerating)
Use Case	Fully static content	Semi-dynamic content
Example	Blog, Docs	News, E-commerce