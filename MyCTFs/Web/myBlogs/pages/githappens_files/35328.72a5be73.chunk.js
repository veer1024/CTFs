(self.webpackChunklite=self.webpackChunklite||[]).push([[35328],{67762:e=>{e.exports=function(e,n){for(var t,i=-1,r=e.length;++i<r;){var a=n(e[i]);void 0!==a&&(t=void 0===t?a:t+a)}return t}},12297:(e,n,t)=>{var i=t(67762),r=t(6557);e.exports=function(e){return e&&e.length?i(e,r):0}},52439:(e,n,t)=>{"use strict";t.d(n,{q:()=>u});var i,r=t(67294),a=t(77355),l=t(93310),o=t(87691),c=t(18627),s=t(43487),m=t(50458);!function(e){e[e.Homepage=0]="Homepage",e[e.Topics=1]="Topics",e[e.Profile=2]="Profile"}(i||(i={}));var u=function(e){var n=e.sidebar,t=void 0===n?i.Homepage:n,u=e.isCompactStyle,d=void 0!==u&&u,p=(0,c.Av)(),k=(0,s.v9)((function(e){return e.config.authDomain})),v=(0,s.v9)((function(e){return e.config.productName}));return r.createElement(a.x,{padding:"24px 0",display:"flex",flexDirection:"row",flexWrap:"wrap"},function(e){switch(e){case i.Profile:return["Help","PartnerProgram","Gifting","Careers","Privacy","Terms","StartABlog","Knowable"];default:return["Help","Status","Writers","Blog","Careers","Privacy","Terms","About","Knowable"]}}(t).map((function(e){var n=function(e,n,t){switch(e){case"Help":return{name:"Help",href:(0,m.XpN)(),onClickEventName:null};case"Status":return{name:"Status",href:(0,m.PUj)(),onClickEventName:null};case"Writers":return{name:"Writers",href:(0,m.GMb)(n,t),onClickEventName:"homepage.footer.creatorsClicked"};case"Blog":return{name:"Blog",href:(0,m.OVp)(n),onClickEventName:null};case"Careers":return{name:"Careers",href:(0,m.jZp)(),onClickEventName:null};case"Privacy":return{name:"Privacy",href:(0,m.wob)(),onClickEventName:null};case"Terms":return{name:"Terms",href:(0,m.oHy)(),onClickEventName:null};case"About":return{name:"About",href:(0,m.jQk)({authDomain:n}),onClickEventName:"homepage.footer.aboutClicked"};case"Knowable":return{name:"Knowable",href:"https://knowable.fyi",onClickEventName:null};case"PartnerProgram":return{name:"Partner Program",href:(0,m.GMb)(n,t),onClickEventName:null};case"Gifting":return{name:"Gifting",href:(0,m.Ekm)(n),onClickEventName:null};case"StartABlog":return{name:"Start a blog",href:(0,m.OVp)(n),onClickEventName:null};default:return null}}(e,k,v);return n&&r.createElement(a.x,{key:"rc-footer-link-".concat(n.name),marginRight:d?"6px":"26px",marginBottom:d?void 0:"8px"},r.createElement(l.r,{href:n.href,onClick:function(){null!=n&&n.onClickEventName&&p.event(n.onClickEventName,{})}},r.createElement(o.F,{scale:d?"XS":"M",color:"LIGHTER"},n.name)))})))}},40358:(e,n,t)=>{"use strict";t.d(n,{E:()=>p});var i=t(67294),r=t(25550),a=t(49608),l=t(77355),o=t(26350),c=t(47230),s=t(87691),m="nav_reg",u=function(e){var n=e.loading;return i.createElement(l.x,{paddingTop:"40px",display:"flex",alignItems:"center"},i.createElement(l.x,{flexGrow:"1",flexShrink:"0",playwrightClassName:"pw-susi-button"},i.createElement(o.R9,{operation:"register",susiEntry:m},i.createElement(c.z,{size:"REGULAR",buttonStyle:"BRAND",width:"100%",loading:n,"aria-label":"sign up"},"Get started"))),!n&&i.createElement(l.x,{marginLeft:"24px",playwrightClassName:"pw-sign-in-button"},i.createElement(s.F,{scale:"M",color:"ACCENT"},i.createElement(o.R9,{operation:"login",susiEntry:m},"Sign In"))))},d=t(10974),p=function(){var e=(0,r.r)(),n=e.viewerId,t=e.loading,o=n&&(0,a.Q)(n);return i.createElement(l.x,null,o?i.createElement(d.N,null):i.createElement(u,{loading:t}))}},12002:(e,n,t)=>{"use strict";t.d(n,{d:()=>J,m:()=>$});var i,r=t(67294),a=t(937),l=t(32829),o=t(87691),c=function(e){var n=e.color,t=void 0===n?"DARKER":n,i=e.scale,a=void 0===i?"M":i,c=e.publisher;return r.createElement(o.F,{color:t,scale:a},r.createElement(l.J,{publisher:c}))},s=t(20113),m=function(e){var n=e.publisher,t=e.scale,i=void 0===t?"XS":t;return n.name?r.createElement(s.X6,{scale:i},n.name):null},u=t(63038),d=t.n(u),p=t(46829),k=t(6443),v=t(62685),f=t(77355),E=t(93310),g=t(73917),y=t(14646),h=t(75221);!function(e){e[e.Initial=0]="Initial",e[e.Secondary=1]="Secondary",e[e.Dismissed=2]="Dismissed",e[e.Navigating=3]="Navigating",e[e.Updated=4]="Updated"}(i||(i={}));var S=function(e){var n=e.children,t=e.user.id,a=(0,y.I)(),l=(0,k.H)().value,c=t===(null==l?void 0:l.id),s=r.useState(i.Initial),m=d()(s,2),u=m[0],p=m[1],S=c&&u===i.Initial&&!(null!=l&&l.dismissableFlags.includes(h.T3.BLOGROLL_ENABLE)),N=(0,r.useCallback)((function(e){return function(){return r.createElement(f.x,{minWidth:"240px",padding:"16px"},r.createElement(o.F,{scale:"S",color:"WHITE"},"Blogrolls help your readers discover writers you follow. Writers who have published most recently show up at the top."),r.createElement(f.x,{marginTop:"8px"},r.createElement(o.F,{scale:"S",color:"WHITE"},S&&r.createElement(E.r,{onClick:function(){var n,t;n=i.Dismissed,t=v.$.DISMISSED,p(n),e(t)}},r.createElement("span",{className:a(g.u)},"Got it")))))}}),[u]);return r.createElement(v.o,{flag:h.T3.BLOGROLL_ENABLE,isVisible:S,targetDistance:15,renderFn:N},n)},N=t(319),b=t.n(N),w=t(89199),x=t(14337),T=t(54341),F=t(77136),C={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FollowedEntity"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherAvatar_publisher"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasDomain"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}]}}].concat(b()(x.v.definitions),b()(T.O.definitions),b()(F.g.definitions))},I=([{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsList_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}}]}}].concat(b()(w.b.definitions)),{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserFollowsListQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userFollows"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"}}]}}]}}].concat(b()(C.definitions))}),L=t(78757),D=t(30826),B=t(75210),R=t(28695),A=t(26244),P=t(14199),_=function(e){var n=e.entity,t=e.isTooltipActive,i=e.onMouseEnter,a=(0,y.I)(),l=a([(0,P.n)({name:"detail",scale:"S",clamp:1,leadingTrim:!1,color:"LIGHTER"}),{wordBreak:"break-all"}]),o=(0,L.P)(n),c=(0,r.useCallback)((function(){return"User"===n.__typename?r.createElement(R.K,{user:n}):r.createElement(B.L,{collection:n,buttonSize:"COMPACT",buttonStyleFn:function(e){return e?"OBVIOUS":"STRONG"}})}),[n]);return r.createElement("li",null,r.createElement(A.$,{isVisible:t,onMouseEnter:i,placement:"top",targetDistance:5,mouseEnterDelay:300,mouseLeaveDelay:400,role:"tooltip",popoverRenderFn:c},r.createElement("div",{className:a({display:"grid",gridTemplateColumns:"auto 1fr auto"})},r.createElement(f.x,{paddingRight:"12px"},r.createElement(D.G,{link:!0,publisher:n,scale:"XXXS"})),r.createElement("section",{className:a({wordBreak:"break-word"})},r.createElement(f.x,{marginBottom:"8px",paddingRight:"10px",tag:"span"},r.createElement(E.r,{href:o},r.createElement("h4",{className:l},n.name)))))))},G=t(12549),H=t(18627),U=t(66411),M=t(18122),O=t(92661),V=t(97217),W=t(21372),X=function(e){var n,t=e.user,i=t.id,a=t.customStyleSheet,l=t.username,c=(0,k.H)().value,m=(0,O.qt)("ShowUserFollowing",{username:l||""}),u=i===(null==c?void 0:c.id),v=(0,H.Av)(),g=(0,M.g)({onPresentedFn:function(){return v.event("sidebar.blogrollViewed",{viewerIsAuthor:u})}}),y=(0,p.useLazyQuery)(I,{ssr:!0,variables:{userId:i,limit:5}}),h=d()(y,2),N=h[0],b=h[1],w=b.called,x=b.loading,T=b.error,F=b.data,C=(F=void 0===F?{userFollows:void 0}:F).userFollows,L=(0,G.gp)(t).followingCount,D=(0,r.useState)(),B=d()(D,2),R=B[0],A=B[1];return(null==a||null===(n=a.blogroll)||void 0===n?void 0:n.visibility)===V.n$.BLOGROLL_VISIBILITY_HIDDEN?null:w?x||T||!C||!C.length||L<5?null:r.createElement(U.cW,{source:{name:"blogrolls_sidebar"}},r.createElement(f.x,{ref:g,position:"relative"},r.createElement(S,{user:t},r.createElement(s.X6,{scale:"XS",tag:"span"},"Following"),r.createElement(f.x,{marginTop:"16px"}),r.createElement("ul",null,C.map((function(e){return r.createElement(_,{key:null==e?void 0:e.id,entity:e,isTooltipActive:R===e.id,onMouseEnter:function(){return A(e.id)}})}))),r.createElement(o.F,{scale:"S"},r.createElement(E.r,{linkStyle:"SUBTLE",href:m},"See all (".concat((0,W.rR)(L),")")))))):(N(),null)},K=t(84739),z=t(84531),Y=t(24330),q=t(43487),Q=t(87498),j=t(50458),$=88,J=function(e){var n=e.includeBlogRoll,t=e.user,i=(0,k.H)().value,l=(0,q.v9)((function(e){return e.config.authDomain})),s=i&&i.id===t.id,u=(0,K.B)(t);return r.createElement(r.Fragment,null,r.createElement(E.r,{href:u},r.createElement(z.z,{alt:t.name||"",miroId:t.imageId||Q.gG,diameter:$})),r.createElement(f.x,{marginTop:"16px"}),r.createElement(E.r,{href:u},r.createElement(m,{publisher:t})),r.createElement(f.x,{marginTop:"4px"}),r.createElement(c,{publisher:t}),r.createElement(f.x,{marginTop:"12px"}),r.createElement(a.y,{publisher:t}),s&&r.createElement(f.x,{marginTop:"24px",marginBottom:"46px"},r.createElement(o.F,{scale:"S",color:"ACCENT"},r.createElement(E.r,{href:(0,j.McF)(l)},"Edit profile"))),r.createElement(f.x,{marginTop:"24px"}),!s&&r.createElement(U.cW,{source:{name:"publisher_header_actions"},extendSource:!0},r.createElement(f.x,{display:"flex",marginBottom:"40px"},r.createElement(Y.N,{creator:t,followButtonSize:"REGULAR",susiEntry:"follow_profile",showFirstUseToolTip:!0,showMembershipUpsellModal:!0,width:"auto"}))),n&&r.createElement(X,{user:t}))}},937:(e,n,t)=>{"use strict";t.d(n,{y:()=>o});var i=t(67294),r=t(14294),a=t(38882),l=t(87691),o=function(e){var n=e.publisher,t="Collection"===n.__typename?n.description:n.bio;return t?i.createElement(l.F,{scale:"M"},i.createElement(a.c.Provider,{value:!0},i.createElement(r.P,{wrapLinks:!0},t))):null}},986:(e,n,t)=>{"use strict";t.d(n,{c:()=>c});var i=t(67294),r=t(7830),a=t(52439),l=t(77355),o=t(35010),c=function(e){var n=e.children,t=(0,r.SK)(),c=(0,i.useRef)(0),s=(0,i.useRef)(null),m=(0,i.useRef)("stickyToTop");return(0,o.L)((function(){var e=function(){if(s.current){var e=window.scrollY>c.current;c.current=window.scrollY;var n=window.innerHeight,t=s.current.offsetHeight-n;t<=20||(e?("notSticky"===m.current&&window.scrollY>=s.current.offsetTop+t&&(m.current="stickyToBottom",s.current.style.position="sticky",s.current.style.top="".concat(-t,"px")),"stickyToTop"===m.current&&(m.current="notSticky",s.current.style.position="relative",s.current.style.top="0px",s.current.style.marginTop="0px",s.current.style.marginTop="".concat(Math.max(c.current-s.current.offsetTop,0),"px"))):("notSticky"===m.current&&window.scrollY<=s.current.offsetTop&&(m.current="stickyToTop",s.current.style.position="sticky",s.current.style.top="0px",s.current.style.marginTop="0px"),"stickyToBottom"===m.current&&(m.current="notSticky",s.current.style.position="relative",s.current.style.top="0px",s.current.style.marginTop="0px",s.current.style.marginTop="".concat(c.current-t-s.current.offsetTop,"px"))))}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),i.createElement(l.x,{position:"sticky",top:"0",ref:s},i.createElement(l.x,{display:"flex",flexDirection:"column",minHeight:"100vh"},i.createElement(l.x,{flexGrow:"1"},n),t&&i.createElement(a.q,{isCompactStyle:!0})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/35328.72a5be73.chunk.js.map