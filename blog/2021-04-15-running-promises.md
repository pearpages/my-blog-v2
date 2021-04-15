---
slug: running-promises
title: Running Promises
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, promises]
---

> Promises start running immediately after creation !!!

```js
function sequentially(asyncFns) {
  return asyncFns.reduce((previous, current) => previous
    .then(async res => {
      const next = await current()
      return [...res, next]
    })
    , Promise.resolve([]))
}

function inParallel(asyncFns) {
  return new Promise(async resolve => {

    let pending = asyncFns.length
    const result = []

    asyncFns.forEach((asyncFn) => {
      asyncFn().then(res => {
        result.push(res)
        if (--pending === 0) {
          resolve(result)
        }
      })
    })

  })
}

function inParallelButInOrder(promises) {
  return Promise.all(promises)
}

(async () => {
  await runAsyncAndLog(sequentially(makeAsyncFns()))
  await runAsyncAndLog(inParallel(makeAsyncFns()))
  await runAsyncAndLog(inParallelButInOrder(makeAsyncFns().map(promise => promise())))
})()
```

The helper functions

```js
function getMs(initialMs) {
  const now = new Date().getTime()
  return now - initialMs
}

async function runAsyncAndLog(promise) {
  const initialMs = new Date().getTime()
  const res = await promise
  console.log(res, getMs(initialMs))
}

function makePromise(value, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms)
  })
}

const tuples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => ({value, ms: Math.random() * 1000}))
function makeAsyncFns() {
  return tuples.map(({value, ms}) => () => makePromise(value, ms))
}
```
