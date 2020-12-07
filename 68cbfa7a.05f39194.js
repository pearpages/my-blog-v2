(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(97)),i={slug:"conditional-validation-with-yup-and-formik",title:"Conditional validation with Yup and Formik",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","formik","yup"]},c={permalink:"/blog/conditional-validation-with-yup-and-formik",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-12-05-conditional-validation-with-yup-and-formik.md",source:"@site/blog/2020-12-05-conditional-validation-with-yup-and-formik.md",description:"https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik",date:"2020-12-05T00:00:00.000Z",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"formik",permalink:"/blog/tags/formik"},{label:"yup",permalink:"/blog/tags/yup"}],title:"Conditional validation with Yup and Formik",readingTime:.37,truncated:!1,prevItem:{title:"Deep equality in js Objects",permalink:"/blog/deep-equality-in-js-objects"},nextItem:{title:"Yup validation with file type and size",permalink:"/blog/yup-validation-with-file-type-and-size"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik"}),"https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik")),Object(o.b)("p",null,"The trick for doing conditional validation is to be part of a bigger validation schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const validationSchema = Yup.object()\n  .shape({\n    isCompany: Yup.boolean()\n    companyName: Yup.string()\n  })\n")),Object(o.b)("p",null,"We want to conditionally validate ",Object(o.b)("strong",{parentName:"p"},"companyName")," using ",Object(o.b)("strong",{parentName:"p"},"isCompany")," value."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const validationSchema = Yup.object()\n  .shape({\n    isCompany: Yup.boolean()\n    companyName: Yup.string()\n      .when('isCompany', {\n        is: true, // it can also be a 'function', e.g. function (isCompany) { return assertion }\n        then: Yup.string().required('Field is required'),\n        otherwise: Yup.string()\n      })\n  })\n")))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,b=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);