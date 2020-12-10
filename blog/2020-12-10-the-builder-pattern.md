---
slug: the-builder-pattern
title: The Builder pattern
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, patterns]
---

## The issue

Creating an object with too many arguments, using new and not returning a plain object.

```js
const frog = new Frog("Bob", 9, 2.2, "male");
```

## Using a class builder

With a class builder you can use setters, so the arguments are explicit.

```js
class FrogBuilder {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }

  build() {
    if (!("weight" in this)) {
      throw new Error("Weight is missing");
    }
    if (!("height" in this)) {
      throw new Error("Height is missing");
    }
    return {
      name: this.name,
      weight: this.weight,
      height: this.height,
      gender: this.gender,
    };
  }
}
```

And here you have it looks now:

```js
const leon = new FrogBuilder("Leon", "male")
  .setWeight(14)
  .setHeight(3.7)
  .build();
```

## Without ```class```

The same implementation without using class

```js {16}
function FrogBuilder(name, gender) {
  this.name = name;
  this.gender = gender;

  this.setWeight = (weight) => {
    this.weight = weight;
    return this
  };

  this.setHeight = (height) => {
    this.height = height;
    return this
  };

  this.build = () => {
    if (!("weight" in this)) { // see usage in info
      throw new Error("Weight is missing");
    }
    if (!("height" in this)) {
      throw new Error("Height is missing");
    }
    return {
      name: this.name,
      weight: this.weight,
      height: this.height,
      gender: this.gender,
    };
  };
}
```

:::info

How to use [in operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/in)

:::

```js
const leon = new FrogBuilder("Leon", "male")
  .setWeight(14)
  .setHeight(3.7)
  .build();
```

## Purely functional

This is my favorite because I am not a fan of **new**.

```js
function frogBuilder({name, weight, height, gender} = {}) {
  return {
    build: () => {{
      name,
      weight,
      height,
      gender
    }),
    setName: (name) => frogBuilder({name}),
    setWeight: (weight) => frogBuilder({weight}),
    setHeight: (height) => frogBuilder({height}),
    setGender: (gender) => frogBuilder({gender}),
  }
}
```

```js
const leon = frogBuilder()
  .setName('Leon')
  .setGender('male')
  .setWeight(14)
  .setHeight(3.7)
  .build()
```
