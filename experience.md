## **Can you describe a challenging problem you faced in a React project and how you resolved it?

## *Code Performance and Optimization
Question:
How do you ensure your React code is performant and optimized?

🚀 1. Avoid Unnecessary Renders
⚙️ 2. Use useMemo and useCallback
🧹 3. Clean and Efficient State Management
📦 4. Code Splitting
🌐 5. Use Efficient Lists
🔄 6. Throttling and Debouncing
🧪 7. Performance Monitoring Tools
💡 8. Avoid Inline Functions and Objects in JSX
🧼 9. Avoid Deeply Nested Component Trees
📁 10. Optimize Images and Assets
🌍 11. Use SSR or SSG When Possible
🔧 12. Memoization at Selector Level (Redux)

## *Micro-Frontend Architecture
Micro-Frontend Architecture is a modern architectural approach to building web applications where a single application is composed of multiple smaller, independent frontend apps. It brings the principles of microservices to the frontend world.

🏗️ How Does Micro-Frontend Work?
Architecture Models:
1. Build-Time Integration:
2. Run-Time Integration (via JavaScript):
3. Server-Side Composition:
4. Client-Side Composition (most common):

🛠️ Tools & Frameworks
| Tool / Library                | Use Case / Notes                                              |
| ----------------------------- | ------------------------------------------------------------- |
| **Single-SPA**                | JavaScript framework to combine multiple frontends.           |
| **Webpack Module Federation** | Share modules between builds at runtime.                      |
| **Module Federation + Nx**    | Popular in mono-repos with shared libs.                       |
| **import-maps**               | Map modules to URLs without bundlers.                         |
| **Qiankun**                   | Micro-frontend framework built on Single-SPA (China popular). |

🧩 Integration Approaches
| Approach            | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| **Component-Level** | Each micro-frontend provides a component (e.g., React component).     |
| **Route-Level**     | Each micro-frontend manages one or more pages (common in dashboards). |
| **Iframe (legacy)** | Simple isolation, but limited interactivity and performance.          |

🔄 Use Cases
Large enterprise applications with multiple teams.
Incrementally migrating monoliths to modern stacks.
Platform products where teams build independent modules.
SaaS apps with plugin-like architectures.

🧵 Real-World Example
Imagine an e-commerce site:

1. Header & Footer: Team A (React)
2. Product Page: Team B (Vue)
3. Cart Page: Team C (Angular)
4. Reviews Widget: Team D (Web Components)



