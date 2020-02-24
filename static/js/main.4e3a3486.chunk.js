(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=a(11),l=a(47),s=a.n(l),u=a(64),m=a(65),d=a.n(m),f=a(48),p=a.n(f),h=a(104),g=a(136),E=a(137),v=a(155),w=a(138),b=a(139),T=a(37),y=a(132),k=a(4),W=Object(y.a)((function(e){return{secondary:{marginRight:80},departureTime:{color:"rgba(0, 0, 0, 0.54)",textAlign:"right",display:"inline-block",width:"100%"}}}));function N(e){return"BUS"===e?"bus-alt":"TRAM"===e?"subway":"TRAIN"===e?"train":void 0}var C=Object(k.a)({root:{height:30,borderRadius:5},colorPrimary:{backgroundColor:"#ccc"},barColorPrimary:{backgroundColor:"#bdbdbd"}})(g.a),I=function(e){var t=e.departure,a=e.timeToWalk,n=W();if(null===t)return r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement("i",{className:"fad fa-"+N("BUS")}))),r.a.createElement(w.a,{primary:r.a.createElement(C,{variant:"query"})}));var i,o,c="undefined"===typeof a?0:a;return r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(v.a,{style:{backgroundColor:(o=t.TransportMode,"BUS"===o?"#b22222":"TRAM"===o?"#4169e1":"TRAIN"===o?"yellow":void 0)}},r.a.createElement("i",{className:"fad fa-"+N(t.TransportMode)}))),r.a.createElement(w.a,{classes:{secondary:n.secondary},primary:t.LineNumber,secondary:t.Destination}),r.a.createElement(b.a,null,r.a.createElement(T.a,{variant:"body1"},r.a.createElement("b",null,0===(i=t.MinutesToDeparture-c)?"G\xe5 nu!":"G\xe5 om "+i+" min")),r.a.createElement(T.a,{className:n.departureTime,variant:"body2"},t.DisplayTime)))},j=a(140),S=Object(y.a)((function(e){return{root:{marginBottom:e.spacing(2)}}}));var O=function(e){var t=S(),a=e.showCantCatch,n=e.list,i=e.timeToWalk,o=n.map((function(e){return e.MinutesToDeparture=function(e){if(function(e){return e.includes(":")}(e)){var t=p()(e,"HH:mm"),a=p()();return t.diff(a,"minutes")}return function(e){return"Nu"===e}(e)?0:parseInt(e.split(" ")[0],10)}(e.DisplayTime),e})),c=(a?o:o.filter((function(e){return function(e,t){return!!isNaN(t)||e.MinutesToDeparture-t>=0}(e,i)}))).sort((function(e,t){return e.MinutesToDeparture-t.MinutesToDeparture}));return r.a.createElement(j.a,{className:t.root},0===n.length?r.a.createElement(I,{departure:null}):c.map((function(e,t){return r.a.createElement(I,{timeToWalk:i,key:t,departure:e})})))},x=a(141),R=Object(y.a)((function(e){return{root:{margin:e.spacing(1),minWidth:"240px"}}})),A=function(e){var t=e.children,a=R();return r.a.createElement(x.a,{className:a.root},t)},D={sites:[{name:"Ekuddsv\xe4gen",siteId:4042,timeToWalk:10},{name:"Finntorp",siteId:4046,timeToWalk:15},{name:"Saltsj\xf6-J\xe4rla",siteId:9429,timeToWalk:15}]},M=window.localStorage,B=function(e,t){return M.setItem(e,JSON.stringify(t))},J=function(){return function(e){var t=M.getItem(e);return null===t?(B(e,D[e]),D[e]):JSON.parse(t)}("sites")},P=a(151),U=a(153),L=a(144),F=Object(y.a)((function(e){return{box:{padding:e.spacing(2)},textField:{width:145,margin:"8px 0"}}})),z=function(e){var t=F(),a=e.handleSetTimeToWalk,n=e.timeToWalk,i=e.site;return r.a.createElement(P.a,{className:t.box,component:"div"},r.a.createElement(T.a,{variant:"h4"},i.name),r.a.createElement(U.a,{className:t.textField,InputProps:{startAdornment:r.a.createElement(L.a,{position:"start"},r.a.createElement("i",{className:"fas fa-walking"})),endAdornment:r.a.createElement(L.a,{position:"end"},"minuter"),inputProps:{step:"1",pattern:"d+\\"}},type:"number",label:"Tid att g\xe5",id:"timeToWalk"+i.siteId,value:n,variant:"outlined",size:"small",onChange:function(e){return a(e.target.value)}}))},G=Object(y.a)((function(e){return{listTitle:{padding:"0 "+e.spacing(2)+"px"}}}));function H(e){if(["821"].includes(e.LineNumber)){if(1===e.JourneyDirection)return 2;if(2===e.JourneyDirection)return 1}return e.JourneyDirection}var V=function(e){var t=G(),a=e.site,i=e.timeWindow,o=e.showCantCatch,l=Object(n.useState)({Buses:[],Trams:[]}),m=Object(c.a)(l,2),f=m[0],p=m[1],h=Object(n.useState)(a.timeToWalk),g=Object(c.a)(h,2),E=g[0],v=g[1],w="http://localhost:9000/";Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(w+"nextDeparture/"+a.siteId+"?timewindow="+i);case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a.siteId,i]);var b=f.Buses.concat(f.Trams);return r.a.createElement(A,null,r.a.createElement("div",{className:"RealtimeResult"},r.a.createElement(z,{site:a,handleSetTimeToWalk:function(e){var t=parseInt(e,10),n=t<0||isNaN(t)?0:t;v(n),function(e,t){var a=J().map((function(a){return t===a.siteId?(a.timeToWalk=e,a):a}));B("sites",a)}(n,a.siteId)},timeToWalk:E}),r.a.createElement(T.a,{className:t.listTitle,variant:"h6"},"Mot stan"),r.a.createElement(O,{showCantCatch:o,timeToWalk:E,list:b.filter((function(e){return 2===H(e)}))}),r.a.createElement(T.a,{className:t.listTitle,variant:"h6"},"Mot Nacka"),r.a.createElement(O,{showCantCatch:o,timeToWalk:E,list:b.filter((function(e){return 1===H(e)}))})))},q=a(148),$=a(154),K=a(145),Q=a(146),X=a(152),Y=a(147),Z=a(157),_=Object(y.a)((function(e){return{root:{width:"100%"},listItem:{paddingLeft:0,paddingRight:0},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},headingIcon:{fontSize:e.typography.pxToRem(16),marginRight:e.spacing(1)}}})),ee=function(e){var t=e.timeWindow,a=e.setTimeWindow,n=e.showCantCatch,i=e.setShowCantCatch,o=_();return r.a.createElement(A,null,r.a.createElement($.a,null,r.a.createElement(K.a,{expandIcon:r.a.createElement("i",{className:"fad fa-chevron-down"}),"aria-controls":"settings-content",id:"settings-header"},r.a.createElement(T.a,{className:o.heading},r.a.createElement("i",{className:"fad fa-cog "+o.headingIcon}),"Inst\xe4llningar")),r.a.createElement(Q.a,null,r.a.createElement(j.a,{className:o.root},r.a.createElement(h.a,{className:o.listItem},r.a.createElement(w.a,{secondary:"Visa avg\xe5ngar inom:"}),r.a.createElement(b.a,null,r.a.createElement(X.a,{value:t,onChange:function(e){return a(e.target.value)}},r.a.createElement(Y.a,{value:"30"},"30 minuter"),r.a.createElement(Y.a,{value:"60"},"60 minuter")))),r.a.createElement(h.a,{className:o.listItem},r.a.createElement(w.a,{secondary:"Visa avg\xe5ngar jag inte hinner till:"}),r.a.createElement(b.a,null,r.a.createElement(Z.a,{edge:"end",color:"primary",checked:n,onChange:function(e){return i(e.target.checked)}})))))))};var te=function(){var e=Object(n.useState)(30),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(!1),l=Object(c.a)(o,2),s=l[0],u=l[1];return r.a.createElement(q.a,{container:!0,spacing:0},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(ee,{timeWindow:a,setTimeWindow:i,setShowCantCatch:u,showCantCatch:s})),J().map((function(e,t){return r.a.createElement(q.a,{key:t,item:!0,xs:12,md:"auto"},r.a.createElement(V,{showCantCatch:s,site:e,timeWindow:a}))})))},ae=a(149),ne=a(150);var re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(ne.a,{maxWidth:"lg",disableGutters:!0},r.a.createElement(te,null))))},ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/simple-sl-client",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/simple-sl-client","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):oe(t,e)}))}}()},76:function(e,t,a){e.exports=a(103)}},[[76,1,2]]]);
//# sourceMappingURL=main.4e3a3486.chunk.js.map