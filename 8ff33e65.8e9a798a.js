(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(229)),c={slug:"3 typescript tricks",title:"3 Typescript tricks",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["typescript"]},i={permalink:"/3 typescript tricks",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-10-18-3-typescript-tricks.md",source:"@site/blog/2021-10-18-3-typescript-tricks.md",description:"1. Readonly",date:"2021-10-18T00:00:00.000Z",tags:[{label:"typescript",permalink:"/tags/typescript"}],title:"3 Typescript tricks",readingTime:.75,truncated:!1,prevItem:{title:"Shuffling an array",permalink:"/shuffling-an-array"},nextItem:{title:"Dependency Injection",permalink:"/dependency injection"}},s=[{value:"Readonly",id:"readonly",children:[]},{value:"Any vs Unknown",id:"any-vs-unknown",children:[]},{value:"Records",id:"records",children:[]},{value:"Resources",id:"resources",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"Readonly<T>")),Object(o.b)("li",{parentName:"ol"},"Any vs Unknown"),Object(o.b)("li",{parentName:"ol"},"Records")),Object(o.b)("h2",{id:"readonly"},"Readonly"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"function sortNumbers(array: Readonly<Array<number>>) {\n  return [...array].sort((a, b) => a - b);\n}\n")),Object(o.b)("h2",{id:"any-vs-unknown"},"Any vs Unknown"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"any")," is basically saying the TypeScript compiler to not check that bit of code. Avoid using any whenever you can! It's better to use ",Object(o.b)("strong",{parentName:"p"},"unknown")," instead because it enforces you to check the type of the value before using it or else it won't compile!")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// ... other code\n\ntype Human = { name: string; age: number }\n\nsomeArray.forEach((entry) => {\n  // if it's an object, we know it's a Human\n  if (typeof entry === 'object') {\n    console.log((entry as Human).age)\n  }\n})\n")),Object(o.b)("h2",{id:"records"},"Records"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"type AllowedKeys = 'name' | 'age'\n\n// use a type here instead of interface\ntype Person = Record<AllowedKeys, unknown>\n\nconst Human: Person = {\n  name: 'Steve',\n  age: 42,\n}\n")),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.cstrnt.dev/blog/three-typescript-tricks?utm_source=Pointer&utm_campaign=dc965ea154-ISSUE_260&utm_medium=email&utm_term=0_6ba2b83261-dc965ea154-608322026"},"Original Post")))}l.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=r,m=u["".concat(c,".").concat(y)]||u[y]||b[y]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);