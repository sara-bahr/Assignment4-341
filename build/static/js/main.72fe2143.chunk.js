(this.webpackJsonpreactdoi=this.webpackJsonpreactdoi||[]).push([[0],{13:function(e,t,a){e.exports=a(31)},19:function(e,t,a){},21:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(0),s=a.n(l),c=a(11),m=a.n(c);a(19),a(20);var o=function(){return s.a.createElement("div",null,s.a.createElement("p",{className:"p-3 text-light h3 bg-primary"},"Current weather by city name"))},i=a(3),u=a(12),d=a.n(u);var p=function(e){return null===e.responseData||""===e.responseData?null:"400"===e.responseData.cod||"404"===e.responseData.cod?(setTimeout((function(){e.clearResponse()}),2e4),s.a.createElement("div",{className:"col-sm-8"},s.a.createElement("div",{className:"text-danger"},e.responseData.message))):200===e.responseData.cod?s.a.createElement("div",{className:"col-sm-8"},s.a.createElement("table",{class:"table table-info table-hover"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"City"),s.a.createElement("td",null,e.responseData.name)),s.a.createElement("tr",null,s.a.createElement("td",null,"Temperature"),s.a.createElement("td",null,e.responseData.main.temp)),s.a.createElement("tr",null,s.a.createElement("td",null,"Pressure"),s.a.createElement("td",null,e.responseData.main.pressure)),s.a.createElement("tr",null,s.a.createElement("td",null,"Humidity"),s.a.createElement("td",null,e.responseData.main.humidity)),s.a.createElement("tr",null,s.a.createElement("td",null,"Temperature (Min)"),s.a.createElement("td",null,e.responseData.main.temp_min)),s.a.createElement("tr",null,s.a.createElement("td",null,"Temperature (Max)"),s.a.createElement("td",null,e.responseData.main.temp_max)),s.a.createElement("tr",null,s.a.createElement("td",null,"Conditions"),s.a.createElement("td",null,e.responseData.weather[0].description))))):null};var E=function(e){var t=Object(l.useState)(null),a=Object(i.a)(t,2),n=a[0],r=a[1];return s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-10"},s.a.createElement("style",{jsx:"true"},"\n                        .form-control::-webkit-input-placeholder {\n                            color: #ddd;\n                        }\n                    "),s.a.createElement("input",{type:"text/html",src:"Map.html",height:"1000",size:"10",className:"form-control",id:"usr",placeholder:"NZ city name",onKeyPress:function(t){"Enter"===t.key&&function(t){/^[a-zA-Z]+$/.test(t.target.value)?(r(""),e.onZipChange(t.target.value)):(r("* should only contain letters"),e.clearResponse())}(t)}}))),s.a.createElement("div",{className:"pl-3 row"},s.a.createElement("div",{className:"text-danger small"}," ",n)))};var g=function(e){var t=Object(l.useState)(""),a=Object(i.a)(t,2),n=a[0],c=a[1],m=function(){c("")};return s.a.createElement("div",null,s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-sm-4"}),s.a.createElement(E,{onZipChange:function(e){var t,a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(d()("https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=".concat(e,",nz")));case 2:return t=n.sent,n.next=5,r.a.awrap(t.json());case 5:a=n.sent,console.log(a),c(a);case 8:case"end":return n.stop()}}))},clearResponse:m}),s.a.createElement("div",{className:"col-sm-4"})),s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-sm-2"}),s.a.createElement(p,{responseData:n,clearResponse:m}),s.a.createElement("div",{className:"col-sm-2"})))};a(21);var h=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(o,null),s.a.createElement(g,null))},f=a(6);a(25),a(27);f.initializeApp({apiKey:"AIzaSyDC5hRgGLL5PnDN3ysBNnIGAkAjUIrEIDQ",authDomain:"assignmment.firebaseapp.com",databaseURL:"https://assignmment.firebaseio.com",projectId:"assignmment",storageBucket:"assignmment.appspot.com",messagingSenderId:"431154107897",appId:"1:431154107897:web:17349c3ab382d32cb79928"});var v=f.firestore().collection("locations").doc("cityNames");document.getElementById("map").onclick=function(){null!=localStorage.getItem("store")&&(console.log(localStorage.getItem("store")),v.set({name:localStorage.getItem("store")}).then((function(){v.set({name:localStorage.getItem("store")}),console.log(localStorage.getItem("store"))})).catch((function(e){console.log("error here",e)})))},v.get().then((function(e){e&&e.exists&&(localStorage.setItem("data",e.data().name),console.log(e.data().name+" retrieved"),document.getElementById("city").textContent=e.data().name,y(e.data().name))}));var y=function(e){var t,a,n,l,s,c,m,o;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,r.a.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=".concat(e,",nz")));case 2:return t=i.sent,i.next=5,r.a.awrap(t.json());case 5:if(a=i.sent,n=document.getElementsByClassName("table")[0],200===a.cod)for(document.cookie=a.name,l=[{name:"City",index:a.name},{name:"Temperature",index:a.main.temp},{name:"Pressure",index:a.main.pressure},{name:"Humidity",index:a.main.humidity},{name:"Min Temperature",index:a.main.temp_min},{name:"Max Temperature",index:a.main.temp_max},{name:"Condition",index:a.weather[0].description}],n.innerHTML="",s=0;s<l.length;s++)c=n.insertRow(),m=c.insertCell(),o=c.insertCell(),m.innerHTML=l[s].name,o.innerHTML=l[s].index;else n.innerHTML="",n.innerHTML=a.message;case 8:case"end":return i.stop()}}))};m.a.render(s.a.createElement(h,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.72fe2143.chunk.js.map