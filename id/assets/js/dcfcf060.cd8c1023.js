"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7084],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5946:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],d={docId:"data-identifer"},l="Data Identifer",c={unversionedId:"components/data-identifer",id:"components/data-identifer",isDocsHomePage:!1,title:"Data Identifer",description:"Badaso provides a hidden input component and send user id   , namely BadasoDataIdentifier. When generating CRUD, the width of this component can be set in Optional Details with the following format.",source:"@site/docs/components/data-identifer.md",sourceDirName:"components",slug:"/components/data-identifer",permalink:"/id/components/data-identifer",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/components/data-identifer.md",tags:[],version:"current",frontMatter:{docId:"data-identifer"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/id/crud-generator/introduction-CRUD"},next:{title:"Checkbox",permalink:"/id/components/checkbox"}},p=[{value:"View: BadasoDataIdentifier",id:"view-badasodataidentifier",children:[]},{value:"<code>props</code>",id:"props",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-identifer"},"Data Identifer"),(0,o.kt)("p",null,"Badaso provides a hidden input component and send user id   , namely BadasoDataIdentifier. When generating CRUD, the width of this component can be set in Optional Details with the following format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "size": "6" // 1-12 default 12\n    "value": ""\n}\n')),(0,o.kt)("h2",{id:"view-badasodataidentifier"},"View: BadasoDataIdentifier"),(0,o.kt)("p",null,"The code below is a sample for using BadasoDataIdentifier on the Vue Template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-data-identifier\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    :alert="error">\n</badaso-data-identifier>\n')),(0,o.kt)("h2",{id:"props"},(0,o.kt)("inlineCode",{parentName:"h2"},"props")),(0,o.kt)("p",null,"The following is a list of props provided by BadasoDataIdentifer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Text",\n},\nplaceholder: {\n    type: String,\n    default: "Text",\n},\nvalue: {\n    type: String,\n    required: true,\n    default: "",\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}u.isMDXComponent=!0}}]);