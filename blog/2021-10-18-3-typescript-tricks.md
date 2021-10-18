---
slug: 3 typescript tricks
title: 3 Typescript tricks
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [typescript]
---

1. `Readonly<T>`
2. Any vs Unknown
3. Records

## Readonly

```ts
function sortNumbers(array: Readonly<Array<number>>) {
  return [...array].sort((a, b) => a - b);
}
```

## Any vs Unknown

> **any** is basically saying the TypeScript compiler to not check that bit of code. Avoid using any whenever you can! It's better to use **unknown** instead because it enforces you to check the type of the value before using it or else it won't compile!

```ts
// ... other code

type Human = { name: string; age: number }

someArray.forEach((entry) => {
  // if it's an object, we know it's a Human
  if (typeof entry === 'object') {
    console.log((entry as Human).age)
  }
})
```

## Records

```ts
type AllowedKeys = 'name' | 'age'

// use a type here instead of interface
type Person = Record<AllowedKeys, unknown>

const Human: Person = {
  name: 'Steve',
  age: 42,
}
```

## Resources

[Original Post](https://www.cstrnt.dev/blog/three-typescript-tricks?utm_source=Pointer&utm_campaign=dc965ea154-ISSUE_260&utm_medium=email&utm_term=0_6ba2b83261-dc965ea154-608322026)
