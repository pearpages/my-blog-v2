---
slug: react-memo
title: React.memo()
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, react, memo]
---

When deciding to update DOM, React first renders your component, then compares the result with the previous render. If the render results are different, React updates the DOM.

When a component is wrapped in `React.memo()`, React renders the component and memoizes the result. Before the next render, **if the new props are the same, React reuses the memoized result skipping the next rendering.**

> React reuses the memoized content as long as the props are the same between renderings.

The same functionality for class components is implemented by **PureComponent**.

By default React.memo() does a **shallow** comparison of props and objects of props.

For example, let’s manually calculate if Movie component props are equal:

```js
function moviePropsAreEqual(prevMovie, nextMovie) {
  return prevMovie.title === nextMovie.title
    && prevMovie.releaseDate === nextMovie.releaseDate;
}

const MemoizedMovie2 = React.memo(Movie, moviePropsAreEqual);
```

> Anyways, use profiling to measure the benefits of applying React.memo().

## When to use React.memo()

1. Pure functional component. Your component is functional and given the same props, always renders the same output.
2. Renders often. Your component renders often.
3. Your component is usually provided with the same props during re-rendering.
4. Your comonent contains a decent amount of UI elements to reason props equality check.

### Best scenario

A common situation that makes a component render with the same props is **being forced to render by a parent component**.

## When not to

- The component isn't heavy and usually renders with different props.
- Performance-related changes applied incorrectly can even harm performance -> use profiler

> Extend PureComponent class or define a custom implementation of shouldComponentUpdate() method if you need memoization for class-based components.

## React.memo() and callback functions

```js
const MemoizedLogout = React.memo(Logout);

function MyApp({ store, cookies }) {
  const onLogout = useCallback(
    () => cookies.clear('session'), 
    [cookies]
  );
  return (
    <div className="main">
      <header>
        <MemoizedLogout
          username={store.username}
          onLogout={onLogout}
        />
      </header>
      {store.content}
    </div>
  );
}
```

`useCallback(() => cookies.clear('session'), [cookies])` always returns the same function instance as long as `cookies` is the same. Memoization of `MemoizedLogout` is fixed.

## React.memo() is a performance hint

Strictly, React uses memoization as a performance hint.

While in most situations React avoids rendering a memoized component, **you shouldn’t count on that to prevent rendering**.

React always re-renders the component if the **state changes**, even if the component is wrapped in React.memo().

---

[Use React.memo() wisely](https://dmitripavlutin.com/use-react-memo-wisely/)
