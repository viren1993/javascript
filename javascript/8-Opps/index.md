## 8. OOP Concepts
- Encapsulation (Private fields `#field`, Getters/Setters)
- Polymorphism (Method Overriding)
- Abstraction (Simulated via `throw` in parent class)


 Object Literal

 - Constructor function
 - Prototypes
 - Classes
 - Instances (new, this)

## Pillars 
 - Abstraction - deatails hide kar na  - (fetch api call kar se kar just background prosess)
 - Encapsulation - encapsulation is wrapping up of data in method and funcation hide kar diya jo access jo kar na wo kar ne diya   
 - inheritance - 
 - Polymorphism - Poly is many - morphism sawaroop - 1 method mutiple roop just like console log  above topic send me all in each every details interview related and theory related all this topic 


 Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects that encapsulate both data and behavior.

Four Pillars of OOP
Encapsulation – Wrapping data & methods inside a class.
Abstraction – Hiding implementation details and exposing only what’s necessary.
Inheritance – A class derives properties & behaviors from another class.
Polymorphism – A method or function behaves differently based on context.

1. Encapsulation (Data Hiding & Private Fields)
Encapsulation is the practice of restricting direct access to data and only allowing controlled access via getters and setters.

Example (Encapsulation using Private Fields & Getters/Setters in JavaScript)
class Person {
    #name; // Private field (cannot be accessed outside the class)

    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        if (newName.length < 3) {
            throw new Error("Name must be at least 3 characters long.");
        }
        this.#name = newName;
    }
}

const person1 = new Person("John", 25);
console.log(person1.name);  // John
person1.name = "Sam";       // Setter will change the name
console.log(person1.name);  // Sam

Advantages of Encapsulation:
Prevents direct modification of sensitive data.
Provides controlled access using getters and setters.
Makes code modular and maintainable.

Interview Questions:
What is encapsulation?

It is the practice of restricting direct access to an object’s data and allowing access through methods.

How do you achieve encapsulation in JavaScript?

By using private fields (#field) and getters/setters.

Why is encapsulation important?

It protects the integrity of data and ensures controlled access.



### **2. Polymorphism (Method Overriding) **
Polymorphism allows a method to have multiple forms based on different implementations in child classes.

Example (Method Overriding in JavaScript)
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog();
dog.makeSound(); // Woof! Woof!

Flexibility – Allows dynamic behavior based on object type.
Reusability – Parent methods can be overridden in child classes.

3. Abstraction (Hiding Details via Parent Class & throw)
Abstraction is the process of hiding implementation details while exposing only essential functionality.

4. Object Literal, Constructor Functions, Prototypes, and Classes
A mechanism where a child class derives properties and methods from a parent class.

