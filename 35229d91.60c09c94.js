(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||p[d]||c;return n?r.a.createElement(u,l(l({ref:t},b),{},{components:n})):r.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=(n(0),n(156)),o={slug:"mysql-with-docker",title:"MySQL database with Docker",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["web","docker"]},l={permalink:"/mysql-with-docker",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-01-10-mysql-with-docker.md",source:"@site/blog/2021-01-10-mysql-with-docker.md",description:"Installing an image",date:"2021-01-10T00:00:00.000Z",tags:[{label:"web",permalink:"/tags/web"},{label:"docker",permalink:"/tags/docker"}],title:"MySQL database with Docker",readingTime:5.95,truncated:!1,nextItem:{title:"Docker core concepts",permalink:"/docker-core-concepts"}},i=[{value:"Installing an image",id:"installing-an-image",children:[]},{value:"Launching the container",id:"launching-the-container",children:[]},{value:"Most used options",id:"most-used-options",children:[]},{value:"Connect to the database using <code>Adminer</code> Mysql Client",id:"connect-to-the-database-using-adminer-mysql-client",children:[]},{value:"Connect to a container shell",id:"connect-to-a-container-shell",children:[]},{value:"List, pause/unpause, stop and restart containers",id:"list-pauseunpause-stop-and-restart-containers",children:[{value:"List",id:"list",children:[]},{value:"Restart",id:"restart",children:[]},{value:"Pause/Unpause",id:"pauseunpause",children:[]},{value:"Stop",id:"stop",children:[]},{value:"Remove",id:"remove",children:[]}]},{value:"Define a Docker network",id:"define-a-docker-network",children:[]},{value:"Cleaning up",id:"cleaning-up",children:[{value:"Statistics",id:"statistics",children:[]},{value:"List containers, images, volmes and networks",id:"list-containers-images-volmes-and-networks",children:[]},{value:"Remove unused networks and images",id:"remove-unused-networks-and-images",children:[]},{value:"Deleting disk volumes",id:"deleting-disk-volumes",children:[]},{value:"Full clean start",id:"full-clean-start",children:[]}]},{value:"Launch multiple containers with Docker Compose",id:"launch-multiple-containers-with-docker-compose",children:[{value:"Running on the background",id:"running-on-the-background",children:[]},{value:"Stop",id:"stop-1",children:[]}]}],b={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"installing-an-image"},"Installing an image"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# latest\ndocker pull mysql\n# or any version using semantic versioning\ndocker pull mysql:8.0.22\n")),Object(c.b)("h2",{id:"launching-the-container"},"Launching the container"),Object(c.b)("p",null,"All Docker CLI commands start with ",Object(c.b)("inlineCode",{parentName:"p"},"docker")," and an instruction such as ",Object(c.b)("inlineCode",{parentName:"p"},"run")," followed by options. ",Object(c.b)("inlineCode",{parentName:"p"},"docker run")," creates a container from a specified image ( ",Object(c.b)("inlineCode",{parentName:"p"},"mysql")," ) and starts it. That image is downloaded if it\u2019s not already available on the host."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'docker run \\\n  -it --rm --name mysql \\\n  -p 3306:3306 \\\n  --mount "src=mysqldata,target=/var/lib/mysql" \\\n  -e MYSQL_ROOT_PASSWORD=mysecret \\\n  mysql\n')),Object(c.b)("p",null,"The command runs the container in the foreground, removes it at the end, gives it a name of ",Object(c.b)("em",{parentName:"p"},"mysql")," maps the port 3306 of the host to the 3306 of the container, mounts a volume with the name mysqldata and sets an environment variable called MSQL_ROOT_PASSWORD."),Object(c.b)("p",null,"Once the database container has started, you can use any MySQL client application installed on your host PC to connect to ",Object(c.b)("inlineCode",{parentName:"p"},"localhost:3306")," with the user ID ",Object(c.b)("inlineCode",{parentName:"p"},"root")," and password ",Object(c.b)("inlineCode",{parentName:"p"},"mysecret"),"."),Object(c.b)("h2",{id:"most-used-options"},"Most used options"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"option"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-d"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"run a container as a ",Object(c.b)("strong",{parentName:"td"},"background")," process (which exits when the application ends)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-it"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Interactive mode. It keeps a container running in the ",Object(c.b)("strong",{parentName:"td"},"foreground")," (even after the application ends), and show an activity log")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"--rm"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"remove the container after it stops")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"--name"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"name")," a container (a random GUID is used otherwise)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-p"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"map a ",Object(c.b)("em",{parentName:"td"},"host")," ",Object(c.b)("strong",{parentName:"td"},"port")," to a ",Object(c.b)("em",{parentName:"td"},"container")," port")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"--mount"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"create a ",Object(c.b)("strong",{parentName:"td"},"persistent")," Docker-managed ",Object(c.b)("strong",{parentName:"td"},"volume")," to retain data. The string specifies a src volume ",Object(c.b)("strong",{parentName:"td"},"name")," and a ",Object(c.b)("strong",{parentName:"td"},"target")," where it is mounted in the container\u2019s file system")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-v"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mount a host ",Object(c.b)("strong",{parentName:"td"},"folder")," using the notation ",Object(c.b)("inlineCode",{parentName:"td"},"<hostdir>:<containerdir>"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-e"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define an ",Object(c.b)("strong",{parentName:"td"},"environment variable"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"--env-file"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"read ",Object(c.b)("strong",{parentName:"td"},"environment variables from a file")," where each line defines a VAR=value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"--net"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"connect to specific ",Object(c.b)("strong",{parentName:"td"},"Docker network"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"--entrypoint"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"overrides the default starting application")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"If you do not specify ",Object(c.b)("inlineCode",{parentName:"p"},"--rm")," , the container will remain available even once it has stopped. Although it is possible to restart it, there\u2019s rarely any benefit \u2013 it\u2019s simpler to execute the same ",Object(c.b)("inlineCode",{parentName:"p"},"docker run")," command again.")),Object(c.b)("h2",{id:"connect-to-the-database-using-adminer-mysql-client"},"Connect to the database using ",Object(c.b)("inlineCode",{parentName:"h2"},"Adminer")," Mysql Client"),Object(c.b)("p",null,"If you don\u2019t have a MySQL client to hand, ",Object(c.b)("strong",{parentName:"p"},"Adminer")," is a lightweight PHP-based option. It is also available as a ",Object(c.b)("strong",{parentName:"p"},"Docker image")," and can be launched in another terminal with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run \\\n  -it --rm --name adminer \\\n  -p 8080:8080 \\\n  adminer\n")),Object(c.b)("p",null,"The image will be downloaded automatically, otherwise you can install it as shown previously."),Object(c.b)("p",null,"Now you can type in the browser ",Object(c.b)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),Object(c.b)("p",null,"Note that you ",Object(c.b)("strong",{parentName:"p"},"cannot")," use ",Object(c.b)("inlineCode",{parentName:"p"},"localhost"),"as the server name since Adminer will resolve that to its own container! Instead these are the options:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Enter ",Object(c.b)("inlineCode",{parentName:"li"},"host.docker.internal"),". Docker Desktop routes this domain to your PC's network IP address, but ",Object(c.b)("strong",{parentName:"li"},"it may not be available on all systems"),"."),Object(c.b)("li",{parentName:"ol"},"Use your actual network IP address. This can be obtained with the ``\xecfconfig``` command on macOS."),Object(c.b)("li",{parentName:"ol"},"Or us the container's IP address assigned by Docker. Docker creates it's own virtual network. ",Object(c.b)("inlineCode",{parentName:"li"},"docker inspect mysql"),"returns information about the container in JS_ON format. You can locate the 'IPAddress' value suing the ",Object(c.b)("inlineCode",{parentName:"li"},"-f")," format option.")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker inspect \\\n  -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \\\n  mysql\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Alternatively, you can define a Docker network which containers can connect to. Any container can then use the name of another container name and have it resolve correctly, i.e. you can enter ",Object(c.b)("inlineCode",{parentName:"p"},"mysql")," as the server name on the Adminer login screen.")),Object(c.b)("h2",{id:"connect-to-a-container-shell"},"Connect to a container shell"),Object(c.b)("p",null,"Every Docker container runs an isolated Linux environment. You can connect to its shell to run commands, examine logs, or perform any other activities."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Remember containers are stateless! Any changes you make will be lost whenever the container is restarted.")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Presuming your MySQL container is still running, open another terminal and enter\ndocker exec -it mysql bash\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Some lightweight images using ",Object(c.b)("strong",{parentName:"p"},"Alpine")," Linux do not offer the ",Object(c.b)("inlineCode",{parentName:"p"},"bash")," shell. If this command fails, try using ",Object(c.b)("inlineCode",{parentName:"p"},"docker exec -it mysql sh")," instead.")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mysql -u root -pmysecret\n")),Object(c.b)("p",null,"Enter ",Object(c.b)("inlineCode",{parentName:"p"},"exit")," to quit the shell."),Object(c.b)("h2",{id:"list-pauseunpause-stop-and-restart-containers"},"List, pause/unpause, stop and restart containers"),Object(c.b)("h3",{id:"list"},"List"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker container ls\n# or\ndocker ps\n")),Object(c.b)("p",null,"Each container is assigned a ",Object(c.b)("strong",{parentName:"p"},"hexadecimal ID")," which can be used as a reference in Docker commands. However, specifying a container ",Object(c.b)("inlineCode",{parentName:"p"},"--name")," makes management considerably easier."),Object(c.b)("p",null,"To view all containers, both running and stopped, enter:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker container ls -a\n")),Object(c.b)("h3",{id:"restart"},"Restart"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker container restart adminer mysql\n")),Object(c.b)("h3",{id:"pauseunpause"},"Pause/Unpause"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker container pause mysql\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker container unpause mysal\n")),Object(c.b)("h3",{id:"stop"},"Stop"),Object(c.b)("p",null,"Containers which stared with the ",Object(c.b)("inlineCode",{parentName:"p"},"-rm")," option are removed when they are stopped. You can list all containers with ",Object(c.b)("inlineCode",{parentName:"p"},"docker ps -a"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker container stop adminer mysql\n")),Object(c.b)("h3",{id:"remove"},"Remove"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker container prune\n")),Object(c.b)("h2",{id:"define-a-docker-network"},"Define a Docker network"),Object(c.b)("p",null,"Generally it is easier to refer to another container using its ",Object(c.b)("inlineCode",{parentName:"p"},"--name"),"then its ",Object(c.b)("inlineCode",{parentName:"p"},"IP"),"."),Object(c.b)("p",null,"Stop any running containers then create a new network, e.g. named ",Object(c.b)("inlineCode",{parentName:"p"},"mysqlnet")," here:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker network create --driver bridge mysqlnet\n")),Object(c.b)("p",null,"Any container can connect to this network using the ",Object(c.b)("inlineCode",{parentName:"p"},"--net")," option when it is launched."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{6}","{6}":!0}),'docker run \\\n  -d --rm --name mysql \\\n  -p 3306:3306 \\\n  --mount "src=mysqldata,target=/var/lib/mysql" \\\n  -e MYSQL_ROOT_PASSWORD=mysecret \\\n  --net mysqlnet \\\n  mysql\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"{4}","{4}":!0}),"docker run \\\n  -d --rm --name adminer \\\n  -p 8080:8080 \\\n  --net mysqlnet \\\n  adminer\n")),Object(c.b)("p",null,"Each container\u2019s name now resolves on the Docker ",Object(c.b)("inlineCode",{parentName:"p"},"mysqlnet")," network. You can therefore enter ",Object(c.b)("inlineCode",{parentName:"p"},"mysql")," as the server name on the Adminer login screen."),Object(c.b)("h2",{id:"cleaning-up"},"Cleaning up"),Object(c.b)("h3",{id:"statistics"},"Statistics"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker system df\n")),Object(c.b)("h3",{id:"list-containers-images-volmes-and-networks"},"List containers, images, volmes and networks"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker container ls -a\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker image ls -a\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker volume ls\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker network ls\n")),Object(c.b)("h3",{id:"remove-unused-networks-and-images"},"Remove unused networks and images"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker system prune\n")),Object(c.b)("p",null,"The following command will do the same and also wipe any image not associated with a running container:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker system prune -a\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"The latest images will therefore have to be downloaded again if you require them.")),Object(c.b)("h3",{id:"deleting-disk-volumes"},"Deleting disk volumes"),Object(c.b)("p",null,"Assuming you\u2019re happy to proceed, you can view Docker volumes with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker volume ls\n")),Object(c.b)("p",null,"then delete any by ID or name:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker volume rm <name>\n")),Object(c.b)("p",null,"Unused Docker volumes \u2013those not currently attached to a running container\u2013 can be removed with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker volume prune\n")),Object(c.b)("p",null,"Alternatively, use ",Object(c.b)("inlineCode",{parentName:"p"},"docker volume prune -a")," will delete them all. You only have yourself to blame!..."),Object(c.b)("h3",{id:"full-clean-start"},"Full clean start"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker system prune -a --volumes\n")),Object(c.b)("p",null,"Add ",Object(c.b)("inlineCode",{parentName:"p"},"-f")," if you want to force the wipe without a confirmation prompt."),Object(c.b)("h2",{id:"launch-multiple-containers-with-docker-compose"},"Launch multiple containers with Docker Compose"),Object(c.b)("p",null,"Docker Compose provides a way to build and launch containers, networks, and volumes from a single configuration file named ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose.yml"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:"{14,18,24}","{14,18,24}":!0}),'version: \'3\'\nservices:\n  mysql:\n    image: mysql\n    container_name: mysql\n    environment:\n      - MYSQL_ROOT_PASSWORD=mysecret\n    volumes:\n      - mysqldata:/var/lib/mysql\n    ports:\n      - "3306:3306"\n    networks:\n      - mysqlnet\n    restart: on-failure\n  adminer:\n    image: adminer\n    container_name: adminer\n    depends_on:\n      - mysql\n    ports:\n      - "8080:8080"\n    networks:\n      - mysqlnet\n    restart: on-failure\nvolumes:\n  mysqldata:\nnetworks:\n  mysqlnet:\n')),Object(c.b)("p",null,"Now launch Docker Compose from the same directory as your ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file using:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up\n")),Object(c.b)("h3",{id:"running-on-the-background"},"Running on the background"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d\n")),Object(c.b)("h3",{id:"stop-1"},"Stop"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker compose stop\n")))}s.isMDXComponent=!0}}]);