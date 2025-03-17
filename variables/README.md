## Variables

- `var`
```js
Variables declared with the var always have Global Scope.(It will not have block scope)

var a = 10;
{
    var a = 20;
    document.getElementById("demo1").innerHTML = a; //Here a is 20
}
document.getElementById("demo2").innerHTML = a; //Here a is 20
```
#

- `let`
```js
Variables declared with the let always have block Scope.(It will not have global scope)

let a = 10;
{
    let a = 20;
    document.getElementById("demo1").innerHTML = a; //Here a is 20
}
document.getElementById("demo2").innerHTML = a; //Here a is 10
```

---
- `const`
```js
Variables declared with the const always have block Scope.(It will not have global scope)

const a = 10;
{
    const a = 20;
    document.getElementById("demo1").innerHTML = a; //Here a is 20
}
document.getElementById("demo2").innerHTML = a; //Here a is 10
```
```
- let and const have block scope.

- let and const can not be redeclared.

- let and const must be declared before use.
```