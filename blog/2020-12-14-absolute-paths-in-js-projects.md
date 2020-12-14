---
slug: absolute-paths-in-js-projects
title: Absolute paths in js projects
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, webpack, vsc, npm]
---

## Resources

- [Solve Module Import Aliasing for Webpack, Jest, and VSCode](https://medium.com/@justintulk/solve-module-import-aliasing-for-webpack-jest-and-vscode-74007ce4adc9)
- [Using webpack aliases](https://code.visualstudio.com/docs/languages/jsconfig)
- [Make VS code read webpack.config and recognize path with alias?](https://stackoverflow.com/questions/38044010/make-vs-code-read-webpack-config-and-recognize-path-with-alias)
- [resolve.alias](https://webpack.js.org/configuration/resolve/#resolvealias)

## How to (know where to find the files)

In the three scenarios we are replicating the logic concerning where to find the files.

1. We need to bundler (**webpack**) _to know where to find the files_
2. We need our testing framework (**jest**) _to know where to find the files_
3. We need our IDE (**visual studio code**) _to know where to find the files_

# 1. Webpack

We need to tell webpack how to resolve our absolute paths.

```js
const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/')
    }
  }
};
```

another example

```js {7}
// webpack.config.base.js
const path = require('path')

module.exports = {
  // ...
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'Cms': path.resolve(__dirname, '..', 'src'),
      'Test': path.resolve(__dirname, '..', 'test')
    }
  }
}
```

## 2. Jest

In the **package.json** file we can add a section for the **jest** module resolver.

```json {35}
{
  "name": "acme",
  "version": "1.0.0",
  "description": "Acme App",
  "jest": {
    "testMatch": [
      "**/?(*.)+(test).js",
      "**/?(*.)+(it).js"
    ],
    "testURL": "https://test.com/",
    "collectCoverage": true,
    "coverageDirectory": "../build/coverage",
    "coverageReporters": [
      "html",
      "lcov"
    ],
    "collectCoverageFrom": [
      "src/**/*.js",
      "**/*.test.js"
    ],
    "transform": {
      "^.+\\.js$": "babel-jest"
    },
    "setupFiles": [
      "raf/polyfill",
      "<rootDir>/test/unit/config/imageOnLoadFix.js",
      "<rootDir>/test/unit/config/windowScrollToFix.js",
      "<rootDir>/test/unit/config/messagesConfig.js",
      "<rootDir>/test/unit/config/setupTests.js",
      "<rootDir>/test/unit/config/propTypesValidatator.js"
    ],
    "snapshotSerializers": [
      "<rootDir>/node_modules/enzyme-to-json/serializer"
    ],
    "moduleNameMapper": {
      "\\.svg$": "<rootDir>/test/unit/__mocks__/fileMock.js",
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
      "^Cms(.*)$": "<rootDir>/src$1",
      "^Test(.*)$": "<rootDir>/test$1"
    }
  },
```

## 3. Visual Studio Code

We need to create a **jsconfig.json** that **visual studio code** will use for its _intellisense_.

```json {4}
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "Cms/*" :["src/*"],
      "Test/*": ["test/*"]
    }
  },
  "exclude": ["node_modules", "build"]
}
```
