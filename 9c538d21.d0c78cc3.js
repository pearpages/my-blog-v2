(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{170:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(3),a=r(7),s=(r(0),r(214)),o={slug:"running-promises",title:"Running Promises",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","promises"]},i={permalink:"/running-promises",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-04-15-running-promises.md",source:"@site/blog/2021-04-15-running-promises.md",description:"Promises start running immediately after creation !!!",date:"2021-04-15T00:00:00.000Z",tags:[{label:"js",permalink:"/tags/js"},{label:"promises",permalink:"/tags/promises"}],title:"Running Promises",readingTime:.845,truncated:!1,nextItem:{title:"Centralized PropTypes",permalink:"/centralized-prop-types"}},c=[],u={toc:c};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Promises start running immediately after creation !!!")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"function sequentially(asyncFns) {\n  return asyncFns.reduce((previous, current) => previous\n    .then(async res => {\n      const next = await current()\n      return [...res, next]\n    })\n    , Promise.resolve([]))\n}\n\nfunction inParallel(asyncFns) {\n  return new Promise(async resolve => {\n\n    let pending = asyncFns.length\n    const result = []\n\n    asyncFns.forEach((asyncFn) => {\n      asyncFn().then(res => {\n        result.push(res)\n        if (--pending === 0) {\n          resolve(result)\n        }\n      })\n    })\n\n  })\n}\n\nfunction inParallelButInOrder(promises) {\n  return Promise.all(promises)\n}\n\n(async () => {\n  await runAsyncAndLog(sequentially(makeAsyncFns()))\n  await runAsyncAndLog(inParallel(makeAsyncFns()))\n  await runAsyncAndLog(inParallelButInOrder(makeAsyncFns().map(promise => promise())))\n})()\n")),Object(s.b)("p",null,"The helper functions"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"function getMs(initialMs) {\n  const now = new Date().getTime()\n  return now - initialMs\n}\n\nasync function runAsyncAndLog(promise) {\n  const initialMs = new Date().getTime()\n  const res = await promise\n  console.log(res, getMs(initialMs))\n}\n\nfunction makePromise(value, ms) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(value), ms)\n  })\n}\n\nconst tuples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => ({value, ms: Math.random() * 1000}))\nfunction makeAsyncFns() {\n  return tuples.map(({value, ms}) => () => makePromise(value, ms))\n}\n")))}l.isMDXComponent=!0},214:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return y}));var t=r(0),a=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=t,y=p["".concat(o,".").concat(f)]||p[f]||m[f]||s;return r?a.a.createElement(y,i(i({ref:n},u),{},{components:r})):a.a.createElement(y,i({ref:n},u))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);