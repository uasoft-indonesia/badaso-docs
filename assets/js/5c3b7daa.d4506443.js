"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3225],{3507:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(7462),a=t(3366),o=t(7294),l=t(3935),u=t(2263),c=t(5977),s=t(4996),i=t(6742),m=t(9105),h=t(6397),f=t(7052),d=t(6747),b=t(5613),C=t(4973),v="searchBox_1ZXk",p=["contextualSearch"],k=null;function g(e){var n=e.hit,t=e.children;return o.createElement(i.Z,{to:n.url},t)}function E(e){var n=e.state,t=e.onClose,r=(0,h.Z)().generateSearchPageLink;return o.createElement(i.Z,{to:r(n.query),onClick:t},"See all ",n.context.nbHits," results")}function S(e){var n,i,h=e.contextualSearch,S=(0,a.Z)(e,p),Z=(0,u.Z)().siteMetadata,P=(0,b.Z)(),y=null!=(n=null==(i=S.searchParameters)?void 0:i.facetFilters)?n:[],w=h?[].concat(P,y):y,O=Object.assign({},S.searchParameters,{facetFilters:w}),R=(0,s.C)().withBaseUrl,x=(0,c.k6)(),A=(0,o.useRef)(null),B=(0,o.useRef)(null),F=(0,o.useState)(!1),I=F[0],M=F[1],T=(0,o.useState)(null),_=T[0],j=T[1],D=(0,o.useCallback)((function(){return k?Promise.resolve():Promise.all([t.e(4300).then(t.bind(t,4300)),Promise.all([t.e(532),t.e(6945)]).then(t.bind(t,6945)),Promise.all([t.e(532),t.e(9846)]).then(t.bind(t,9846))]).then((function(e){var n=e[0].DocSearchModal;k=n}))}),[]),L=(0,o.useCallback)((function(){D().then((function(){A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),M(!0)}))}),[D,M]),U=(0,o.useCallback)((function(){M(!1),A.current.remove()}),[M]),V=(0,o.useCallback)((function(e){D().then((function(){M(!0),j(e.key)}))}),[D,M,j]),Y=(0,o.useRef)({navigate:function(e){var n=e.itemUrl;x.push(n)}}).current,q=(0,o.useRef)((function(e){return e.map((function(e){var n=document.createElement("a");return n.href=e.url,Object.assign({},e,{url:R(""+n.pathname+n.hash)})}))})).current,H=(0,o.useMemo)((function(){return function(e){return o.createElement(E,(0,r.Z)({},e,{onClose:U}))}}),[U]),N=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",Z.docusaurusVersion),e}),[Z.docusaurusVersion]);(0,f.D)({isOpen:I,onOpen:L,onClose:U,onInput:V,searchButtonRef:B});var Q=(0,C.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+S.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:v},o.createElement(d.a,{onTouchStart:D,onFocus:D,onMouseOver:D,onClick:L,ref:B,translations:{buttonText:Q,buttonAriaLabel:Q}})),I&&(0,l.createPortal)(o.createElement(k,(0,r.Z)({onClose:U,initialScrollY:window.scrollY,initialQuery:_,navigator:Y,transformItems:q,hitComponent:g,resultsFooterComponent:H,transformSearchClient:N},S,{searchParameters:O})),A.current))}var Z=function(){var e=(0,u.Z)().siteConfig;return o.createElement(S,e.themeConfig.algolia)}}}]);