(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),a=(t(0),t(143)),o={slug:"multiple-users-in-gitconfig",title:"Multiple users in gitconfig",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["git"]},c={permalink:"/multiple-users-in-gitconfig",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-12-12-multiple-users-in-gitconfig.md",source:"@site/blog/2020-12-12-multiple-users-in-gitconfig.md",description:"[Can I specify multiple users for myself in .gitconfig?",date:"2020-12-12T00:00:00.000Z",tags:[{label:"git",permalink:"/tags/git"}],title:"Multiple users in gitconfig",readingTime:.525,truncated:!1,prevItem:{title:"Flair Espresso Signature",permalink:"/flair-espresso-signature"},nextItem:{title:"How to remove array duplicates in ES6",permalink:"/how-to-remove-array-duplicates-in-es6"}},l=[{value:"1. Configure an individual repo which overrides the global configuration",id:"1-configure-an-individual-repo-which-overrides-the-global-configuration",children:[]},{value:"2. Use conditional includes",id:"2-use-conditional-includes",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.a)("p",null,Object(a.a)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/4220416/can-i-specify-multiple-users-for-myself-in-gitconfig"}),"Can I specify multiple users for myself in .gitconfig?\n")),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},"Configure an individual repo which overrides the global configuration"),Object(a.a)("li",{parentName:"ol"},"Use conditional includes")),Object(a.a)("h2",{id:"1-configure-an-individual-repo-which-overrides-the-global-configuration"},"1. Configure an individual repo which overrides the global configuration"),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{}),'git config user.name "Your Name Here"\ngit config user.email your@email.com\n')),Object(a.a)("p",null,"Whereas the default user/email is configured in your ",Object(a.a)("inlineCode",{parentName:"p"},"~/.gitconfig")),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{}),'git config --global user.name "Your Name Here"\ngit config --global user.email your@email.com\n')),Object(a.a)("h2",{id:"2-use-conditional-includes"},"2. Use conditional includes"),Object(a.a)("p",null,"In the global config ",Object(a.a)("inlineCode",{parentName:"p"},"~/.gitconfig")),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{}),'[user]\n    name = John Doe\n    email = john@doe.tld\n\n[includeIf "gitdir:~/work/"]\n    path = ~/work/.gitconfig\n')),Object(a.a)("p",null,"Work specific config ",Object(a.a)("inlineCode",{parentName:"p"},"~/work/.gitconfig")),Object(a.a)("pre",null,Object(a.a)("code",Object(r.a)({parentName:"pre"},{}),"[user]\n    email = john.doe@company.tld\n")))}p.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(t),f=r,m=g["".concat(o,".").concat(f)]||g[f]||s[f]||a;return t?i.a.createElement(m,c(c({ref:n},u),{},{components:t})):i.a.createElement(m,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);