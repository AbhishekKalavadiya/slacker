(this.webpackJsonpslacker=this.webpackJsonpslacker||[]).push([[0],{66:function(e,a,t){e.exports=t(95)},71:function(e,a,t){},72:function(e,a,t){},87:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(24),r=t.n(l),o=(t(71),t(13)),s=t(109),i=t(46),m=t.n(i),u=t(45),d=t.n(u),E=t(47),h=t.n(E),p=Object(n.createContext)(),f=function(e){var a=e.initialState,t=e.reducer,l=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(t,a)},l)},v=function(){return Object(n.useContext)(p)};t(72);var g=function(){var e=v(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(s.a,{className:"header__avatar",src:null===t||void 0===t?void 0:t.photoURL,alt:null===t||void 0===t?void 0:t.displayName}),c.a.createElement(d.a,null),"      "),c.a.createElement("div",{className:"header__center"},c.a.createElement(m.a,null),"      ",c.a.createElement("input",{placeholder:"enter the search"}),"       "),c.a.createElement("div",{className:"header__right"},c.a.createElement(h.a,null),"        "))},b=t(48),_=t.n(b),N=t(49),I=t.n(N),O=t(50),j=t.n(O),S=t(4),w=t(26),k=t.n(w),C=k.a.initializeApp({apiKey:"AIzaSyDKaMqpX4Dmx7qVET4RCAIh2qHqb7I5dVM",authDomain:"slacker-ff14f.firebaseapp.com",databaseURL:"https://slacker-ff14f.firebaseio.com",projectId:"slacker-ff14f",storageBucket:"slacker-ff14f.appspot.com",messagingSenderId:"356007896960",appId:"1:356007896960:web:787086b6b9a66b4235c365",measurementId:"G-BBVETG7C3B"}).firestore(),y=k.a.auth(),B=new k.a.auth.GoogleAuthProvider,R=C;t(87);var D=function(e){var a=e.Icon,t=e.title,n=e.addChannelOption,l=e.id,r=Object(S.f)();return c.a.createElement("div",{className:"sidebarOption",onClick:n?function(){var e=prompt("Pleae enter channel name");e&&R.collection("rooms").add({name:e})}:function(){l?r.push("/room/".concat(l)):r.push(t)}},a&&c.a.createElement(a,{className:"sidebarOption__icon"}),a?c.a.createElement("h3",null,t):c.a.createElement("h3",{className:"sidebarOption__channel"},c.a.createElement("span",{className:"sidebarOption__hash"},"#"),t))},A=t(51),L=t.n(A),T=t(52),U=t.n(T),M=t(53),P=t.n(M),q=t(54),x=t.n(q),G=t(55),V=t.n(G),F=t(56),W=t.n(F),z=t(58),J=t.n(z),K=t(57),H=t.n(K),X=t(59),$=t.n(X);t(89);var Q=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1],r=v(),s=Object(o.a)(r,1)[0].user;return Object(n.useEffect)((function(){R.collection("rooms").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement("div",{className:"sidebar__info"},c.a.createElement("h2",null,null===s||void 0===s?void 0:s.displayName),c.a.createElement("h3",null,c.a.createElement(_.a,null),null===s||void 0===s?void 0:s.email)),c.a.createElement(I.a,null)),c.a.createElement(D,{Icon:j.a,title:"Threads"}),c.a.createElement(D,{Icon:L.a,title:"Mentions & Reactions"}),c.a.createElement(D,{Icon:U.a,title:"Saved Items"}),c.a.createElement(D,{Icon:P.a,title:"Channel Browser"}),c.a.createElement(D,{Icon:x.a,title:"People & User groups"}),c.a.createElement(D,{Icon:V.a,title:"Apps"}),c.a.createElement(D,{Icon:W.a,title:"File Browser"}),c.a.createElement(D,{Icon:H.a,title:"Show Less"}),c.a.createElement("hr",null),c.a.createElement(D,{Icon:J.a,title:"Channels"}),c.a.createElement("hr",null),c.a.createElement(D,{Icon:$.a,addChannelOption:!0,title:"Add Channel"}),t.map((function(e){return c.a.createElement(D,{title:e.name,id:e.id})})))},Y=t(108),Z=t(62),ee="SET_USER",ae=function(e,a){switch(console.log(a),a.type){case ee:return Object(Z.a)({},e,{user:a.user});default:return e}};t(90);var te=function(){var e=v(),a=Object(o.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-512/slack-10-555455.png",alt:""}),c.a.createElement("h1",null,"Sign In to ",c.a.createElement("span",{className:"login__containerName"},"#Slacker")),c.a.createElement(Y.a,{onClick:function(){y.signInWithPopup(B).then((function(e){console.log(e),t({type:ee,user:e.user})})).catch((function(e){console.log(e.message)}))}},"Sign in with Google")))},ne=t(32),ce=(t(91),t(60)),le=t.n(ce),re=t(61),oe=t.n(re);t(92);var se=function(e){var a=e.message,t=e.user,n=e.userImage,l=e.timestamp;return c.a.createElement("div",{className:"message"},c.a.createElement("img",{src:n}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,t,"  ",c.a.createElement("span",{className:"message__timestamp"},new Date(null===l||void 0===l?void 0:l.toDate()).toUTCString())),c.a.createElement("p",null,a)))};t(93);var ie=function(e){var a=e.channelName,t=e.channelId,l=Object(n.useState)(),r=Object(o.a)(l,2),s=r[0],i=r[1],m=v(),u=Object(o.a)(m,1)[0].user;return c.a.createElement("div",{className:"chatInput"},c.a.createElement("form",null,c.a.createElement("input",{value:s,placeholder:"Message to #".concat(null===a||void 0===a?void 0:a.toLowerCase()),onChange:function(e){return i(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),t&&R.collection("rooms").doc(t).collection("messages").add({message:s,timestamp:k.a.firestore.FieldValue.serverTimestamp(),user:u.displayName,userImage:u.photoURL}),i("")}},"Send")))};t(94);var me=function(){var e=Object(S.g)().roomId,a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){e&&R.collection("rooms").doc(e).onSnapshot((function(e){return r(e.data())})),R.collection("rooms").doc(e).collection("messages").orderBy("timestamp","des").onSnapshot((function(e){return u(e.docs.map((function(e){return e.data()})))}))}),[e]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement("div",{className:"chat__headerLeft"},c.a.createElement("h4",{className:"chat__channelName"},c.a.createElement("strong",null,"# ",null===l||void 0===l?void 0:l.name),c.a.createElement(le.a,null))),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement("p",null,c.a.createElement(oe.a,null)," Details"))),c.a.createElement("div",{className:"chat__messages"},m.map((function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement(se,{message:a,timestamp:t,user:n,userImage:l})}))),c.a.createElement(ie,{channelName:null===l||void 0===l?void 0:l.name,channelId:e}))};var ue=function(){var e=v(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},c.a.createElement(ne.a,null,t?c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(Q,null),c.a.createElement(S.c,null,c.a.createElement(S.a,{path:"/room/:roomId"},c.a.createElement(me,null)),c.a.createElement(S.a,{path:"/"},c.a.createElement("h1",null,"welcome"))))):c.a.createElement(S.a,{path:"/"},c.a.createElement(te,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,{initialState:{user:null},reducer:ae},c.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.19a39683.chunk.js.map