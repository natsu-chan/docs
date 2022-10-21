"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[545],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],c={sidebar_position:3},o="macOS",s={unversionedId:"installation/macos",id:"installation/macos",title:"macOS",description:"Erstinstallation",source:"@site/docs/installation/macos.md",sourceDirName:"installation",slug:"/installation/macos",permalink:"/docs/installation/macos",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/installation/macos.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Debian, Ubuntu, Raspberry Pi",permalink:"/docs/installation/linux"},next:{title:"Docker",permalink:"/docs/installation/docker"}},p={},u=[{value:"Erstinstallation",id:"erstinstallation",level:2},{value:"Aktualisierung",id:"aktualisierung",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"macos"},"macOS"),(0,i.kt)("h2",{id:"erstinstallation"},"Erstinstallation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xd6ffne ein Terminal Fenster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installiere ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),", falls es noch nicht installiert ist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F\xfcge das evcc tap hinzu:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew tap evcc-io/tap\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Aktualisiere den Paketbestand:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew update\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installiere evcc:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew install evcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Starte den evcc-Server:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew services start evcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pr\xfcfe die Installation und \xf6ffne einen Browser und gibt die folgende URL ein: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:7070"),". Die evcc Oberfl\xe4che sollte im Demo Modus zu sehen sein.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stoppe den evcc-Server:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew services stop evcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Starte die Konfiguration und folge den Anweisungen im Terminal Fenster:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure\n")),(0,i.kt)("p",{parentName:"li"},"Sofern alle Ger\xe4te korrekt konfiguriert sind, kannst du mit den n\xe4chsten Schritten fortfahren."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Fortgeschrittene Anwender (z.B. mit EVCC Erfahrung oder technischem Know-How) k\xf6nnen auch alternativ folgenden Aufruf verwenden:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure --advanced\n")),(0,i.kt)("p",{parentName:"div"},"Dieser Modus bietet weitere (technisch fortgeschrittene) Einstellm\xf6glichkeiten.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Teste ob die Konfiguration funktioniert:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"evcc -c evcc.yaml\n")),(0,i.kt)("p",{parentName:"li"},"\xd6ffne einen Browser und gibt die folgende URL ein: http://localhost:7070. Die evcc Oberfl\xe4che sollte nun mit den eigenen Ger\xe4ten zu sehen sein.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wenn alles funktioniert beende evcc durch dr\xfccken der Tastenkombination ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL-C"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verschiebe die erstellte Konfigurationsdatei in den Zielordner:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mv evcc.yaml /etc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start evcc neu:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew services start evcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gehe zur\xfcck zum Browser und lade die evcc Seite neu. Die Oberfl\xe4che sollte nun mit deinen konfigurierten Ger\xe4ten zu sehen sein."))),(0,i.kt)("h2",{id:"aktualisierung"},"Aktualisierung"),(0,i.kt)("p",null,"Um auf eine neue Version von evcc zu aktualisieren, f\xfchre folgende Schritte durch:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xd6ffne ein Terminal Fenster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Aktualisiere den Paketbestand:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew update\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Installiere evcc:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew install evcc\n")))))}d.isMDXComponent=!0}}]);