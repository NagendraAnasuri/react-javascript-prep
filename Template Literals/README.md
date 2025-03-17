## Template literals
Template Literals allows you to work with strings in a novel way compared to ES5 and below.

The syntax at a first glance is very simple, just use backticks instead of single or double quotes:

```js
const a_string = `something`
```
### Multiline strings
Before ES6, to create a string spanning over two lines you had to use the `\` character at the end of a line:

```js
const string =
  'first part \
second part'
```
This allows to create a string on 2 lines, but it’s rendered on just one line:

```js
first part second part
```

To render the string on multiple lines as well, you explicitly need to add \n at the end of each line, like this:

```js
const string =
  'first line\n \
second line'
```
or

```js
const string = 'first line\n' + 'second line'
```
Template literals make multiline strings much simpler.

Once a template literal is opened with the backtick, you just press enter to create a new line, with no special characters, and it’s rendered as-is:

```js
const string = `Hey
this
string
is awesome!`
```
Keep in mind that space is meaningful, so doing this:

```js
const string = `First
                Second`
```
is going to create a string like this:

```js
First
                Second
```
an easy way to fix this problem is by having an empty first line, and appending the trim() method right after the closing backtick, which will eliminate any space before the first character:

```js
const string = `
First
Second`.trim()
```

### Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.

You do so by using the ${...} syntax:

```js
const myVariable = 'test'
const string = `something ${myVariable}` //something test
```
inside the ${} you can add anything, even expressions:

```js
const string = `something ${1 + 2 + 3}`
const string2 = `something ${foo() ? 'x' : 'y'}`
```
