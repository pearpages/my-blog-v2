---
slug: sets-and-maps
title: Sets and Maps
author: pere pages
draft: true
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, sets, maps]
---

## Objects

> A **key** of an object always gets converted to a **string**.

### _in_ usage

Javascript has the **in** operator that returns **true** if a property exists in an object without reading the value of the object. **However**, the in operator also searches the prototype object.

```js
const example = { firstName: 'Pere' }

console.log('firstName' in example) // true
console.log('lastName' in example) // false
```

## Set, or how to track unique values with *has()*

> A **set** is a list of values that _cannot contain duplicates_. In ECMAScript 6 is an unordered (insertion) list of values without duplicates.

Sets are a very easy mechanism for tracking unique values.

You typically don't access individual items in a set; instead, it's much more common to just _check a set to see if a value is present_.

You can't directly access an item by index like you can with an array. If you need to do so, the best option is to convert the set to an array.

```js
const set = new Set()
set.add(5)
set.add('5')

console.log(set.size) // 2
```

```js
const set = new Set()
const key1 = {}
const key2 = {}

set.add(key1)
set.add(key2)
console.log(set.size) // 2
```

```js
const set = new Set()
set.add(5)
set.add('5')
set.add(5) // gets ignored because is already in the set
console.log(set.size) // 2
```

> The **Set** constructor actually accepts any **iterable** object as an argument.

```js
const set = new Set([1, 2, 3, 4, 5, 5, 5, 5])
console.log(set.size) // 5

console.log(set.has(2)) // true
console.log(set.has('1')) // false
console.log(set.has(6)) // false
```

### Api

- delete(item)
- clear()
- forEach((value, sameValue, set) => {}, this)

#### forEach

```js
new Set([1, 2, 3]).forEach((value) => console.log(value * 2))
```

```js
const set = new Set([1, 2])

const processor = {
  output(value) {
    console.log(value)
  },
  process(dataSet) {
    dataSet.forEach(function(value) {
      this.output(value)
    }, this)
  }
}
```

### Converting a Set to an Array

```js
const set = new Set([1, 2, 3, 3, 3, 4, 5])

const array = [...set]

console.log(array) // [1,2,3,4,5]
```

### eliminate duplicates

> The **spread operator** and _for...of_ statements call the iterable protocol of an object. Some objects, like Array, String, Set and Map have built in iterable protocols. That means that they have the _@@iterator_ method.

```js
function eliminateDuplicates(items) {
  return [...new Set(items)]
}
```

## WeakSets

In a normal *Set* as long as a reference to an instance exists, the object cannot be garbage-collected to free memory.

In a WeakSet an error will be thrown if the array contains any non object values, because WeakSet can't accept primitive values.

WeakSets aren't iterables and don't have the size property.

> If you only need to track object references, you should use a weak set.

### Api

- add
- has
- delete

```js
const set = new WeakSet()

let key = {}
set.add(key)
console.log(set.size)

key = null
console.log(set.size)
```

## Map, or how to cache with *<key: value>*

> A **map** is a collection of **keys** that correspond to specific values.

```js
const map = new Map()
map.set('firstName', 'Pere')
map.set('lastName', 'Pages')

console.log(map.get('firstName')) // Pere
console.log(map.get('lastName')) // Pages
```

You can also use *objects* as keys.

```js
const map = new Map()
const key1 = {}
const key2 = {}

map.set(key1, 5)
map.set(ke2, 42)

console.log(map.get(key1)) // 5
console.log(map.get(key2)) // 42
```

Maps are frequently used as **caches** for storing data that is quickly retrieved at a later time.

### Api

Map shares, intentionally, several methods with Sets.

- has(key)
- delete(key)
- clear()
- forEach((value, key, ownerMap) => {}, this)
- size

```js
const new Map([['name', 'Pere'], ['age', 39]])
```

## WeakMaps

They are unordered lists of key-values pairs.

> In weak maps, every key must be an object!

### Use case

> Most developers consider the main use case of wak maps to be associating data with DOM elements.

The most useful place to employ weak maps is when you're creating an object related to a particular **DOM** element in a web page. The difficult part of this approach is determining when a DOM element no longer exists in the web page so the library can remove its associated object.

```js
const map = new WeakMap()
let domElement = document.querySelector('.element')

map.set(domElement, 'Original')

const value = map.get(domElement)
console.log(value) // Original

domElement.parentNode.removeChild(domElement) // the object gets removed from the DOM
domElement = null // we remove the last reference to the object

// now the weak map is empty because the object is not being referenced anywhere
```

### Api

- set(key, value)
- has(key)
- get(key)

### Private Object Data

One practical use of weak maps is to store data that is private to object instances.

```js
const Person = (function () {
  let privateData = new WeakMap()
  
  function Person(name) {
    privateDate.set(this, { name })
  }

  Person.prototype.getName = function() {
    return private
  }
})
```
