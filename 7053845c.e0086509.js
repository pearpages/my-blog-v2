(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(171)),s={slug:"absolute-paths-in-js-projects",title:"Absolute paths in js projects",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","webpack","vsc","npm"]},i={permalink:"/absolute-paths-in-js-projects",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-12-14-absolute-paths-in-js-projects.md",source:"@site/blog/2020-12-14-absolute-paths-in-js-projects.md",description:"Resources",date:"2020-12-14T00:00:00.000Z",tags:[{label:"js",permalink:"/tags/js"},{label:"webpack",permalink:"/tags/webpack"},{label:"vsc",permalink:"/tags/vsc"},{label:"npm",permalink:"/tags/npm"}],title:"Absolute paths in js projects",readingTime:1.43,truncated:!1,prevItem:{title:"Programming Jokes",permalink:"/programming-jokes"},nextItem:{title:"Javascript influential books",permalink:"/js-influential-books"}},c=[{value:"Resources",id:"resources",children:[]},{value:"How to (know where to find the files)",id:"how-to-know-where-to-find-the-files",children:[{value:"1. Webpack",id:"1-webpack",children:[]},{value:"2. Jest",id:"2-jest",children:[]},{value:"3. Visual Studio Code",id:"3-visual-studio-code",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://medium.com/@justintulk/solve-module-import-aliasing-for-webpack-jest-and-vscode-74007ce4adc9"}),"Solve Module Import Aliasing for Webpack, Jest, and VSCode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/languages/jsconfig"}),"Using webpack aliases")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/38044010/make-vs-code-read-webpack-config-and-recognize-path-with-alias"}),"Make VS code read webpack.config and recognize path with alias?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://webpack.js.org/configuration/resolve/#resolvealias"}),"resolve.alias"))),Object(o.b)("h2",{id:"how-to-know-where-to-find-the-files"},"How to (know where to find the files)"),Object(o.b)("p",null,"In the three scenarios we are replicating the logic concerning where to find the files."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"We need the bundler (",Object(o.b)("strong",{parentName:"li"},"webpack"),") ",Object(o.b)("em",{parentName:"li"},"to know where to find the files")),Object(o.b)("li",{parentName:"ol"},"We need our testing framework (",Object(o.b)("strong",{parentName:"li"},"jest"),") ",Object(o.b)("em",{parentName:"li"},"to know where to find the files")),Object(o.b)("li",{parentName:"ol"},"We need our IDE (",Object(o.b)("strong",{parentName:"li"},"visual studio code"),") ",Object(o.b)("em",{parentName:"li"},"to know where to find the files"))),Object(o.b)("h3",{id:"1-webpack"},"1. Webpack"),Object(o.b)("p",null,"We need to tell webpack how to resolve our absolute paths."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const path = require('path');\n\nmodule.exports = {\n  //...\n  resolve: {\n    alias: {\n      Utilities: path.resolve(__dirname, 'src/utilities/'),\n      Templates: path.resolve(__dirname, 'src/templates/')\n    }\n  }\n};\n")),Object(o.b)("p",null,"another example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{7}","{7}":!0}),"// webpack.config.base.js\nconst path = require('path')\n\nmodule.exports = {\n  // ...\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom',\n      'Cms': path.resolve(__dirname, '..', 'src'),\n      'Test': path.resolve(__dirname, '..', 'test')\n    }\n  }\n}\n")),Object(o.b)("h3",{id:"2-jest"},"2. Jest"),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"package.json")," file we can add a section for the ",Object(o.b)("strong",{parentName:"p"},"jest")," module resolver."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"{35}","{35}":!0}),'{\n  "name": "acme",\n  "version": "1.0.0",\n  "description": "Acme App",\n  "jest": {\n    "testMatch": [\n      "**/?(*.)+(test).js",\n      "**/?(*.)+(it).js"\n    ],\n    "testURL": "https://test.com/",\n    "collectCoverage": true,\n    "coverageDirectory": "../build/coverage",\n    "coverageReporters": [\n      "html",\n      "lcov"\n    ],\n    "collectCoverageFrom": [\n      "src/**/*.js",\n      "**/*.test.js"\n    ],\n    "transform": {\n      "^.+\\\\.js$": "babel-jest"\n    },\n    "setupFiles": [\n      "raf/polyfill",\n      "<rootDir>/test/unit/config/imageOnLoadFix.js",\n      "<rootDir>/test/unit/config/windowScrollToFix.js",\n      "<rootDir>/test/unit/config/messagesConfig.js",\n      "<rootDir>/test/unit/config/setupTests.js",\n      "<rootDir>/test/unit/config/propTypesValidatator.js"\n    ],\n    "snapshotSerializers": [\n      "<rootDir>/node_modules/enzyme-to-json/serializer"\n    ],\n    "moduleNameMapper": {\n      "\\\\.svg$": "<rootDir>/test/unit/__mocks__/fileMock.js",\n      "\\\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",\n      "^Cms(.*)$": "<rootDir>/src$1",\n      "^Test(.*)$": "<rootDir>/test$1"\n    }\n  },\n')),Object(o.b)("h3",{id:"3-visual-studio-code"},"3. Visual Studio Code"),Object(o.b)("p",null,"We need to create a ",Object(o.b)("strong",{parentName:"p"},"jsconfig.json")," that ",Object(o.b)("strong",{parentName:"p"},"visual studio code")," will use for its ",Object(o.b)("em",{parentName:"p"},"intellisense"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:"{4}","{4}":!0}),'{\n  "compilerOptions": {\n    "baseUrl": "./",\n    "paths": {\n      "Cms/*" :["src/*"],\n      "Test/*": ["test/*"]\n    }\n  },\n  "exclude": ["node_modules", "build"]\n}\n')))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);