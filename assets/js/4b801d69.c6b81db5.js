"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4530],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2634:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={docId:"time"},p="Time",c={unversionedId:"components/time",id:"components/time",isDocsHomePage:!1,title:"Time",description:"Badaso provides an input component in the form of time (hour, minute, second), namely BadasoTime. When generating CRUD, the width of this component can be set in Optional Details with the following format.",source:"@site/docs/components/time.md",sourceDirName:"components",slug:"/components/time",permalink:"/components/time",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/components/time.md",tags:[],version:"current",frontMatter:{docId:"time"},sidebar:"tutorialSidebar",previous:{title:"Text Area",permalink:"/components/textarea"},next:{title:"Upload File Multiple",permalink:"/components/upload-file-multiple"}},s=[{value:"View: BadasoTime",id:"view-badasotime",children:[]},{value:"<code>props</code>",id:"props",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time"},"Time"),(0,a.kt)("p",null,"Badaso provides an input component in the form of time (hour, minute, second), namely BadasoTime. When generating CRUD, the width of this component can be set in Optional Details with the following format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "size": "6" // 1-12 default 12\n}\n')),(0,a.kt)("h2",{id:"view-badasotime"},"View: BadasoTime"),(0,a.kt)("p",null,"The code below is a sample for using BadasoTime on the Vue Template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-time\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    size="12"\n    :alert="error">\n</badaso-time>\n')),(0,a.kt)("h2",{id:"props"},(0,a.kt)("inlineCode",{parentName:"h2"},"props")),(0,a.kt)("p",null,"Below is a list of props that this component provides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Time",\n},\nplaceholder: {\n    type: String,\n    default: "Time",\n},\nvalue: {\n    type: String,\n    required: true,\n    default: "",\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}m.isMDXComponent=!0}}]);