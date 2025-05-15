1. HTML 
2. CSS
3. Client-Side Rendering (in web development)
4. ISR
5. Overview of Atomic Design
6. DOM and BOM
7. You can read and manipulate HTML elements 
8. layout concepts in CSS
  1. Normal Flow (Document Flow)
    -  The default behavior of elements:
      Block-level elements stack vertically (like <div>, <p>)
      Inline elements sit side-by-side (like <span>, <a>)
  2. Box Model
    - Every element is a box made up of:
    - content
  3. Positioning
9. javascript web design
10. javascript structure
12. Key react js
13. react js nagative point list
14. what is Interface use
15. enum in typescript 
16. react router protected 
17. next js seo level code 
18. next js server side code and statis side code

---------------------------
react js you have lerne this code 
- updated for React 19
- React Query (Tanstack Query)
- state managerment 
- context api 
- SSR
- react router dom
- react custom hook
- react ssg
- react 

---------------
split components react - page to divvided to mutiple components 
async defer
serverside 
ssr why next js react js why nagative 
what is key in react js - (Keys allow React to keep track of elements)


-----------------------------
javascript 

Input: nums = [2, 7, 11, 15]
target = 9
Output: [0, 1]

console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");

### **interface**
interface User {
  id: number;
  name: string;
  address: {
    email: string;
    isActive: boolean;
  };
}


input nums = [1, 2, 3, 4]
output [24, 12, 8, 6]

function productExceptSelf(nums) {
  const result = [];
  const totalProduct = nums.reduce((acc, num) => acc * num, 1);

  for (let i = 0; i < nums.length; i++) {
    result.push(totalProduct / nums[i]);
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]

function flattens(arr) {
  const result = [];

  function flatten(item) {
    for (let el of item) {
      if (Array.isArray(el)) {
        flatten(el); // Recursive call
      } else {
        result.push(el);
      }
    }
  }

  flatten(arr);
  return result.sort((a, b) => a - b); // Sort in ascending order
}

console.log(flattens([[1, 2], [3, [4, 5]]]));
// Output: [1, 2, 3, 4, 5]

 • Experience with SSR, dynamic routing, and REST/GraphQL APIs
 • Comfort with performance profiling, lazy loading, and responsive design
 • Bonus: Worked on SDKs, Micro Frontends, or WebView-based mobile integrations


