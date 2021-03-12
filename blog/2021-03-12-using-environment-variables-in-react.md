---
slug: using-environment-variables-in-react
title: Using environment variables in react
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [react, env]
---

When working with **React**, environment variables are variables that are available through a global `process.env` _Object_. That global Object is provided by your environment through **NodeJs**. And because we don’t have NodeJs in the browser, we’re going to need **webpack**.

- using **npm scripts**
- `.env` file

## Method 1: Using npm scripts (thanks to webpack)

### package.json

```json
{
  scripts: {
    "dev": "webpack --env.API_URL=http://localhost:8000 --config webpack.config.dev.js",
    "build": "webpack --env.API_URL=https://www.myapi.com --config webpack.config.build.js"
  }
}
```

### webpack config file

`{process.env.API_URL}` will be replaced when we compile our code. The problem is, we didn’t tell webpack to compile those variables to real values. Let’s do that in our webpack config file with the DefinePlugin webpack plugin:

```js
module.exports = (env) => {
  // create a nice object from the env variable
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
```

### React

```jsx
const App = () => <h1>{process.env.API_URL}</h1>;
```

## Method 2: Using an `.env` file to set environment variables

:::info
To prevent people from finding out your local database password is the same one you use for every single one of your accounts on the internet , add the `.env` file to your `.gitignore`.
:::

```.env
API_URL=http://localhost:8000
```

```
$ npm install --save-dev dotenv
```

### Webpack config file

```js
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config().parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
```

### Different environment variables for different environments

- `.env` (**production**)
- `.env.development` (**development**)

```json
{
  "scripts": {
    "dev": "webpack --env.ENVIRONMENT=development --config webpack.config.dev.js",
    "build": "webpack --env.ENVIRONMENT=production --config webpack.config.build.js"
  }
}
```

```js
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs'); // to check if the file exists
const path = require('path'); // to get the current path

module.exports = (env) => {
  // Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);
  
  // Create the fallback path (the production .env)
  const basePath = currentPath + '/.env';

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + '.' + env.ENVIRONMENT;

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  
  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  };
```

[Using environment variables in React](https://trekinbami.medium.com/using-environment-variables-in-react-6b0a99d83cf5)