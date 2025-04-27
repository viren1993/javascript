1. What is TypeScript and how is it different from JavaScript?
Answer: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers optional static typing, interfaces, enums, and compile-time checking. This helps catch errors earlier in development compared to JavaScript, which is dynamically typed.

2. What are the advantages of using TypeScript?
Answer:

Type safety and static type checking
Enhanced IDE support (auto-completion, navigation)
Better code maintainability
Supports modern JavaScript (ES6+) features
Helps in large-scale applications with interfaces and classes

3. What are the basic types in TypeScript?
number
string
boolean
void
any
unknown
null and undefined
never
object
tuple
enum

4. What is the difference between any, unknown, and never in TypeScript?
any: Disables type checking — you can assign any value to it.
unknown: Similar to any but safer — you must check its type before using it.
never: Represents values that never occur (e.g., a function that throws or an infinite loop).

5. What are interfaces in TypeScript?
Answer: Interfaces define the shape of an object. They specify property names, types, and whether they are optional.


interface User {
  name: string;
  age: number;
  email?: string; // optional
}

8. What is type inference?
Answer: TypeScript can automatically infer the type of a variable when it is assigned a value.
let x = "hello"; // inferred as string

6. What is the difference between interface and type in TypeScript?
Answer:

Both can describe object shapes.
interface can be extended or merged.
type is more flexible (can create unions, tuples, etc.).

interface A { x: number }
interface B extends A { y: number }

type A = { x: number }
type B = A & { y: number }

7. What are generics in TypeScript?
Answer: Generics provide a way to create reusable components that work with a variety of types.

Generics allow you to write reusable, type-safe, and flexible code by working with variable (generic) types instead of specific ones.

🔑 Think of them as:
“Functions or classes that can work with any type, while still keeping type safety.”

🧠 Why Use Generics?
Avoid code duplication

Maintain type safety

Write reusable components/functions

function identity<T>(arg: T): T {
  return arg;
}

9. How does TypeScript handle null and undefined?
Answer: With --strictNullChecks enabled, null and undefined are not assignable to other types unless explicitly specified.

let name: string | null;

10. How do you use enums in TypeScript?
Answer: Enums are a way of giving friendly names to sets of numeric or string values.

enum Direction {
  Up,
  Down,
  Left,
  Right
}

