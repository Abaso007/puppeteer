"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25182],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,y=f["".concat(l,".").concat(m)]||f[m]||s[m]||p;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},65991:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={sidebar_label:"InnerParams"},i="InnerParams type",l={unversionedId:"api/puppeteer.innerparams",id:"version-19.11.1/api/puppeteer.innerparams",title:"InnerParams type",description:"Signature:",source:"@site/versioned_docs/version-19.11.1/api/puppeteer.innerparams.md",sourceDirName:"api",slug:"/api/puppeteer.innerparams",permalink:"/api/puppeteer.innerparams",draft:!1,tags:[],version:"19.11.1",frontMatter:{sidebar_label:"InnerParams"},sidebar:"api",previous:{title:"Handler",permalink:"/api/puppeteer.handler"},next:{title:"InterceptResolutionAction",permalink:"/api/puppeteer.interceptresolutionaction"}},c={},u=[{value:"Signature:",id:"signature",level:4}],s={toc:u};function f(e){var{components:r}=e,t=p(e,["components"]);return(0,n.kt)("wrapper",a({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"innerparams-type"}),"InnerParams type"),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export type InnerParams<T extends unknown[]> = {\n  [K in keyof T]: FlattenHandle<T[K]>;\n};\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References:")," ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.flattenhandle"}),"FlattenHandle")))}f.isMDXComponent=!0}}]);