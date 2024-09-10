"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[992],{1977:function(se,_,e){e.d(_,{n:function(){return G}});var n=e(97685),M=e(71002),A=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Z=function(a){return a==="*"||a==="x"||a==="X"},H=function(a){var C=parseInt(a,10);return isNaN(C)?a:C},J=function(a,C){return(0,M.Z)(a)!==(0,M.Z)(C)?[String(a),String(C)]:[a,C]},U=function(a,C){if(Z(a)||Z(C))return 0;var S=J(H(a),H(C)),p=(0,n.Z)(S,2),N=p[0],W=p[1];return N>W?1:N<W?-1:0},T=function(a,C){for(var S=0;S<Math.max(a.length,C.length);S++){var p=U(a[S]||"0",C[S]||"0");if(p!==0)return p}return 0},z=function(a){var C,S=a.match(A);return S==null||(C=S.shift)===null||C===void 0||C.call(S),S},G=function(a,C){var S=z(a),p=z(C),N=S.pop(),W=p.pop(),Y=T(S,p);return Y!==0?Y:N||W?N?-1:1:0}},12044:function(se,_,e){e.d(_,{j:function(){return A}});var n=e(34155),M=typeof n!="undefined"&&n.versions!=null&&n.versions.node!=null,A=function(){return typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.matchMedia!="undefined"&&!M}},60933:function(se,_,e){e.r(_),e.d(_,{default:function(){return G}});var n=e(5574),M=e.n(n),A=e(2831),Z=e(6110),H=e(38345),J=e(95089),U=e(40056),T=e(67294),z=e(85893);function G(){var R=(0,T.useState)(""),a=M()(R,2),C=a[0],S=a[1];return(0,T.useEffect)(function(){(0,A.d)().then(function(p){var N="";p.data.info.Mounts.map(function(F){F.Type=="volume"&&(N=F.Name)});var W=Object.keys(p.data.info.HostConfig.PortBindings).map(function(F){return p.data.info.HostConfig.PortBindings[F].map(function(q){return"-p ".concat(q.HostPort,":").concat(String(parseInt(F)))})}),Y=!1,re=p.data.info.HostConfig.Binds.map(function(F){return F.indexOf(":/dpanel")>-1&&(Y=!0),"-v ".concat(F)});if(!Y){var N="";p.data.info.Mounts.map(function(q){q.Type=="volume"&&(N=q.Name)}),re.push("-v "+N+":/dpanel")}S("docker stop ".concat(p.data.info.Name," && docker rm ").concat(p.data.info.Name," && docker rmi ").concat(p.data.info.Config.Image,` && \\
docker run -it -d --name `).concat(p.data.info.Name,` --restart=always \\
 `).concat(W.join(" "),` \\
 `).concat(re.join(" "),` \\
 `).concat(p.data.info.Config.Image)+(p.data.info.NetworkSettings.Networks["dpanel-local"]?` && \\
docker network connect dpanel-local `.concat(p.data.info.Name):""))})},[]),(0,z.jsx)(Z._z,{children:(0,z.jsxs)(H.Z,{title:"\u66F4\u65B0\u811A\u672C",children:[(0,z.jsx)(U.Z,{message:"\u6CE8\u610F",description:`1\u3001\u66F4\u65B0\u547D\u4EE4\u9700\u8981\u5728\u5BBF\u4E3B\u673A\u4E0A\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u3002
2\u3001\u4E3A\u4E86\u4FDD\u7559\u65E7\u6570\u636E\u8BF7\u52A1\u5FC5\u7ED1\u5B9A /dpanel \u76EE\u5F55\u5230\u4E4B\u524D\u5B58\u50A8\u5377\u4E2D\u3002
3\u3001\u66F4\u65B0\u547D\u4EE4\u7B49\u4E8E\u5220\u9664\u3001\u91CD\u5EFA\u9762\u677F\u6240\u5C5E\u5BB9\u5668\uFF0C\u8FC7\u7A0B\u4E2D\u4F1A\u9020\u6210\u7AD9\u70B9\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002`,type:"error",style:{marginBottom:"20px"}}),(0,z.jsx)(J.ZP,{theme:"dark",height:"300px",value:C})]})})}},2831:function(se,_,e){e.d(_,{a:function(){return J},d:function(){return T}});var n=e(15009),M=e.n(n),A=e(99289),Z=e.n(A),H=e(54006);function J(){return U.apply(this,arguments)}function U(){return U=Z()(M()().mark(function G(){return M()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,H.request)("/api/common/home/info",{method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},G)})),U.apply(this,arguments)}function T(){return z.apply(this,arguments)}function z(){return z=Z()(M()().mark(function G(){return M()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,H.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},G)})),z.apply(this,arguments)}},40056:function(se,_,e){e.d(_,{Z:function(){return Q}});var n=e(67294),M=e(89739),A=e(4340),Z=e(97937),H=e(21640),J=e(78860),U=e(93967),T=e.n(U),z=e(29372),G=e(64217),R=e(42550),a=e(96159),C=e(53124),S=e(11568),p=e(14747),N=e(83559);const W=(t,o,r,s,c)=>({background:t,border:`${(0,S.bf)(s.lineWidth)} ${s.lineType} ${o}`,[`${c}-icon`]:{color:r}}),Y=t=>{const{componentCls:o,motionDurationSlow:r,marginXS:s,marginSM:c,fontSize:f,fontSizeLG:E,lineHeight:P,borderRadiusLG:D,motionEaseInOutCirc:B,withDescriptionIconSize:u,colorText:$,colorTextHeading:I,withDescriptionPadding:L,defaultPadding:y}=t;return{[o]:Object.assign(Object.assign({},(0,p.Wf)(t)),{position:"relative",display:"flex",alignItems:"center",padding:y,wordWrap:"break-word",borderRadius:D,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:s,lineHeight:0},"&-description":{display:"none",fontSize:f,lineHeight:P},"&-message":{color:I},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${r} ${B}, opacity ${r} ${B},
        padding-top ${r} ${B}, padding-bottom ${r} ${B},
        margin-bottom ${r} ${B}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",padding:L,[`${o}-icon`]:{marginInlineEnd:c,fontSize:u,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:s,color:I,fontSize:E},[`${o}-description`]:{display:"block",color:$}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},re=t=>{const{componentCls:o,colorSuccess:r,colorSuccessBorder:s,colorSuccessBg:c,colorWarning:f,colorWarningBorder:E,colorWarningBg:P,colorError:D,colorErrorBorder:B,colorErrorBg:u,colorInfo:$,colorInfoBorder:I,colorInfoBg:L}=t;return{[o]:{"&-success":W(c,s,r,t,o),"&-info":W(L,I,$,t,o),"&-warning":W(P,E,f,t,o),"&-error":Object.assign(Object.assign({},W(u,B,D,t,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},F=t=>{const{componentCls:o,iconCls:r,motionDurationMid:s,marginXS:c,fontSizeIcon:f,colorIcon:E,colorIconHover:P}=t;return{[o]:{"&-action":{marginInlineStart:c},[`${o}-close-icon`]:{marginInlineStart:c,padding:0,overflow:"hidden",fontSize:f,lineHeight:(0,S.bf)(f),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${r}-close`]:{color:E,transition:`color ${s}`,"&:hover":{color:P}}},"&-close-text":{color:E,transition:`color ${s}`,"&:hover":{color:P}}}}},q=t=>({withDescriptionIconSize:t.fontSizeHeading3,defaultPadding:`${t.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${t.paddingMD}px ${t.paddingContentHorizontalLG}px`});var pe=(0,N.I$)("Alert",t=>[Y(t),re(t),F(t)],q),ge=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(t);c<s.length;c++)o.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(t,s[c])&&(r[s[c]]=t[s[c]]);return r};const ue={success:M.Z,info:J.Z,error:A.Z,warning:H.Z},he=t=>{const{icon:o,prefixCls:r,type:s}=t,c=ue[s]||null;return o?(0,a.wm)(o,n.createElement("span",{className:`${r}-icon`},o),()=>({className:T()(`${r}-icon`,{[o.props.className]:o.props.className})})):n.createElement(c,{className:`${r}-icon`})},Ce=t=>{const{isClosable:o,prefixCls:r,closeIcon:s,handleClose:c,ariaProps:f}=t,E=s===!0||s===void 0?n.createElement(Z.Z,null):s;return o?n.createElement("button",Object.assign({type:"button",onClick:c,className:`${r}-close-icon`,tabIndex:0},f),E):null};var ie=n.forwardRef((t,o)=>{const{description:r,prefixCls:s,message:c,banner:f,className:E,rootClassName:P,style:D,onMouseEnter:B,onMouseLeave:u,onClick:$,afterClose:I,showIcon:L,closable:y,closeText:k,closeIcon:K,action:oe,id:ee}=t,V=ge(t,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[ne,X]=n.useState(!1),j=n.useRef(null);n.useImperativeHandle(o,()=>({nativeElement:j.current}));const{getPrefixCls:ce,direction:ae,alert:i}=n.useContext(C.E_),v=ce("alert",s),[de,Se,Oe]=pe(v),be=d=>{var O;X(!0),(O=t.onClose)===null||O===void 0||O.call(t,d)},me=n.useMemo(()=>t.type!==void 0?t.type:f?"warning":"info",[t.type,f]),fe=n.useMemo(()=>typeof y=="object"&&y.closeIcon||k?!0:typeof y=="boolean"?y:K!==!1&&K!==null&&K!==void 0?!0:!!(i!=null&&i.closable),[k,K,y,i==null?void 0:i.closable]),ve=f&&L===void 0?!0:L,xe=T()(v,`${v}-${me}`,{[`${v}-with-description`]:!!r,[`${v}-no-icon`]:!ve,[`${v}-banner`]:!!f,[`${v}-rtl`]:ae==="rtl"},i==null?void 0:i.className,E,P,Oe,Se),Pe=(0,G.Z)(V,{aria:!0,data:!0}),te=n.useMemo(()=>{var d,O;return typeof y=="object"&&y.closeIcon?y.closeIcon:k||(K!==void 0?K:typeof(i==null?void 0:i.closable)=="object"&&(!((d=i==null?void 0:i.closable)===null||d===void 0)&&d.closeIcon)?(O=i==null?void 0:i.closable)===null||O===void 0?void 0:O.closeIcon:i==null?void 0:i.closeIcon)},[K,y,k,i==null?void 0:i.closeIcon]),b=n.useMemo(()=>{const d=y!=null?y:i==null?void 0:i.closable;if(typeof d=="object"){const{closeIcon:O}=d;return ge(d,["closeIcon"])}return{}},[y,i==null?void 0:i.closable]);return de(n.createElement(z.ZP,{visible:!ne,motionName:`${v}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:d=>({maxHeight:d.offsetHeight}),onLeaveEnd:I},(d,O)=>{let{className:je,style:Be}=d;return n.createElement("div",Object.assign({id:ee,ref:(0,R.sQ)(j,O),"data-show":!ne,className:T()(xe,je),style:Object.assign(Object.assign(Object.assign({},i==null?void 0:i.style),D),Be),onMouseEnter:B,onMouseLeave:u,onClick:$,role:"alert"},Pe),ve?n.createElement(he,{description:r,icon:t.icon,prefixCls:v,type:me}):null,n.createElement("div",{className:`${v}-content`},c?n.createElement("div",{className:`${v}-message`},c):null,r?n.createElement("div",{className:`${v}-description`},r):null),oe?n.createElement("div",{className:`${v}-action`},oe):null,n.createElement(Ce,{isClosable:fe,prefixCls:v,closeIcon:te,handleClose:be,ariaProps:b}))}))}),Ie=e(15671),Ee=e(43144),le=e(61120),ye=e(78814),l=e(82963);function g(t,o,r){return o=(0,le.Z)(o),(0,l.Z)(t,(0,ye.Z)()?Reflect.construct(o,r||[],(0,le.Z)(t).constructor):o.apply(t,r))}var h=e(60136),x=function(t){function o(){var r;return(0,Ie.Z)(this,o),r=g(this,o,arguments),r.state={error:void 0,info:{componentStack:""}},r}return(0,h.Z)(o,t),(0,Ee.Z)(o,[{key:"componentDidCatch",value:function(s,c){this.setState({error:s,info:c})}},{key:"render",value:function(){const{message:s,description:c,id:f,children:E}=this.props,{error:P,info:D}=this.state,B=(D==null?void 0:D.componentStack)||null,u=typeof s=="undefined"?(P||"").toString():s,$=typeof c=="undefined"?B:c;return P?n.createElement(ie,{id:f,type:"error",message:u,description:n.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},$)}):E}}])}(n.Component);const w=ie;w.ErrorBoundary=x;var Q=w},7134:function(se,_,e){e.d(_,{C:function(){return ye}});var n=e(67294),M=e(93967),A=e.n(M),Z=e(9220),H=e(42550),J=e(74443),U=e(53124),T=e(35792),z=e(98675),G=e(25378),a=n.createContext({}),C=e(11568),S=e(14747),p=e(83559),N=e(83262);const W=l=>{const{antCls:g,componentCls:h,iconCls:m,avatarBg:x,avatarColor:w,containerSize:Q,containerSizeLG:t,containerSizeSM:o,textFontSize:r,textFontSizeLG:s,textFontSizeSM:c,borderRadius:f,borderRadiusLG:E,borderRadiusSM:P,lineWidth:D,lineType:B}=l,u=($,I,L)=>({width:$,height:$,borderRadius:"50%",[`&${h}-square`]:{borderRadius:L},[`&${h}-icon`]:{fontSize:I,[`> ${m}`]:{margin:0}}});return{[h]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,S.Wf)(l)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:w,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:x,border:`${(0,C.bf)(D)} ${B} transparent`,"&-image":{background:"transparent"},[`${g}-image-img`]:{display:"block"}}),u(Q,r,f)),{"&-lg":Object.assign({},u(t,s,E)),"&-sm":Object.assign({},u(o,c,P)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Y=l=>{const{componentCls:g,groupBorderColor:h,groupOverlapping:m,groupSpace:x}=l;return{[`${g}-group`]:{display:"inline-flex",[g]:{borderColor:h},"> *:not(:first-child)":{marginInlineStart:m}},[`${g}-group-popover`]:{[`${g} + ${g}`]:{marginInlineStart:x}}}},re=l=>{const{controlHeight:g,controlHeightLG:h,controlHeightSM:m,fontSize:x,fontSizeLG:w,fontSizeXL:Q,fontSizeHeading3:t,marginXS:o,marginXXS:r,colorBorderBg:s}=l;return{containerSize:g,containerSizeLG:h,containerSizeSM:m,textFontSize:Math.round((w+Q)/2),textFontSizeLG:t,textFontSizeSM:x,groupSpace:r,groupOverlapping:-o,groupBorderColor:s}};var F=(0,p.I$)("Avatar",l=>{const{colorTextLightSolid:g,colorTextPlaceholder:h}=l,m=(0,N.IX)(l,{avatarBg:h,avatarColor:g});return[W(m),Y(m)]},re),q=function(l,g){var h={};for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&g.indexOf(m)<0&&(h[m]=l[m]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,m=Object.getOwnPropertySymbols(l);x<m.length;x++)g.indexOf(m[x])<0&&Object.prototype.propertyIsEnumerable.call(l,m[x])&&(h[m[x]]=l[m[x]]);return h};const pe=(l,g)=>{const[h,m]=n.useState(1),[x,w]=n.useState(!1),[Q,t]=n.useState(!0),o=n.useRef(null),r=n.useRef(null),s=(0,H.sQ)(g,o),{getPrefixCls:c,avatar:f}=n.useContext(U.E_),E=n.useContext(a),P=()=>{if(!r.current||!o.current)return;const b=r.current.offsetWidth,d=o.current.offsetWidth;if(b!==0&&d!==0){const{gap:O=4}=l;O*2<d&&m(d-O*2<b?(d-O*2)/b:1)}};n.useEffect(()=>{w(!0)},[]),n.useEffect(()=>{t(!0),m(1)},[l.src]),n.useEffect(P,[l.gap]);const D=()=>{const{onError:b}=l;(b==null?void 0:b())!==!1&&t(!1)},{prefixCls:B,shape:u,size:$,src:I,srcSet:L,icon:y,className:k,rootClassName:K,alt:oe,draggable:ee,children:V,crossOrigin:ne}=l,X=q(l,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),j=(0,z.Z)(b=>{var d,O;return(O=(d=$!=null?$:E==null?void 0:E.size)!==null&&d!==void 0?d:b)!==null&&O!==void 0?O:"default"}),ce=Object.keys(typeof j=="object"?j||{}:{}).some(b=>["xs","sm","md","lg","xl","xxl"].includes(b)),ae=(0,G.Z)(ce),i=n.useMemo(()=>{if(typeof j!="object")return{};const b=J.c4.find(O=>ae[O]),d=j[b];return d?{width:d,height:d,fontSize:d&&(y||V)?d/2:18}:{}},[ae,j]),v=c("avatar",B),de=(0,T.Z)(v),[Se,Oe,be]=F(v,de),me=A()({[`${v}-lg`]:j==="large",[`${v}-sm`]:j==="small"}),fe=n.isValidElement(I),ve=u||(E==null?void 0:E.shape)||"circle",xe=A()(v,me,f==null?void 0:f.className,`${v}-${ve}`,{[`${v}-image`]:fe||I&&Q,[`${v}-icon`]:!!y},be,de,k,K,Oe),Pe=typeof j=="number"?{width:j,height:j,fontSize:y?j/2:18}:{};let te;if(typeof I=="string"&&Q)te=n.createElement("img",{src:I,draggable:ee,srcSet:L,onError:D,alt:oe,crossOrigin:ne});else if(fe)te=I;else if(y)te=y;else if(x||h!==1){const b=`scale(${h})`,d={msTransform:b,WebkitTransform:b,transform:b};te=n.createElement(Z.Z,{onResize:P},n.createElement("span",{className:`${v}-string`,ref:r,style:Object.assign({},d)},V))}else te=n.createElement("span",{className:`${v}-string`,style:{opacity:0},ref:r},V);return delete X.onError,delete X.gap,Se(n.createElement("span",Object.assign({},X,{style:Object.assign(Object.assign(Object.assign(Object.assign({},Pe),i),f==null?void 0:f.style),X.style),className:xe,ref:s}),te))};var ue=n.forwardRef(pe),he=e(50344),Ce=e(96159),$e=e(55241);const ie=l=>{const{size:g,shape:h}=n.useContext(a),m=n.useMemo(()=>({size:l.size||g,shape:l.shape||h}),[l.size,l.shape,g,h]);return n.createElement(a.Provider,{value:m},l.children)};var Ee=l=>{var g,h,m;const{getPrefixCls:x,direction:w}=n.useContext(U.E_),{prefixCls:Q,className:t,rootClassName:o,style:r,maxCount:s,maxStyle:c,size:f,shape:E,maxPopoverPlacement:P,maxPopoverTrigger:D,children:B,max:u}=l,$=x("avatar",Q),I=`${$}-group`,L=(0,T.Z)($),[y,k,K]=F($,L),oe=A()(I,{[`${I}-rtl`]:w==="rtl"},K,L,t,o,k),ee=(0,he.Z)(B).map((X,j)=>(0,Ce.Tm)(X,{key:`avatar-key-${j}`})),V=(u==null?void 0:u.count)||s,ne=ee.length;if(V&&V<ne){const X=ee.slice(0,V),j=ee.slice(V,ne),ce=(u==null?void 0:u.style)||c,ae=((g=u==null?void 0:u.popover)===null||g===void 0?void 0:g.trigger)||D||"hover",i=((h=u==null?void 0:u.popover)===null||h===void 0?void 0:h.placement)||P||"top",v=Object.assign(Object.assign({content:j},u==null?void 0:u.popover),{overlayClassName:A()(`${I}-popover`,(m=u==null?void 0:u.popover)===null||m===void 0?void 0:m.overlayClassName),placement:i,trigger:ae});return X.push(n.createElement($e.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},v),n.createElement(ue,{style:ce},`+${ne-V}`))),y(n.createElement(ie,{shape:E,size:f},n.createElement("div",{className:oe,style:r},X)))}return y(n.createElement(ie,{shape:E,size:f},n.createElement("div",{className:oe,style:r},ee)))};const le=ue;le.Group=Ee;var ye=le}}]);