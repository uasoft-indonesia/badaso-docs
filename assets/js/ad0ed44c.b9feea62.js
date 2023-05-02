"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2124],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8520:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],u={docId:"deployubuntuvpswithdocker",sidebar_position:2},i="Deploy To Ubuntu VPS With Docker",c={unversionedId:"deployment/deploy-ubuntu-vps-with-docker",id:"deployment/deploy-ubuntu-vps-with-docker",isDocsHomePage:!1,title:"Deploy To Ubuntu VPS With Docker",description:"Requirements",source:"@site/docs/deployment/deploy-ubuntu-vps-with-docker.md",sourceDirName:"deployment",slug:"/deployment/deploy-ubuntu-vps-with-docker",permalink:"/deployment/deploy-ubuntu-vps-with-docker",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/deployment/deploy-ubuntu-vps-with-docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{docId:"deployubuntuvpswithdocker",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Deploy To Ubuntu VPS Without Docker",permalink:"/deployment/deploy-ubuntu-vps-without-docker"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Log in to your server",id:"log-in-to-your-server",children:[]},{value:"Install Docker",id:"install-docker",children:[]},{value:"Deploy the project from your VCS",id:"deploy-the-project-from-your-vcs",children:[]}],p={toc:s};function d(e){var t=e.components,u=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-to-ubuntu-vps-with-docker"},"Deploy To Ubuntu VPS With Docker"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A server running ubuntu"),(0,o.kt)("li",{parentName:"ul"},"SSH access to the server from a local terminal"),(0,o.kt)("li",{parentName:"ul"},"Docker")),(0,o.kt)("h2",{id:"log-in-to-your-server"},"Log in to your server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login to your server using ssh from a terminal. I recommend that you set up ssh keys on your server from the server monitoring dashboard if your service provider supports it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh username@serveripaddress\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy ubuntu wihtout docker vps login",src:n(3429).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update your package manager.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get update\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy ubuntu wihtout docker vps update",src:n(5892).Z})),(0,o.kt)("h2",{id:"install-docker"},"Install Docker"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/linux-install/"},"docker official docs")," for up to date installation "))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Prerequisite Packages.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install apt-transport-https ca-certificates curl software-properties-common -y\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add GPG Key.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Docker Repository.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Specify Installation Source.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apt-cache policy docker-ce\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Docker.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install docker-ce -y\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check Docker Status.x")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl status docker\n")),(0,o.kt)("h2",{id:"deploy-the-project-from-your-vcs"},"Deploy the project from your VCS"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This step for only badaso project installed with ",(0,o.kt)("a",{parentName:"p",href:"../getting-started/installation#via-curl--docker-recommended"},"curl way")," or you already ",(0,o.kt)("a",{parentName:"p",href:"../customization/dockerize"},"dockerize")," the prohect by yourself."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clone your project and go to project directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone {link-your-project-badaso-from-github-or-gitlab} your-name-project\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy ubuntu with docker install clone",src:n(2328).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installing composer dependencies with docker ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run --rm \\\n    -u "$(id -u):$(id -g)" \\\n    -v "$(pwd):/var/www/html" \\\n    -w /var/www/html \\\n    laravelsail/php82-composer:latest \\\n    composer install --ignore-platform-reqs\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start the container")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vendor/bin/sail up -d\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run command to generate the key.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vendor/bin/sail php artisan key:generate\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run database migration.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vendor/bin/sail artisan migrate\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run database seeder.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'vendor/bin/sail artisan db:seed --class="Database\\Seeders\\Badaso\\BadasoSeeder"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run commmand below to generate token jwt.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vendor/bin/sail artisan jwt:secret -f\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run commmand below to generate link storage.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vendor/bin/sail artisan storage:link\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the following command to install all javascript of dependencies.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vendor/bin/sail yarn\nvendor/bin/sail yarn dev\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Look at your container, whether all the containers are running.")),(0,o.kt)("p",null,"If all the containers are running well, then your project has been successfully installed"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy ubuntu with docker install curl check container",src:n(3099).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Finish. You can access your project.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy ubuntu with docker install clone docker finish",src:n(3697).Z})))}d.isMDXComponent=!0},3697:function(e,t,n){t.Z=n.p+"assets/images/deploy-ubuntu-with-docker-install-clone-docker-finish-e29f9fd37073eca5249ccaab34c7f00f.png"},2328:function(e,t,n){t.Z=n.p+"assets/images/deploy-ubuntu-with-docker-install-clone-b7490fe64ee0843aa6a7570a98e0d70e.png"},3099:function(e,t,n){t.Z=n.p+"assets/images/deploy-ubuntu-with-docker-install-curl-check-container-41ec6b6497f2192e5e4151a8583ed2ae.png"},3429:function(e,t){t.Z="data:image/png;base64,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"},5892:function(e,t,n){t.Z=n.p+"assets/images/deploy-ubuntu-wihtout-docker-vps-update-c6e5383cf1434a05255e06a9ca5715c8.png"}}]);