(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,a,t){e.exports=t.p+"static/media/bg.794a2815.svg"},198:function(e,a,t){e.exports=t(386)},203:function(e,a,t){},204:function(e,a,t){},386:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(12),l=t.n(r),c=t(23),i=(t(203),t(55)),s=t(14),m=t(13),d=t(17),u=t(15),p=t(16),h=t(48),f=t(438),g=t(432);t(204);function b(e){return"404"===e.variant?n.a.createElement("div",{className:"Route404"},n.a.createElement("h1",null,"404"),n.a.createElement("h2",null,"There's Nothing Here"),n.a.createElement("div",{className:"Links"},n.a.createElement(c.b,{to:"".concat("/palette","/palette/new")},"Create Palette"),n.a.createElement(c.b,{to:"".concat("/palette","/")},"All Palettes"))):n.a.createElement("section",{className:"Page"},e.children)}var C,v,y,E=t(389),x=t(172),w=t(11),j=t(49),O=t.n(j),N=function(e){return void 0===e?"#fff":O()(e).luminance()<=.1?"#fff":"#000"},S=function(e){return void 0===e?"#fff":O()(e).luminance()<=.5?"#fff":"#000"},k=function(e){return"@media(max-width:".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px"}[e],")")},B={ColorBox:(v={width:"20%",height:function(e){return e.singleColorPalette?"50%":"25%"},position:"relative",margin:"0 auto",display:"inline-block",marginBottom:"-4px",transition:"all 0.1s linear",backgroundColor:function(e){return e[e.format]},"&:hover $button":{opacity:"1"},"&.goBack":(C={height:"50%",backgroundColor:"#222222","& $button":{backgroundColor:"transparent"}},Object(w.a)(C,k("lg"),{width:"75%",height:"33.333%"}),Object(w.a)(C,k("sm"),{width:"50%",height:"20%"}),Object(w.a)(C,k("xs"),{width:"100%",height:"10%"}),C)},Object(w.a)(v,k("lg"),{width:"25%",height:function(e){return e.singleColorPalette?"33.3333%":"20%"}}),Object(w.a)(v,k("sm"),{width:"50%",height:function(e){return e.singleColorPalette?"20%":"10%"}}),Object(w.a)(v,k("xs"),{width:"100%",height:function(e){return e.singleColorPalette?"10%":"5%"}}),v),copyOverlay:{opacity:"0",zIndex:"0",height:"100%",width:"100%",transition:"0.7s transform linear",transform:"scale(0.1)",backgroundColor:function(e){return e[e.format]}},showOverlay:{zIndex:"1",opacity:"1",transform:"scale(50)",position:"absolute"},copyMessage:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",fontSize:"4rem",color:"#fff",transform:"scale(0.1)",opacity:"0","& h1":Object(w.a)({backgroundColor:function(e){return"#000"===S(e[e.format])?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.2)"},textShadow:"1px 2px rgba(102, 102, 102, 0.603)",textTransform:"uppercase",fontWeight:"400",width:"100%",textAlign:"center"},k("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"2",transition:"all 0.4s ease-in-out",transitionDelay:"0.1s"},button:{fontFamily:"Blinker",cursor:"pointer",width:"100px",height:"30px",top:"50%",left:"50%",display:"inline-block",position:"absolute",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",textTransform:"uppercase",border:"none",outline:"none",fontSize:"1.1rem",transition:"0.1s opacity linear",backgroundColor:function(e){return"#000"===S(e[e.format])?"rgba(0,0,0,0.1)":"rgba(255,255,255,0.2)"},color:function(e){return S(e[e.format])},"&.copyButton":{opacity:0}},colorName:{position:"absolute",left:"0px",bottom:"0px",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",padding:"10px",color:function(e){return N(e[e.format])}},seeMore:{position:"absolute",bottom:"0px",right:"0px",backgroundColor:"rgba(255, 255, 255, 0.2)",textTransform:"uppercase",textAlign:"center",lineHeight:"30px",padding:"0 8px",height:"30px",border:"none",color:function(e){return S(e[e.format])}},copyText:{color:function(e){return S(e[e.format])}}},F=Object(E.a)(B)(function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={copying:!1},t.handleCopy=function(){return t.setState({copying:!0},function(){setTimeout(function(){return t.setState({copying:!1})},1500)})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.singleColorPalette,t=e.paletteId,o=e.id,r=e.name,l=this.state.copying,i=this.props.classes,s=i.ColorBox,m=i.copyOverlay,d=i.copyMessage,u=i.copyText,p=i.colorName,h=i.button,f=i.seeMore,g=i.showMessage,b=i.showOverlay,C=this.props[this.props.format];return n.a.createElement("div",{className:s},n.a.createElement("div",{className:"".concat(m," ").concat(l&&b)}),n.a.createElement("div",{className:"".concat(d," ").concat(l&&g)},n.a.createElement("h1",{className:u},"copied!"),n.a.createElement("p",{className:u},C)),n.a.createElement("span",{className:p},r),n.a.createElement(x.CopyToClipboard,{text:C,onCopy:this.handleCopy},n.a.createElement("button",{className:"".concat(h," copyButton")},"copy")),!a&&n.a.createElement(c.b,{to:"".concat(t,"/").concat(o)},n.a.createElement("span",{className:f},"more")))}}]),a}(o.Component)),P=t(5),D=t(440),A=t(436),I=t(442),T=t(437),M=t(425),L=t(177),G=t.n(L),R={Navbar:{height:"6%",display:"flex"},NavbarBrand:Object(w.a)({display:"flex",justifyContent:"center",alignItems:"center",height:"100%",minWidth:"150px",width:"10%",fontFamily:"Blinker, sans-serif",fontSize:"24px",textTransform:"uppercase",textAlign:"center",letterSpacing:"1px",backgroundColor:"#e7e7e7",color:"#525252"},k("xs"),{display:function(e){return!e.singleColorPalette&&"none"}}),NavbarSlider:(y={width:"450px",display:"flex",alignItems:"center",transition:"0.15s width linear"},Object(w.a)(y,k("sm"),{width:"350px"}),Object(w.a)(y,k("xs"),{width:"300px"}),y),NavbarSliderText:{fontVariantNumeric:"tabular-nums",fontFamily:"Blinker, sans-serif",margin:"0 10px"},NavbarSelect:{marginLeft:"auto",marginRight:"8px",marginTop:"7px"}},z=Object(P.a)(R)(function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={snackbarOpen:!1},t.handleSliderChange=function(e,a){return t.props.changeLevel(a)},t.handleFormatChange=function(e){t.props.changeColorFormat(e.target.value),t.setState({snackbarOpen:!0})},t.closeSnackbar=function(){return t.setState({snackbarOpen:!1})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.handleFormatChange,a=this.handleSliderChange,t=this.closeSnackbar,o=this.props,r=this.state,l=o.classes,i=o.level,s=o.format,m=l.Navbar,d=l.NavbarBrand,u=l.NavbarSlider,p=l.NavbarSliderText,h=l.NavbarSelect;return n.a.createElement("nav",{className:m},n.a.createElement(c.b,{to:"".concat("/palette","/"),style:{textDecoration:"none"}},n.a.createElement("span",{className:d},"palette")),i&&n.a.createElement("div",{className:u},n.a.createElement("span",{className:p},i),n.a.createElement(D.a,{defaultValue:i,step:100,min:100,max:900,onChange:a})),n.a.createElement("div",{className:h},n.a.createElement(A.a,{value:s,onChange:e},n.a.createElement(I.a,{value:"hex"},"HEX"),n.a.createElement(I.a,{value:"rgb"},"RGB"),n.a.createElement(I.a,{value:"rgba"},"RGBA"))),n.a.createElement(T.a,{message:n.a.createElement("span",{id:"message-id"},"Format Changed to ",s.toUpperCase()),anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r.snackbarOpen,autoHideDuration:3e3,ContentProps:{"aria-describedby":"message-id"},onClose:t,action:[n.a.createElement(M.a,{onClick:t,color:"inherit",key:"Close Snackbar"},n.a.createElement(G.a,null))]}))}}]),a}(o.Component));var V=Object(E.a)({Footer:{height:"4vh",display:"flex",alignItems:"center",justifyContent:"flex-end",backgroundColor:"#e7e7e7"},FooterPaletteName:{fontFamily:"Blinker, sans-serif",letterSpacing:"1px",color:"#525252",marginRight:"5px"},FooterEmoji:{margin:"5px",fontSize:"15px"}})(function(e){var a=e.classes,t=e.paletteName,o=e.emoji,r=a.Footer,l=a.FooterPaletteName,c=a.FooterEmoji;return n.a.createElement("footer",{className:r},n.a.createElement("span",{className:l},t),n.a.createElement("span",{className:c},o))}),W={palette:{height:"100vh",overflow:"hidden"},paletteColors:{height:"90%"}},q=Object(E.a)(W)(function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={level:400,format:"hex"},t.changeLevel=function(e){return t.setState({level:e})},t.changeColorFormat=function(e){return t.setState({format:e})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.changeColorFormat,a=this.changeLevel,t=this.props,o=this.state,r=t.classes,l=t.colors,c=t.id,i=t.emoji,s=t.paletteName,m=o.level,d=o.format,u=r.palette,p=r.paletteColors;return n.a.createElement("div",{className:u},n.a.createElement(z,{changeLevel:a,changeColorFormat:e,level:m,format:d}),n.a.createElement("div",{className:p},l[m].map(function(e){return n.a.createElement(F,Object.assign({},e,{format:d,key:e.id,paletteId:c,singleColorPalette:!1}))})),n.a.createElement(V,{paletteName:s,emoji:i}))}}]),a}(o.Component)),H=t(94),U=t.n(H),Y=t(431),J=t(426),$=t(430),K=t(428),_=t(429),Q=t(427);function X(e){var a=e.open,t=e.deletePalette,o=e.id;function r(){e.toggle(!1)}return n.a.createElement(J.a,{open:a,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"Delete Palette Confirmation"},n.a.createElement(Q.a,null,"Are You Sure?"),n.a.createElement(K.a,null,n.a.createElement(_.a,null,"This action is irreversible. All Your Colors will be lost. Are you sure you want to Delete your palette?")),n.a.createElement($.a,null,n.a.createElement(Y.a,{onClick:r,color:"primary"},"Cancel"),n.a.createElement(Y.a,{color:"secondary",onClick:function(){e.toggle(!1),t(o)}},"Yes, I'm Sure")))}var Z,ee,ae,te=Object(E.a)({root:{cursor:"pointer",position:"relative",overflow:"hidden",padding:"0.5em",backgroundColor:"white",borderRadius:"5px",transition:"transform 0.1s ease-out",color:"#525252","&:hover $deleteIcon\t":{opacity:"1"},"&:hover":{transform:"translateY(-2px)"}},colors:{overflow:"hidden",height:"150px",width:"100%",borderRadius:"5px",backgroundColor:"#dae1e4"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"Blinker",fontWeight:"400",fontSize:"1.1rem",color:"#525252",letterSpacing:"0.5px",margin:"0",paddingTop:"0.5rem"},emoji:{marginLeft:"0.5rem",fontSize:"1.2srem"},miniBox:{display:"inline-block",height:"25%",width:"20%",margin:"0 auto",marginBottom:"-4px"},deleteIcon:{position:"absolute",top:"0px",right:"0px",height:"20px",width:"20px",background:"#ed3d30cc",borderBottomLeftRadius:"10px",color:"white",padding:"10px",zIndex:"1",opacity:"0",transition:"0.2s all linear","&:hover":{backgroundColor:"#ed3d30"}}})(function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={deleteModal:!1},t.setDeleteModal=function(e){return t.setState({deleteModal:e})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.classes,o=a.paletteName,r=a.emoji,l=a.id,i=a.colors,s=a.deletePalette,m=this.state.deleteModal,d=t.root,u=t.deleteIcon,p=t.miniBox,h=t.title;return n.a.createElement("div",{className:d},n.a.createElement(U.a,{className:u,onClick:function(){return e.setDeleteModal(!0)}}),n.a.createElement(c.b,{to:"palette/".concat(l),style:{textDecoration:"none"}},n.a.createElement("div",{className:t.colors},i.map(function(e){return n.a.createElement("div",{className:p,style:{backgroundColor:e.color},key:e.name})})),n.a.createElement("h5",{className:h},o," ",n.a.createElement("span",{className:t.emoji},r))),n.a.createElement(X,{open:m,toggle:this.setDeleteModal,deletePalette:s,id:l}))}}]),a}(o.PureComponent)),oe=t(178),ne={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"all 500ms linear"}},root:{backgroundColor:"#3f3383",backgroundImage:"url(".concat(t.n(oe).a,")"),backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"flex-start",height:"100vh",overflowY:"scroll"},container:(Z={width:"60%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap",color:"white",transition:"0.2s width linear"},Object(w.a)(Z,k("lg"),{width:"80%"}),Object(w.a)(Z,k("md"),{width:"70%"}),Object(w.a)(Z,k("sm"),{width:"80%"}),Z),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",fontFamily:"Blinker",letterSpacing:"1px",textTransform:"uppercase","& a":{textDecoration:"none",color:"white","&:hover":{color:"#dddddd"}},"& h1":{fontWeight:"100",fontSize:"1.5rem"}},palettes:(ee={display:"grid",boxSizing:"border-box",gridTemplateColumns:"repeat(3, 30%)",gridGap:"3rem",width:"100%",paddingBottom:"5%"},Object(w.a)(ee,k("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(w.a)(ee,k("sm"),{gridTemplateColumns:"repeat(2, 50%)",gridGap:"2rem"}),Object(w.a)(ee,k("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.5rem",padding:"10%",paddingTop:"2%"}),ee)},re=Object(E.a)(ne)(function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.palettes,o=e.deletePalette,r=a.root,l=a.container,i=a.nav;return n.a.createElement("div",{className:r},n.a.createElement("div",{className:l},n.a.createElement("nav",{className:i},n.a.createElement("h1",null,"Palette"),n.a.createElement(c.b,{to:"".concat("/palette","/palette/new")},"Create Palette")),n.a.createElement(f.a,{className:a.palettes},t.map(function(e){return n.a.createElement(g.a,{key:e.id,classNames:"fade",timeout:500},n.a.createElement(te,Object.assign({},e,{key:e.id,deletePalette:o})))}))))}}]),a}(o.Component)),le=t(95),ce=Object(P.a)(Object(le.a)({},B,W))(function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).getShades=function(){var e=[];for(var a in t.props.colors)e.push(t.props.colors[a].filter(function(e){return e.id===t.props.colorId})[0]);return e.slice(1)},t.changeColorFormat=function(e){return t.setState({format:e})},t._shades=t.getShades(),t.state={format:"hex"},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,r=e.id,l=a.palette,i=a.paletteColors,s=a.button,m=this.state.format;return n.a.createElement("div",{className:l},n.a.createElement(z,{changeColorFormat:this.changeColorFormat,format:m,singleColorPalette:!0}),n.a.createElement("div",{className:i},this._shades.map(function(e){return n.a.createElement(F,Object.assign({},e,{format:m,key:e.name,singleColorPalette:!0}))}),n.a.createElement(c.b,{to:"".concat("/palette","/palette/").concat(r)},n.a.createElement("div",{className:"".concat(a.ColorBox," goBack")},n.a.createElement("button",{className:s},"Go Back")))),n.a.createElement(V,{paletteName:t,emoji:o}))}}]),a}(o.Component)),ie=t(4),se=t(441),me=t(439),de=t(188),ue=t(185),pe=t.n(ue),he=t(96),fe={root:(ae={width:"20%",height:"25%",position:"relative",margin:"0 auto",display:"inline-block",marginBottom:"-6px",cursor:"pointer",backgroundColor:function(e){return e.color.color},"&:hover":{cursor:"move"}},Object(w.a)(ae,k("lg"),{height:"20%",width:"25%"}),Object(w.a)(ae,k("md"),{height:"10%",width:"50%"}),Object(w.a)(ae,k("sm"),{height:"5%",width:"100%"}),ae),boxContent:{position:"absolute",width:"100%",left:"0",bottom:"0",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",padding:"10px",color:function(e){return N(e.color.color)},display:"flex",justifyContent:"space-between",alignItems:"flex-end"},deleteIcon:{cursor:"pointer",transform:"scale(1)",transition:"0.1s transform linear","&:hover":{transform:"scale(1.2)"}}},ge=Object(he.SortableElement)(Object(P.a)(fe)(function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).handleDeleteColor=function(){t.props.deleteColor(t.props.color)},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=e.root,t=e.boxContent,o=e.deleteIcon,r=e.colorName;return n.a.createElement("div",{className:a},n.a.createElement("div",{className:t},n.a.createElement("span",{className:r},this.props.color.name),n.a.createElement(U.a,{className:o,onClick:this.handleDeleteColor})))}}]),a}(o.PureComponent))),be=Object(he.SortableContainer)(function(e){var a=e.colors,t=e.deleteColor;return n.a.createElement("div",{style:{height:"100%"}},a.map(function(e,a){return n.a.createElement(ge,{color:e,deleteColor:t,key:e.name,index:a})}))}),Ce=t(181),ve=t.n(Ce),ye=t(433),Ee=t(434),xe=t(183),we=t.n(xe),je=t(42),Oe=t(186),Ne=(t(223),function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={newPaletteName:"",stage:"form"},t.handleTextFieldChange=function(e){return t.setState(Object(w.a)({},e.target.name,e.target.value))},t.openEmojiDialog=function(){return t.setState({stage:"emoji"})},t.selectEmoji=function(e){t.setState({stage:""}),t.props.savePalette(t.state.newPaletteName,e.native)},t.hideDialog=function(){return t.setState({stage:"form",newPaletteName:""},t.props.toggle)},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;je.ValidatorForm.addValidationRule("uniquePaletteName",function(a){return e.props.palettes.every(function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()})})}},{key:"render",value:function(){var e=this.handleTextFieldChange,a=this.openEmojiDialog,t=this.selectEmoji,o=this.hideDialog,r=this.props,l=this.state,c=r.open,i=r.toggle,s=l.newPaletteName,m=l.stage;return n.a.createElement("div",null,n.a.createElement(J.a,{open:c&&"emoji"===m,onClose:o},n.a.createElement(Oe.a,{onSelect:t,title:"Pick an Emoji"})),n.a.createElement(J.a,{open:c&&"form"===m,onClose:i,"aria-labelledby":"form-dialog-title"},n.a.createElement(je.ValidatorForm,{onSubmit:a},n.a.createElement(Q.a,{id:"form-dialog-title"},"Palette Name"),n.a.createElement(K.a,null,n.a.createElement(_.a,null,"Please enter a name for your amazing palette and make sure it's unique from the rest."),n.a.createElement(je.TextValidator,{fullWidth:!0,autoFocus:!0,value:s,placeholder:"Enter a Palette Name",name:"newPaletteName",onChange:e,validators:["required","uniquePaletteName"],errorMessages:["Palette Name is Required","Palette Name Already Taken"]}),n.a.createElement($.a,null,n.a.createElement(Y.a,{onClick:i,color:"secondary"},"Cancel"),n.a.createElement(Y.a,{type:"submit",color:"primary"},"Pick Emoji"))))))}}]),a}(o.Component));function Se(e){var a=e.open,t=e.toggle;return n.a.createElement(J.a,{open:a,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fontFamily:"Blinker"},n.a.createElement(Q.a,null,"Are You Sure?"),n.a.createElement(K.a,null,n.a.createElement(_.a,null,"This action is irreversible. All Your Colors will be lost. Are you sure you want to Discard your palette?")),n.a.createElement($.a,null,n.a.createElement(Y.a,{onClick:t,color:"primary"},"Cancel"),n.a.createElement(c.b,{to:"".concat("/palette","/"),style:{textDecoration:"none"},onClick:t},n.a.createElement(Y.a,{color:"secondary",autoFocus:!0},"Yes, I'm Sure"))))}var ke,Be,Fe=Object(P.a)(function(e){return{root:{display:"flex"},appBar:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingRight:"1em",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(300,"px)"),marginLeft:300,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:12},title:{fontFamily:"Blinker",textTransform:"uppercase",letterSpacing:"1px"},hide:{display:"none"},navBtns:{"& a":{textDecoration:"none"}}}})(function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={saveDialogOpen:!1,discardDialogOpen:!1},t.saveDialogToggle=function(){return t.setState({saveDialogOpen:!t.state.saveDialogOpen})},t.discardDialogToggle=function(){return t.setState({discardDialogOpen:!t.state.discardDialogOpen})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.openDrawer,r=e.savePalette,l=e.palettes,c=this.state,i=c.saveDialogOpen,s=c.discardDialogOpen,m=a.appBar,d=a.appBarShift,u=a.menuButton,p=a.hide,h=a.title,f=a.navBtns,g=a.navBtn;return n.a.createElement(ye.a,{position:"fixed",color:"inherit",className:Object(ie.a)(m,Object(w.a)({},d,t)),elevation:0},n.a.createElement(Ee.a,{disableGutters:!t},n.a.createElement(M.a,{color:"inherit","aria-label":"Open drawer",onClick:o,className:Object(ie.a)(u,t&&p)},n.a.createElement(we.a,null)),n.a.createElement(de.a,{variant:"h6",color:"inherit",noWrap:!0,className:h},"New Palette")),n.a.createElement("div",{className:f},n.a.createElement(Y.a,{className:g,color:"secondary",onClick:this.discardDialogToggle},"Discard"),n.a.createElement(Y.a,{className:g,onClick:this.saveDialogToggle,color:"primary"},"Save"),n.a.createElement(Ne,{open:i,toggle:this.saveDialogToggle,savePalette:r,palettes:l}),n.a.createElement(Se,{open:s,toggle:this.discardDialogToggle})))}}]),a}(o.Component)),Pe=t(184),De=t.n(Pe),Ae=Object(P.a)({picker:{width:"100% !important",boxShadow:"none"},addColorBtn:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"1.5rem",fontFamily:"Blinker",fontWeight:"100",borderRadius:"none"},colorNameInput:{marginTop:"1.5rem",width:"100%"}})(function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={newColor:"#000",newColorName:""},t.handleColorChange=function(e){return t.setState({newColor:e.hex})},t.handleTextFieldChange=function(e){return t.setState(Object(w.a)({},e.target.name,e.target.value))},t.handleAddColor=function(){t.props.addColor({name:t.state.newColorName,color:t.state.newColor}),t.setState({newColorName:""})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;je.ValidatorForm.addValidationRule("uniqueColor",function(){return e.props.colors.every(function(a){return a.color!==e.state.newColor})}),je.ValidatorForm.addValidationRule("uniqueColorName",function(a){return e.props.colors.every(function(e){return e.name.toLowerCase()!==a.toLowerCase()})})}},{key:"render",value:function(){var e=this.handleAddColor,a=this.handleColorChange,t=this.handleTextFieldChange,o=this.state,r=this.props,l=o.newColor,c=o.newColorName,i=r.paletteFull,s=r.classes,m=s.picker,d=s.colorNameInput,u=s.addColorBtn;return n.a.createElement("div",null,n.a.createElement(De.a,{color:l,onChange:a,className:m,disableAlpha:!0}),n.a.createElement(je.ValidatorForm,{onSubmit:e,instantValidate:!1},n.a.createElement(je.TextValidator,{value:c,label:"Color Name",variant:"outlined",name:"newColorName",onChange:t,validators:["required","uniqueColor","uniqueColorName"],errorMessages:["Color Name is Required","Color Already Used","Color Name Already Taken"],className:d,disabled:i}),n.a.createElement(Y.a,{type:"submit",variant:"contained",disabled:i,style:{backgroundColor:i?"grey":l,color:S(l)},className:u},i?"Palette Full":"Add Color")))}}]),a}(o.Component)),Ie=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Te=Object(P.a)(function(e){return{root:{display:"flex",fontFamily:"Blinker"},drawer:{width:300,flexShrink:0},drawerPaper:{width:300,display:"flex",alignItems:"center"},drawerHeader:Object(le.a)({display:"flex",alignItems:"center",justifyContent:"space-between",width:"93%"},e.mixins.toolbar,{"& h5":{fontFamily:"Blinker"}}),drawerContainer:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},drawerButtons:{width:"100%",margin:"1rem"},drawerButton:{width:"100%",marginTop:"0.5rem"},content:{flexGrow:1,height:"calc(100vh - 64px)",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-300},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})((Be=ke=function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={open:!0,colors:Ie[0].colors},t.handleDrawerOpen=function(){return t.setState({open:!0})},t.handleDrawerClose=function(){return t.setState({open:!1})},t.handleSavePalette=function(e,a){var o={paletteName:e,id:e.toLowerCase().replace(/ /g,"-"),emoji:a,colors:t.state.colors};t.props.savePalette(o),t.props.history.push("".concat("/palette","/"))},t.addColor=function(e){return t.setState({colors:[].concat(Object(i.a)(t.state.colors),[e])})},t.deleteColor=function(e){return t.setState({colors:t.state.colors.filter(function(a){return a.color!==e.color})})},t.randomColor=function(){var e=t.props.palettes.map(function(e){return e.colors}).flat(),a=Math.floor(Math.random()*e.length);t.state.colors.some(function(t){return t.name===e[a].name})&&t.randomColor(),t.setState({colors:[].concat(Object(i.a)(t.state.colors),[e[a]])})},t.clearPalette=function(){return t.setState({colors:[]})},t.onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;return t.setState({colors:ve()(t.state.colors,a,o)})},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.handleDrawerOpen,a=this.handleDrawerClose,t=this.handleSavePalette,o=this.addColor,r=this.deleteColor,l=this.randomColor,c=this.clearPalette,i=this.onSortEnd,s=this.props,m=this.state,d=s.classes,u=s.paletteMaxColors,p=s.palettes,h=m.open,f=m.colors,g=d.root,b=d.drawer,C=d.drawerPaper,v=d.drawerHeader,y=d.drawerContainer,E=d.drawerButtons,x=d.drawerButton,j=d.content,O=d.contentShift,N=d.chevronLeftIcon,S=f.length>=u;return n.a.createElement("div",{className:g},n.a.createElement(me.a,null),n.a.createElement(Fe,{open:h,savePalette:t,openDrawer:e,palettes:p}),n.a.createElement(se.a,{className:b,variant:"persistent",anchor:"left",open:h,classes:{paper:C}},n.a.createElement("div",{className:v},n.a.createElement(de.a,{variant:"h5"},"Pick a Color"),n.a.createElement(M.a,{onClick:a,className:N},n.a.createElement(pe.a,null))),n.a.createElement("div",{className:y},n.a.createElement("div",{className:E},n.a.createElement(Y.a,{variant:"outlined",color:"primary",onClick:l,disabled:f.length>=u,className:x},"Random Color"),n.a.createElement(Y.a,{variant:"outlined",color:"secondary",onClick:c,className:x},"Clear Palette")),n.a.createElement(Ae,{paletteFull:S,addColor:o,colors:f}))),n.a.createElement("main",{className:Object(ie.a)(j,Object(w.a)({},O,h))},n.a.createElement("div",{className:v}),n.a.createElement(be,{colors:f,deleteColor:r,axis:"xy",onSortEnd:i,lockToContainerEdges:!0,distance:2})))}}]),a}(o.Component),ke.defaultProps={paletteMaxColors:20},Be)),Me=[50,100,200,300,400,500,600,700,800,900],Le=function(e,a){return O.a.scale(function(e){return[O()(e).darken(1.4),e,"#fff"]}(e)).mode("lab").colors(a)};function Ge(e){for(var a={id:e.id,paletteName:e.paletteName,emoji:e.emoji,colors:{}},t=0,o=Me;t<o.length;t++){var n=o[t];a.colors[n]=[]}var r=!0,l=!1,c=void 0;try{for(var i,s=e.colors[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var m=i.value,d=Le(m.color,Me.length).reverse();for(var u in d)a.colors[Me[u]].push({name:"".concat(m.name," ").concat(Me[u]),id:m.name.toLowerCase().replace(/ /g,"-"),hex:d[u],rgb:O()(d[u]).css(),rgba:O()(d[u]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(p){l=!0,c=p}finally{try{r||null==s.return||s.return()}finally{if(l)throw c}}return a}var Re=function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={palettes:JSON.parse(window.localStorage.getItem("palettes"))||Ie},t.findPalette=function(e){return t.state.palettes.find(function(a){return a.id===e})},t.savePalette=function(e){return t.setState({palettes:[].concat(Object(i.a)(t.state.palettes),[e])},t.syncLocalStorage)},t.deletePalette=function(e){return t.setState(function(a){return{palettes:a.palettes.filter(function(a){return a.id!==e})}},t.syncLocalStorage)},t.syncLocalStorage=function(){return window.localStorage.setItem("palettes",JSON.stringify(t.state.palettes))},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(h.a,{render:function(a){var t=a.location;return n.a.createElement(f.a,null,n.a.createElement(g.a,{key:t.key,classNames:"page",timeout:100},n.a.createElement(h.c,{location:t},n.a.createElement(h.a,{exact:!0,path:"".concat("/palette","/"),render:function(){return n.a.createElement(b,null,n.a.createElement(re,{palettes:e.state.palettes,deletePalette:e.deletePalette}))}}),n.a.createElement(h.a,{exact:!0,path:"".concat("/palette","/palette/new"),render:function(a){return n.a.createElement(b,null,n.a.createElement(Te,Object.assign({savePalette:e.savePalette},a,{palettes:e.state.palettes})))}}),n.a.createElement(h.a,{exact:!0,path:"".concat("/palette","/palette/:id"),render:function(a){return n.a.createElement(b,null,n.a.createElement(q,Ge(e.findPalette(a.match.params.id))))}}),n.a.createElement(h.a,{exact:!0,path:"".concat("/palette","/palette/:paletteId/:colorId"),render:function(a){return n.a.createElement(b,null,n.a.createElement(ce,Object.assign({colorId:a.match.params.colorId},Ge(e.findPalette(a.match.params.paletteId)))))}}),n.a.createElement(h.a,{render:function(){return n.a.createElement(b,{variant:"404"})}}))))}})}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(c.a,null,n.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[198,1,2]]]);
//# sourceMappingURL=main.d31f3607.chunk.js.map