(this["webpackJsonpabout-iu"]=this["webpackJsonpabout-iu"]||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),i=(a(25),a(9)),o=a(1),s=a(3),m=a(4),d=a(6),u=a(5),h=(a(26),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={scrolled:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){0===window.scrollY?e.setState({scrolled:!1}):!e.state.scrolled&&e.setState({scrolled:!0})}),{passive:!0})}},{key:"render",value:function(){return c.a.createElement("header",{id:"header",className:this.state.scrolled?"shrink":""},c.a.createElement("div",{className:"left"},c.a.createElement(i.b,{to:"/"},"Home"),c.a.createElement(i.b,{to:"/profile"},"Profile")),c.a.createElement("div",{className:"flex center"},c.a.createElement(i.b,{to:"/"},c.a.createElement("svg",{version:"1.1",id:"logo",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 200 200"},c.a.createElement("g",null,c.a.createElement("path",{d:"M16,169c-1.1,0-1.9-1-1.7-2c0.6-4.1,2.3-13.3,3-17.5c2.5-15.6,4.8-31.2,7.3-46.7c2.2-13.9,4.4-27.9,6.8-41.8 c1.8-10.5,3.6-21,5.5-31.5c0.1-0.8,0.9-1.5,1.7-1.5H63c0.2,0.5,0.6,1,0.5,1.4c-2.3,15.3-4.6,30.6-7,45.8 c-2.1,13.3-4.5,26.6-6.7,39.9c-2.8,17-5.3,34.1-8.1,51.1c-0.2,1.2-1.9,3.1-2.9,3.1C31.2,169.4,23.6,169.2,16,169z"}),c.a.createElement("path",{d:"M84.5,28h23c0.8,0,1.6,0.6,1.7,1.4c0.2,1,0.4,2,0.2,2.9c-1.1,7.6-2.5,15.2-3.7,22.9c-2.3,14.1-4.7,28.2-6.7,42.4 c-1.4,10.3-3,20.6-3.1,31c-0.1,10.2,4.3,18.6,13.2,20.2c7.2,1.3,14.5,1.3,21.1-3.2c9.2-6.2,12.6-15.9,14.9-25.9 c2.3-10.3,3.8-20.7,5.4-31.1c2.3-14.3,4.4-28.6,6.7-42.9c0.9-5.5,2.2-10.9,3.4-16.3c0.2-0.8,0.9-1.4,1.7-1.4H185 c1.1,0,1.9,0.9,1.7,2c-0.7,6.1-1.3,12.1-2.3,18.2c-2.5,15.9-5.1,31.9-7.8,47.8c-2.5,15.3-4.2,30.6-11.3,44.9 c-5.6,11.4-12,33.3-53.8,33.3c-13.1,0-32.4-8.5-38.6-20.9c-7.1-14-5.3-28.8-3.4-43.4C71.3,96,74,82.2,76.2,68.4 c2.1-13,4.3-26,6.5-38.9C82.9,28.6,83.6,28,84.5,28z"}))))),c.a.createElement("div",{className:"right"},c.a.createElement(i.b,{to:"/discography"},"Discography"),c.a.createElement(i.b,{to:"/filmography"},"Filmography")))}}]),a}(c.a.Component)),p=(a(32),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isLoading:!0},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.instagram.com/dlwlrma/").then((function(e){return e.text()})).then((function(t){var a=JSON.parse(t.slice(t.indexOf("edge_owner_to_timeline_media")+30,t.indexOf("edge_saved_media")-2)).edges;e.setState({posts:a,isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?null:c.a.createElement("div",{id:"instagram",className:"flex"},this.state.posts.map((function(e,t){var a=e.node;return c.a.createElement("a",{key:t,href:"https://www.instagram.com/p/".concat(a.shortcode,"/"),target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:a.display_url,alt:"\uc774\uc9c0\uae08 \uc778\uc2a4\ud0c0 \uac8c\uc2dc\ubb3c"}))})))}}]),a}(c.a.Component)),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){if(window.YT)e.loadVideo();else{var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",window.onYouTubeIframeAPIReady=e.loadVideo,document.body.append(t)}},e.loadVideo=function(){var t=e.props,a=t.id,n=t.vars;e.player=new window.YT.Player("player",{videoId:a,playerVars:n,events:{onReady:e.onPlayerReady}})},e.loadVideoById=function(t){e.player.loadVideoById(t)},e.onPlayerReady=function(e){e.target.playVideo()},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.id;e.id!==t&&this.loadVideoById(t)}},{key:"render",value:function(){return c.a.createElement("div",{id:"player"})}}]),a}(c.a.Component),f=(a(33),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),n=t.call(this,e),document.body.classList.add("home"),document.body.classList.remove("hideHeader"),n.state={scrolled:window.scrollY>0},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){0===window.scrollY?e.setState({scrolled:!1}):e.state.scrolled||e.setState({scrolled:!0})}))}},{key:"render",value:function(){return c.a.createElement("section",{id:"home"},c.a.createElement("div",{id:"homeVideo"},c.a.createElement("div",{className:"videoWrapper"},c.a.createElement(v,{id:"TgOu00Mf3kI",vars:{rel:0,muted:1,loop:1,playsinline:1,playlist:"TgOu00Mf3kI",controls:0,showinfo:0}}))),c.a.createElement("div",{id:"ringWrap",style:this.state.scrolled?{opacity:0}:{}},c.a.createElement("ul",{className:"text-ring"},c.a.createElement("li",null,"\uc544"),c.a.createElement("li",null,"\uc774"),c.a.createElement("li",null,"\uc720"),c.a.createElement("li",null,c.a.createElement("span",{role:"img","aria-label":"purple heart"},"\ud83d\udc9c")),c.a.createElement("li",null,"\uc720"),c.a.createElement("li",null,"\uc560"),c.a.createElement("li",null,"\ub098"))),c.a.createElement(p,null))}}]),a}(c.a.Component)),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),n=t.call(this,e),document.body.classList.remove("hideHeader","home"),n}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("section",null,"Profile")}}]),a}(c.a.Component),y=(a(34),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isLoading:!0},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.uri).then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,list:t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.list,n=this.props.type;return t?null:"grid"===n?a.map((function(e,t){return c.a.createElement(i.b,{key:t,to:"/discography/".concat(e.name),className:"grid-item","data-language":e.language,style:{backgroundImage:"url(".concat(e.image,")")}},c.a.createElement("div",{className:"grid-item-content"},c.a.createElement("div",null,e.category),c.a.createElement("h3",null,e.name),c.a.createElement("time",null,e.releaseDate)))})):a.map((function(e,t){return c.a.createElement("div",{key:t,className:"thumb-item"},c.a.createElement("div",{className:"bg",style:{backgroundImage:"url(".concat(e.image,")")}}),c.a.createElement("div",{className:"detail"},c.a.createElement("div",{className:"title"},e.title),c.a.createElement("h3",{className:"name"},e.name),c.a.createElement("div",{className:"category"},e.category)))}))}}]),a}(c.a.Component)),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),n=t.call(this,e),document.body.classList.remove("hideHeader","home"),n}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{id:"discography",className:"list grid max-1400"},c.a.createElement(y,{uri:"/data/album.json",type:"grid"}))}}]),a}(c.a.Component),b=(a(35),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setActivated=function(e){console.log(n.state.data.tracks[e]),n.setState({activated:e})},document.body.classList.add("hideHeader"),document.body.classList.remove("home"),n.state={isLoading:!0,activated:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="".concat(this.props.location.pathname.replace("discography","data/albums"),".json");fetch(t).then((function(e){return e.headers.get("content-type").includes("json")?e.json():""})).then((function(t){t&&e.setState({isLoading:!1,data:t})}))}},{key:"render",value:function(){var e=this;if(this.state.isLoading)return null;var t=this.state,a=t.data,n=t.activated;return c.a.createElement("section",{id:"discographyDetail",className:!1!==n?"lyric-activated":""},c.a.createElement(i.b,{to:"../discography",className:"album-closer icon-times","aria-label":"back"}),c.a.createElement("div",{className:"back-to-tracklist icon-arrow-left",onClick:function(){e.setState({activated:!1})}}),c.a.createElement("div",{className:"album-bg",style:{backgroundImage:"url(".concat(a.image,")")}}),c.a.createElement("div",{className:"album-art"},c.a.createElement("div",{id:"albumart"},c.a.createElement("img",{src:a.image,className:"album-art-img",alt:a.name})),c.a.createElement("div",{id:"bgmVid",className:!1!==n&&a.tracks[n].music?"reveal":""},c.a.createElement(v,{id:!1!==n?a.tracks[n].music:"",vars:{rel:0,muted:0,loop:1,playsinline:1,controls:0,showinfo:0}})),c.a.createElement("div",{className:"song-info"},c.a.createElement("div",{className:"song-title"},!1!==n&&a.tracks[n].title),c.a.createElement("div",{className:"song-artist"},"\uc544\uc774\uc720"),c.a.createElement("div",{className:"song-album"},a.name))),c.a.createElement("div",{className:"detail"},c.a.createElement("div",{className:"tracklist",style:!1!==n?{maxHeight:0}:{maxHeight:"".concat(2.5*a.tracks.length+2.3,"rem")}},c.a.createElement("h2",{className:"detail-title"},"Tracklist"),c.a.createElement("ul",null,a.tracks.map((function(t,a){return c.a.createElement("li",{key:a,onClick:function(){e.setActivated(a)},className:"song-list"},t.title)}))))),c.a.createElement("div",{className:"lyrics ".concat(!1!==n?"reveal":"")},a.lyrics.map((function(e,t){return c.a.createElement("div",{key:t,className:"lyric ".concat(n===t?"reveal":"")},e)}))),c.a.createElement("svg",null,c.a.createElement("defs",null,c.a.createElement("filter",{id:"blur",x:"0",y:"0",width:"100%",height:"100%"},c.a.createElement("feGaussianBlur",{stdDeviation:"20"}),c.a.createElement("feComponentTransfer",null,c.a.createElement("feFuncA",{type:"discrete",tableValues:"1 1"}))))))}}]),a}(c.a.Component)),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),n=t.call(this,e),document.body.classList.remove("hideHeader","home"),n}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{id:"filmography",className:"list thumbBg max-1400"},c.a.createElement(y,{uri:"/data/filmography.json",type:"thumbBg"}))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(h,null),c.a.createElement("main",{id:"main"},c.a.createElement(o.a,{exact:!0,path:"/",component:f}),c.a.createElement(o.a,{exact:!0,path:"/profile",component:g}),c.a.createElement(o.a,{exact:!0,path:"/discography",component:E}),c.a.createElement(o.a,{strict:!0,path:"/discography/",component:b}),c.a.createElement(o.a,{exact:!0,path:"/Filmography",component:w})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.44ef244e.chunk.js.map