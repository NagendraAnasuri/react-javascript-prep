## CallBack Functions

A Callback function is a fuction, which is passed as an argument to another function

```js
function test(a) {
  a();
}

test(function(){
    console.log("callback function");
})
//output: callback function
```

```js
function first(test) {
    test();
    console.log("this is 1st func");
}

function second() {
    console.log("this is 2nd func");
}

first(second);
//output: this is 2nd func
//this is 1st func
```

```js
function add(a,b) {
    console.log(a+b);
}

function prod(a,b) {
    console.log(a*b);
}

function calc(val1, val2, operation) {
    operation(val1, val2);
}

calc(4, 5, add); // 9
calc(4, 5, prod); // 20
```