## Spread & Rest Operators

The spread operator `...` can be used to expand an iterable into more arguments

```js
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];
document.getElementById("demo").innerHTML = year; //Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Des
```
you can create a new array using `...` operator
```js
const a = [1, 2, 3]
const b = [...a, 4, 5, 6]
```
This works for objects as well. Clone an object with:
```js
const newObj = { ...oldObj }
```
Using strings, the spread operator creates an array with each char in the string:
```js
const str = 'hey'
const res = [...str] // ['h', 'e', 'y']
```
Also we can use an array as function argument in a very simple way:
```js
const f = (foo, bar) => {}
const a = [1, 2]
f(...a)
```
The **rest element** is useful when working with **array destructuring**
```js
const numbers = [1, 2, 3, 4, 5]
[first, second, ...others] = numbers
```

and **spread elements:**
```js
const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sumOfNumbers = sum(...numbers)
```

**Rest properties:**

```js
const { first, second, ...others } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
}

first // 1
second // 2
others // { third: 3, fourth: 4, fifth: 5 }
```
Spread properties allow to create a new object by combining the properties of the object passed after the spread operator:

```js
const items = { first, second, ...others }
items //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
```
