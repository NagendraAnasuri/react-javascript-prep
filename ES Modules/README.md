## ES Modules

A module is a JavaScript file that exports one or more values (objects, functions or variables), using the `export` keyword.

There are two types of exports
* Default Exports
* Named Exports

The Exported values will be imported in other JS file to access those values.

Default Exports can be imported with any name
Named Exports should be imported with same name with curly braces. We an also use our own names for named exports, and should be written with aliases

* `App.js`
```js
//named export
export let person = {
    name: 'john',
    age: 27,
    mail: 'xyz@gmail.com'
}

//default export
let y = 10;
export default y;
```
* `index.js`
```js
import {person} from './App'; //named import
import y from './App'; //default import
```
We can combine both imports in a single line as:
```js
import y, {person as p} from './App';
```