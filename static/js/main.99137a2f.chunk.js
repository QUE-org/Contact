(this.webpackJsonpcontact=this.webpackJsonpcontact||[]).push([[0],{35:function(e,t,a){e.exports=a(46)},40:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=(a(40),a(19)),i=a(20),m=a(34),u=a(32),s=a(31),p=a(21);var E=function(e){var t={ja:{contact:"\u304a\u554f\u3044\u5408\u308f\u305b",description:l.a.createElement(l.a.Fragment,null,"\u4e0b\u8a18\u30d5\u30a9\u30fc\u30e0\u3092\u3054\u8a18\u5165\u3044\u305f\u3060\u3044\u305f\u4e0a\uff0c\u300c\u9001\u4fe1\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002",l.a.createElement("br",null),"\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u5185\u5bb9\u306b\u3088\u3063\u3066\u306f\u3001\u304a\u6642\u9593\u3092\u9802\u6234\u3059\u308b\u5834\u5408\u304c\u3054\u3056\u3044\u307e\u3059\u3002"),contactTypes:["\u30a4\u30d9\u30f3\u30c8\u306e\u5185\u5bb9\u306b\u3064\u3044\u3066","\u30a4\u30d9\u30f3\u30c8\u53c2\u52a0\u65b9\u6cd5\u306b\u3064\u3044\u3066","\u305d\u306e\u4ed6"],titles:{type:"\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u7a2e\u985e",name:"\u304a\u540d\u524d",mail:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",affiliation:"\u3054\u6240\u5c5e",subject:"\u4ef6\u540d",content:"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"},placeholder:{name:"\u4f50\u85e4 \u592a\u90ce"},required:{true:"\u5fc5\u9808",false:"\u4efb\u610f"},send:"\u9001\u4fe1"},en:{contact:"Contact",description:l.a.createElement(l.a.Fragment,null,"Please fill out the form below and click [submit] button to send.",l.a.createElement("br",null),"It may take some time depending on your inquiry."),contactTypes:["\u30a4\u30d9\u30f3\u30c8\u306e\u5185\u5bb9\u306b\u3064\u3044\u3066","\u30a4\u30d9\u30f3\u30c8\u53c2\u52a0\u65b9\u6cd5\u306b\u3064\u3044\u3066","Other"],titles:{type:"Content of inquiry",name:"Your name",mail:"Email",affiliation:"Affiliation",subject:"Inquiry subject",content:"Message"},placeholder:{name:"Joe Bloggs"},required:{true:"required",false:"optional"},send:"Submit"}}[e.language],a=t.contact,n=t.description,r=t.contactTypes,c=t.titles,o=t.placeholder,i=t.required,m=t.send,u=function(e){return l.a.createElement("div",{className:e?"required":"optional"},e?i.true:i.false)};return l.a.createElement("div",{className:"contact-form"},l.a.createElement(p.a,null,l.a.createElement("title",null,"QUE ",a)),l.a.createElement("h3",{className:"title"},a),l.a.createElement("p",null,n),l.a.createElement("form",{method:"POST",action:"https://formspree.io/que.org.members@gmail.com"},l.a.createElement("p",null,c.type," ",l.a.createElement("br",null),u(!0)),l.a.createElement(s.a.Control,{name:"\u304a\u554f\u3044\u5408\u308f\u305b\u306e\u7a2e\u985e",as:"select"},r.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))),l.a.createElement("p",null,c.name," ",l.a.createElement("br",null),u(!0)),l.a.createElement("input",{type:"text",name:"\u304a\u540d\u524d",placeholder:o.name}),l.a.createElement("p",null,c.mail," ",l.a.createElement("br",null),u(!0)),l.a.createElement("input",{type:"email",name:"\u8fd4\u4fe1\u5148",placeholder:"you@example.com"}),l.a.createElement("p",null,c.affiliation,l.a.createElement("br",null),u(!1)),l.a.createElement("input",{type:"text",name:"\u6240\u5c5e"}),l.a.createElement("p",null,c.subject,l.a.createElement("br",null),u(!0)),l.a.createElement("input",{type:"text",name:"\u4ef6\u540d"}),l.a.createElement("p",null,c.content," ",l.a.createElement("br",null),u(!0)),l.a.createElement("textarea",{name:"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"}),l.a.createElement("input",{className:"submit",type:"submit",value:m})))},d=a(51),g=a(15),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setLanguage=function(e){n.setState({language:e})},n.state={language:"ja"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.language,a=l.a.createElement(d.a,{variant:"secondary",title:"Language",id:"language-select"},l.a.createElement(g.a.Item,{as:"button",onSelect:function(){return e.setLanguage("ja")}},"\u65e5\u672c\u8a9e"),l.a.createElement(g.a.Item,{as:"button",onSelect:function(){return e.setLanguage("en")}},"English"));return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"header"},l.a.createElement("h5",null,"ja"===t?"\u56fd\u969b\u30b7\u30f3\u30dd\u30b8\u30a6\u30e0\u5b9f\u884c\u59d4\u54e1\u4f1a":"International Symposium Organizing Committee"),a),l.a.createElement(E,{language:t}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.99137a2f.chunk.js.map