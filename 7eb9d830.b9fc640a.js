(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),s=(n(0),n(163)),c={slug:"async-functions-with-use-effect",title:"Async functions and useEffect",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["react","async","useEffect"]},i={permalink:"/async-functions-with-use-effect",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-01-14-async-functions-with-use-effect.md",source:"@site/blog/2021-01-14-async-functions-with-use-effect.md",description:"Bear in mind",date:"2021-01-14T00:00:00.000Z",tags:[{label:"react",permalink:"/tags/react"},{label:"async",permalink:"/tags/async"},{label:"useEffect",permalink:"/tags/use-effect"}],title:"Async functions and useEffect",readingTime:1.095,truncated:!1,prevItem:{title:"Javascript Objects",permalink:"/js-objects"},nextItem:{title:"MySQL database with Docker",permalink:"/mysql-with-docker"}},o=[{value:"Bear in mind",id:"bear-in-mind",children:[]},{value:"The issue in React",id:"the-issue-in-react",children:[]},{value:"What will not work",id:"what-will-not-work",children:[]},{value:"Simple solutions",id:"simple-solutions",children:[{value:"1. Create a separate async function outside useEffect and call it from the useEffect:",id:"1-create-a-separate-async-function-outside-useeffect-and-call-it-from-the-useeffect",children:[]},{value:"2. Create a separate async function inside useEffect and call it from useEffect:",id:"2-create-a-separate-async-function-inside-useeffect-and-call-it-from-useeffect",children:[]},{value:"3. Use an IIFE(Immediately Invoked Function Expression):",id:"3-use-an-iifeimmediately-invoked-function-expression",children:[]}]},{value:"Resources",id:"resources",children:[]}],u={rightToc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"bear-in-mind"},"Bear in mind"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"When we declare any function as ",Object(s.b)("strong",{parentName:"p"},"async"),", it returns a ",Object(s.b)("strong",{parentName:"p"},"promise"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"async () => 3\n// the same as\n() => Promise.resolve(3)\n")),Object(s.b)("h2",{id:"the-issue-in-react"},"The issue in React"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"An ",Object(s.b)("strong",{parentName:"p"},"effect")," function must not return anything besides a function, which is used for clean-up.")),Object(s.b)("h2",{id:"what-will-not-work"},"What will not work"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"useEffect(async () => {\n  // ...\n}, [])\n")),Object(s.b)("h2",{id:"simple-solutions"},"Simple solutions"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Create a separate async function ",Object(s.b)("strong",{parentName:"li"},"outside")," useEffect and call it from the useEffect."),Object(s.b)("li",{parentName:"ol"},"Create a separate async function ",Object(s.b)("strong",{parentName:"li"},"inside")," useEffect and call it from useEffect."),Object(s.b)("li",{parentName:"ol"},"Use an IIFE(Immediately Invoked Function Expression).")),Object(s.b)("h3",{id:"1-create-a-separate-async-function-outside-useeffect-and-call-it-from-the-useeffect"},"1. Create a separate async function outside useEffect and call it from the useEffect:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"async function getUsers() {\n const users = await axios.get('https://randomuser.me/api/?page=1&results=10&nat=us');\n setUsers(users.data.results);\n}\n\nuseEffect(() => {\n getUsers();\n}, []);\n")),Object(s.b)("h3",{id:"2-create-a-separate-async-function-inside-useeffect-and-call-it-from-useeffect"},"2. Create a separate async function inside useEffect and call it from useEffect:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'useEffect(() => {\n  async function getUsers() {\n    const users = await axios.get("https://randomuser.me/api/?page=1&results=10&nat=us");\n    setUsers(users.data.results);\n  }\n\n  getUsers();\n}, []);\n')),Object(s.b)("h3",{id:"3-use-an-iifeimmediately-invoked-function-expression"},"3. Use an IIFE(Immediately Invoked Function Expression):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'useEffect(() => {\n (async () => {\n  const users = await axios.get("https://randomuser.me/api/?page=1&results=10&nat=us");\n  setUsers(users.data.results);\n })();\n}, []);\n')),Object(s.b)("h2",{id:"resources"},"Resources"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/javascript-in-plain-english/handling-api-calls-using-async-await-in-useeffect-hook-990fb4ae423"}),"Handle API calls using async await with the useEffect hook")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435"}),"How to use async function in React hooks useEffect (Typescript/JS)?"))))}l.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=l(n),b=a,m=f["".concat(c,".").concat(b)]||f[b]||p[b]||s;return n?r.a.createElement(m,i(i({ref:t},u),{},{components:n})):r.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<s;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);