(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(143)),c={slug:"definitions",title:"Functional Programming Useful Definitions",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["fp","js"]},l={permalink:"/definitions",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-11-14-fp-useful-definitions.md",source:"@site/blog/2020-11-14-fp-useful-definitions.md",description:"Closures A closure is the bundling of a function with its lexical environment. Closures are created at runtime during function creation time. Closures are how partial applications get their fixed arguments.",date:"2020-11-14T00:00:00.000Z",tags:[{label:"fp",permalink:"/tags/fp"},{label:"js",permalink:"/tags/js"}],title:"Functional Programming Useful Definitions",readingTime:2.985,truncated:!1,prevItem:{title:"Yup validation with file type and size",permalink:"/yup-validation-with-file-type-and-size"},nextItem:{title:"Reduce Usage Examples",permalink:"/reduce"}},i=[],u={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Closures")," A closure is the bundling of a function with its lexical environment. Closures are created at runtime during function creation time. Closures are how partial applications get their fixed arguments.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Compose")),Object(o.a)("pre",{parentName:"blockquote"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)\n"))),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Currying")," A curried function is a function that takes multiple parameters one at a time, by taking the first argument, and returning a series of functions which each take the next argument until all the parameters have been fixed, and the function application can complete, at which point, the resulting value si returned. ")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Data Last")," Style where you take the specializing parameters first, and take the data the function will act last.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Destructuring")),Object(o.a)("pre",{parentName:"blockquote"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [t, u] = ['hello', 'world']\nt // 'hello'\nu // 'world'\n")),Object(o.a)("pre",{parentName:"blockquote"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { blop: blep } = { blop: 'hello world' }\nblep // 'hello world'\n"))),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Expression")," is a piece of code which evaluates to some value.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"First class functions")," The ability to use functions as data values.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"First order function")," don't take function as an argument or returns a function as output.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Flip")),Object(o.a)("pre",{parentName:"blockquote"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const flip = fn => a => b => fn(b)(a)\n"))),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Functor")," is a data structure that can be mapped over. In other words, it's container which has an interface which can be used to apply a function to the values inside it.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Higher order function")," is any function tat takes a function as an argument, returns a function or both.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Immutability")," An immutable object is an object that can't be modified after it's created.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Method")," A method is a function associated with an object.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Non-determinism")," parallel processing + mutable state.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Partial application")," it's a function which has some arguments fixed inside its closure scope. A function with some of its parameters fixed is to be ",Object(o.a)("em",{parentName:"p"},"partially applied")," All curried functions return partial applications.\nit's a function which has already been applied to some - but not yet all - of its arguments. The arguments which the function has already been applied to are called ",Object(o.a)("em",{parentName:"p"},"fixed parameters"),".")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Pipe")),Object(o.a)("pre",{parentName:"blockquote"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)\n"))),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Point-free style")," is a style of programming where function definitions do not make reference to the function's arguments.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Pure functions")," given the same input, will always return the same output. Produce no side effects.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Reduce (aka: fold, accumulate, reduceLeft)")," lets you iterate over a list, applying a function to an accumulated value and the next item in the list, until the iteration is complete and the accumulated value gets returned.\nFrequently, it's the most elegant way to do any non-trivial processing on a collection of items.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Referentially transparent")," When an expression can be replaced with its corresponding value without changing the meaning of the program.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"REPL")," (Read, Eval, Print, Loop)")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Stream")," A list expressed over time.")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Trace")),Object(o.a)("pre",{parentName:"blockquote"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const trace = label => value => {\nconsole.log(`${ label }: ${ value }`)}\nreturn value\n")),Object(o.a)("pre",{parentName:"blockquote"},Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const h = pipe(\n  g,\n  f,\n  trace('after f')\n)\n"))),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("strong",{parentName:"p"},"Trie")," In many functional programming languages, there are special immutable data structures called trie which are effectively deep frozen - meaning no property can change, regardless of the level of the property in the object hierarchy.")))}p.isMDXComponent=!0},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,f=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return a?r.a.createElement(f,l(l({ref:t},u),{},{components:a})):r.a.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);