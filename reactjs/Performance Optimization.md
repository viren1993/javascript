📦 Module 6: Performance Optimization

1. Memoization:

Optimizes performance by memoizing the result of an expensive function.
Prevents recalculation unless dependencies change.

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

Use Case: Heavy calculations that don’t need to run on every render.

useCallback
Memoizes the function reference to prevent unnecessary re-renders.

const handleClick = useCallback(() => doSomething(), [dependency]);

Use Case: Passing functions to child components (avoids unnecessary re-renders).

React.memo
HOC that prevents functional component re-render if props haven't changed.

const MyComponent = React.memo((props) => {
  return <div>{props.value}</div>;
});

Use Case: Reusable components with static props.

Interview Questions:

When do you use useMemo vs useCallback?
What is the difference between React.memo and useMemo?
How do you avoid unnecessary re-renders?

2. Lazy Loading

Lazy loading is a design pattern that delays loading components or resources until they are actually needed — usually at the moment they're about to appear on screen. This reduces the initial load time, improves performance, and provides a better user experience.

React.lazy
Code splits by loading components lazily.
const LazyComponent = React.lazy(() => import('./MyComponent'));

Wraps around lazy components to show fallback while loading.
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>

Code Splitting & Chunking:

Break app into smaller bundles for faster load time
Each route/component loads only when needed

Interview Questions:

How does lazy loading improve performance?
When do you use Suspense?
What’s the difference between code splitting and chunking?

🔍 Practical: Build a Dashboard

Use React.lazy to load dashboard widgets/components lazily

Optimize props using React.memo
Wrap heavy logic with useMemo
Memoize callbacks for passing handlers
Let me know if you'd like visuals, code sandbox links, or next module!

