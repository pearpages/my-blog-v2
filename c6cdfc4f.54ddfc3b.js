(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),o=(n(0),n(220)),l={slug:"object-oriented-design",title:"Object Oriented Design",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["OO"]},a={permalink:"/object-oriented-design",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-03-11-object-oriented-design.md",source:"@site/blog/2021-03-11-object-oriented-design.md",description:"Symptoms ob Bad Design",date:"2021-03-11T00:00:00.000Z",tags:[{label:"OO",permalink:"/tags/oo"}],title:"Object Oriented Design",readingTime:1.165,truncated:!1,prevItem:{title:"Using environment variables in react",permalink:"/using-environment-variables-in-react"},nextItem:{title:"React Patterns",permalink:"/react-patterns"}},c=[{value:"Symptoms ob Bad Design",id:"symptoms-ob-bad-design",children:[{value:"Rigidity",id:"rigidity",children:[]},{value:"Fragility",id:"fragility",children:[]}]},{value:"Basic Principles of Object Oriented Design",id:"basic-principles-of-object-oriented-design",children:[{value:"1. How to Spot single responsibility principle violation",id:"1-how-to-spot-single-responsibility-principle-violation",children:[]},{value:"2. Open Closed Principle",id:"2-open-closed-principle",children:[]},{value:"3. How to spot Liskov substitution principle violation",id:"3-how-to-spot-liskov-substitution-principle-violation",children:[]},{value:"5. Friends of Dependency inversion principle",id:"5-friends-of-dependency-inversion-principle",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"symptoms-ob-bad-design"},"Symptoms ob Bad Design"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Rigidity"),Object(o.b)("li",{parentName:"ul"},"Fragility"),Object(o.b)("li",{parentName:"ul"},"Immobility"),Object(o.b)("li",{parentName:"ul"},"Viscosity")),Object(o.b)("h3",{id:"rigidity"},"Rigidity"),Object(o.b)("p",null,"Changes are difficult and painful."),Object(o.b)("p",null,"Every change requires cascade of changes in ",Object(o.b)("strong",{parentName:"p"},"dependent modules"),"."),Object(o.b)("p",null,"Scope of change is unpredictable."),Object(o.b)("p",null,"Your manager has a favorite scope multiplier, usually more than 2."),Object(o.b)("h3",{id:"fragility"},"Fragility"),Object(o.b)("p",null,"Closely related to ",Object(o.b)("em",{parentName:"p"},"Rigidity")),Object(o.b)("p",null,"You can never predict the impact of the change."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"You never know what will break"),"."),Object(o.b)("p",null,'The "Christmas tree".'),Object(o.b)("h2",{id:"basic-principles-of-object-oriented-design"},"Basic Principles of Object Oriented Design"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"S"),"ingle responsibility principle. A class should have only one reason to change."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"O"),"pen-Closed principle. Modules should be open for extension but closed for modification."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"L"),"iskov substitution principle. Basically means that children classes should not break parent's interface."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"I"),"nterface segregation principle."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"D"),"ependency inversion principle. High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend upon details. Details should depend upon abstractions.")),Object(o.b)("h3",{id:"1-how-to-spot-single-responsibility-principle-violation"},"1. How to Spot single responsibility principle violation"),Object(o.b)("p",null,"Member groups or even coalitions, boolean flags, hard to name classes, long unit tests, hard to test-double units."),Object(o.b)("h3",{id:"2-open-closed-principle"},"2. Open Closed Principle"),Object(o.b)("p",null,"Design patterns: Visitor, Decorator."),Object(o.b)("h3",{id:"3-how-to-spot-liskov-substitution-principle-violation"},"3. How to spot Liskov substitution principle violation"),Object(o.b)("p",null,"Derivative that tries to do less than the base class."),Object(o.b)("p",null,"Instanceof checks."),Object(o.b)("p",null,"Hiding or stubbing parent methods."),Object(o.b)("p",null,"Polymorphic if statements."),Object(o.b)("h3",{id:"5-friends-of-dependency-inversion-principle"},"5. Friends of Dependency inversion principle"),Object(o.b)("p",null,"Abstractions (Interfaces/Abstract Classes)"),Object(o.b)("p",null,"Patterns"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Factory, Abstract Factory"),Object(o.b)("li",{parentName:"ul"},"Adapter"),Object(o.b)("li",{parentName:"ul"},"Service Locator")))}p.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,a(a({ref:t},s),{},{components:n})):r.a.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);