## Arrow Functions

Arrow functions allow us to write shorter function syntax:

```js
<p id="demo"></p>

let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4, 5); //Output: 20

let hello = "";
hello = () => {
  return "Hello World!";
}
document.getElementById("demo").innerHTML = hello(); //Output: Hello World
```

If the function has only one statement, we can remove the brackets and the return keyword
```js
<p id="demo"></p>

let hello = "";

hello = () => "Hello World!";

document.getElementById("demo").innerHTML = hello(); //Output: Hello World
```

Example of an Arrow Function with a parameter

```js
<p id="demo"></p>

let hello = "";

hello = (val) => "Hello " + val;

document.getElementById("demo").innerHTML = hello("Universe!"); //Output: Hello Universe!
```
If we have only one parameter,  we can remove parentheses as well:
```js
<p id="demo"></p>

let hello = "";

hello = val => "Hello " + val;

document.getElementById("demo").innerHTML = hello("Universe!"); //Output: Hello Universe!
```

- `this`

In a regular function `this` refers to the object
```js
const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: function() {
    return `${this.manufacturer} ${this.model}`
  }
}
//calling car.fullName() will return "Ford Fiesta".
```
An arrow function does not bind this at all, so its value will be looked up in the call stack, so in this code car.fullName() will not work, and will return the string "undefined undefined":
```js
const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: () => {
    return `${this.manufacturer} ${this.model}`
  }
}
//Due to this, arrow functions are not suited as object methods.
//Arrow functions cannot be used as constructors either, when instantiating an object will raise a TypeError.
```

This is also a problem when handling events. DOM Event listeners set `this` to be the target element, and if you rely on `this` in an event handler, a regular function is necessary:
```js
const link = document.querySelector('#link')
link.addEventListener('click', () => {
  // this === window
})

const link = document.querySelector('#link')
link.addEventListener('click', function() {
  // this === link
})
```
