"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9694],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),u=o,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1547:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={docId:"uploadimage"},p="Upload Image",d={unversionedId:"components/upload-image",id:"components/upload-image",isDocsHomePage:!1,title:"Upload Image",description:"Badaso provides a component for uploading image files, namely BadasoUploadImage. The uploaded file will be generated as base64 to be sent to the backend. Unlike BadasoUploadFile, BadasoUploadImage and BadasoUploadImageMultiple will display images immediately after uploading. When generating CRUD, the width of this component can be set in Optional Details with the following format.",source:"@site/docs/components/upload-image.md",sourceDirName:"components",slug:"/components/upload-image",permalink:"/components/upload-image",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/components/upload-image.md",tags:[],version:"current",frontMatter:{docId:"uploadimage"},sidebar:"tutorialSidebar",previous:{title:"Upload Image Multiple",permalink:"/components/upload-image-multiple"},next:{title:"URL",permalink:"/components/url"}},s=[{value:"View: BadasoUploadImage",id:"view-badasouploadimage",children:[]},{value:"<code>props</code>",id:"props",children:[]}],m={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upload-image"},"Upload Image"),(0,r.kt)("p",null,"Badaso provides a component for uploading image files, namely BadasoUploadImage. The uploaded file will be generated as base64 to be sent to the backend. Unlike BadasoUploadFile, BadasoUploadImage and BadasoUploadImageMultiple will display images immediately after uploading. When generating CRUD, the width of this component can be set in Optional Details with the following format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "size": "6" // 1-12 default 12\n}\n')),(0,r.kt)("h2",{id:"view-badasouploadimage"},"View: BadasoUploadImage"),(0,r.kt)("p",null,"The code below is a sample for using BadasoUploadImage on the Vue Template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-upload-image\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    size="12"\n    :alert="error">\n</badaso-upload-image>\n')),(0,r.kt)("h2",{id:"props"},(0,r.kt)("inlineCode",{parentName:"h2"},"props")),(0,r.kt)("p",null,"Below is a list of props that this component provides."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Upload Image",\n},\nplaceholder: {\n    type: String,\n    default: "Upload Image",\n},\nvalue: {\n    type: Object|String,\n    default: () => {\n    return null;\n    },\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\ntype: {\n    type: String,\n},\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," props, you can choose ",(0,r.kt)("inlineCode",{parentName:"p"},"private-only")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"shares-only"),"."))))}c.isMDXComponent=!0}}]);