---
slug: how-to-remove-array-duplicates-in-es6
title: How to remove array duplicates in ES6
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, array]
---

- [How to Remove Array Duplicates in ES6](https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c)
- [MDN Web Docs — Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN Web Docs — Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN Web Docs — Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

1. Using ```Set```
2. Using ```filter```
3. Using ```reduce```

## 1. Using Set

> Set is a new data object introduced in ES6. Because Set only lets you store unique values. When you pass in an array, it will remove any duplicate values.

It's very simple, very quick and elegant, but I don't think it might be very performant; so I would use it for small arrays.

```js
const array = [4, 1, 2, 4, 4, 3]
const uniqueSet = new Set(array)
const backToArray = [...uniqueSet]
```

## 2. Using filter

Very smart and short solution. Because indexOf will return the first appearance, only the first unique value will stay in the new returning array.

```js
const array = [4, 1, 2, 4, 4, 3]
array.filter((item, index) => array.indexOf(item) === index)
```

### Getting the duplicates

```js
array.filter((item, index) => array.indexOf(item) !== index)
```

## 3. Using reduce

```js
const array = [4, 1, 2, 4, 4, 3]
array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
```
