---
slug: definitions
title: Some useful definitions
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [fp]
---

> **Closures** A closure is the bundling of a function with its lexical environment. Closures are created at runtime during function creation time. Closures are how partial applications get their fixed arguments.

> **Compose**
> ```js
> const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

> **Currying** A curried function is a function that takes multiple parameters one at a time.

> **Destructuring**
> ```js
> const [t, u] = ['hello', 'world']
> t // 'hello'
> u // 'world'
> ```
> ```js
> const { blop: blep } = { blop: 'hello world' }
> blep // 'hello world'
> ```

> **Expression** is a piece of code which evaluates to some value.

> **First class functions** The ability to use functions as data values.

> **First order function** don't take function as an argument or returns a function as output.

> **Functor** is a data structure that can be mapped over. In other words, it's container which has an interface which can be used to apply a function to the values inside it.

> **Higher order function** is any function tat takes a function as an argument, returns a function or both.

> **Immutability** An immutable object is an object that can't be modified after it's created.

> **Method** A method is a function associated with an object.

> **Non-determinism** parallel processing + mutable state.

> **Partial application** it's a function which has some arguments fixed inside its closure scope. A function with some of its parameters fixed is to be *partially applied* All curried functions return partial applications.

> **Pipe**
> ```js
> const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)
> ```

> **Point-free style** is a style of programming where function definitions do not make reference to the function's arguments.

> **Pure functions** given the same input, will always return the same output. Produce no side effects.

> **Referentially transparent** When an expression can be replaced with its corresponding value without changing the meaning of the program.

> **REPL** (Read, Eval, Print, Loop)

> **Stream** A list expressed over time.

> **Trace**
> ```js
> const trace = label => value => {
> console.log(`${ label }: ${ value }`)}
> return value
> ```

> **Trie** In many functional programming languages, there are special immutable data structures called trie which are effectively deep frozen - meaning no property can change, regardless of the level of the property in the object hierarchy.
