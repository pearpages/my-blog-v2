---
slug: js-functions
title: Javascript Functions
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, objects]
---

A function encloses a set of statements.

They are used for:

- code reuse
- information hiding
- composition
- specify behavior of objects

> Generally, the craft of programming is the factoring of a set of requirements into a set of **functions** and **data structures**.

## Function Objects

> Functions in javascript are **objects**.

Objects produced from object literals are linked to `Object.prototype`. Function objects are linked to `Function.prototype` (which is linked to `Object.prototype`). Every function is also created with two additional hidden properties: the function's context and the code that implements the function's behavior:

1. prototype
2. context (this)
3. code implementation

Every function object is created with a _prototype_ property. Its value is an object with a _constructor_ property whose value is the function. **This is distinct from the hidden link to `Function.prototype`.

Since functions are objects, they can be used like any other value. Also, since functions are objects, functions can have methods.

```js
const helloWorld = function () { console.log('hello World') }
const goodByeWorld = function () { console.log('Goodbye World') }

const callMyFunctions = function (...myFunctions) { myFunctions.forEach(fn => fn()) }
callMyFunctions(helloWorld, goodByeWorld) // 'hello World', 'Goodbye World'
```

## Function Literal

Function objects are created with function literals:

```js
const add = function (a, b) {
  return a + b;
}
```

1. reserved word `function`
2. optional function name
3. parameters
4. statements

A function literal can appear anywhere that an expression can appear. Functions can be defined inside other functions. An inner function of course has access to its parameters and variables. An inner function also enjoys access to the parameters and variables of the functions it is nested within.

> The function object created by a function literal contains a link to that outer context. This is called **closure**.

## Invocation

Invoking a function suspends the execution of the current function, passing control and parameters to the new function. In addition to the declared parameters, every function receives two additional parameters: **this** and **arguments**.

```js
function myFunction(a, b, c, d) {
  console.log(a, b, c, d)
}

myFunction(1, 2) // 1, 2, undefined, undefined
```

The this parameter value is determined by the **invocation pattern**.

There are four patterns of invocation in Javascript. The patterns differ in how the bonus parameter **this** is initialized:

1. the method invocation
2. the function invocation
3. the constructor invocation
4. the apply invocation

### 1. The Method Invocation Pattern

> When a function is stored as a property of an object, we call it a **method**. 

> When a method is invoked, this is bound to that object.

```js
const myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === "number" ? inc : 1;
  }
};

myObject.increment(); // 1
console.log(myObject.value);
myObject.increment(); // 2
console.log(myObject.value);
myObject.increment(4);
console.log(myObject.value); // 6
```

### 2. The Function Invocation Pattern

When a function is not the property of an object, then is invoked as a function:

```js
function add(a, b) {
  return a + b;
}

const sum = add(3, 4) // 7
```

When a function is invoked with this pattern, **this** is bound to the **global** (window/global) object. This was a **mistake** in the design of the language.

A consequence of this error is that a method cannot employ an inner function to help it do its work because the inner function does not share the method's access to the object as its **this** is bound to th wrong (global) value.

```js
function add(a, b) {
  return a + b;
}

window.value = 5 // global object

const myObject = {
  value: 2,
  double: function () {
    const helper = function () {
      this.value = add(this.value, this.value);
    };
    helper();
  }
};

myObject.double();
console.log(myObject.value); // 2
console.log(window.value); // 10, global object has been updated
```

```js
function add(a, b) {
  return a + b;
}

const myObject = {
  value: 2,
  double: function () {
    const that = this; // Workaround
    const helper = function () {
      that.value = add(that.value, that.value);
    };
    helper();
  }
};

myObject.double();
console.log(myObject.value); // 4
```

### 3. The Constructor Invocation Pattern

If a function is invoked with the **new** prefix, then a new object will be created with a hidden link to the value of the function's prototype member, and **this** will be bound to that object.

```js
const quo = function (string) {
  this.status = string;
}

quo('hello') // as explained in the Function Invocation Pattern, this is bound to the **global** object
console.log(window.status) // 'hello'
```

Functions that are intended to be used with the **new** prefix are called **constructors**. By convention, they are kept in variables with a capitalized name.

```js
const Quo = function (string) {
  this.status = string;
}

Quo.prototype.getStatus = function () {
  return this.status;
}

const aQuo = new Quo('confused');
console.log(aQuo.getStatus())
```

> Use of this style of constructor functions is not recommended.

### 4. The Apply Invocation Pattern

The apply method lets us construct an array of arguments to use to invoke a function. It also lets us choose the value of **this**. The apply method takes two parameters. The first is the value that should be bound to this. The second is an array of parameters.

```js
const add = function (a, b) {
  return a + b;
}
const sum = add.apply(null, [3, 4]) // this, parameters[]
console.log(sum) // 7
```

```js
const Quo = function (string) {
  this.status = string;
}

Quo.prototype.getStatus = function () {
  return this.status;
}

const statusObject = {
  status: 'OK'
}

const status = Quo.prototype.getStatus.apply(statusObject); // statusObject is the **this** and no parameters[] needed
console.log(status); // 'OK'

const status2 = Quo.prototype.getStatus.call(statusObject); // call also uses the **this** and the arguments follow separated by comas
console.log(status2); // 'OK'
```

## Arguments

A bons parameter that is available to functions when they are invoked is the arguments 'array'. It gives the function access to all the arguments that were supplied with the invocation, including excess arguments that were not assigned to parameters.

> Because of a design error, arguments is **not** really an array.

```js
function myFunction() {
  console.log(arguments.length);
  console.log(arguments);
}

myFunction(1, 2, 3, 4, 5, 6); // 6 // [1, 2, 3, 4, 5, 6]
```

```js
function sum() {
  return [...arguments].reduce((current, total) => total += current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); // 36
```

## Return

A function always returns a value. If the return value is not specified, the _undefined_ is returned.

If the function was invoked with the **new** prefix and the return value is not an object, then **this** (the new object) is return instead.

```js
function a() {
  return 'a';
}

function un() {}

console.log(a()); // 'a'
console.log(un()); // undefined
```

```js
function Car(driver, doors) {
  this.driver = driver;
  this.doors = doors;
}

console.log(new Car('Pere', 4)) // Car
```

```js
function Car(driver, doors) {
  this.driver = driver;
  this.doors = doors;

  return {
    hello: 'hello',
    ref: this
  }
}

console.log(new Car('Pere', 4)) // {hello: 'hello', ref: Car}
```

## Exceptions

```js
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    }
  }
  return a + b;
}
```

```js
const error = new Error('something went wrong')

console.log(error.name) // 'Error'
console.log(error.message) // 'something went wrong'
```

## Augmenting Types

Javascript allows the basic types of the language to be **augmented**. We can add a method to `prototype` and that makes it available to all the objects.

```js
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
}

Number.method('integer', function () {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
})

(-10/3).integer(); // -3
```

```js
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
}

String.method('trim', function () {
  return this.replace(/^\s+|\s+$/g, '')
})

const aString = "     " + "     neat      ";;
console.log(aString.trim()) //
```

Becuase of the dy namic nature of Javascript's prototypal inheritance, all values are immediately endowed with the new methods, even values that were created before the methods were created.

## Recursion

> A recursive function is a function that calls itself, either directly or indirectly.

### The towers of Hanoi

```js
function hanoi(disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    document.writeln(`Move disc ${disc} from ${src} to ${dst} <br/>`);
    hanoi(disc - 1, aux, src, dst);
  }
}

hanoi(3, 'Src', 'Aux', 'Dst');
```

### Walk the DOM

Recursive functions can be very effective in manipulating tree structures such as the browser's Document Object Model (DOM).

```js
function walkTheDOM(node, func) {
  func(node)
  node = node.firstChild
  while (node) {
    walkTheDOM(node, func)
    node = node.nextSibling
  }
}
```

### Tail recursion optimization

Some languages offer the _tail recursion optimization_. This means that if a function returns the result of invoking itself recursively, then the invocation is replaced with a loop, which can significantly speed things up.

> Tail-call optimization is a part of the ES2015-ES6 specification.

## Scope

> Scope in a programming language controls the visibility and lifetimes of variables and parameters.

Javascript does have **function** scope. That means that the parameters and variables defined in a function are not visible outside of the function.

## Closure

The good news about scope is that inner functions get access to the parameters and variables of the functions they are defined within (with the exception of _this_ and _arguments_).

An interesting case is when the innfer function has a longer lifetime than its outer function.

```js
const isNumber = value =>  typeof value === 'number'

const myObject = (function () {
  let value = 0

  return {
    increment: (inc) => value += isNumber(inc) ? inc : 1,
    getValue: () => value
  }
}())

myObject.increment()
myObject.increment()
myObject.increment()

console.log(myObject.getValue())
```

```js
function quo (status) {
  return {
    getStatus: () => status
  }
}

const myQuo = quo('amazed')
console.log(myQuo.getStatus())
```

This is possible beacuse the function has access to the context in which it was created. This is called **closure**.

## Callbacks

Providing a function that will be invoked when the asynchronous task is finished.

```js
const request = prepareTheRequest()
const myCallback = response => display(response)
sendRequestAsynchronously(request, myCallback)
```

## Module

A module is a function or object that presents an interface but hides its state and implementation.

The **module pattern** takes advantage of function **scope** and **closure** to create relationships that are binding and private.

## Cascade

If we have methods returning _this_ instead of _undefined_ we can enable _cascades_.

```js
getElement('myBoxDiv')
  .move(350, 150)
  .width(100)
  .height(100)
  .color('red')
  .border('10px outset')
  .padding('4px')
  .appendText('Please stand by');
```

## Curry

Currying allows us to produce a new function by combining a function an argument.

## Memoization

Functions can use objects to remember the results of previous operations, making it possible to avoid unnecessary work.

## Resources

- Javascript The Good Parts by Douglas Crockford