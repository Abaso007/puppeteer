"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={},p="Docker",u={unversionedId:"guides/docker",id:"version-19.11.1/guides/docker",title:"Docker",description:"Puppeteer offers a Docker image that includes Chromium along with the required",source:"@site/versioned_docs/version-19.11.1/guides/docker.md",sourceDirName:"guides",slug:"/guides/docker",permalink:"/guides/docker",draft:!1,tags:[],version:"19.11.1",frontMatter:{},sidebar:"docs",previous:{title:"Evaluate JavaScript",permalink:"/guides/evaluate-javascript"},next:{title:"Request Interception",permalink:"/guides/request-interception"}},c={},l=[{value:"Usage",id:"usage",level:2}],s={toc:l};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"docker"}),"Docker"),(0,n.kt)("p",null,"Puppeteer offers a Docker image that includes Chromium along with the required\ndependencies and a pre-installed Puppeteer version. The image is available via\nthe\n",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/pkgs/container/puppeteer"}),"GitHub Container Registry"),".\nThe latest image is tagged as ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," and other tags match Puppeteer versions.\nFor example,"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"docker pull ghcr.io/puppeteer/puppeteer:latest # pulls the latest\ndocker pull ghcr.io/puppeteer/puppeteer:16.1.0 # pulls the image that contains Puppeteer v16.1.0\n")),(0,n.kt)("p",null,"The image is meant for running the browser in sandbox mode and therefore,\nrunning the image requires the ",(0,n.kt)("inlineCode",{parentName:"p"},"SYS_ADMIN")," capability."),(0,n.kt)("h2",a({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"To use the docker image directly, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-sh"}),'docker run -i --init --cap-add=SYS_ADMIN --rm ghcr.io/puppeteer/puppeteer:latest node -e "$(cat path/to/script.js)"\n')),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"path/to/script.js")," is the path relative to your working directory. Note\nthe image requires the ",(0,n.kt)("inlineCode",{parentName:"p"},"SYS_ADMIN")," capability since the browser runs in sandbox\nmode."),(0,n.kt)("p",null,"If you need to build an image based on a different base image, you can use our\n",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/docker/Dockerfile"}),(0,n.kt)("inlineCode",{parentName:"a"},"Dockerfile")),"\nas the starting point."))}d.isMDXComponent=!0}}]);