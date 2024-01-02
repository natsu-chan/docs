"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3797],{8801:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=i(5893),t=i(1151),s=i(4866),a=i(5162);const c={sidebar_position:6},l="vehicles",o={id:"reference/configuration/vehicles",title:"vehicles",description:"A vehicle represents a specific electric vehicle (EV) with its battery. When a vehicle is configured and assigned to a charger, the user interface can display the charging status, state of charge (SoC), remaining charging time, and other data automatically retrieved and processed from the vehicle.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/vehicles.mdx",sourceDirName:"reference/configuration",slug:"/reference/configuration/vehicles",permalink:"/en/docs/reference/configuration/vehicles",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/vehicles.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"meters",permalink:"/en/docs/reference/configuration/meters"},next:{title:"hems",permalink:"/en/docs/reference/configuration/hems"}},h={},d=[{value:"Required Parameters",id:"required-parameters",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"<code>capacity</code>",id:"capacity",level:3},{value:"<code>phases</code>",id:"phases",level:3},{value:"<code>cache</code>",id:"cache",level:3},{value:"<code>onIdentify</code>",id:"onidentify",level:3},{value:"<code>identifiers</code>",id:"identifiers",level:3},{value:"RFID",id:"rfid",level:4},{value:"Vehicle Identifier",id:"vehicle-identifier",level:4},{value:"<code>features: [&quot;coarsecurrent&quot;]</code>",id:"features-coarsecurrent",level:3},{value:"<code>icon</code>",id:"icon",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vehicles",children:(0,r.jsx)(n.code,{children:"vehicles"})}),"\n",(0,r.jsxs)(n.p,{children:["A vehicle represents a specific electric vehicle (EV) with its battery. When a vehicle is configured and assigned to a ",(0,r.jsx)(n.a,{href:"loadpoints#vehicle",children:"charger"}),", the user interface can display the charging status, state of charge (SoC), remaining charging time, and other data automatically retrieved and processed from the vehicle."]}),"\n",(0,r.jsx)(n.p,{children:"It is also possible to limit the charge to a specific state of charge (SoC). Since most chargers cannot be aware of this (it is only transmitted in very specific charger combinations), evcc can communicate directly with the vehicle through the online interface (API) of the vehicle manufacturer using this configuration."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"vehicles"})," configuration is a list of different vehicles."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"vehicles:\n  - name: Zoe\n    type: ...\n    ...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Configurations for known vehicles can be found under ",(0,r.jsx)(n.a,{href:"/docs/devices/vehicles",children:"Devices - Vehicles"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Below, the various parameters are explained."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsxs)(n.p,{children:["A short designation of the configured vehicle. The value is used when referencing the vehicle in the configuration of the ",(0,r.jsx)(n.a,{href:"loadpoints#vehicle",children:"charger"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"name: zoe\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"title",children:(0,r.jsx)(n.code,{children:"title"})}),"\n",(0,r.jsx)(n.p,{children:"A description of the vehicle that will be displayed in the user interface."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"title: Zoe\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"type",children:(0,r.jsx)(n.code,{children:"type"})}),"\n",(0,r.jsxs)(n.p,{children:["This is the evcc interface type that allows communication with the vehicle. Known vehicles can be integrated using the ",(0,r.jsx)(n.code,{children:"template"})," type. The appropriate (template) type for known vehicles and instructions for manual configuration ",(0,r.jsx)(n.code,{children:"custom"})," can be found under ",(0,r.jsx)(n.a,{href:"/docs/devices/vehicles",children:"Devices - Vehicles"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsx)(n.h3,{id:"capacity",children:(0,r.jsx)(n.code,{children:"capacity"})}),"\n",(0,r.jsx)(n.p,{children:"The capacity of the vehicle's battery in kilowatt-hours (kWh)."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"capacity: 50 # kWh\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"phases",children:(0,r.jsx)(n.code,{children:"phases"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"maximum"})," number of phases this vehicle can use (possibly including the charging cable). The default internal value is 3. Possible values are 1, 2, or 3."]}),"\n",(0,r.jsxs)(n.p,{children:["Some vehicles, especially plug-in hybrids, do not use the maximum possible 3 phases for charging. While ",(0,r.jsx)(n.code,{children:"evcc"})," can determine the actually used phases at the start of a charging process, if a charge meter is installed, this information is not available before charging starts. By configuring the ",(0,r.jsx)(n.code,{children:"phases"})," parameter on the vehicle, ",(0,r.jsx)(n.code,{children:"evcc"})," can start the charging process with a lower available power in PV mode."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"phases: 2\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"cache",children:(0,r.jsx)(n.code,{children:"cache"})}),"\n",(0,r.jsx)(n.p,{children:"The retention time and suppression duration of external requests to the vehicle data interface (API)."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The value must be specified with the attached time unit (see example). ",(0,r.jsx)(n.code,{children:"m"})," stands for minutes."]})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["It is ",(0,r.jsx)(n.strong,{children:"NOT"})," recommended to change the default settings, as this could lead to the vehicle manufacturer actively preventing charging control via evcc. ",(0,r.jsx)(n.strong,{children:"AT YOUR OWN RISK."})]})}),"\n",(0,r.jsx)(n.p,{children:"To determine current status data from the vehicle (e.g., state of charge SoC of the traction battery), the manufacturer's interface is regularly queried online. However, to avoid overwhelming the vehicle manufacturer's servers with constant requests (which could result in account suspension), a cache is implemented that intercepts these requests and responds with the recently retrieved data up to the maximum age indicated here. Since most vehicles update the data only during a running charging process at very large intervals (10 to 30 minutes are common), more frequent requests don't provide added value."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Default Value:"})," ",(0,r.jsx)(n.code,{children:"15m"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"cache: 5m\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onidentify",children:(0,r.jsx)(n.code,{children:"onIdentify"})}),"\n",(0,r.jsx)(n.p,{children:"Default values to be applied when the vehicle is identified:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Possible Values"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"loadpoints#mode",children:(0,r.jsx)(n.code,{children:"mode"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"loadpoints#mincurrent",children:(0,r.jsx)(n.code,{children:"minCurrent"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"loadpoints#maxcurrent",children:(0,r.jsx)(n.code,{children:"maxCurrent"})})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"minSoc"})," charge at the highest possible power until the specified SoC is reached, if the mode is not set to ",(0,r.jsx)(n.code,{children:"off"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"targetSoc"})," stop charging when this SoC is reached"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./loadpoints#priority",children:(0,r.jsx)(n.code,{children:"priority"})})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"config-type",children:[(0,r.jsxs)(a.Z,{value:"Template",label:"Template",default:!0,children:[(0,r.jsxs)(n.p,{children:["When vehicles are integrated into the configuration using the ",(0,r.jsx)("i",{children:"type=templates"}),", e.g., when using ",(0,r.jsx)("i",{children:"evcc configure"}),"."]}),(0,r.jsx)(n.p,{children:"mode: pv\nmincurrent: 8\nmaxcurrent: 20\nminSoc: 40\ntargetSoc: 80\npriority: 5"})]}),(0,r.jsxs)(a.Z,{value:"Native",label:"Native",children:[(0,r.jsxs)(n.p,{children:["When vehicles are integrated using their native type, e.g., ",(0,r.jsx)("i",{children:"type=audi"}),", in the configuration."]}),(0,r.jsx)(n.p,{children:"onIdentify: # set defaults when vehicle is identified\nmode: pv\nmincurrent: 8\nmaxcurrent: 20\nminSoc: 40\ntargetSoc: 80\npriority: 5"})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"identifiers",children:(0,r.jsx)(n.code,{children:"identifiers"})}),"\n",(0,r.jsx)(n.p,{children:"A list of one or more identifiers to identify the vehicle. If the vehicle needs to be identified at different chargers, multiple identifiers might be necessary. Identification can be achieved using the following mechanisms:"}),"\n",(0,r.jsx)(n.h4,{id:"rfid",children:"RFID"}),"\n",(0,r.jsxs)(n.p,{children:["If the charger has an RFID interface, an RFID card can be assigned to a vehicle for identification. In this case, the ",(0,r.jsx)(n.code,{children:"RFID Token ID"})," is required."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"identifiers:\n  - 12345ABC # RFID token ID\n"})}),"\n",(0,r.jsx)(n.h4,{id:"vehicle-identifier",children:"Vehicle Identifier"}),"\n",(0,r.jsx)(n.p,{children:"If the charger supports it, it receives a vehicle identifier from the vehicle. This can be either the MAC address of the onboard charger or an identifier of a permanently installed Plug & Charge certificate (a different certificate than for DC charging!)."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"identifiers:\n  - 01:23:45:67:89:0A # MAC address\n"})}),"\n",(0,r.jsx)(n.p,{children:"Some vehicles generate a new MAC address every day. In this case, wildcards can be used if the existing vehicles differ in the non-changing part of the MAC address."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"identifiers:\n  - 01:23:45:*\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"features-coarsecurrent",children:(0,r.jsx)(n.code,{children:'features: ["coarsecurrent"]'})}),"\n",(0,r.jsx)(n.p,{children:"Indicates that a vehicle cannot be regulated with continuous current limitation."}),"\n",(0,r.jsx)(n.p,{children:"This setting should be used for the following combination:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Vehicle can only regulate in whole ampere steps"}),"\n",(0,r.jsx)(n.li,{children:"charger can process finer-grained charging current specifications (e.g., 1 mA)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this combination, it can happen that changes of a few mA in current result in an unexpected change of the phase current by 1A for regulation. The regulation may then start to oscillate. This feature also limits the regulation to coarse 1A steps."}),"\n",(0,r.jsx)(n.p,{children:"It CANNOT be used in conjunction with a vehicle template. To use it, the vehicle must be configured as a native type."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'features: ["coarsecurrent"]\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"icon",children:(0,r.jsx)(n.code,{children:"icon"})}),"\n",(0,r.jsx)(n.p,{children:"Vehicles can be displayed with different icons in the UI. The available options are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"car"}),"\n",(0,r.jsx)(n.li,{children:"bike"}),"\n",(0,r.jsx)(n.li,{children:"scooter"}),"\n",(0,r.jsx)(n.li,{children:"moped"}),"\n",(0,r.jsx)(n.li,{children:"motorcycle"}),"\n",(0,r.jsx)(n.li,{children:"van"}),"\n",(0,r.jsx)(n.li,{children:"bus"}),"\n",(0,r.jsx)(n.li,{children:"tractor"}),"\n",(0,r.jsx)(n.li,{children:"generic"}),"\n",(0,r.jsx)(n.li,{children:"heater"}),"\n",(0,r.jsx)(n.li,{children:"cooler"}),"\n",(0,r.jsx)(n.li,{children:"waterheater"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"icon: heater\n"})}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,n,i)=>{i.d(n,{Z:()=>a});i(7294);var r=i(512);const t={tabItem:"tabItem_Ymn6"};var s=i(5893);function a(e){let{children:n,hidden:i,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,a),hidden:i,children:n})}},4866:(e,n,i)=>{i.d(n,{Z:()=>w});var r=i(7294),t=i(512),s=i(2466),a=i(6550),c=i(469),l=i(1980),o=i(7392),h=i(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:i,attributes:r,default:t}}=e;return{value:n,label:i,attributes:r,default:t}}))}(i);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:i}=e;const t=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function m(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,s=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=i.find((e=>e.default))??i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,d]=f({queryString:i,groupId:t}),[m,x]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,h.Nk)(i);return[t,(0,r.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:t}),g=(()=>{const e=o??m;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=i(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=i(5893);function v(e){let{className:n,block:i,selectedValue:r,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),h=e=>{const n=e.currentTarget,i=l.indexOf(n),t=c[i].value;t!==r&&(o(n),a(t))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":i},n),children:c.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:h,...s,className:(0,t.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:t}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,t.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>a});var r=i(7294);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);