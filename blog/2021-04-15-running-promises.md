---
slug: running-promises
title: Running Promises
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, promises]
---

Experiment on running promises either one after the other or in parallel(concurrently).

:::info
We say parallel, but we mean concurrently because node/js does not have threads.
:::

One after the other it should take way more time than in parallel(concurrently), but I was shocked to see that they all took the same results:

| Type                          | Results                         | Time |
| ----------------------------- | ------------------------------- | ---- |
| sequentially                  | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] | 876  |
| parallel                      | [10, 8, 7, 2, 9, 4, 3, 1, 6, 5] | 877  |
| parallel preserving the order | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] | 877  |

What's going wrong? Why sequentially is not taking way more than the other two? The expected result would be both parallel the same and faster, but sequentially taking way more.

The answer:

:::warning
_Promises start running immediately after creation._
:::

When we do a:

```js
new Promise((resolve) => {
  setTimeout(() => resolve(true), 200);
});
```

the clock starts ticking already because it executes the promise right after its creation. They are already running internally, waiting to be read.

So the only way of simulating and getting the initial expecting results is lazy executing the promises. How? With a function obviously:

```js
const createPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), 200);
  });

createPromise(); // <-- it will only start ticking once we create the promise
```

See now the results:

| Type                          | Results                         | Time |
| ----------------------------- | ------------------------------- | ---- |
| sequentially                  | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] | 5037 |
| parallel                      | [10, 8, 7, 2, 9, 4, 3, 1, 6, 5] | 942  |
| parallel preserving the order | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] | 942  |

Which matches with our initial expectations.

## The experiment

We want to create promises that execute async:

```js
function makePromise(value = 0, ms = 0) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms)
  })
}
```

We want a set, so we want an array, but we need the exact same array three times, so we can truely compare:

```js
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const TUPLES = values
  .map(makeValueRandomTimeTuple)

function makePromises(tuples = [{value: 0, ms: 0}]) {
  return tuples.map(({value, ms}) => makePromise(value, ms))
}

const promisesA = makePromises(TUPLES)
const promisesB = makePromises(TUPLES)
const promisesC = makePromises(TUPLES)
// All three sets are copies of the same sets with promises that have to behave the same way
```

### Sequentially

```js
function sequentially(arrayOfPromiseOrAsyncFn) {
  return arrayOfPromiseOrAsyncFn.reduce((previous, current) => previous
    .then(async res => {
      const next = await getPromise(current)
      return [...res, next]
    })
    , Promise.resolve([]))
}
```

### In parallel

:::warning
There is also a possible implementation with `for of`.
:::

```js
function inParallel(arrayOfPromiseOrAsyncFn) {
  return new Promise(async resolve => {

    const result = []
    const areAllResultsReady = () => result.length === arrayOfPromiseOrAsyncFn.length

    arrayOfPromiseOrAsyncFn.forEach((promiseOrAsyncFn) => {
      getPromise(promiseOrAsyncFn).then(res => {
        result.push(res)
        if (areAllResultsReady()) {
          resolve(result)
        }
      })
    })

  })
}
```

### In parallel keeping the order

```js
function inParallelButInOrder(array) {
  const promises = array.map(getPromise)
  return Promise.all(promises)
}
```

## Original Experiment vs Final Experiment

```js
(async () => {
  console.log(await getResultAndTime(sequentially(makePromises(TUPLES))))
  console.log(await getResultAndTime(inParallel(makePromises(TUPLES))))
  console.log(await getResultAndTime(inParallelButInOrder(makePromises(TUPLES))))
})()
```

vs

```js
(async () => {
  console.log(await getResultAndTime(sequentially(makeAsyncFns(TUPLES))))
  console.log(await getResultAndTime(inParallel(makeAsyncFns(TUPLES))))
  console.log(await getResultAndTime(inParallelButInOrder(makeAsyncFns(TUPLES))))
})()
```
