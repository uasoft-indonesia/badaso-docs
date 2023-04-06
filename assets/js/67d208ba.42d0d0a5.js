"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3966],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(b,i(i({ref:t},u),{},{components:n})):o.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},990:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={docId:"setrelationbelongsto",sidebar_position:3},s="Relation Belongs to",p={unversionedId:"crud-generator/Relationship/set-relation-belongs-to",id:"crud-generator/Relationship/set-relation-belongs-to",isDocsHomePage:!1,title:"Relation Belongs to",description:"Badaso provides a feature to use belongs to relation. Belongs to is the opposite of hasOne relationship. For more details about belongs to, you can visit dokumentasi laravel.",source:"@site/docs/crud-generator/Relationship/set-relation-belongs-to.md",sourceDirName:"crud-generator/Relationship",slug:"/crud-generator/Relationship/set-relation-belongs-to",permalink:"/crud-generator/Relationship/set-relation-belongs-to",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/crud-generator/Relationship/set-relation-belongs-to.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{docId:"setrelationbelongsto",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Relation Has Many",permalink:"/crud-generator/Relationship/set-relation-has-many"},next:{title:"Relation Many to Many",permalink:"/crud-generator/Relationship/set-relation-many-to-many"}},u=[{value:"Set Relation Belongs to",id:"set-relation-belongs-to",children:[]}],c={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"relation-belongs-to"},"Relation Belongs to"),(0,r.kt)("p",null,"Badaso provides a feature to use belongs to relation. Belongs to is the opposite of hasOne relationship. For more details about belongs to, you can visit ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/10.x/eloquent-relationships#one-to-many-inverse"},"dokumentasi laravel"),"."),(0,r.kt)("h2",{id:"set-relation-belongs-to"},"Set Relation Belongs to"),(0,r.kt)("p",null,"For use this feature, you can follow the step below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Previously, using CRUD Management, first create a table that will generate CRUD. Example "books".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open CRUD Management, and edit the table that has been create."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"Add relation belongs to",src:n(5741).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Set the column according to what you want, in the column that is used as a relation, select the input relation type, press the "set relation" button.'),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"Add relation belongs to set input type",src:n(6509).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the form, follow these steps:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'In Relation Type select "Belongs To".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Destination Table select table relation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Destination Column select id.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'In Destination Column To Display select column to display. for example "name".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"More Data For API is an optional menu that is used to add data that will be returned by the API."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Add relation belongs to set options",src:n(9592).Z}))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Save and save CRUD."))))}d.isMDXComponent=!0},6509:function(e,t,n){t.Z=n.p+"assets/images/Add-relation-belongs-to-set-input-type-f54d06c825dbdb3ab5561f86d3473368.png"},9592:function(e,t,n){t.Z=n.p+"assets/images/Add-relation-belongs-to-set-options-0f589d7fa0798dd739d386e9a64b9011.png"},5741:function(e,t,n){t.Z=n.p+"assets/images/Add-relation-belongs-to-c13c53886729bc5b0b3c72908122da71.png"}}]);