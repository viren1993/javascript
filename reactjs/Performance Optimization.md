📦 Module 6: Performance Optimization

## \*\* 1. Memoization:

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

## \*\* 2. Lazy Loading

"Don't load something until you actually need it."

Instead of loading everything at once (which can be slow), you delay loading parts of your app — like images, components, or data — to make the initial load faster.

## \*\*Why Use Lazy Loading?

🚀 Faster initial load time
📉 Lower memory usage
📡 Less data downloaded upfront

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

“Lazy loading improves performance by loading things only when needed — like splitting React components with React.lazy, or images with loading='lazy'.”

| Optimization Strategy | Tool/Method                            |
| --------------------- | -------------------------------------- |
| Prevent Re-renders    | `React.memo`, `useCallback`, `useMemo` |
| Lazy Load Components  | `React.lazy`, `Suspense`               |
| Clean Effects         | Proper cleanup in `useEffect`          |
| Efficient State       | React Query, Zustand                   |
| Debounce Input        | `lodash.debounce`                      |
| Tree Shaking          | Modular imports                        |
| Production Build      | `npm run build`                        |
| Analyze Performance   | React DevTools, Lighthouse             |


