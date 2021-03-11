---
slug: react-patterns
title: React Patterns
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [react, patterns]
---

## Elements

[Elements](https://reactjs.org/docs/glossary.html#elements) are anything inside angle brackets.

```jsx
<div></div>
<Greeting />
```

## Components

[Components](https://reactjs.org/docs/glossary.html#components) return Elements.

```jsx
function Greeting() {
  return <div>Hi there!</div>;
}
```

## defaultProps

```jsx
function Greeting(props) {
  return <div>Hi {props.name}!</div>;
}
Greeting.defaultProps = {
  name: "Guest",
};
```

## Destructuring props

Destructuring assignment is used a lot in function components.

```jsx
function Greeting({ name }) {
  return <div>Hi {name}!</div>;
}
```

## Render prop

```jsx
const Width = ({ children }) => children(500);
```

```jsx
<Width>{(width) => <div>window is {width}</div>}</Width>
```

```js
class WindowWidth extends React.Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth }, () =>
      window.addEventListener("resize", ({ target }) =>
        this.setState({ width: target.innerWidth })
      )
    );
  }

  render() {
    return this.props.children(this.state.width);
  }
}
```

## Layout component

```jsx
<HorizontalSplit
  startSide={<SomeSmartComponent />}
  endSide={<AnotherSmartComponent />}
/>
```

## Higher-order component

This is a powerful pattern for providing fetching and providing data to any number of function components.

```jsx
const Connect = ComposedComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { name: "" };
    }

    componentDidMount() {
      // this would fetch or connect to a store
      this.setState({ name: "Michael" });
    }

    render() {
      return <ComposedComponent {...this.props} name={this.state.name} />;
    }
  };
```

```js
const ConnectedMyComponent = Connect(Greeting);
```

## State hoisting

The state is hoisted to the container, by the provided callback, where it's used to update local state. This sets a nice clear boundary and maximizes the re-usability of function component.

---

- [React Patterns](https://reactpatterns.com/)
- [Glossary of React Terms](https://reactjs.org/docs/glossary.html)
