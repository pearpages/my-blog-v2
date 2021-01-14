---
slug: async-functions-with-use-effect
title: Async functions and useEffect
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [react, async, useEffect]
---

> When we declare any function as **async**, it returns a **promise**

> An **effect** function must not return anything besides a function, which is used for clean-up.

## What will not work

```js
useEffect(async () => {
  // ...
}, [])
```

## Simple solutions

1. Create a separate async function **outside** useEffect and call it from the useEffect.
2. Create a separate async function **inside** useEffect and call it from useEffect.
3. Use an IIFE(Immediately Invoked Function Expression).


### 3. Create a separate async function outside useEffect and call it from the useEffect:

```js
async function getUsers() {
 const users = await axios.get('https://randomuser.me/api/?page=1&results=10&nat=us');
 setUsers(users.data.results);
}

useEffect(() => {
 getUsers();
}, []);
```

### 2. Create a separate async function inside useEffect and call it from useEffect:

```js
useEffect(() => {
  async function getUsers() {
    const users = await axios.get("https://randomuser.me/api/?page=1&results=10&nat=us");
    setUsers(users.data.results);
  }

  getUsers();
}, []);
```

### 3. Use an IIFE(Immediately Invoked Function Expression):

```js
useEffect(() => {
 (async () => {
  const users = await axios.get("https://randomuser.me/api/?page=1&results=10&nat=us");
  setUsers(users.data.results);
 })();
}, []);
```

## Resources

- [Handle API calls using async await with the useEffect hook](https://medium.com/javascript-in-plain-english/handling-api-calls-using-async-await-in-useeffect-hook-990fb4ae423)
- [How to use async function in React hooks useEffect (Typescript/JS)?](https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435)
