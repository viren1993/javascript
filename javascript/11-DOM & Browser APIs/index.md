# DOM & Browser APIs - Interview & Theory Guide

This document covers essential topics related to the **DOM (Document Object Model)** and **Browser APIs** — often asked in frontend interviews.

---

## 1. Event Handling

### What is Event Handling?
It is the mechanism that controls how events (like clicks, keypresses) are received and processed by elements in the DOM.

### Bubbling vs Capturing
| Phase         | Description                                            |
|---------------|--------------------------------------------------------|
| Capturing     | Event travels from the root to the target element      |
| Target        | The event hits the actual target element               |
| Bubbling      | Event bubbles back from the target to the root         |

### Example
```javascript
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});


2. Event Delegation
Instead of attaching event listeners to individual child elements, we attach one listener to a common parent and utilize event bubbling.
