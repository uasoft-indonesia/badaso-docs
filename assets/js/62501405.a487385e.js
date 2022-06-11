"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6245],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),d=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=d(e.components);return o.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},l=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(t),f=n,m=l["".concat(c,".").concat(f)]||l[f]||u[f]||a;return t?o.createElement(m,s(s({ref:r},p),{},{components:t})):o.createElement(m,s({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=l;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8688:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return l}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),s=["components"],i={sidebar_position:1,docId:"how-to-test",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/test-packages/installation.md"},c="How To Test",d={unversionedId:"test-packages/how-to-test",id:"test-packages/how-to-test",isDocsHomePage:!1,title:"How To Test",description:"1. Publish phpunit.xml from vendor to laravel project with command php artisan badaso-test:setup, here is the contents of phpunit.xml file on vendor badaso core",source:"@site/docs/test-packages/how-to-test.md",sourceDirName:"test-packages",slug:"/test-packages/how-to-test",permalink:"/test-packages/how-to-test",editUrl:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/test-packages/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,docId:"how-to-test",custom_edit_url:"https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/test-packages/installation.md"},sidebar:"tutorialSidebar",previous:{title:"Badaso Make Module",permalink:"/module-development/badaso-make-module"}},p=[],u={toc:p};function l(e){var r=e.components,t=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-test"},"How To Test"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Publish phpunit.xml from vendor to laravel project with command ",(0,a.kt)("inlineCode",{parentName:"li"},"php artisan badaso-test:setup"),", here is the contents of phpunit.xml file on vendor badaso core")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="./vendor/phpunit/phpunit/phpunit.xsd" bootstrap="vendor/autoload.php" color ="right">\n    <testsuite>\n        <testsuite name="Units">\n            <directory suffix="Test.php">./tests/Unit</directory>\n            <directory suffix="Test.php">./vendor/badaso/core/tests/Unit</directory>\n        </testsuite>\n        <testsuite name="Features">\n            <directory suffix="Test.php">./tests/Feature</directory>\n            <directory suffix="Test.php">./vendor/badaso/core/tests/Feature</directory>\n        </testsuite>\n    </testsuites>\n    <process coverageUncoveredFiles="true">\n        <include>\n            \x3c!-- <directory suffix=".php">./app</directory> --\x3e\n            <directory suffix=".php">./vendor/badaso/core/src/Commands</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Controllers</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/ContentManager</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Events</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Exceptions</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Helpers</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Listeners</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Mail</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Middleware</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Models</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/OrchestratorHandlers</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Providers</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Routes</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Traits</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Widgets</directory>\n            <directory suffix=".php">./vendor/badaso/core/src/Badaso.php</directory>\n        </include>\n    </coverage>\n    <php>\n        <server name="APP_ENV" value="test"/>\n        <server name="BCRYPT_ROUNDS" value="4"/>\n        <server name="CACHE_DRIVER" value="array"/>\n        \x3c!-- <server name="DB_CONNECTION" value="sqlite"/> --\x3e\n        \x3c!-- <server name="DB_DATABASE" value=":memory:"/> --\x3e\n        <server name="MAIL_MAILER" value="array"/>\n        <server name="QUEUE_CONNECTION" value="sync"/>\n        <server name="SESSION_DRIVER" value="array"/>\n        <server name="TELESCOPE_ENABLED" value="false"/>\n    </php>\n</phpunit>\n\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"To run a test, type the command ",(0,a.kt)("inlineCode",{parentName:"li"},"php artisan test")),(0,a.kt)("li",{parentName:"ol"},"To check coverage, run the command ",(0,a.kt)("inlineCode",{parentName:"li"},"php -dxdebug.mode=coverage vendor/bin/phpunit --coverage-clover='reports/coverage/coverage.xml' --coverage-html='reports/coverage'"))),(0,a.kt)("p",null,"in this section if you want to check the scope specifically, you can add or modify the path to be checked on the scope of the paging tag"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'...\n<process coverageUncoveredFiles="true">\n    <include>\n        ...\n        <directory suffix=".php">./vendor/badaso/core/src/Widgets</directory>\n        <directory suffix=".php">./vendor/badaso/core/src/Badaso.php</directory>\n        \x3c!-- add a new tag directory in this... --\x3e\n        ...\n    </include>\n</coverage>\n...\n')))}l.isMDXComponent=!0}}]);