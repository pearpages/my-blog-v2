(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),c=(n(0),n(182)),r={slug:"js-functions",title:"Javascript Functions",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","objects"]},i={permalink:"/js-functions",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-01-16-js-functions.md",source:"@site/blog/2021-01-16-js-functions.md",description:"A function encloses a set of statements.",date:"2021-01-16T00:00:00.000Z",tags:[{label:"js",permalink:"/tags/js"},{label:"objects",permalink:"/tags/objects"}],title:"Javascript Functions",readingTime:8.985,truncated:!1,prevItem:{title:"Testing a React component when unmounting with testing-library",permalink:"/testing-a-react-component-when-unmounting-with-testing-library"},nextItem:{title:"Javascript Objects",permalink:"/js-objects"}},s=[{value:"Function Objects",id:"function-objects",children:[]},{value:"Function Literal",id:"function-literal",children:[]},{value:"Invocation",id:"invocation",children:[{value:"1. The Method Invocation Pattern",id:"1-the-method-invocation-pattern",children:[]},{value:"2. The Function Invocation Pattern",id:"2-the-function-invocation-pattern",children:[]},{value:"3. The Constructor Invocation Pattern",id:"3-the-constructor-invocation-pattern",children:[]},{value:"4. The Apply Invocation Pattern",id:"4-the-apply-invocation-pattern",children:[]}]},{value:"Arguments",id:"arguments",children:[]},{value:"Return",id:"return",children:[]},{value:"Exceptions",id:"exceptions",children:[]},{value:"Augmenting Types",id:"augmenting-types",children:[]},{value:"Recursion",id:"recursion",children:[{value:"The towers of Hanoi",id:"the-towers-of-hanoi",children:[]},{value:"Walk the DOM",id:"walk-the-dom",children:[]},{value:"Tail recursion optimization",id:"tail-recursion-optimization",children:[]}]},{value:"Scope",id:"scope",children:[]},{value:"Closure",id:"closure",children:[]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Module",id:"module",children:[]},{value:"Cascade",id:"cascade",children:[]},{value:"Curry",id:"curry",children:[]},{value:"Memoization",id:"memoization",children:[]},{value:"Resources",id:"resources",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A function encloses a set of statements."),Object(c.b)("p",null,"They are used for:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"code reuse"),Object(c.b)("li",{parentName:"ul"},"information hiding"),Object(c.b)("li",{parentName:"ul"},"composition"),Object(c.b)("li",{parentName:"ul"},"specify behavior of objects")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Generally, the craft of programming is the factoring of a set of requirements into a set of ",Object(c.b)("strong",{parentName:"p"},"functions")," and ",Object(c.b)("strong",{parentName:"p"},"data structures"),".")),Object(c.b)("h2",{id:"function-objects"},"Function Objects"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Functions in javascript are ",Object(c.b)("strong",{parentName:"p"},"objects"),".")),Object(c.b)("p",null,"Objects produced from object literals are linked to ",Object(c.b)("inlineCode",{parentName:"p"},"Object.prototype"),". Function objects are linked to ",Object(c.b)("inlineCode",{parentName:"p"},"Function.prototype")," (which is linked to ",Object(c.b)("inlineCode",{parentName:"p"},"Object.prototype"),"). Every function is also created with two additional hidden properties: the function's context and the code that implements the function's behavior:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"prototype"),Object(c.b)("li",{parentName:"ol"},"context (this)"),Object(c.b)("li",{parentName:"ol"},"code implementation")),Object(c.b)("p",null,"Every function object is created with a ",Object(c.b)("em",{parentName:"p"},"prototype")," property. Its value is an object with a ",Object(c.b)("em",{parentName:"p"},"constructor")," property whose value is the function. **This is distinct from the hidden link to ",Object(c.b)("inlineCode",{parentName:"p"},"Function.prototype"),"."),Object(c.b)("p",null,"Since functions are objects, they can be used like any other value. Also, since functions are objects, functions can have methods."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const helloWorld = function () { console.log('hello World') }\nconst goodByeWorld = function () { console.log('Goodbye World') }\n\nconst callMyFunctions = function (...myFunctions) { myFunctions.forEach(fn => fn()) }\ncallMyFunctions(helloWorld, goodByeWorld) // 'hello World', 'Goodbye World'\n")),Object(c.b)("h2",{id:"function-literal"},"Function Literal"),Object(c.b)("p",null,"Function objects are created with function literals:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const add = function (a, b) {\n  return a + b;\n}\n")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"reserved word ",Object(c.b)("inlineCode",{parentName:"li"},"function")),Object(c.b)("li",{parentName:"ol"},"optional function name"),Object(c.b)("li",{parentName:"ol"},"parameters"),Object(c.b)("li",{parentName:"ol"},"statements")),Object(c.b)("p",null,"A function literal can appear anywhere that an expression can appear. Functions can be defined inside other functions. An inner function of course has access to its parameters and variables. An inner function also enjoys access to the parameters and variables of the functions it is nested within."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"The function object created by a function literal contains a link to that outer context. This is called ",Object(c.b)("strong",{parentName:"p"},"closure"),".")),Object(c.b)("h2",{id:"invocation"},"Invocation"),Object(c.b)("p",null,"Invoking a function suspends the execution of the current function, passing control and parameters to the new function. In addition to the declared parameters, every function receives two additional parameters: ",Object(c.b)("strong",{parentName:"p"},"this")," and ",Object(c.b)("strong",{parentName:"p"},"arguments"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function myFunction(a, b, c, d) {\n  console.log(a, b, c, d)\n}\n\nmyFunction(1, 2) // 1, 2, undefined, undefined\n")),Object(c.b)("p",null,"The this parameter value is determined by the ",Object(c.b)("strong",{parentName:"p"},"invocation pattern"),"."),Object(c.b)("p",null,"There are four patterns of invocation in Javascript. The patterns differ in how the bonus parameter ",Object(c.b)("strong",{parentName:"p"},"this")," is initialized:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"the method invocation"),Object(c.b)("li",{parentName:"ol"},"the function invocation"),Object(c.b)("li",{parentName:"ol"},"the constructor invocation"),Object(c.b)("li",{parentName:"ol"},"the apply invocation")),Object(c.b)("h3",{id:"1-the-method-invocation-pattern"},"1. The Method Invocation Pattern"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"When a function is stored as a property of an object, we call it a ",Object(c.b)("strong",{parentName:"p"},"method"),". ")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"When a method is invoked, this is bound to that object.")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const myObject = {\n  value: 0,\n  increment: function (inc) {\n    this.value += typeof inc === "number" ? inc : 1;\n  }\n};\n\nmyObject.increment(); // 1\nconsole.log(myObject.value);\nmyObject.increment(); // 2\nconsole.log(myObject.value);\nmyObject.increment(4);\nconsole.log(myObject.value); // 6\n')),Object(c.b)("h3",{id:"2-the-function-invocation-pattern"},"2. The Function Invocation Pattern"),Object(c.b)("p",null,"When a function is not the property of an object, then is invoked as a function:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function add(a, b) {\n  return a + b;\n}\n\nconst sum = add(3, 4) // 7\n")),Object(c.b)("p",null,"When a function is invoked with this pattern, ",Object(c.b)("strong",{parentName:"p"},"this")," is bound to the ",Object(c.b)("strong",{parentName:"p"},"global")," (window/global) object. This was a ",Object(c.b)("strong",{parentName:"p"},"mistake")," in the design of the language."),Object(c.b)("p",null,"A consequence of this error is that a method cannot employ an inner function to help it do its work because the inner function does not share the method's access to the object as its ",Object(c.b)("strong",{parentName:"p"},"this")," is bound to th wrong (global) value."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function add(a, b) {\n  return a + b;\n}\n\nwindow.value = 5 // global object\n\nconst myObject = {\n  value: 2,\n  double: function () {\n    const helper = function () {\n      this.value = add(this.value, this.value);\n    };\n    helper();\n  }\n};\n\nmyObject.double();\nconsole.log(myObject.value); // 2\nconsole.log(window.value); // 10, global object has been updated\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function add(a, b) {\n  return a + b;\n}\n\nconst myObject = {\n  value: 2,\n  double: function () {\n    const that = this; // Workaround\n    const helper = function () {\n      that.value = add(that.value, that.value);\n    };\n    helper();\n  }\n};\n\nmyObject.double();\nconsole.log(myObject.value); // 4\n")),Object(c.b)("h3",{id:"3-the-constructor-invocation-pattern"},"3. The Constructor Invocation Pattern"),Object(c.b)("p",null,"If a function is invoked with the ",Object(c.b)("strong",{parentName:"p"},"new")," prefix, then a new object will be created with a hidden link to the value of the function's prototype member, and ",Object(c.b)("strong",{parentName:"p"},"this")," will be bound to that object."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const quo = function (string) {\n  this.status = string;\n}\n\nquo('hello') // as explained in the Function Invocation Pattern, this is bound to the **global** object\nconsole.log(window.status) // 'hello'\n")),Object(c.b)("p",null,"Functions that are intended to be used with the ",Object(c.b)("strong",{parentName:"p"},"new")," prefix are called ",Object(c.b)("strong",{parentName:"p"},"constructors"),". By convention, they are kept in variables with a capitalized name."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Quo = function (string) {\n  this.status = string;\n}\n\nQuo.prototype.getStatus = function () {\n  return this.status;\n}\n\nconst aQuo = new Quo('confused');\nconsole.log(aQuo.getStatus())\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Use of this style of constructor functions is not recommended.")),Object(c.b)("h3",{id:"4-the-apply-invocation-pattern"},"4. The Apply Invocation Pattern"),Object(c.b)("p",null,"The apply method lets us construct an array of arguments to use to invoke a function. It also lets us choose the value of ",Object(c.b)("strong",{parentName:"p"},"this"),". The apply method takes two parameters. The first is the value that should be bound to this. The second is an array of parameters."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const add = function (a, b) {\n  return a + b;\n}\nconst sum = add.apply(null, [3, 4]) // this, parameters[]\nconsole.log(sum) // 7\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Quo = function (string) {\n  this.status = string;\n}\n\nQuo.prototype.getStatus = function () {\n  return this.status;\n}\n\nconst statusObject = {\n  status: 'OK'\n}\n\nconst status = Quo.prototype.getStatus.apply(statusObject); // statusObject is the **this** and no parameters[] needed\nconsole.log(status); // 'OK'\n\nconst status2 = Quo.prototype.getStatus.call(statusObject); // call also uses the **this** and the arguments follow separated by comas\nconsole.log(status2); // 'OK'\n")),Object(c.b)("h2",{id:"arguments"},"Arguments"),Object(c.b)("p",null,"A bons parameter that is available to functions when they are invoked is the arguments 'array'. It gives the function access to all the arguments that were supplied with the invocation, including excess arguments that were not assigned to parameters."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Because of a design error, arguments is ",Object(c.b)("strong",{parentName:"p"},"not")," really an array.")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function myFunction() {\n  console.log(arguments.length);\n  console.log(arguments);\n}\n\nmyFunction(1, 2, 3, 4, 5, 6); // 6 // [1, 2, 3, 4, 5, 6]\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function sum() {\n  return [...arguments].reduce((current, total) => total += current, 0);\n}\n\nconsole.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); // 36\n")),Object(c.b)("h2",{id:"return"},"Return"),Object(c.b)("p",null,"A function always returns a value. If the return value is not specified, the ",Object(c.b)("em",{parentName:"p"},"undefined")," is returned."),Object(c.b)("p",null,"If the function was invoked with the ",Object(c.b)("strong",{parentName:"p"},"new")," prefix and the return value is not an object, then ",Object(c.b)("strong",{parentName:"p"},"this")," (the new object) is return instead."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function a() {\n  return 'a';\n}\n\nfunction un() {}\n\nconsole.log(a()); // 'a'\nconsole.log(un()); // undefined\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Car(driver, doors) {\n  this.driver = driver;\n  this.doors = doors;\n}\n\nconsole.log(new Car('Pere', 4)) // Car\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Car(driver, doors) {\n  this.driver = driver;\n  this.doors = doors;\n\n  return {\n    hello: 'hello',\n    ref: this\n  }\n}\n\nconsole.log(new Car('Pere', 4)) // {hello: 'hello', ref: Car}\n")),Object(c.b)("h2",{id:"exceptions"},"Exceptions"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function add(a, b) {\n  if (typeof a !== 'number' || typeof b !== 'number') {\n    throw {\n      name: 'TypeError',\n      message: 'add needs numbers'\n    }\n  }\n  return a + b;\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const error = new Error('something went wrong')\n\nconsole.log(error.name) // 'Error'\nconsole.log(error.message) // 'something went wrong'\n")),Object(c.b)("h2",{id:"augmenting-types"},"Augmenting Types"),Object(c.b)("p",null,"Javascript allows the basic types of the language to be ",Object(c.b)("strong",{parentName:"p"},"augmented"),". We can add a method to ",Object(c.b)("inlineCode",{parentName:"p"},"prototype")," and that makes it available to all the objects."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Function.prototype.method = function (name, func) {\n  this.prototype[name] = func;\n  return this;\n}\n\nNumber.method('integer', function () {\n  return Math[this < 0 ? 'ceil' : 'floor'](this);\n})\n\n(-10/3).integer(); // -3\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Function.prototype.method = function (name, func) {\n  this.prototype[name] = func;\n  return this;\n}\n\nString.method('trim', function () {\n  return this.replace(/^\\s+|\\s+$/g, '')\n})\n\nconst aString = \"     \" + \"     neat      \";;\nconsole.log(aString.trim()) //\n")),Object(c.b)("p",null,"Becuase of the dy namic nature of Javascript's prototypal inheritance, all values are immediately endowed with the new methods, even values that were created before the methods were created."),Object(c.b)("h2",{id:"recursion"},"Recursion"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"A recursive function is a function that calls itself, either directly or indirectly.")),Object(c.b)("h3",{id:"the-towers-of-hanoi"},"The towers of Hanoi"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function hanoi(disc, src, aux, dst) {\n  if (disc > 0) {\n    hanoi(disc - 1, src, dst, aux);\n    document.writeln(`Move disc ${disc} from ${src} to ${dst} <br/>`);\n    hanoi(disc - 1, aux, src, dst);\n  }\n}\n\nhanoi(3, 'Src', 'Aux', 'Dst');\n")),Object(c.b)("h3",{id:"walk-the-dom"},"Walk the DOM"),Object(c.b)("p",null,"Recursive functions can be very effective in manipulating tree structures such as the browser's Document Object Model (DOM)."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function walkTheDOM(node, func) {\n  func(node)\n  node = node.firstChild\n  while (node) {\n    walkTheDOM(node, func)\n    node = node.nextSibling\n  }\n}\n")),Object(c.b)("h3",{id:"tail-recursion-optimization"},"Tail recursion optimization"),Object(c.b)("p",null,"Some languages offer the ",Object(c.b)("em",{parentName:"p"},"tail recursion optimization"),". This means that if a function returns the result of invoking itself recursively, then the invocation is replaced with a loop, which can significantly speed things up."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Tail-call optimization is a part of the ES2015-ES6 specification.")),Object(c.b)("h2",{id:"scope"},"Scope"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Scope in a programming language controls the visibility and lifetimes of variables and parameters.")),Object(c.b)("p",null,"Javascript does have ",Object(c.b)("strong",{parentName:"p"},"function")," scope. That means that the parameters and variables defined in a function are not visible outside of the function."),Object(c.b)("h2",{id:"closure"},"Closure"),Object(c.b)("p",null,"The good news about scope is that inner functions get access to the parameters and variables of the functions they are defined within (with the exception of ",Object(c.b)("em",{parentName:"p"},"this")," and ",Object(c.b)("em",{parentName:"p"},"arguments"),")."),Object(c.b)("p",null,"An interesting case is when the innfer function has a longer lifetime than its outer function."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const isNumber = value =>  typeof value === 'number'\n\nconst myObject = (function () {\n  let value = 0\n\n  return {\n    increment: (inc) => value += isNumber(inc) ? inc : 1,\n    getValue: () => value\n  }\n}())\n\nmyObject.increment()\nmyObject.increment()\nmyObject.increment()\n\nconsole.log(myObject.getValue())\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function quo (status) {\n  return {\n    getStatus: () => status\n  }\n}\n\nconst myQuo = quo('amazed')\nconsole.log(myQuo.getStatus())\n")),Object(c.b)("p",null,"This is possible beacuse the function has access to the context in which it was created. This is called ",Object(c.b)("strong",{parentName:"p"},"closure"),"."),Object(c.b)("h2",{id:"callbacks"},"Callbacks"),Object(c.b)("p",null,"Providing a function that will be invoked when the asynchronous task is finished."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const request = prepareTheRequest()\nconst myCallback = response => display(response)\nsendRequestAsynchronously(request, myCallback)\n")),Object(c.b)("h2",{id:"module"},"Module"),Object(c.b)("p",null,"A module is a function or object that presents an interface but hides its state and implementation."),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"module pattern")," takes advantage of function ",Object(c.b)("strong",{parentName:"p"},"scope")," and ",Object(c.b)("strong",{parentName:"p"},"closure")," to create relationships that are binding and private."),Object(c.b)("h2",{id:"cascade"},"Cascade"),Object(c.b)("p",null,"If we have methods returning ",Object(c.b)("em",{parentName:"p"},"this")," instead of ",Object(c.b)("em",{parentName:"p"},"undefined")," we can enable ",Object(c.b)("em",{parentName:"p"},"cascades"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"getElement('myBoxDiv')\n  .move(350, 150)\n  .width(100)\n  .height(100)\n  .color('red')\n  .border('10px outset')\n  .padding('4px')\n  .appendText('Please stand by');\n")),Object(c.b)("h2",{id:"curry"},"Curry"),Object(c.b)("p",null,"Currying allows us to produce a new function by combining a function an argument."),Object(c.b)("h2",{id:"memoization"},"Memoization"),Object(c.b)("p",null,"Functions can use objects to remember the results of previous operations, making it possible to avoid unnecessary work."),Object(c.b)("h2",{id:"resources"},"Resources"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Javascript The Good Parts by Douglas Crockford")))}u.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,h=b["".concat(r,".").concat(d)]||b[d]||p[d]||c;return n?o.a.createElement(h,i(i({ref:t},l),{},{components:n})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<c;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);