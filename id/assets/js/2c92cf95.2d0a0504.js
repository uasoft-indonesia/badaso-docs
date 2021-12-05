"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6950],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=r,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3490:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={docId:"tags",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/tags-doc.md"},c="Tags",u={unversionedId:"components/tags-doc",id:"components/tags-doc",isDocsHomePage:!1,title:"Tags",description:"Badaso menyediakan sebuah komponen input berupa tags, yaitu BadasoTags. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/components/tags-doc.md",sourceDirName:"components",slug:"/components/tags-doc",permalink:"/id/components/tags-doc",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/tags-doc.md",tags:[],version:"current",frontMatter:{docId:"tags",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/components/tags-doc.md"},sidebar:"tutorialSidebar",previous:{title:"Switch",permalink:"/id/components/switch"},next:{title:"Text",permalink:"/id/components/text"}},p=[{value:"View: BadasoTags",id:"view-badasotags",children:[]},{value:"<code>props</code>",id:"props",children:[]}],d={toc:p};function l(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tags"},"Tags"),(0,o.kt)("p",null,"Badaso menyediakan sebuah komponen input berupa tags, yaitu BadasoTags. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "size": "6" // 1-12 default 12\n}\n')),(0,o.kt)("h2",{id:"view-badasotags"},"View: BadasoTags"),(0,o.kt)("p",null,"Kode di bawah merupakan sampel untuk penggunaan BadasoTags pada Vue Template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'<badaso-tags\n    :label="label"\n    :placeholder="placeholder"\n    v-model="model"\n    size="12"\n    :alert="error">\n</badaso-tags>\n')),(0,o.kt)("h2",{id:"props"},(0,o.kt)("inlineCode",{parentName:"h2"},"props")),(0,o.kt)("p",null,"Berikut merupakan daftar props yang disediakan komponen ini."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'size: {\n    type: String,\n    default: "12",\n},\nlabel: {\n    type: String,\n    default: "Tags",\n},\nplaceholder: {\n    type: String,\n    default: "Tags",\n},\nvalue: {\n    type: String,\n    required: true,\n},\nadditionalInfo: {\n    type: String,\n    default: "",\n},\nalert: {\n    type: String|Array,\n    default: "",\n},\n')))}l.isMDXComponent=!0}}]);