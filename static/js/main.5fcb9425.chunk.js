(this["webpackJsonpwebsite-jeffery-john"]=this["webpackJsonpwebsite-jeffery-john"]||[]).push([[0],{117:function(e,a){},130:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(59),c=t.n(l),i=(t(72),t(18)),s=t(11),o=(t(73),t(74),t(76),t(2)),m=t(29),u=t(3),d=t(60),p=t.n(d),b=t(12),f=t.n(b),g=function(){var e=Object(n.useState)(new Array(o.l.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],l=a[1],c=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",l(a)):"leave"===e.event?(a[e.icon.id]="socialicons",l(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),r.a.createElement(p.a,{className:"lead"}," ",o.h),r.a.createElement("div",{className:"p-5"},o.l.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return c({icon:e,event:"enter"})},onMouseOut:function(){return c({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},h=t(31),E=t.n(h),v=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(o.t),i=Object(u.a)(c,2),s=i[0],m=i[1],d=Object(n.useState)(E.a),p=Object(u.a)(d,1)[0];Object(n.useEffect)((function(){s&&b()}),[s]);var b=function(e){f.a.get(o.m+o.o+o.n).then((function(e){return l(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return m(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},s&&r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:t,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(s?"7":"12")},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),r.a.createElement("p",{className:"lead text-center"},o.d),p&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:E.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},y=function(e){var a=e.value,t=Object(n.useState)([]),l=Object(u.a)(t,2),c=l[0],i=l[1],s=Object(n.useCallback)((function(e){f.a.get(a).then((function(e){return i(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in c)o.push(d),m+=c[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(c[e]/m*1e3)/10," %")})))},N=function(e){var a=e.value,t=Object(n.useState)("0 mints"),l=Object(u.a)(t,2),c=l[0],i=l[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),r=Math.trunc(n/1e3/60/60);if(r<24)return i("".concat(r.toString()," hours ago"));var l=t.getDate(),c=t.getMonth(),s=t.getFullYear();return i("on ".concat(l," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][c]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,b=a.languages_url;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},o," "),r.a.createElement("p",{className:"card-text"},m," "),r.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(y,{value:b}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},p)),r.a.createElement("small",{className:"text-muted"},"Updated ",c)))))},j=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useCallback)((function(e){f.a.get(o.i+o.k+o.j).then((function(e){return l(e.data.slice(0,o.r))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){c()}),[c]),r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},t.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5 text-center"},o.q),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,value:e})})))))},w=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/jefferyjohn","aria-label":"My GitHub"},"Jeffery John")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}," ","This project is open source. Feel free to use the source code\xa0",r.a.createElement("a",{href:"https://github.com/jefferyjohn/jefferyjohn.github.io",style:{color:"#707070"}},"here."))))},k=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==l&&c(e)}))}),[l]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(l?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/#home"},"<".concat(o.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.s&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link lead",to:"/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#aboutme"},r.a.createElement("b",null,"About"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#projects"},r.a.createElement("b",null,"Projects"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#media"},r.a.createElement("b",null,"Media"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#contact"},r.a.createElement("b",null,"Contact"))))))},O=t(9),x=function e(a){var t=this,l=a.title,c=a.image,i=a.description;Object(O.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=l,this.image=c,this.description=i},q=[],C=new x({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),_=new x({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");q.push(_),q.push(C);var P=q,M=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),P.map((function(e,a){return r.a.createElement(J,{key:a,title:e.title,description:e.description,index:a})})))},J=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(i.b,{to:"".concat("","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},S=function(e){var a=e.match.params.id,t=P[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},z=t(19),D=t(14),A=t(13),H=t(62),L=t(1),B=t(63);function T(){var e=Object(H.a)(["\n  max-width:100%;\n  border-radius: 0.4;\n  width: 23rem;\n\n"]);return T=function(){return e},e}var F=Object(L.b)(B.a)(T()),R=function(e){Object(A.a)(t,e);var a=Object(D.a)(t);function t(){return Object(O.a)(this,t),a.apply(this,arguments)}return Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"media",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-0"},r.a.createElement("h1",{className:"display-4 mb-5 mx-20 mx-*-20 text-center"},o.p),r.a.createElement("div",{class:"Table"},r.a.createElement("div",{class:"Row no-gutters"},r.a.createElement("div",{class:"Cell"},r.a.createElement("p",null,r.a.createElement(F,{url:"https://news.uga.edu/traveling-mars-complicated-teamwork/",size:"large"}))),r.a.createElement("div",{class:"Cell"},r.a.createElement("p",null,r.a.createElement(F,{url:"https://www.instagram.com/p/B1WW17PpF61/?utm_source=ig_web_copy_link",size:"large"}))),r.a.createElement("div",{class:"Cell"},r.a.createElement("p",null,r.a.createElement(F,{url:"https://www.facebook.com/pinecrestacademy/posts/3015833058447949",size:"large"})))),r.a.createElement("div",{class:"Row no-gutters"},r.a.createElement("div",{class:"Cell"},r.a.createElement("p",null,r.a.createElement(F,{url:"https://www.forsythnews.com/local/lifestyles/club-at-pinecrest-combines-crafting-with-service/",size:"large"}))),r.a.createElement("div",{class:"Cell"},r.a.createElement("p",null,r.a.createElement(F,{url:"https://twitter.com/jfrum/status/1237008902136434688?s=20",size:"large"}))),r.a.createElement("div",{class:"Cell"},r.a.createElement("p",null,r.a.createElement(F,{url:"https://www.northfulton.com/sports/pinecrest-academy-wins-back-to-back-mock-trial-regional-championship/article_b38112cc-a26f-57b8-a39c-0fb4eafcbb64.html",size:"large"})))),r.a.createElement("div",{class:"Row no-gutters"},r.a.createElement("div",{class:"Cell"},r.a.createElement("p",null,r.a.createElement(F,{url:"https://www.northfulton.com/sports/pinecrest-academy-named-mock-trial-region-champs/article_25cf38e4-25fc-5e29-9ba8-7a0e86c3ef33.html",size:"large"}))),r.a.createElement("div",{class:"Cell"},r.a.createElement("p",null,r.a.createElement(F,{url:"https://www.gainesvilletimes.com/life/life-top-stories/pinecrest-academy-students-create-bouquet-of-origami-cranes-for-paris-beirut/",size:"large"}))),r.a.createElement("div",{class:"Cell"},r.a.createElement("p",null,r.a.createElement(F,{url:"https://georgiabulletin.org/news/2018/02/pinecrest-academy-celebrates-25-years/",size:"large"})))))))}}]),t}(r.a.Component),W=function(e){Object(A.a)(t,e);var a=Object(D.a)(t);function t(){return Object(O.a)(this,t),a.apply(this,arguments)}return Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("head"),a=document.createElement("script");a.setAttribute("src","https://assets.calendly.com/assets/external/widget.js"),e.appendChild(a)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{id:"contact",className:"jumbotron jumbotron-fluid bg-transparent m-0"},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.g),r.a.createElement("center",null,r.a.createElement("div",{className:"col-5 d-right d-lg-block align-self-center"},r.a.createElement("p",{className:"lead text-center"},o.f,r.a.createElement("a",{href:"mailto:Jeffery.John@uga.edu",style:{color:"#606060"}},"here!")))),r.a.createElement("div",null,r.a.createElement("div",{id:"schedule_form"},r.a.createElement("div",{className:"calendly-inline-widget","data-url":"https://calendly.com/jefferyjohn/45-minute-meeting",style:{minWidth:"320px",height:"750px"}}))))}}]),t}(r.a.Component),I=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(R,null),r.a.createElement(W,null))},Q=function(){return r.a.createElement(i.a,{basename:"/"},o.u&&r.a.createElement(k,null),r.a.createElement(s.a,{path:"/",exact:!0,component:I}),o.s&&r.a.createElement(s.a,{path:"/blog",exact:!0,component:M}),o.s&&r.a.createElement(s.a,{path:"/blog/:id",component:S}),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},2:function(e){e.exports=JSON.parse('{"a":"Jeffery","c":"","b":"John","h":" | Programmer | Student | Maker | Hacker | Developer ","l":[{"id":0,"image":"fa-github","url":"https://github.com/JefferyJohn","style":"socialicons"},{"id":1,"image":"fa-instagram","url":"https://www.instagram.com/jefferyjohn_/","style":"socialicons"},{"id":2,"image":"fa-linkedin","url":"https://www.linkedin.com/in/jefferyjohn/","style":"socialicons"},{"id":3,"image":"fa-twitter","url":"https://www.twitter.com/jefferyjohn_/","style":"socialicons"}],"e":"About Me","t":true,"m":"https://www.instagram.com/","o":"jefferyjohn_","n":"/?__a=1","d":"Hello! My name is Jeffery John, and I am a 3rd year computer science and public policy student at the University of Georgia. I hope to pursue additional studies in cyber security and law, with the goal of assisting in meaningful policy change.","q":"Recent Projects","i":"https://api.github.com/users/","k":"JefferyJohn","j":"/repos?sort=updated&direction=desc","r":4,"p":"Featured Media","g":"Contact Me","f":"Please don\'t hesitate to schedule a meeting through Calendly. This will automatically create an event on my calendar, as well as email an invitation for the platform of your choice to both of us. Alternatively, feel free to reach out directly by email ","u":true,"s":false}')},31:function(e,a,t){e.exports=t.p+"static/media/resume.e36de92f.pdf"},67:function(e,a,t){e.exports=t(130)},72:function(e,a,t){},76:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.5fcb9425.chunk.js.map