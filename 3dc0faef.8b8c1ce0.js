(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(225)),c={slug:"deep-equality-in-js-objects",title:"Deep equality in js Objects",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","objects"]},i={permalink:"/deep-equality-in-js-objects",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-12-05-deep-equality-in-js-objects.md",source:"@site/blog/2020-12-05-deep-equality-in-js-objects.md",description:"How to Compare Objects in JavaScript",date:"2020-12-05T00:00:00.000Z",tags:[{label:"js",permalink:"/tags/js"},{label:"objects",permalink:"/tags/objects"}],title:"Deep equality in js Objects",readingTime:.58,truncated:!1,prevItem:{title:"Change mac folder icons",permalink:"/change-mac-folder-icons"},nextItem:{title:"Conditional validation with Yup and Formik",permalink:"/conditional-validation-with-yup-and-formik"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://dmitripavlutin.com/how-to-compare-objects-in-javascript/"},"How to Compare Objects in JavaScript")),Object(o.b)("p",null,"The deep equality is similar to the shallow equality, but with one difference. During the shallow check, if the compared properties are objects, a recursive shallow equality check is performed on these nested objects."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function deepEqual(object1, object2) {\n  const keys1 = Object.keys(object1);\n  const keys2 = Object.keys(object2);\n\n  if (keys1.length !== keys2.length) {\n    return false;\n  }\n\n  for (const key of keys1) {\n    const val1 = object1[key];\n    const val2 = object2[key];\n    const areObjects = isObject(val1) && isObject(val2);\n    if (\n      areObjects && !deepEqual(val1, val2) ||\n      !areObjects && val1 !== val2\n    ) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction isObject(object) {\n  return object != null && typeof object === 'object';\n}\n")))}p.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,j=u["".concat(c,".").concat(f)]||u[f]||b[f]||o;return n?a.a.createElement(j,i(i({ref:t},s),{},{components:n})):a.a.createElement(j,i({ref:t},s))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);