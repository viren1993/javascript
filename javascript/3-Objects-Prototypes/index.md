## 3. Objects & Prototypes
- **Prototypes & Inheritance**
  - `__proto__` vs `prototype`
- **Constructor Functions**
- **Classes (ES6+)**
  - `class`, `constructor`, methods
  - Static Methods, Private Fields (`#field`)
  - `extends`, `super()`, Method Overriding
- **Objects Deep Dive**
  - Property descriptors (`get`, `set`, `enumerable`, `configurable`)
  - `Object.create()`, `Object.assign()`
  

1. Prototypes & Inheritance
prototype: Property of constructor functions; used when creating new objects via new. Defines shared properties/methods.

__proto__: Internal link to the object's prototype. Enables prototype chain (inheritance).

Inheritance: Objects inherit from other objects via the prototype chain.

2. Constructor Functions
Regular functions used with new to create object instances.

this inside refers to the new object.

Prototype methods shared across instances.

3. Classes (ES6+)
Syntactic sugar over constructor functions & prototypes.

constructor: Method for initializing instances.

Instance methods: Declared inside the class body.

Static methods: Declared with static; called on the class, not instances.

Private fields: Start with #, inaccessible outside the class.

Inheritance:

extends: Subclass a parent class.

super(): Calls parent constructor.

Method overriding by redefining inherited methods.

4. Objects Deep Dive
Property descriptors:

get, set: Define getter/setter functions.

enumerable, configurable: Control visibility and mutability of properties.

Object.create(proto): Create an object with the given prototype.

Object.assign(target, ...sources): Shallow copies properties into target.