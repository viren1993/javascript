const user = {
    username: 'JohnDoe',
}


// - how can make passing argument 

function check() {
    throw new Error('parameter is not defined')
}

function show(name = check()) {
    // throw new Error('parameter is not defined')
    console.log(`Hello ${name}`)
}

show()  // Hello N/A


function show() {
    {
        (function () {
            var x = 1;
            let y = 2;
            console.log(x, y); // 1 2
        }) ()
    }

    console.log(x, y); // 9
}

show() // 9 10

const object = {
    a: 1,
    b: 2,
    sum() {
        return this.a + this.b;
    }
}

const res = object.sum(); // 3

console.log(res); // 3

console.log(false == []); // true
// [] string me hua false

const str = 'hare kirshna hare krishna krishna krishna hare hare';

const obj = {}
// javascript for Of loop value pass kar ta he 
// javascript for in loop key pass kar ta he
for(let x of str) {
    if(obj[x]) {
        obj[x]++;
    } else {
        obj[x] = 1;
    }
}

console.log(obj); 
// { h: 4, a: 6, r: 6, e: 4, k: 3, i: 3, s: 3, n: 3 }

//-------------------------
(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined')); // Output: false
  console.log("b defined? " + (typeof b !== 'undefined')); // Output: true
  

  var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // bar
        console.log("outer func:  self.foo = " + self.foo); //bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); //undefined
            // issue ara he
            console.log("inner func:  self.foo = " + self.foo); // bar
        }());
    }
};
myObject.func();