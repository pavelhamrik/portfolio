(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(56)},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),c=(a(30),a(2)),o=a(3),s=a(6),p=a(4),u=a(5),h=a(58),m=a(60),d=a(59),f=(a(32),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Grid "+(void 0===e?"":e)).trim();return r.a.createElement("div",{className:t},this.props.children)}}]),t}(n.Component)),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Item "+(void 0===e?"":e)).trim();return r.a.createElement("div",{className:t},this.props.children)}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.id,t=void 0===e?"GlyphPattern":e,a=this.props.className,n=("pattern-text "+(void 0===a?"":a)).trim(),i=this.props.character,l=void 0===i?"\u03d2\u03d2":i,c=this.props.color,o=void 0===c?"black":c,s=this.props.opacity,p=void 0===s?"0.25":s,u=this.props.transform,h=void 0===u?"rotate(-30)":u;return r.a.createElement("pattern",{id:t,x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},r.a.createElement("text",{className:n,x:"-5",y:"20",fill:o,opacity:p,transform:h},l))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.id,t=void 0===e?"NoisePattern":e,a=this.props.color,n=void 0===a?"black":a,i=this.props.opacity,l=void 0===i?"0.25":i,c=this.props.transform,o=void 0===c?"rotate(15)":c;return r.a.createElement(r.a.Fragment,null,r.a.createElement("filter",{id:"displacementFilter"},r.a.createElement("feTurbulence",{type:"turbulence",baseFrequency:"1",numOctaves:"5",result:"turbulence"}),r.a.createElement("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"100",stitchTiles:"stitch",xChannelSelector:"R",yChannelSelector:"G"})),r.a.createElement("pattern",{id:t,x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse"},r.a.createElement("circle",{cx:"70",cy:"70",r:"50",fill:"none",stroke:n,strokeWidth:"5",strokeOpacity:l,style:{filter:"url(#displacementFilter)"},transform:o})))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.id,t=void 0===e?"Hill":e,a=this.props.hillFill,n=void 0===a?"gray":a,i=this.props.faceFill,l=void 0===i?"silver":i,c=this.props.hillOpacity,o=void 0===c?"1":c,s=this.props.faceOpacity,p=void 0===s?"1":s,u=this.props.base,h=parseFloat(void 0===u?"10.0":u),m=this.props.center,d=parseFloat(void 0===m?"10.0":m),f=this.props.height,b=parseFloat(void 0===f?"10.0":f),E=this.props.width,v=parseFloat(void 0===E?b/1.618:E),y=d-v/2,O=h-b,j=y+" "+h+", "+d+" "+O+", "+(d+v/2)+" "+h,g=y+" "+h+", "+d+" "+O+", "+(d-.2*v)+" "+h;return r.a.createElement("g",{id:t,className:"Hill"},r.a.createElement("polygon",{points:j,fill:n,fillOpacity:o}),r.a.createElement("polygon",{points:g,fill:l,fillOpacity:p}))}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.id,t=void 0===e?"Tree":e,a=this.props.treetopfill,n=void 0===a?"#186A46":a,i=this.props.trunkfill,l=void 0===i?"#4A3525":i,c=this.props.opacity,o=void 0===c?"1":c,s=this.props.base,p=parseFloat(void 0===s?"10.0":s),u=this.props.center,h=parseFloat(void 0===u?"10.0":u),m=this.props.height,d=parseFloat(void 0===m?"10.0":m),f=this.props.width,b=parseFloat(void 0===f?d/1.618:f),E=p-.23608285480015428*d,v=[[h,p-d],[h+b/2,E],[h-b/4/1.618,E+.07*d],[h-b/2,E]],y=v.slice(0,v.length-1),O=[[h+b/10,E],[h+b/10*1.618,p],[h-b/10*1.618,p],[h-b/10,E]];return r.a.createElement("g",{id:t,className:"Tree",opacity:o},r.a.createElement("polygon",{points:O,fill:l}),r.a.createElement("polygon",{points:v,fill:n}),r.a.createElement("polygon",{points:y,fill:"#000000",fillOpacity:"0.25"}))}}]),t}(n.Component),j=(a(34),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Landscape "+(void 0===e?"":e)).trim();return r.a.createElement("svg",{className:t,width:"100%",viewBox:"0 0 160 90"},r.a.createElement(v,{id:"SplatterNoise",color:"#E6BF20",opacity:"0.45"}),r.a.createElement(E,{id:"Upsilon",character:"\u03d2\u03d2\u03d2",color:"#5B10DA",opacity:"1"}),r.a.createElement("pattern",{id:"MixedPatternUpsilon",x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse"},r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"#861AFF"}),r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#SplatterNoise)"}),r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#Upsilon)"})),r.a.createElement(E,{id:"Character2",className:"pattern-text-large pattern-text-monospace",character:"\xa7",color:"#000",opacity:"0.2",transform:"scale(1) rotate(20) translate(10 -5)"}),r.a.createElement("pattern",{id:"MixedPattern2",x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse"},r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"#D08D65"}),r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#SplatterNoise)"})),r.a.createElement("pattern",{id:"MixedPattern3",x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse"},r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"#334BD0"}),r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#SplatterNoise)"})),r.a.createElement("pattern",{id:"TreetopPattern",x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse"},r.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#097376"}),r.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#SplatterNoise)"})),r.a.createElement("g",{className:"far"},r.a.createElement("circle",{cx:124,cy:84.6,r:90*.35,fill:"#F3EBF7"}),r.a.createElement("circle",{cx:92.5,cy:82.8,r:22.5,fill:"#EDE4F2"}),r.a.createElement(y,{hillFill:"url(#MixedPattern3)",faceFill:"#2C84D0",base:90,center:"80",width:"23",height:"23"}),r.a.createElement(y,{hillFill:"url(#MixedPattern2)",faceFill:"orange",base:90,center:"110",width:"30",height:"30"}),r.a.createElement(y,{hillFill:"#7C964E",faceFill:"#9AD06D",base:90,center:"95",width:"18",height:"12"}),r.a.createElement(y,{hillFill:"url(#MixedPatternUpsilon)",faceFill:"mediumpurple",base:90,center:"130",width:"30",height:"40"}),r.a.createElement(O,{base:90,center:"67",height:"8",treetopfill:"#097376"}),r.a.createElement(O,{base:90,center:"70",height:"9",treetopfill:"#097376"}),r.a.createElement(O,{base:90,center:"100",height:"12",treetopfill:"url(#TreetopPattern)"}),r.a.createElement(O,{base:90,center:"104",height:"10",treetopfill:"#097376"}),r.a.createElement(O,{base:90,center:"124",height:"11",treetopfill:"#097376"})))}}]),t}(n.Component)),g=(a(36),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Splash "+(void 0===e?"":e)).trim();return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"content"},this.props.children,r.a.createElement(j,{className:"landscape-bottom landscape-right"})))}}]),t}(n.Component)),w=(a(38),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Label "+(void 0===e?"":e)).trim();return r.a.createElement("span",{className:t},this.props.children)}}]),t}(n.Component)),N=(a(40),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Button "+(void 0===e?"":e)).trim(),a=this.props.href,n=void 0===a?"":a;return r.a.createElement("a",{href:n,className:t},this.props.children)}}]),t}(n.Component)),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f,{className:"medium-1-cols"},r.a.createElement(b,null,r.a.createElement(g,null,r.a.createElement(w,{className:"label-secondary"},"Go mobile first!"),r.a.createElement("h1",{className:"headline"},"Hi, I'm Pavel,",r.a.createElement("br",null),"a ",r.a.createElement("strong",null,"product designer")," with zeal"),r.a.createElement("p",{className:"lead"},"I'm ",r.a.createElement("strong",null,"environmentally friendly"),", with a ",r.a.createElement("strong",null,"developer")," background, a thing for ",r.a.createElement("strong",null,"ethics")," and a crush on ",r.a.createElement("strong",null,"persuasive games"),".",r.a.createElement("br",null),"My friends say I'm diligent (yeah, boring, but how useful!) and have a keen eye. "),r.a.createElement("p",null,r.a.createElement(N,{href:"/contact",className:"button-primary button-large"},"Say Hi")))))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h1",null,"Saying 'Hello' and such"),r.a.createElement("p",null,"\u2026"))}}]),t}(n.Component),F=a(57),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f,{className:"medium-1-cols"},r.a.createElement(b,null,r.a.createElement("div",{className:"NotFound"},r.a.createElement("h1",null,"Oh, that old pickle \u2013 not found"),r.a.createElement("p",null,"Well, we'd better ",r.a.createElement(F.a,{to:"/"},"head home"),"."))))}}]),t}(n.Component),S=(a(44),a(46),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Tooltip "+(void 0===e?"":e)).trim();return r.a.createElement("span",{className:t},this.props.children)}}]),t}(n.Component)),U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"identity"},r.a.createElement(N,{href:"/",className:"button-plain button-primary button-typographic"},"ph",r.a.createElement(S,{className:"tooltip-discloseable"},"Yup, this is Pavel. Hey!"))),r.a.createElement("div",{className:"menu"},r.a.createElement(N,{href:"/work",className:"button-plain button-primary"},"Work"),r.a.createElement(N,{href:"/play",className:"button-plain button-primary"},"Play"),r.a.createElement(N,{href:"/resume",className:"button-plain button-primary"},"Resume"))))}}]),t}(n.Component),P=(a(48),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement(f,{className:"medium-2-cols large-4-cols huge-6-cols huge-offset-2"},r.a.createElement(b,null,"Item 1"),r.a.createElement(b,null,"Item 2"),r.a.createElement(b,null,"Item 3"),r.a.createElement(b,null,"Item 4")),r.a.createElement(f,{className:""},r.a.createElement(b,null,"All that footer stuff\u2026")))}}]),t}(n.Component)),D=(a(50),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement("div",{className:"Content"},r.a.createElement(m.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:k}),r.a.createElement(d.a,{path:"/contact",component:x}),r.a.createElement(d.a,{component:C}))),r.a.createElement(P,null)))}}]),t}(n.Component)),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/portfolio","/service-worker.js");I?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):T(e)})}}()}},[[21,2,1]]]);
//# sourceMappingURL=main.98f5edb7.chunk.js.map