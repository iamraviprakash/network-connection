(this["webpackJsonpnetwork-connection"]=this["webpackJsonpnetwork-connection"]||[]).push([[0],{30:function(e,n,t){e.exports=t(45)},35:function(e,n,t){},40:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t.n(a),o=t(18),c=t.n(o),l=(t(35),t(14)),i=t.n(l),u=t(19),s=t(15),d=t(20),m=t(21),f=t(22),v=t.n(f),h=(t(40),t(23));function E(){var e=Object(d.a)(["\n  query ($id: ID!){\n    user(id: $id) {\n      id\n      name\n    }\n  }\n"]);return E=function(){return e},e}var p=v()(E()),w=function(e){var n=e.result,t=n.loading,a=n.error,o=n.data;return t?r.a.createElement("div",null,"Fetching..."):a?r.a.createElement("div",null,"Error"):o.user?r.a.createElement("div",null,r.a.createElement("div",null,"ID: ",o.user.id," Name: ",o.user.name)):r.a.createElement("div",null,"User Not Found")};var b=function(){var e=Object(h.a)(),n=Object(a.useState)({loading:!0,error:null,data:null}),t=Object(s.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)(!0),d=Object(s.a)(l,2),f=d[0],v=d[1],E=function(){var n=Object(u.a)(i.a.mark((function n(t){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.query({query:p,variables:{id:t}});case 2:a=n.sent,c(a);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(m.Detector,{onChange:function(e){console.log(e),v(!e)},render:function(e){var n=e.online;return console.log({formEditState:f}),r.a.createElement("div",{className:n?"online":"offline"},"You are currently ",n?"online":"offline")}}),r.a.createElement("fieldset",{className:"form",disabled:f},r.a.createElement("form",null,r.a.createElement("input",{placeholder:"What needs to be done?",onChange:function(e){return E(e.target.value)}}))),r.a.createElement("div",{className:"user-list"},r.a.createElement(w,{result:o})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=t(7),j=t(10),k=t(29),O=t(28),y=Object(k.a)({uri:"http://localhost:4000"}),N=new j.a({link:y,cache:new O.a});c.a.render(r.a.createElement(g.a,{client:N},r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c573f738.chunk.js.map