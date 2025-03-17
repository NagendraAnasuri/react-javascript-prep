## Object & Array Destructuring

### Object Destructuring
Destructuring assignment makes it easy to assign array values and object properties to variables.

```js
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;

// Display Data
document.getElementById("demo").innerHTML = firstName + " is " + age + " years old.";
//Output: John is 50 years old.
```
**Note:**

When destructuring an object, you must use the same name for the variables as the corresponding object keys (names).

The order of the keys (names) does not matter.

### Array Destructuring
```js
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring
let [fruit1, fruit2] = fruits;

// Display Primitive Data
document.getElementById("demo").innerHTML = fruit1 + ", " + fruit2;
```

