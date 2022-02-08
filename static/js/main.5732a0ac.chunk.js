(this["webpackJsonperc721-with-hardhat"]=this["webpackJsonperc721-with-hardhat"]||[]).push([[0],{321:function(e,t,n){},373:function(e,t){},564:function(e,t){},680:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(163),i=n.n(o),s=(n(320),n(5)),c=n(6),l=n(9),u=n(10),p=n(52),h=n(702),d=(n(321),n(68)),f=n(3),m=n(201),g=n(1),b=n.n(g),v=n(18),w=n(698),y=n(703),E=n(159),k=n(323)({host:"ipfs.infura.io",port:5001,protocol:"https",apiPath:"/api/v0"}),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).captureFile=function(e){console.log("capturing ",a.state.image),e.preventDefault();var t=e.target.files[0],n=new window.FileReader;n.readAsArrayBuffer(t),n.onloadend=function(){a.setState({file:t}),console.log("file",t)}},a.state={name:null,description:null,symbol:null,file:null,address:null},a.uploadFile=a.uploadFile.bind(Object(f.a)(a)),a.captureFile=a.captureFile.bind(Object(f.a)(a)),a}return Object(c.a)(n,[{key:"uploadFile",value:function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,a,r,o,i,s,c,l,u,p,h,d,f,g,v,w,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new y.a.Web3Provider(window.ethereum),e.next=3,t.send("eth_requestAccounts",[]);case 3:return e.next=5,t.getSigner();case 5:if(n=e.sent,a={},fetch("./InterPlan721.json").then((function(e){return e.json()})).then((function(e){console.log(e),a=e})).catch((function(e){console.log("Error Reading data "+e)})),!(null!=a&&a.length<1)){e.next=80;break}r=new E.a(a.abi,a.bytecode,n),console.log("Submitting file to IPFS..."),o=!1,i=!1,e.prev=13,c=Object(m.a)(k.add(this.state.file,{pin:!0}));case 15:return e.next=17,c.next();case 17:if(!(o=!(l=e.sent).done)){e.next=64;break}u=l.value,console.log("hash ",u.path),p="{ ",p+='"name": "'+this.state.name+'",',p+='"description": '+this.state.description+'",',p+='"symbol": "'+this.state.symbol+'",',p+='"image": "https://ipfs.io/ipfs/'+u.path+'", ',p+='"attributes": [ ... ]',p+="}",console.log("Submitting file to IPFS..."),h=!1,d=!1,e.prev=30,g=Object(m.a)(k.add(p,{pin:!0}));case 32:return e.next=34,g.next();case 34:if(!(h=!(v=e.sent).done)){e.next=45;break}return w=v.value,console.log("hash ",w.path),e.next=39,r.deploy(t.address,this.state.name,this.state.symbol,this.state.description,w);case 39:j=e.sent,console.log("Contract deployed at:",j.address),this.setState({address:j.address});case 42:h=!1,e.next=32;break;case 45:e.next=51;break;case 47:e.prev=47,e.t0=e.catch(30),d=!0,f=e.t0;case 51:if(e.prev=51,e.prev=52,!h||null==g.return){e.next=56;break}return e.next=56,g.return();case 56:if(e.prev=56,!d){e.next=59;break}throw f;case 59:return e.finish(56);case 60:return e.finish(51);case 61:o=!1,e.next=15;break;case 64:e.next=70;break;case 66:e.prev=66,e.t1=e.catch(13),i=!0,s=e.t1;case 70:if(e.prev=70,e.prev=71,!o||null==c.return){e.next=75;break}return e.next=75,c.return();case 75:if(e.prev=75,!i){e.next=78;break}throw s;case 78:return e.finish(75);case 79:return e.finish(70);case 80:case"end":return e.stop()}}),e,this,[[13,66,70,80],[30,47,51,61],[52,,56,60],[71,,75,79]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement("h1",null,"InterPlanetary Image"),r.a.createElement(w.a,{title:"Home Page",onPress:function(){return e.props.navigation.navigate("Home")}}),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.uploadFile()}},"\xa0",r.a.createElement("input",{type:"file",accept:".jpg, .png, .jpeg",onChange:this.captureFile}),r.a.createElement("div",{className:"form-group mr-sm-2"},r.a.createElement("h1",null," "),r.a.createElement("input",{type:"text",className:"form-control-sm",placeholder:"Name of NFT",required:!0,ref:function(t){e.name=t}}),r.a.createElement("div",{className:"form-group mr-sm-2"}),r.a.createElement("input",{type:"text",className:"form-control-sm",placeholder:"Description of NFT",required:!0,ref:function(t){e.description=t}}),r.a.createElement("input",{type:"text",className:"form-control-sm",placeholder:"Symbol of NFT",required:!0,ref:function(t){e.symbol=t}}),r.a.createElement("div",{className:"form-group mr-sm-2"}),r.a.createElement("input",{type:"submit",className:"btn btn-block btn-primary",value:"MINT"}))),r.a.createElement("div",null,"Contract Address: ",this.state.address))}}]),n}(a.Component),x=j,O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement("h1",null,"InterPlanetary 721s"),r.a.createElement(w.a,{title:"Change to Images",onPress:function(){return e.props.navigation.navigate("Image")}}),r.a.createElement("div",null,"Currently functioning in the Goerli test network. "),r.a.createElement("div",{class:"container"},r.a.createElement("p",null,"The smart contract does not allow for duplicate hashes, so hashes can only be used once. This is a demonstration of Jared V. Samonte's capabilities in developing in Ethereum, IPFS, Ether.js, the Hardhat framework, OpenZeppelin ERC721 library, and Goerli test network.")),r.a.createElement("a",{href:"https://www.linkedin.com/in/jared-samonte-9b9192157/"},"LinkedIn Account"),r.a.createElement("a",{href:"https://github.com/jared-v-samonte/ERC721-with-Hardhat"},"GitHub Repository"))}}]),n}(a.Component),C=O,F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(N,null)}}]),n}(a.Component),I=Object(h.a)({Home:{screen:C},Image:{screen:x}}),N=Object(p.createAppContainer)(I),S=F,P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=n(306),T=n.n(R),W=document.getElementById("root");W&&i.a.render(r.a.createElement(T.a,{basename:"/react-gh-pages"},r.a.createElement(S,null)),W),function(e){if("serviceWorker"in navigator){if(new URL("/react-gh-pages",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-gh-pages","/service-worker.js");P?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}},[[680,1,2]]]);
//# sourceMappingURL=main.5732a0ac.chunk.js.map