(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(97)),o={slug:"yup-validation-with-file-type-and-size",title:"Yup validation with file type and size",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","formik","yup"]},l={permalink:"/blog/yup-validation-with-file-type-and-size",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-12-05-yup-validation-with-file-type-and-size.md",source:"@site/blog/2020-12-05-yup-validation-with-file-type-and-size.md",description:"Resources",date:"2020-12-05T00:00:00.000Z",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"formik",permalink:"/blog/tags/formik"},{label:"yup",permalink:"/blog/tags/yup"}],title:"Yup validation with file type and size",readingTime:.34,truncated:!1,prevItem:{title:"Conditional validation with Yup and Formik",permalink:"/blog/conditional-validation-with-yup-and-formik"},nextItem:{title:"Romulo Cintra's youtube channel",permalink:"/blog/romulo-cintra-youtube-channel"}},c=[{value:"Resources",id:"resources",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/formium/formik/issues/926"}),"https://github.com/formium/formik/issues/926")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://hackernoon.com/formik-handling-files-and-recaptcha-209cbeae10bc"}),"Formik \u2014 Handling files and reCaptcha")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/4wrrx8qok0"}),"Sandbox Example"))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"The trick is to use ",Object(i.b)("strong",{parentName:"p"},"mixed")," schema to be able to access the file object."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const FILE_SIZE = 160 * 1024\nconst SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']\n\nconst iconFileSchema = Yup.mixed()\n  .test('fileSize', 'File size is too large', value => value.size <= FILE_SIZE)\n  .test('fileType', 'Unsupported File Format', value => SUPPORTED_FORMATS.includes(value.type))\n")))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(f,l(l({ref:t},u),{},{components:n})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);