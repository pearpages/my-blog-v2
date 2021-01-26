---
slug: js-objects
title: Javascript Objects
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, objects]
---

Objects in Javascript are **mutable keyed collections**.

An object is a container of properties, where a property has a name and a value. Objects can contain other objects, so they can easily represent tree or graph structures.

Javascript includes a **prototype** linkage feature that allows one object to inherit the properties of another.

## Object literals

```js
const empty_object = {}
```

```js
const aPerson = {
  firstName: 'Pere',
  lastName: 'Pages'
}
```

## Retrieval

```js
const aPerson = {
  firstName: 'Pere',
  lastName: 'Pages'
}

console.log(aPerson.firstName) // 'Pere'
console.log(aPerson.lastName) // 'Pages'
console.log(aPerson.whatever) // undefined
console.log(aPerson.nickname || 'pearpages') // pearpages
```

## Update

If the property name already exists in the object, the property is replaced. If the object does not already have that property name, the object is augmented.

```js
const aPerson = {
  firstName: 'Pere',
  lastName: 'Pages'
}

aPerson.fistName = 'Pear' // from 'Pere' to 'Pear'
aPerson.middleName = 'Joan' // from 'undefined' to 'Joan'
```

## Reference

Objects are passed around by reference. They are never copied.

```js
const bar = {
  a: 1,
  b: 2
}

const foo = {
  ref: bar
}

foo.ref.a = 3

console.log(bar.a) // 3
```

## Prototype

Every object is linked to a _prototype_ object from which it can inherit properties (**a**). All objects create from object literals are linked to `Object.prototype`, an object that comes standard with Javascript.

The prototype link has no effect on updating. When we make changes to an object, the object's prototype is not touched (**b**).

The prototype link is used only in retrieval. If we try to retrieve a property value from an object, and if the object lacks the property name, then Javascript attempts to retrieve the property value from the prototype object. This is called **delegation** (**c**).

```js
const bar = {
  a: 1,
  b: 2
}

const foo = Object.create(bar) // example of (a)

console.log(foo) // {}
console.log(foo.a) // 1; example of (c)
console.log(foo.__proto__.a) // 1

bar.a = 3

console.log(foo.a) // 3

foo.a = 5 // example of (b)

console.log(foo.a) // 5
console.log(bar.a) // 3

delete foo.a // true; no longer foo has -a- as an -ownProperty-
console.log(foo.a) // 3; example of (c)
```

## Reflection

```js
const bar = {
  a: 1,
  b: 2
}

const aPerson = {
  firstName: 'Pere',
  lastName: 'Pages'
}

typeof bar.a // 'number'
typeof bar.b // 'number'
typeof aPerson.firstName // 'string'
```

```js
const bar = {
  a: 1,
  b: 2
}

const foo = Object.create(bar)

bar.hasOwnProperty('a') // true
foo.hasOwnProperty('a') // false

console.log(foo.a) // 1
```

## Enumeration: `for in`, `Object.keys` and `Object.values`

The `for in` statement can loop over all the property names in an object.

`Object.keys` only will get the `hasOwnProperty(key) === true`.

```js
const bar = {
  a: 1,
  b: 2,
  m1: () => 'hello'
}

const foo = Object.create(bar)
foo.c = 3
foo.d = 4

const geez = Object.create(foo)

for (let name in foo) {
  console.log(name)
} // c, d, a, b, m1

for (let name in foo) {
  console.log(foo.hasOwnProperty(name))
} // true, true, false, false, false

for (let name in geez) {
  console.log(geez.hasOwnProperty(name))
} // false, false, false, false, false

console.log(Object.keys(bar)) // ['a', 'b', 'm1']
console.log(Object.keys(foo)) // ['c', 'd']
console.log(Object.keys(geez)) // []

console.log(Object.values(bar)) // ['a', 'b', function]
```

### Keys

The `Object.keys(object)`function can take all of the names of the own (but not inherited) properties in an _object_ and return them as an array of strings.

The strings in the array will be in the order in which they were inserted.

## Delete

The _delete_ operator can be used to remove a property from an object. It will remove a property from the object if it has one. It will not touch any of the objects in the prototype linkage.

> see _delete_ example in the **prototype** section.

## Inheritance

In Javascript, an object can be made that inherits from another object `Object.create(prototype)`.

When assigning to an object, only the top-most object is changed. No changes are made to objects on the prototype chain.

The most popular use of prototypes is as a place to store functions.

`Object.create(prototype)` inherits from the _prototype_ parameter object and the `Object.prototype`. But `Object.create(null)` does not inherit any thing. 

`Object.assign(Object.create({}), prototype)` is preferable to `Object.create(prototype)`. It is all about how much you want to 'inherit'. `Object.create({})` does not inherit from `Object.prototype` but `{}` the Object literal does (check to __proto__ property).

## toString

If you want to convert an object into a string `JSON.stringify` does a much better job.

```js
JSON.stringify(myObj, null, 2)
```

## Copy

```js
const bar = {
  a: 1,
  b: 2
}

const foo = Object.assign({}, bar)
```

```js
const bar = {
  a: 1,
  b: 2
}

const foo = {...bar}
```

## Freeze

`Object.freeze(object)`. This is not a deep freeze. Only the top level object is frozen.

## WeakMap

Allows objects as keys.

## this

In most cases, the value of **this** is determined by how a function is called (runtime binding).

### Example with methods

```js
const myObj = {
  store: 0,
  increase: function () {
    this.store = this.store + 1;
  },
  decrease: function () {
    this.store = this.store - 1;
  }
};

console.log(myObj.store); // 0
myObj.increase();
myObj.increase();
myObj.increase();
myObj.increase();
console.log(myObj.store); // 4
myObj.decrease();
myObj.decrease();
console.log(myObj.store); // 2
```

### Trying to access this before execution time

```js
const thisExample = {
  firstName: "Pere",
  lastName: "Pages",
  completeName: this.firstName + " " + this.lastName, // not going to work. this can't resolve yet
  getCompleteName: function () {
    return this.firstName + " " + this.lastName; // it's going to work, because it will bind at execution time
  }
};

console.log(thisExample.completeName); // undefined undefined
console.log(thisExample.getCompleteName()); // 'Pere Pages'
```

## Resources

- Javascript The Good Parts (2008) by Douglas Crockford
- How Javascript Works (2018) by Douglas Crockford
