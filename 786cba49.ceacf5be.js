(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),a=(n(0),n(156)),i={slug:"docker-core-concepts",title:"Docker core concepts",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["web","docker"]},c={permalink:"/docker-core-concepts",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-01-09-docker-core-concepts.md",source:"@site/blog/2021-01-09-docker-core-concepts.md",description:"TL;DR",date:"2021-01-09T00:00:00.000Z",tags:[{label:"web",permalink:"/tags/web"},{label:"docker",permalink:"/tags/docker"}],title:"Docker core concepts",readingTime:3.83,truncated:!1,prevItem:{title:"MySQL database with Docker",permalink:"/mysql-with-docker"},nextItem:{title:"How to install docker",permalink:"/how-to-install-docker"}},s=[{value:"TL;DR",id:"tldr",children:[]},{value:"Containers",id:"containers",children:[]},{value:"Images",id:"images",children:[{value:"Dockerfile",id:"dockerfile",children:[]}]},{value:"Volumes",id:"volumes",children:[]},{value:"Networks",id:"networks",children:[]},{value:"Docker Compose",id:"docker-compose",children:[]},{value:"Orchestration",id:"orchestration",children:[]},{value:"Docker client-server application",id:"docker-client-server-application",children:[]},{value:"When not to use Docker",id:"when-not-to-use-docker",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tldr"},"TL;DR"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Docker runs an application such as MySQL in a singlecontainer."),Object(a.b)("li",{parentName:"ul"},"Your web application will probably require several containers",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"your code (and runtime)"),Object(a.b)("li",{parentName:"ul"},"a database"),Object(a.b)("li",{parentName:"ul"},"a web server, etc."))),Object(a.b)("li",{parentName:"ul"},"A container is launched from an image."),Object(a.b)("li",{parentName:"ul"},"Containers start in clean (image) state so data is not permanently stored."),Object(a.b)("li",{parentName:"ul"},"Containers are isolated from the host and other containers."),Object(a.b)("li",{parentName:"ul"},"Each container is started with a single Docker command."),Object(a.b)("li",{parentName:"ul"},"Optionally, ",Object(a.b)("strong",{parentName:"li"},"orchestration")," tools such as ",Object(a.b)("em",{parentName:"li"},"Docker Swarm")," and ",Object(a.b)("em",{parentName:"li"},"Kubernetes")," can be used for container management and replication on production systems.")),Object(a.b)("h2",{id:"containers"},"Containers"),Object(a.b)("p",null,"It helps to think of a container as a mini VM with its own operating system, libraries, and application files."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Docker emulates an Operating System so you can run isolated applications within their own file system. Docker therefore uses fewer host OS resources than a VM.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"You should therefore use separate containers for your application, the database, and any other dependencies you require.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Containers are isolated")," Each running container is available at localhost or 127.0.0.1 , but a TCP port must be exposed to use it, e.g.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Containers are stateless and disposable")," Data written to the container\u2019s file system is lost the moment it is shuts down! Docker offers volumes and host folder bind mounts.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Containers run on Linux")," It doesn\u2019t matter what host OS you\u2019re using:Docker containers run natively on Linux. For that reason, Windows and macOS run Docker containers inside a Linux VM!")),Object(a.b)("h2",{id:"images"},"Images"),Object(a.b)("p",null,"A Docker image is a snapshot of a file and operating system with libraries and application executables. In essence, an image is a ",Object(a.b)("em",{parentName:"p"},"recipe or template")," for creating a container. (In a similar way that some computer languages let you define a reusable class template for instantiating objects of the same type.)"),Object(a.b)("p",null,"Any number of containers can be started from a single image. This permits ",Object(a.b)("strong",{parentName:"p"},"scaling")," on production servers, although you\u2019re unlikely to launch multiple containers from the same image during development."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"Docker Hub")," provides a repository of common images for popular applications such asNGINX,MySQL,MongoDB,Elasticsearch,redisand more."),Object(a.b)("h3",{id:"dockerfile"},"Dockerfile"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"OS"),Object(a.b)("li",{parentName:"ul"},"work directories and ",Object(a.b)("strong",{parentName:"li"},"user permissions")),Object(a.b)("li",{parentName:"ul"},"environment variables, copying files from host, running install processes, etc."),Object(a.b)("li",{parentName:"ul"},"volumes for data storage"),Object(a.b)("li",{parentName:"ul"},"network configuration and ",Object(a.b)("strong",{parentName:"li"},"ports")," exposed to ",Object(a.b)("inlineCode",{parentName:"li"},"localhost")),Object(a.b)("li",{parentName:"ul"},"launch command")),Object(a.b)("h2",{id:"volumes"},"Volumes"),Object(a.b)("p",null,"Some containers \u2013 such as databases \u2013 absolutely must retain data so Docker provides two storage mechanism types:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Volumes: a Docker-managed file system, and"),Object(a.b)("li",{parentName:"ol"},"Bind mounts: a file or directory on the host machine.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Volumes")," are the recommended way to persist data. In some cases, it\u2019s the only option \u2013 for example, MongoDB does not currently support bind mounts on Windows or macOS file systems.")),Object(a.b)("h2",{id:"networks"},"Networks"),Object(a.b)("p",null,"Docker creates a ",Object(a.b)("strong",{parentName:"p"},"virtual network")," and assigns each running container a ",Object(a.b)("strong",{parentName:"p"},"unique IP address"),". It\u2019s then possible for one container to communicate with another using its address."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"An easier option is to create your own Docker virtual network. Any container added to that network can communicate with another using its ",Object(a.b)("strong",{parentName:"p"},"name"),", i.e. ",Object(a.b)("em",{parentName:"p"},"mysql:3306")," resolves to the correct address.")),Object(a.b)("p",null,"Container TCP/IP ports can be exposed:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"within the virtual network only, or"),Object(a.b)("li",{parentName:"ol"},"within the virtual network and to the host.")),Object(a.b)("h2",{id:"docker-compose"},"Docker Compose"),Object(a.b)("p",null,"An application requiring Node.js, NGINX, and MongoDB containers is started with three commands \u2013 possibly executed in three terminals in the correct order (probably MongoDB, then the Node.js application, then NGINX)."),Object(a.b)("p",null,"Docker Compose is a tool for managing multiple containers with associated volumes and networks. A single configuration file, normally named ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," , defines the containers and can override Dockerfile settings where necessary."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It\u2019s practical to create a Docker Compose configuration for ",Object(a.b)("strong",{parentName:"p"},"development"),". You could also create one for production, but there are ",Object(a.b)("strong",{parentName:"p"},"better options"),"\u2026")),Object(a.b)("h2",{id:"orchestration"},"Orchestration"),Object(a.b)("p",null,"Containers are portable and reproducible. This allows you to scale a single application by launching identical containers on the same server, another server, or even a different data center on the other side of the world."),Object(a.b)("h2",{id:"docker-client-server-application"},"Docker client-server application"),Object(a.b)("p",null,"The server is responsible for container management and is controlled via a REST API. The command-line interface communicates with this API, so it\u2019s possible to run a server daemon anywhere and connect from another device."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This rarely matters during development: the Docker server and CLI is installed on the same PC.")),Object(a.b)("h2",{id:"when-not-to-use-docker"},"When not to use Docker"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Your application is not stateless"),Object(a.b)("li",{parentName:"ol"},"You are using a Windows Server"),Object(a.b)("li",{parentName:"ol"},"Performance is critical"),Object(a.b)("li",{parentName:"ol"},"Stability is important"),Object(a.b)("li",{parentName:"ol"},"To store mission-critical data"),Object(a.b)("li",{parentName:"ol"},"To improve security"),Object(a.b)("li",{parentName:"ol"},"To create GUI applications"),Object(a.b)("li",{parentName:"ol"},"Because Docker is cool")))}b.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);