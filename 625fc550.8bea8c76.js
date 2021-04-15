(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{131:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),p=(t(0),t(214)),o={slug:"centralized-prop-types",title:"Centralized PropTypes",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["prop-types"]},i={permalink:"/centralized-prop-types",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-03-12-centralized-proptypes.md",source:"@site/blog/2021-03-12-centralized-proptypes.md",description:"PropTypes provide type warnings at runtime",date:"2021-03-12T00:00:00.000Z",tags:[{label:"prop-types",permalink:"/tags/prop-types"}],title:"Centralized PropTypes",readingTime:.41,truncated:!1,prevItem:{title:"Running Promises",permalink:"/running-promises"},nextItem:{title:"NPM tricks",permalink:"/npm-tricks"}},s=[],c={toc:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"PropTypes provide type warnings at runtime")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const { shape, number, string, oneOf } = PropTypes;\n\nUserDetails.propTypes = {\n user: shape({\n   id: number.isRequired,\n   firstName: string.isRequired,\n   lastName: string.isRequired,\n   role: oneOf(['user','admin'])\n};\n")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"/types/index.js\n")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"// types/index.js\nimport { shape, number, string, oneOf } from 'prop-types';\n\nexport const userType = shape({\n  id: number,\n  firstName: string.isRequired,\n  lastName: string.isRequired,\n  company: string,\n  role: oneOf(['user', 'author']),\n  address: shape({\n    id: number.isRequired,\n    street: string.isRequired,\n    street2: string,\n    city: string.isRequired,\n    state: string.isRequired,\n    postal: number.isRequired\n  });\n});\n")),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/react-pattern-centralized-proptypes-f981ff672f3b/"},"Centralize PropTypes")))}u.isMDXComponent=!0},214:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,d=l["".concat(o,".").concat(b)]||l[b]||m[b]||p;return t?a.a.createElement(d,i(i({ref:r},c),{},{components:t})):a.a.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,o=new Array(p);o[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<p;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);