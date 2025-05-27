
## **what Design Patterns you flow in project 

## *✅ 1. Atomic Design (UI Architecture)
Where used: Component structuring in React.
Why: Encourages reusable, testable UI components.

components/
├── atoms/       // Button, Input
├── molecules/   // FormField, SearchBar
├── organisms/   // Navbar, ProductList
├── templates/   // Layouts
├── pages/       // Route-based views

✅ 2. Container-Presenter Pattern (Smart-Dumb Components)
Where used: Separating business logic from UI.
Why: Improves reusability and testability.

Example:

ProductContainer (fetches data, handles state)
ProductList (renders UI based on props)

✅ 3. Factory Pattern
Where used: Dynamic component generation, service creation.
Why: Centralizes object/component creation logic.

const NotificationFactory = (type) => {
  switch(type) {
    case 'email': return new EmailNotification();
    case 'sms': return new SMSNotification();
  }
}

✅ 4. Singleton Pattern
Where used: For global utilities or config instances (like Auth, AppConfig, Logger).
Why: To ensure only one instance of a class/service.

class AppConfig {
  static instance;
  constructor() {
    if (AppConfig.instance) return AppConfig.instance;
    AppConfig.instance = this;
  }
}

✅ 5. MVC (on .NET backend)
Where used: Backend API design.
Why: Clearly separates model, controller logic, and data.

Example in .NET:

Model → Order.cs
Controller → OrderController.cs
View → Frontend React Components (consumer of API)

✅ 6. Redux (Flux Architecture)
Where used: Global state management in large-scale React apps.
Why: Predictable state management with unidirectional data flow.

Structure:
actions/
reducers/
store.js
selectors/

✅ 7. MVVM (Model-View-ViewModel)
Where used: Using React Hooks as ViewModel layer.
Why: ViewModel (hooks) manage state logic, View (components) focus on UI.

// useAuth.js (ViewModel)
const useAuth = () => {
  const [user, setUser] = useState(null);
  const login = () => { ... };
  return { user, login };
};

// LoginComponent.jsx (View)
const LoginComponent = () => {
  const { user, login } = useAuth();
};


✅ 8. Service Layer Pattern
Where used: In services/ folder to centralize API logic.
Why: Avoid repetition and separate API logic from UI.

// services/productService.js
export const fetchProducts = () => axios.get('/api/products');


✅ 9. Observer Pattern (via Events or PubSub)
Where used: Event-based data updates (e.g., toast notifications, app state changes).
Why: Decouples components from the data producer.

Example: React Context or custom EventEmitters.

✅ 10. Lazy Loading / Code Splitting
Where used: Route-based code optimization.
Why: Improve performance by loading components on-demand.

Example:
const ProductPage = React.lazy(() => import('./pages/ProductPage'));

🔷 Final Tip: Prepare Your Own STAR Stories
Use the STAR technique for big project or problem questions:

Situation
Task
Action
Result