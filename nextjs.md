## ** What is Next.js and why would you use it over React?**
Next.js is a React framework for building full-stack web applications. It enhances React with features like:

Server-Side Rendering (SSR)
Static Site Generation (SSG)
File-based routing
API routes
Image optimization
Built-in performance and SEO enhancements

## ** ✅ 2. What are the differences between Pages Router and App Router in Next.js? **
| Feature        | Pages Router (`pages/`)                | App Router (`app/`)                     |
| -------------- | -------------------------------------- | --------------------------------------- |
| Routing        | Based on `pages` directory             | Based on `app` directory                |
| Rendering      | CSR, SSR, SSG                          | SSR + React Server Components           |
| Layouts        | Manual                                 | Nested layouts via `layout.tsx`         |
| Data fetching  | `getStaticProps`, `getServerSideProps` | `fetch()`, `use()` in Server Components |
| Server Actions | Not supported                          | Supported                               |

## ** ✅ 3. How do you handle form submissions in the App Router? **

// app/contact/page.tsx
'use client'
import { useFormState } from 'react-dom'
import { handleForm } from './actions'

export default function ContactForm() {
  const [state, formAction] = useFormState(handleForm, null)

  return (
    <form action={formAction}>
      <input name="email" type="email" required />
      <button type="submit">Submit</button>
    </form>
  )
}

// app/contact/actions.ts
'use server'

export async function handleForm(prevState: any, formData: FormData) {
  const email = formData.get('email')
  // Handle submission logic
}


## **✅ 4. What are Server Components in Next.js App Router? **

Server Components render on the server and are not included in client-side JS bundles. They improve performance and reduce bundle size.

Use async data fetching directly
Cannot use client-side hooks like useState or useEffect
Marked implicitly unless use client is added at the top

## **✅ 5. What is ISR (Incremental Static Regeneration)?**
ISR allows you to update static content after deployment without rebuilding the whole site.

export async function getStaticProps() {
  const data = await fetchData()
  return {
    props: { data },
    revalidate: 60, // Rebuild this page every 60 seconds
  }
}

## **✅ 6. How do you handle dynamic routing in App Router? **
Use bracketed folder names for dynamic routes:

app/
  products/
    [id]/
      page.tsx

export default function Product({ params }: { params: { id: string } }) {
  return <div>Product ID: {params.id}</div>
}

## **✅ 7. How does Next.js optimize images?**
sing the <Image /> component:

Lazy loading
Automatic resizing and optimization
Supports AVIF, WebP

## **✅ 8. How do you protect routes in Next.js?**
In App Router:

Use Middleware (middleware.ts) to redirect unauthorized users
Or check authentication status in a layout or page Server Component

// middleware.ts
import { NextResponse } from 'next/server'

export function middleware(request) {
  const isAuthenticated = checkAuth(request)
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}


## **✅ 9. How does use client work in App Router?**
use client makes a Server Component behave as a Client Component. You need it when using:

State/hooks (useState, useEffect)
Event handlers (e.g., onClick)
Context providers or browser APIs

'use client'

export default function Button() {
  return <button onClick={() => alert('Clicked!')}>Click</button>
}

## **✅ 10. What are best practices for performance optimization in Next.js?**
Use Server Components where possible

Lazy-load non-critical components
Use <Image> for media
Avoid client-side rendering for SEO-relevant pages
Use TanStack Query or SWR for caching
Use next/font for optimized fonts
Split code using dynamic imports
