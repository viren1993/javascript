interview 6 may AIEnterprise

first html 
1. css box layout
margin
border 
paddding
content 
2. what space are nagative used margin are nagative  browser support level 
(i tell you padding )

3. what is javascript engine 

A JavaScript engine is a program or software component that executes JavaScript code. It translates human-readable JavaScript code into machine-readable instructions that a computer can understand and execute. Every major web browser has its own JavaScript engine, and some popular examples include: 

4. html code 3 grid show after you button click flex show view
(50% done)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flex Toggle</title>
  <style>
    #container {
      display: flex;
      flex-direction: row; /* default */
      gap: 10px;
      transition: all 0.3s ease;
      margin-bottom: 10px;
    }

    .box {
      width: 100px;
      height: 100px;
      transition: all 0.3s ease;
    }

    .red { background-color: red; }
    .green { background-color: green; }
    .blue { background-color: blue; }
  </style>
</head>
<body>

  <div id="container">
    <div class="box red"></div>
    <div class="box green"></div>
    <div class="box blue"></div>
  </div>

  <button onclick="toggleFlexDirection()">Toggle Flex Direction</button>

  <script>
    function toggleFlexDirection() {
      const container = document.getElementById("container");
      const currentDirection = getComputedStyle(container).flexDirection;

      container.style.flexDirection = currentDirection === "row" ? "column" : "row";
    }
  </script>

</body>
</html>

5. diffrent beetween var let cont 
6. hosting var let and const TDS
7. javscript what sycornus 
   eventloop

   
8. min and max value first find then tell also avarage value 

function minmax(arr) {
 const min = Math.min(...arr) 
 const max = Math.max(...arr)
 const avarge = arr.reduce((acc, curr) => acc + curr, 0)
 const average = avarge / arr.length;
 
 return { min , max, average }
}

const number = [12,13,12,34,5,1,36,132,908,56,87]
const result = minmax(number)
console.log("Min", result.min)
console.log("Min", result.max)
console.log("avarge", result.average)

10. 
input : [1,2,3,4,5] 
output : [4,5,1,2,3]

function arryCall(arr, t ) {
    t = t % arr.length;
    let roteed = arr.slice(-t).concat(arr.slice(0, -t ))
    
    console.log(roteed)
}
arryCall([1,2,3,4,5] , 2)

11. write a fn which merges given 2 arrays and arrange in descending order

function assdec() {
    const arrange  = [23,76,12,9]
    const descending = [3,25,7,112]
    
    let merge = arrange.concat(descending);
    merge.sort((a, b) => b- a)
    console.log(merge)
}

assdec()

// Component A //
// 			[p1,] = useState() 
// 			[p2,] = useState()  
    // <ComponentB   p1={p1}/> // child a 
    // <ComponentC p2={p2}/> // chaid a
    // <ComponentE /> // chaid a
// Component D // sublicg A and D
// <ComponentD />

q 1 : i have ony p1 state ony what component updated 
q 2 : i haave component a updated prent comporent updated  waht comprent rerender 
q 3 : parent component updated but chaild compotent not show can thay 

How can you, one API, multiple times you call her, how can you stop that?

1. Use useEffect with an empty dependency array
2. Use a flag or state to prevent duplicate call
3. Debounce or throttle the calls (especially in response to user input)
4. AbortController to cancel previous requests

----------------------------
next round 
-