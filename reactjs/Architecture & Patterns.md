📘 Theory + Interview:

Atomic Design:

Atom: basic elements (Button, Input)
Molecule: combos (Input + Label)
Organism: complex UI sections
Template/Page: layout levels

📘 Folder Structure Best Practices:

Group by feature/domain, not type
Keep reusable UI in components/
Use hooks/, utils/, services/ for logic separation

📘 Component Reusability:

Use props/configuration
Avoid tight coupling
Keep pure, stateless

📘 Error Boundaries:

Class components to catch JS errors (componentDidCatch, getDerivedStateFromError)
Cannot be functional yet (needs wrapper)