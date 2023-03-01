"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7126],{3905:function(a,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function d(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var o=t.createContext({}),u=function(a){var e=t.useContext(o),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},p=function(a){var e=u(a.components);return t.createElement(o.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,o=a.parentName,p=d(a,["components","mdxType","originalType","parentName"]),s=u(n),c=i,k=s["".concat(o,".").concat(c)]||s[c]||m[c]||r;return n?t.createElement(k,l(l({ref:e},p),{},{components:n})):t.createElement(k,l({ref:e},p))}));function c(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,l=new Array(r);l[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=a,d.mdxType="string"==typeof a?a:i,l[1]=d;for(var u=2;u<r;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9537:function(a,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var t=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],d={docId:"introductioncrud",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/crud-generator/introduction-CRUD.md"},o="Introduction",u={unversionedId:"crud-generator/introduction-CRUD",id:"crud-generator/introduction-CRUD",isDocsHomePage:!1,title:"Introduction",description:"Ketika menambahkan atau mengubah CRUD yang telah ada, kamu akan melihat beberapa info yang dapat kamu ubah yaitu Display Name (Singular dan Plural), Server Side, URL Slug, Icon, Model Name, Controller Name, Order Column, Order Display Column, Order Direction dan Description. Kamu juga dapat memilih jika kamu ingin membuat permission secara otomatis.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/crud-generator/introduction-CRUD.md",sourceDirName:"crud-generator",slug:"/crud-generator/introduction-CRUD",permalink:"/id/crud-generator/introduction-CRUD",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/crud-generator/introduction-CRUD.md",tags:[],version:"current",frontMatter:{docId:"introductioncrud",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/crud-generator/introduction-CRUD.md"},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/id/crud-generator/datatype"},next:{title:"Data Identifer",permalink:"/id/components/data-identifer"}},p=[{value:"Create Table Description",id:"create-table-description",children:[]},{value:"Set Field Property",id:"set-field-property",children:[]},{value:"Add CRUD",id:"add-crud",children:[]},{value:"Hasil Form",id:"hasil-form",children:[]},{value:"Output Form",id:"output-form",children:[]},{value:"Catatan",id:"catatan",children:[]}],m={toc:p};function s(a){var e=a.components,d=(0,i.Z)(a,l);return(0,r.kt)("wrapper",(0,t.Z)({},m,d,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Ketika menambahkan atau mengubah CRUD yang telah ada, kamu akan melihat beberapa info yang dapat kamu ubah yaitu Display Name (Singular dan Plural), Server Side, URL Slug, Icon, Model Name, Controller Name, Order Column, Order Display Column, Order Direction dan Description. Kamu juga dapat memilih jika kamu ingin membuat permission secara otomatis."),(0,r.kt)("h2",{id:"create-table-description"},"Create Table Description"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(7146).Z})),(0,r.kt)("h2",{id:"set-field-property"},"Set Field Property"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BROWSE (menyetel field yang akan tampil ketika kamu menjelajahi data)."),(0,r.kt)("li",{parentName:"ul"},"READ (menyetel field yang akan tampil ketika kamu menampilkan satu data)."),(0,r.kt)("li",{parentName:"ul"},"EDIT (menyetel field yang akan tampil dan dapat diubah ketika kamu mengubah data)."),(0,r.kt)("li",{parentName:"ul"},"ADD (menyetel field yang akan tampil dan dapat ditambah ketika kamu menambahkan data)."),(0,r.kt)("li",{parentName:"ul"},"DELETE (tidak memiliki efek apapun, jadi ini bisa dicentang atau tidak).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(2919).Z})),(0,r.kt)("h2",{id:"add-crud"},"Add CRUD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Table Name"),(0,r.kt)("p",{parentName:"li"},"Nama table untuk membuat CRUD generator.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Display Name (Singular)"),(0,r.kt)("p",{parentName:"li"},"Nama ini untuk di tampilkan pada breadcrumb dan title dari browse data tabel.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"URL Slug (must be unique)"),(0,r.kt)("p",{parentName:"li"},"Nama ini untuk di tampilkan pada alamat url sebagai slug yang nanti akan menjadi pembeda page untuk browse data table lain, nama slug harus bersifat unik.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Model Name"),(0,r.kt)("p",{parentName:"li"},"Berupa gambungan dari namespace dan name class pada model, contoh : App/Models/User. Badaso akan menggunakan model anda untuk proses CRUD.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Order Columns"),(0,r.kt)("p",{parentName:"li"},"Pilih nama column untuk di jadikan urutan awal dari browse data table.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generate Permissions"),(0,r.kt)("p",{parentName:"li"},"Hidupkan generate permission untuk membuat user permission CRUD data table secara otomatis.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Server Side"),(0,r.kt)("p",{parentName:"li"},"Hidupkan server side jika membutuhkan data secara query pada server dan untuk menagani data dalam jumlah besar.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Soft Delete"),(0,r.kt)("p",{parentName:"li"},'Buat soft delete jika membutuhkan data yang di hapus dapat di kembalikan ulang, khusus untuk soft delete sebelum mengaktifkan ini pastikan terlebidahulu pada table kamu terdapat colums dengan nama "deleted_at" dan tipe data "timestamp".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Display Name (Plural)"),(0,r.kt)("p",{parentName:"li"},"Nama yang di isi pada display name akan ditampilkan pada item menu admin.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Icon"),(0,r.kt)("p",{parentName:"li"},"Icon yang akan ditampilkan pada item admin menu.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Controller Name"),(0,r.kt)("p",{parentName:"li"},"Override controller CRUD generator dengan menginputkan namespace dan nama class pada conttroler, contoh : App\\Http\\Controllers\\TestController")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Order Display Column"),(0,r.kt)("p",{parentName:"li"},"Column yang di pilih pada bagian ini akan diisi dengan angka secara otomatis untuk mengurutkan data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Order Direction"),(0,r.kt)("p",{parentName:"li"},"Terdapat dua pilihan untuk mengurutkan data secara asscending atau descending.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Active Event Notification"),(0,r.kt)("p",{parentName:"li"},"Event untuk mengirimkan notifikasi, terdapat pilihan On Create event notifikasi saat membuat data baru, On Read event notifikasi saat membaca data, On Update event notifikasi saat mengedit data, dan On Delete event notifikasi saat menghapus data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Description"),(0,r.kt)("p",{parentName:"li"},"Memberikan desckripsi pada CRUD generator data tabel."))),(0,r.kt)("h2",{id:"hasil-form"},"Hasil Form"),(0,r.kt)("p",null,"Berikut ini hasil tampilan dari field yang tersedia di Badaso."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:n(5080).Z})),(0,r.kt)("h2",{id:"output-form"},"Output Form"),(0,r.kt)("p",null,"Setiap form yang di generate, akan menggunakan Vue Component yang sudah disediakan Badaso. Pada JSON di bawah, properti value adalah output nilai dari tiap form, dan field adalah nama kolom dari tabel yang di generate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="JSON"',title:'"JSON"'},'{\n"data": [\n{\n"field": "badaso_text",\n"value": 227\n},\n{\n"field": "badaso_password",\n"value": "password"\n},\n{\n"field": "badaso_textarea",\n"value": "textarea"\n},\n{\n"field": "badaso_search",\n"value": "search"\n},\n{\n"field": "badaso_checkbox",\n"value": [\n"this_is_value"\n]\n},\n{\n"field": "badaso_number",\n"value": "1"\n},\n{\n"field": "badaso_url",\n"value": "http://dev.programming-bot.com/badaso-admin/main/data-test/add"\n},\n{\n"field": "badaso_time",\n"value": "2021-01-27T10:18:00.000Z"\n},\n{\n"field": "badaso_date",\n"value": "2021-01-27T00:00:00.000Z"\n},\n{\n"field": "badaso_select",\n"value": "this_is_value"\n},\n{\n"field": "badaso_datetime",\n"value": "2021-01-27T10:18:00.000Z"\n},\n{\n"field": "badaso_select_multiple",\n"value": [\n"this_is_value"\n]\n},\n{\n"field": "badaso_radio",\n"value": "this_is_value"\n},\n{\n"field": "badaso_switch",\n"value": true\n},\n{\n"field": "badaso_slider",\n"value": 22\n},\n{\n"field": "badaso_editor",\n"value": "<p>editor</p>"\n},\n{\n"field": "badaso_tags",\n"value": "badaso,tags"\n},\n{\n"field": "badaso_color_picker",\n"value": "#754B4B"\n},\n{\n"field": "badaso_upload_image",\n"value": {\n"name": "blog.jpg",\n"base64": "string too long",\n"file": {}\n}\n},\n{\n"field": "badaso_upload_image_multiple",\n"value": [\n{\n"name": "categories.jpg",\n"base64": "string too long",\n"file": {}\n},\n{\n"name": "event.jpg",\n"base64": "string too long",\n"file": {}\n}\n]\n},\n{\n"field": "badaso_upload_file",\n"value": {\n"name": "halaman.jpg",\n"base64": "string too long",\n"file": {}\n}\n},\n{\n"field": "badaso_upload_file_multiple",\n"value": [\n{\n"name": "kelas.jpg",\n"base64": "string too long",\n"file": {}\n},\n{\n"name": "mentor.jpg",\n"base64": "string too long",\n"file": {}\n}\n]\n},\n{\n"field": "badaso_hidden",\n"value": "hidden"\n}\n]\n}\n')),(0,r.kt)("h2",{id:"catatan"},"Catatan"),(0,r.kt)("p",null,"Setiap komponen yang disediakan Badaso ditujukan untuk digunakan di dalam tag dengan css class ",(0,r.kt)("inlineCode",{parentName:"p"},"row"),". Semua komponen yang disedikan Badaso merupakan komponen yang terdiri dari ",(0,r.kt)("inlineCode",{parentName:"p"},"vs-col"),". Jadi pada CRUD generator, bagian Optional Details dapat di isi JSON dengan properti ",(0,r.kt)("inlineCode",{parentName:"p"},"size"),". Properti size ini berisi angka 1-12 yang mana angka ini adalah nilai untuk diterapkan pada ",(0,r.kt)("inlineCode",{parentName:"p"},"vs-col"),". Contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title=".vue"',title:'".vue"'},"<vs-row>{{component}}</vs-row>\n")))}s.isMDXComponent=!0},7146:function(a,e,n){e.Z=n.p+"assets/images/crud-add-part-1-43711156531a5dffb353d973fe487b89.png"},5080:function(a,e,n){e.Z=n.p+"assets/images/form-field-f59b00e61b3a4eb8539e7eecefbb47a3.png"},2919:function(a,e,n){e.Z=n.p+"assets/images/generate-crud-d6a9377eca720fa4c8a5ca3cc9c317b2.png"}}]);