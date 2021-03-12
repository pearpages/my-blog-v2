(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(209)),i={slug:"npm-tricks",title:"NPM tricks",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["npm"]},c={permalink:"/npm-tricks",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-03-12-npm-tricks.md",source:"@site/blog/2021-03-12-npm-tricks.md",description:"npm logo",date:"2021-03-12T00:00:00.000Z",tags:[{label:"npm",permalink:"/tags/npm"}],title:"NPM tricks",readingTime:1.58,truncated:!1,prevItem:{title:"Centralized PropTypes",permalink:"/centralized-prop-types"},nextItem:{title:"Using environment variables in react",permalink:"/using-environment-variables-in-react"}},p=[{value:"Open a package\u2019s homepage",id:"open-a-packages-homepage",children:[]},{value:"Open package\u2019s GitHub repo",id:"open-packages-github-repo",children:[]},{value:"Check for outdated dependencies",id:"check-for-outdated-dependencies",children:[]},{value:"Check for packages not declared in package.json",id:"check-for-packages-not-declared-in-packagejson",children:[]},{value:"Lock down your dependencies versions",id:"lock-down-your-dependencies-versions",children:[]},{value:"Allow <code>npm install -g</code> without needing <code>sudo</code>",id:"allow-npm-install--g-without-needing-sudo",children:[]},{value:"Change the default save prefix for all your projects",id:"change-the-default-save-prefix-for-all-your-projects",children:[]},{value:"Check for more tricks",id:"check-for-more-tricks",children:[]}],l={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",alt:"npm logo"})),Object(a.b)("h2",{id:"open-a-packages-homepage"},"Open a package\u2019s homepage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm home $package\n")),Object(a.b)("h2",{id:"open-packages-github-repo"},"Open package\u2019s GitHub repo"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm repo $package\n")),Object(a.b)("h2",{id:"check-for-outdated-dependencies"},"Check for outdated dependencies"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm outdated\n")),Object(a.b)("h2",{id:"check-for-packages-not-declared-in-packagejson"},"Check for packages not declared in package.json"),Object(a.b)("p",null,"When you run ",Object(a.b)("inlineCode",{parentName:"p"},"prune"),", the npm CLI will run through your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," and compare it to your project\u2019s ",Object(a.b)("inlineCode",{parentName:"p"},"/node_modules")," directory. It will print a list of modules that aren\u2019t in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm prune\n")),Object(a.b)("h2",{id:"lock-down-your-dependencies-versions"},"Lock down your dependencies versions"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm shrinkwrap\n")),Object(a.b)("p",null,"Using ",Object(a.b)("inlineCode",{parentName:"p"},"shrinkwrap")," in your project generates an ",Object(a.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," file. This allows you to pin the dependencies of your project to the specific version you\u2019re currently using within your ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," directory. When you run npm install and there is a npm-shrinkwrap.json present, it will override the listed dependencies and any semver ranges in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("h2",{id:"allow-npm-install--g-without-needing-sudo"},"Allow ",Object(a.b)("inlineCode",{parentName:"h2"},"npm install -g")," without needing ",Object(a.b)("inlineCode",{parentName:"h2"},"sudo")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm config set prefix $dir\n")),Object(a.b)("p",null,"After running the command, where ",Object(a.b)("inlineCode",{parentName:"p"},"$dir")," is the directory you want npm to ",Object(a.b)("em",{parentName:"p"},"install your global modules")," to, you won\u2019t need to use sudo to install modules globally anymore. The directory you use in the command becomes your global bin directory."),Object(a.b)("p",null,"The only caveat: you will need to make sure you ",Object(a.b)("strong",{parentName:"p"},"adjust your user permissions")," for that directory with ",Object(a.b)("inlineCode",{parentName:"p"},"chown -R $USER $dir")," and you add ",Object(a.b)("inlineCode",{parentName:"p"},"$dir/bin")," to your PATH."),Object(a.b)("h2",{id:"change-the-default-save-prefix-for-all-your-projects"},"Change the default save prefix for all your projects"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'npm config set save-prefix="~"\n')),Object(a.b)("p",null,"The tilde (~) is more conservative than what npm defaults to, the caret (^), when installing a new package with the --save or --save-dev flags."),Object(a.b)("p",null,"The tilde pins the dependency to the minor version, allowing patch releases to be installed with npm update. The caret pins the dependency to the major version, allowing minor releases to be installed with npm update."),Object(a.b)("h2",{id:"check-for-more-tricks"},"Check for more tricks"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://nodesource.com/blog/eleven-npm-tricks-that-will-knock-your-wombat-socks-off/"},"11 Simple npm Tricks That Will Knock Your Wombat Socks Off")))}s.isMDXComponent=!0},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);