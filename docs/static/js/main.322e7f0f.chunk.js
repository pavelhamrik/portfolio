(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(44)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),c=(a(21),a(1)),o=a(2),s=a(4),p=a(3),h=a(5),u=(a(23),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Button "+(void 0===e?"":e)).trim(),a=this.props.href,n=void 0===a?"":a;return r.a.createElement("a",{href:n,className:t},this.props.children)}}]),t}(n.Component)),m=(a(25),a(27),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Tooltip "+(void 0===e?"":e)).trim();return r.a.createElement("span",{className:t},this.props.children)}}]),t}(n.Component)),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"identity"},r.a.createElement(u,{href:"#0",className:"button-plain button-primary button-typographic"},"ph",r.a.createElement(m,{className:"tooltip-discloseable"},"Yup, this is Pavel. Hey!"))),r.a.createElement("div",{className:"menu"},r.a.createElement(u,{href:"#0",className:"button-plain button-primary"},"Work"),r.a.createElement(u,{href:"#0",className:"button-plain button-primary"},"Play"),r.a.createElement(u,{href:"#0",className:"button-plain button-primary"},"Resume"))))}}]),t}(n.Component),f=(a(29),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Grid "+(void 0===e?"":e)).trim();return r.a.createElement("div",{className:t},this.props.children)}}]),t}(n.Component)),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Item "+(void 0===e?"":e)).trim();return r.a.createElement("div",{className:t},this.props.children)}}]),t}(n.Component),v=(a(31),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement(f,{className:"medium-2-cols large-4-cols huge-6-cols huge-offset-2"},r.a.createElement(b,null,"Item 1"),r.a.createElement(b,null,"Item 2"),r.a.createElement(b,null,"Item 3"),r.a.createElement(b,null,"Item 4")),r.a.createElement(f,{className:""},r.a.createElement(b,null,"All that footer stuff\u2026")))}}]),t}(n.Component)),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.id,t=void 0===e?"GlyphPattern":e,a=this.props.className,n=("pattern-text "+(void 0===a?"":a)).trim(),i=this.props.character,l=void 0===i?"\u03d2\u03d2":i,c=this.props.color,o=void 0===c?"black":c,s=this.props.opacity,p=void 0===s?"0.25":s,h=this.props.transform,u=void 0===h?"rotate(-30)":h;return r.a.createElement("pattern",{id:t,x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},r.a.createElement("text",{className:n,x:"-5",y:"20",fill:o,opacity:p,transform:u},l))}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.id,t=void 0===e?"NoisePattern":e,a=this.props.color,n=void 0===a?"black":a,i=this.props.opacity,l=void 0===i?"0.25":i,c=this.props.transform,o=void 0===c?"rotate(15)":c;return r.a.createElement(r.a.Fragment,null,r.a.createElement("filter",{id:"displacementFilter"},r.a.createElement("feTurbulence",{type:"turbulence",baseFrequency:"1",numOctaves:"5",result:"turbulence"}),r.a.createElement("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"100",stitchTiles:"stitch",xChannelSelector:"R",yChannelSelector:"G"})),r.a.createElement("pattern",{id:t,x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse"},r.a.createElement("circle",{cx:"70",cy:"70",r:"50",fill:"none",stroke:n,strokeWidth:"5",strokeOpacity:l,style:{filter:"url(#displacementFilter)"},transform:o})))}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.id,t=void 0===e?"Hill":e,a=this.props.hillFill,n=void 0===a?"gray":a,i=this.props.faceFill,l=void 0===i?"silver":i,c=this.props.hillOpacity,o=void 0===c?"1":c,s=this.props.faceOpacity,p=void 0===s?"1":s,h=this.props.base,u=parseFloat(void 0===h?"10.0":h),m=this.props.center,d=parseFloat(void 0===m?"10.0":m),f=this.props.width,b=parseFloat(void 0===f?"10.0":f),v=this.props.height,y=d-b/2,E=u-parseFloat(void 0===v?"10.0":v),O=y+" "+u+", "+d+" "+E+", "+(d+b/2)+" "+u,g=y+" "+u+", "+d+" "+E+", "+(d-.2*b)+" "+u;return r.a.createElement("g",{id:t,className:"Hill"},r.a.createElement("polygon",{points:O,fill:n,fillOpacity:o}),r.a.createElement("polygon",{points:g,fill:l,fillOpacity:p}))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.id,t=void 0===e?"Tree":e,a=this.props.treetopfill,n=void 0===a?"#186A46":a,i=this.props.trunkfill,l=void 0===i?"#4A3525":i,c=this.props.opacity,o=void 0===c?"1":c,s=this.props.base,p=parseFloat(void 0===s?"10.0":s),h=this.props.center,u=parseFloat(void 0===h?"10.0":h),m=this.props.width,d=parseFloat(void 0===m?"10.0":m),f=this.props.height,b=parseFloat(void 0===f?"10.0":f),v=p-.23608285480015428*b,y=[[u,p-b],[u+d/2,v],[u-d/4/1.618,v+.07*b],[u-d/2,v]],E=y.slice(0,y.length-1),O=[[u+d/10,v],[u+d/10*1.618,p],[u-d/10*1.618,p],[u-d/10,v]];return r.a.createElement("g",{id:t,className:"Tree",opacity:o},r.a.createElement("polygon",{points:O,fill:l}),r.a.createElement("polygon",{points:y,fill:n}),r.a.createElement("polygon",{points:E,fill:"#000000",fillOpacity:"0.2"}))}}]),t}(n.Component),j=(a(33),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Landscape "+(void 0===e?"":e)).trim();return r.a.createElement("svg",{className:t,width:"70%",viewBox:"0 0 160 90"},r.a.createElement(E,{id:"SplatterNoise",color:"#E6BF20",opacity:"0.45"}),r.a.createElement(y,{id:"Upsilon",character:"\u03d2\u03d2\u03d2",color:"#5B10DA",opacity:"1"}),r.a.createElement("pattern",{id:"MixedPatternUpsilon",x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse"},r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"#861AFF"}),r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#SplatterNoise)"}),r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#Upsilon)"})),r.a.createElement(y,{id:"Character2",className:"pattern-text-large pattern-text-monospace",character:"\xa7",color:"#000",opacity:"0.2",transform:"scale(1) rotate(20) translate(10 -5)"}),r.a.createElement("pattern",{id:"MixedPattern2",x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse"},r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"#D08D65"}),r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#SplatterNoise)"})),r.a.createElement("pattern",{id:"MixedPattern3",x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse"},r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"#334BD0"}),r.a.createElement("rect",{x:"0",y:"0",width:"100",height:"100",fill:"url(#SplatterNoise)"})),r.a.createElement("g",{className:"far"},r.a.createElement(O,{hillFill:"url(#MixedPattern3)",faceFill:"#2C84D0",base:90,center:"80",width:"23",height:"23"}),r.a.createElement(O,{hillFill:"url(#MixedPattern2)",faceFill:"orange",base:90,center:"110",width:"30",height:"30"}),r.a.createElement(O,{hillFill:"#7C964E",faceFill:"#9AD06D",base:90,center:"95",width:"18",height:"12"}),r.a.createElement(O,{hillFill:"url(#MixedPatternUpsilon)",faceFill:"mediumpurple",base:90,center:"130",width:"30",height:"40"}),r.a.createElement(g,{base:90,center:"100",width:"7",height:"12"}),r.a.createElement(g,{base:90,center:"104",width:"6",height:"10"})))}}]),t}(n.Component)),w=(a(35),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Splash "+(void 0===e?"":e)).trim();return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"content"},this.props.children,r.a.createElement(j,{className:"landscape-bottom landscape-right"})))}}]),t}(n.Component)),N=(a(37),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.className,t=("Label "+(void 0===e?"":e)).trim();return r.a.createElement("span",{className:t},this.props.children)}}]),t}(n.Component)),k=(a(39),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("div",{className:"Content"},r.a.createElement(f,{className:"medium-1-cols"},r.a.createElement(b,null,r.a.createElement(w,null,r.a.createElement(N,{className:"label-secondary"},"Go mobile first!"),r.a.createElement("h1",{className:"headline"},"Hi, I'm Pavel,",r.a.createElement("br",null),"a ",r.a.createElement("strong",null,"product designer")," with zeal"),r.a.createElement("p",{className:"lead"},"I'm ",r.a.createElement("strong",null,"environmentally friendly"),", with a ",r.a.createElement("strong",null,"developer")," background, a thing for ",r.a.createElement("strong",null,"ethics")," and a crush on ",r.a.createElement("strong",null,"persuasive games"),".",r.a.createElement("br",null),"My friends say I'm diligent (boring, but how useful!) and have a keen eye. "),r.a.createElement("p",null,r.a.createElement(u,{className:"button-primary button-large"},"Say Hi")))))),r.a.createElement(v,null))}}]),t}(n.Component)),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/portfolio","/service-worker.js");x?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):F(e)})}}()}],[[12,2,1]]]);
//# sourceMappingURL=main.322e7f0f.chunk.js.map