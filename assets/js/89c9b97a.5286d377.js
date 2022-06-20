"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[889],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6322:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),a=["components"],i={sidebar_position:2,id:"color",title:"Color"},s="Color",c={unversionedId:"extras-scala-io/color",id:"extras-scala-io/color",title:"Color",description:"extras.scala.io.syntax",source:"@site/../generated-docs/target/mdoc/extras-scala-io/color.md",sourceDirName:"extras-scala-io",slug:"/extras-scala-io/color",permalink:"/docs/extras-scala-io/color",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"color",title:"Color"},sidebar:"tutorialSidebar",previous:{title:"extras-scala-io: Getting Started",permalink:"/docs/extras-scala-io/"},next:{title:"True Color",permalink:"/docs/extras-scala-io/truecolor/"}},u={},p=[{value:"<code>extras.scala.io.syntax</code>",id:"extrasscalaiosyntax",level:2}],m={toc:p};function d(e){var n=e.components,i=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"color"},"Color"),(0,l.kt)("h2",{id:"extrasscalaiosyntax"},(0,l.kt)("inlineCode",{parentName:"h2"},"extras.scala.io.syntax")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"extras-scala-io")," provides ",(0,l.kt)("inlineCode",{parentName:"p"},"syntax")," to use ",(0,l.kt)("inlineCode",{parentName:"p"},"scala.io.AnsiColor")," easily (The missing ones will be added later)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import extras.scala.io.syntax.color._\n\n"Hello".blue\n// res1: String = "\\u001b[34mHello\\u001b[0m"\n\n"Hello".red\n// res2: String = "\\u001b[31mHello\\u001b[0m"\n\n"Hello".green\n// res3: String = "\\u001b[32mHello\\u001b[0m"\n\n"Hello".bold\n// res4: String = "\\u001b[1mHello\\u001b[0m"\n\n"Hello".underlined\n// res5: String = "\\u001b[4mHello\\u001b[0m"\n\nprintln("Hello".blue)\n// \x1b[34mHello\x1b[0m\n\nprintln("Hello".red)\n// \x1b[31mHello\x1b[0m\n\nprintln("Hello".green)\n// \x1b[32mHello\x1b[0m\n\nprintln("Hello".bold)\n// \x1b[1mHello\x1b[0m\n\nprintln("Hello".underlined)\n// \x1b[4mHello\x1b[0m\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"AnsiColor syntax support Example 1",src:t(3001).Z,width:"866",height:"710"}),"\n",(0,l.kt)("img",{alt:"AnsiColor syntax support Example 2",src:t(7412).Z,width:"1818",height:"154"})),(0,l.kt)("p",null,"You can also chain them like this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import extras.scala.io.syntax.color._\n\nprintln("Hello".blue)\n// \x1b[34mHello\x1b[0m\n\nprintln("Hello".blue.bold)\n// \x1b[1m\x1b[34mHello\x1b[0m\x1b[0m\n\nprintln("Hello".blue.bold.underlined)\n// \x1b[4m\x1b[1m\x1b[34mHello\x1b[0m\x1b[0m\x1b[0m\n\nprintln("Hello".underlined.bold.blue)\n// \x1b[34m\x1b[1m\x1b[4mHello\x1b[0m\x1b[0m\x1b[0m\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"AnsiColor syntax support Example 3",src:t(3593).Z,width:"1108",height:"580"})))}d.isMDXComponent=!0},7412:function(e,n,t){n.Z=t.p+"assets/images/extras-scala-io-color-examples-2-976e7f4b27bcfd0cabd50dbff6d684af.png"},3593:function(e,n,t){n.Z=t.p+"assets/images/extras-scala-io-color-examples-3-d1ffd93ad3c3f66565368f1925421a9f.png"},3001:function(e,n,t){n.Z=t.p+"assets/images/extras-scala-io-color-examples-7839a8159a17e8476cabdf9327ef9e77.png"}}]);