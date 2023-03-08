"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5518],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2526:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={docId:"setrelationhasmany",sidebar_position:2},s="Relation Has Many",u={unversionedId:"crud-generator/Relationship/set-relation-has-many",id:"crud-generator/Relationship/set-relation-has-many",isDocsHomePage:!1,title:"Relation Has Many",description:"Badaso menyediakan fitur untuk menggunakan relasi Has Many.Untuk lebih jelasnya mengenai Has Many bisa kunjungi",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/crud-generator/Relationship/set-relation-has-many.md",sourceDirName:"crud-generator/Relationship",slug:"/crud-generator/Relationship/set-relation-has-many",permalink:"/id/crud-generator/Relationship/set-relation-has-many",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/docs/crud-generator/Relationship/set-relation-has-many.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{docId:"setrelationhasmany",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Relation Has One",permalink:"/id/crud-generator/Relationship/set-relation-has-one"},next:{title:"Relation Belongs to",permalink:"/id/crud-generator/Relationship/set-relation-belongs-to"}},p=[{value:"Set Relation Has Many",id:"set-relation-has-many",children:[]}],c={toc:p};function m(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"relation-has-many"},"Relation Has Many"),(0,i.kt)("p",null,"Badaso menyediakan fitur untuk menggunakan relasi Has Many.Untuk lebih jelasnya mengenai Has Many bisa kunjungi\n",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/10.x/eloquent-relationships#one-to-one"},"documentation laravel"),"."),(0,i.kt)("h2",{id:"set-relation-has-many"},"Set Relation Has Many"),(0,i.kt)("p",null,"Untuk menggunakan fitur ini, bisa mengikuti langkah berikut:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Sebelumnya, menggunakan crud manajement, buat terlebih dahulu table yang akan di generate CRUD. Contohnya tabel "Buku".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Buka crud management, dan edit tabel yang sudah dibuat."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Add relation belongs to",src:t(5741).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Atur column sesuai dengan yang diiinginkan, pada column yang dijadikan relasi, pilih Input Type "relation", tekan tombol "set relation".'),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Add relation belongs to set input type",src:t(9634).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pada Formulir, ikuti langkah berikut : "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Pada Relation Type pilih "Has Many"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pada Destination Table pilih table relation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pada Destination Column pilih id.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pada Destination Column To Display pilih column to display. contoh nama.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"More Data For API adalah menu optional yang digunakan untuk menambahkan data yang akan dikembalikan oleh API. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Add relation belongs to set options",src:t(9200).Z}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Simpan dan simpan CRUD."))))}m.isMDXComponent=!0},9634:function(e,n,t){n.Z=t.p+"assets/images/Add-relation-belongs-to-set-input-type-f54d06c825dbdb3ab5561f86d3473368.png"},5741:function(e,n,t){n.Z=t.p+"assets/images/Add-relation-belongs-to-c13c53886729bc5b0b3c72908122da71.png"},9200:function(e,n,t){n.Z=t.p+"assets/images/Add-relation-has-many-set-options-adcd3508b1dae20662e1f2e4807db033.png"}}]);