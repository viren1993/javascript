1. What is HTML?
- HTML stands for HyperText Markup Language. It is a standard text formatting language used for developing web pages released in 1993. HTML is a language that is interpreted by the browser and it tells the browser what to display and how to display.

1. Can we display a web page inside a web page or Is nesting of webpages possible?
- <iframe src=”url of the web page to embed” />

2. What are tags and attributes in HTML?
- Attributes are used along with the HTML tags to define the characteristics of the element. For example, <p align=” center”>Interview questions</p>, 

3. What are void elements in HTML?
- HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example <br />, <img />, <hr />, etc.

5. What are HTML Entities?
- In HTML some characters are reserved like ‘<’, ‘>’, ‘/’, etc. To use these characters in our webpage we need to use the character entities called HTML Entities.

6. What are different types of lists in HTML?
- unorder list , order list 

8. What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?
- id can at time 1 used class samem value mutiple time

10. Describe HTML layout    .
  <header>: Stores the starting information about the web page.
  <footer>: Represents the last section of the page.
  <nav>: The navigation menu of the HTML page.
  <article>: It is a set of information.
  <section>: It is used inside the article block to define the basic structure of a page.
  <aside>: Sidebar content of the page.

11. How to optimize website assets loading?
  CDN hosting - A CDN or content delivery network is geographically distributed servers to help reduce latency.
  File compression - This is a method that helps to reduce the size of an asset to reduce the data transfer
  File concatenation - This reduces the number of HTTP calls
  Minify scripts - This reduces the overall file size of js and CSS files
  Parallel downloads - Hosting assets in multiple subdomains can help to bypass the download limit of 6 assets per domain of all modern browsers. This can be configured but most general users never modify these settings.
  Lazy Loading - Instead of loading all the assets at once, the non-critical assets can be loaded on a need basis.

13. What are the different kinds of Doctypes available?
 - Strict Doctype Purpose: Used when you want to write clean, standards-compliant HTML, without any deprecated tags or attributes.
 - Transitional Doctype Purpose: Allows the use of both modern and deprecated HTML elements and attributes. It’s a "transition" from older HTML practices to modern standards.
 - Frameset Doctype Purpose: Used when a webpage uses <frameset> instead of <body>. Frames allow multiple HTML documents to be displayed in the same browser window.

20. Is it possible to change an inline element into a block level element?
Yes, it is possible using the “display” property with its value as “block”, to change the inline element into a block-level element.

22. In how many ways you can display HTML elements?
  inline: Using this we can display any block-level element as an inline element. The height and width attribute values of the element will not affect.
  block: using this, we can display any inline element as a block-level element. 
  inline-block: This property is similar to inline, except by using the display as inline-block, we can actually format the element using height and width values.
  flex: It displays the container and element as a flexible structure. It follows flexbox property.
  inline-flex: It displays the flex container as an inline element while its content follows the flexbox properties.
  grid: It displays the HTML elements as a grid container.
  none: Using this property we can hide the HTML element.

4. What is semantic HTML? Can you give examples?
Semantic HTML uses meaningful tags to improve accessibility and SEO.
Examples:
•	<header> (top section)
•	<article> (self-contained content)
•	<nav> (navigation links)
•	<section> (page section)
What is the difference between <strong> and <b>


Common Block-Level Elements

1. Structural Elements
<div> - Generic block container
<header> - Introductory content
<footer> - Footer content
<section> - Thematic grouping
<article> - Self-contained composition
<aside> - Tangentially related content
<nav> - Navigation links
<main> - Dominant content

2. Text Containers
<p> - Paragraph
<h1> to <h6> - Headings
<blockquote> - Long quotation
<pre> - Preformatted text

3. Lists
<ul>, <ol>, <li> - Unordered/ordered lists and list items
<dl>, <dt>, <dd> - Description lists

4. Form Elements
Form Elements

5. <table> - Tabular data
<hr> - Thematic break
<address> - Contact information

Key Characteristics of Block Elements
Layout Behavior:
Always start on a new line
Take up the full width available (unless styled otherwise)
Stack vertically by default

Can Contain:
Other block elements
Inline elements
Text conten


Dom event 
| Event       | Description                            |
| ----------- | -------------------------------------- |
| `click`     | When an element is clicked             |
| `input`     | When a user types in an input field    |
| `change`    | When a form element value changes      |
| `mouseover` | When the mouse enters an element       |
| `mouseout`  | When the mouse leaves an element       |
| `keydown`   | When a key is pressed down             |
| `submit`    | When a form is submitted               |
| `load`      | When the page or image is fully loaded |

Table click row 1 even listen 

<script>
  const firstRow = document.querySelector("#myTable tr");

  firstRow.addEventListener("click", () => {
    alert("First row clicked!");
  });
</script>

Why the Last Script File is Important in HTML
Key Reasons

Execution Order:
Scripts execute in the order they appear in the HTML
The last script runs after all previous ones have loaded/executed

Dependencies:
If scripts depend on libraries or variables defined in earlier scripts
The dependent script must come after its dependencies

DOM Readiness:
Scripts at the end of <body> can access fully loaded DOM
Avoids need for DOMContentLoaded or window.onload events

🔹 1. Time Management Techniques
Break into small tasks – Easier to estimate accurately.
Three-Point Estimation – Use best, worst, and likely case for balance.
Historical Data – Refer to past work for realistic timing.
Add buffer (20–30%) – For unknowns or bugs.

adaptive design vs responsive design
✅ Responsive Design
Definition: A single flexible layout that automatically adjusts to any screen size using fluid grids, percentages, and media queries.
Example: A website layout rearranges itself smoothly when resizing the browser window.
Pros: One codebase fits all devices, easier maintenance.
Tools: CSS Flexbox, Grid, Media Queries

✅ Adaptive Design
Definition: Multiple fixed layouts designed for specific screen sizes (e.g., 320px, 768px, 1024px).
Example: A different layout loads for mobile, tablet, and desktop.
Pros: Optimized experience for each device.
Cons: More complex, higher maintenance.

Core Concepts of REST API
Stateless: Each request is independent and contains all necessary information.

Uses HTTP methods:

GET – Retrieve data
POST – Create data
PUT – Update data
DELETE – Remove data

Resource-based: Everything is a resource identified by a URL.

Uses JSON (commonly) for sending/receiving data.

🔐 What is HTTPS?
HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP.
Uses SSL/TLS encryption to protect data between browser and server.

Ensures:

✅ Data encryption (privacy)
✅ Data integrity (no tampering)
✅ Authentication (verifies server identity)

🌐 HTTP/1.1 vs HTTP/2 (both support HTTPS)
| Feature          | **HTTP/1.1**                   | **HTTP/2**                              |
| ---------------- | ------------------------------ | --------------------------------------- |
| Request Handling | One request per connection     | Multiplexing: multiple requests at once |
| Speed            | Slower (head-of-line blocking) | Faster (parallel streams)               |
| Headers          | Text-based, large headers      | Binary, compressed headers              |
| Server Push      | ❌ Not supported               | ✅ Can push assets before requested    |
| Connection Reuse | Limited                        | Efficient, fewer TCP connections        |


| Feature        | PostgreSQL (SQL)        | Node.js with SQL         | MongoDB (NoSQL)                 |
| -------------- | ----------------------- | ------------------------ | ------------------------------- |
| Data Type      | Relational (Structured) | Backend with SQL support | Document (Flexible JSON)        |
| Schema         | Strict schema           | Uses libraries/ORMs      | Schema-less                     |
| Query Language | SQL                     | SQL via JS libraries     | JavaScript-style queries        |
| Best For       | Structured data, joins  | Full backend integration | Fast-changing/unstructured data |
| Scaling        | Vertical (mostly)       | Depends on DB            | Horizontal (built-in)           |

SOLID Principles (Designed Method)
SOLID is a set of 5 design principles for writing clean, maintainable code.

S – Single Responsibility Principle
O – Open/Closed Principle
L – Liskov Substitution Principle
I – Interface Segregation Principle
D – Dependency Inversion Principle

Mirco frontend explain 
✅ Micro frontend is a design approach where a frontend app is split into smaller, independent pieces, each developed and deployed separately like microservices.

Q1: What is the difference between div and span?
✅ div is a block-level element, while span is an inline element used for styling parts of text within a block.

Q2: What are semantic HTML elements?
✅ These are elements that clearly describe their meaning, like <header>, <article>, <section>, and <footer>, improving accessibility and SEO.

Q3: What is the difference between localStorage, sessionStorage, and cookies?
✅ localStorage persists until manually cleared, sessionStorage lasts for the session, and cookies are sent to the server with requests.

Q4: How does the browser render a webpage?
✅ The process includes parsing HTML, building the DOM & CSSOM, creating the render tree, layout calculation, and painting to the screen.

Q1: What is the difference between relative, absolute, fixed, and sticky positioning?
✅ relative moves relative to itself, absolute positions relative to its nearest positioned ancestor, fixed stays fixed in the viewport, and sticky toggles between relative and fixed based on scroll.

Q2: What are pseudo-elements and pseudo-classes?
✅ Pseudo-elements (::before, ::after) style specific parts of an element, while pseudo-classes (:hover, :nth-child()) target elements based on state or structure.

Q3: What is the difference between rem, em, %, and px?
✅ px is fixed, em is relative to the parent element, rem is relative to the root element, and % is relative to its container.

Q4: How do CSS Grid and Flexbox differ?
✅ Flexbox is best for one-dimensional layouts (rows or columns), while Grid is for two-dimensional layouts (rows and columns).

Q1: What is the difference between == and === in JavaScript?
✅ == checks for value equality with type conversion, while === checks for both value and type equality.

Q2: What are closures in JavaScript?
✅ A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.

Q3: What is event delegation?
✅ It’s a technique where a parent element handles events for its child elements, improving performance and reducing event listeners.

Q4: Explain the difference between var, let, and const.
✅ var has function scope, let and const have block scope. const cannot be reassigned, while let can.

Q1: What is the difference between Promise.then() and async/await?
✅ Promise.then() uses chaining, while async/await makes asynchronous code look synchronous and is easier to read.

Q2: What is the event loop in JavaScript?
✅ The event loop handles asynchronous operations by executing code in the Call Stack, moving async tasks to the Task Queue, and pushing them back when ready.

Q3: How do setTimeout() and setInterval() work?
✅ setTimeout() delays execution once, while setInterval() repeatedly runs a function at a fixed interval.

Q4: What are Web Workers?
✅ Web Workers allow running JavaScript in background threads, improving performance for CPU-intensive tasks.

Q1: What is web accessibility (a11y)?
✅ Designing web applications that are usable for people with disabilities, following WCAG (Web Content Accessibility Guidelines).

Q2: What are ARIA roles, and why are they used?
✅ ARIA (Accessible Rich Internet Applications) roles help assistive technologies understand web elements (e.g., role="alert", role="dialog").

Q3: How do you make a website keyboard accessible?
✅ Use proper HTML elements (button, a), avoid tabindex misuses, and ensure focus indicators are visible.

Q4: How do you test web accessibility?
✅ Use tools like Lighthouse, axe, NVDA screen reader, and manual testing with keyboard navigation.