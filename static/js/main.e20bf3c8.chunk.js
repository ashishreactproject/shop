(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),s=n(7),o=n.n(s),u=n(10),l=n(11),j=n(191),d=n(20),b=n(14),p=n(16),m=n(167),h=n(18),x=Object(m.a)((function(e){return{appBar:Object(p.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",height:"20px",width:"20px"},menuButton:Object(p.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(h.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(h.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),O=n(170),f=n(172),g=n(57),v=n(173),y=n(174),k=n(175),w=n.p+"static/media/commerce.3be9a1d7.png",C=n(2),S=function(e){var t=e.totalItems,n=x(),a=Object(b.g)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(O.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(C.jsxs)(f.a,{children:[Object(C.jsxs)(g.a,{component:d.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(C.jsx)("img",{src:w,alt:"commerce.js",className:n.image}),"E - Commerce Shop"]}),Object(C.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(v.a,{component:d.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(y.a,{badgeContent:t,color:"secondary",children:Object(C.jsx)(k.a,{})})})})]})})})},N=n(181),_=n(176),T=n(177),B=n(178),E=n(179),F=Object(m.a)((function(){return{root:{maxWidth:"100%"},media:{height:"150px",width:"155px",marginLeft:"70px"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),q=n(180),L=function(e){var t=e.product,n=e.onAddToCart,a=F();return Object(C.jsxs)(_.a,{className:a.root,children:[Object(C.jsx)(T.a,{className:a.media,image:t.media.source,title:t.name}),Object(C.jsxs)(B.a,{children:[Object(C.jsxs)("div",{className:a.cardContent,children:[Object(C.jsx)(g.a,{variant:"h5",gutterBottom:!0,children:t.name}),Object(C.jsx)(g.a,{variant:"h5",children:t.price.formatted_with_symbol})]}),Object(C.jsx)(g.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary"})]}),Object(C.jsx)(E.a,{disableSpacing:!0,className:a.cardActions,children:Object(C.jsx)(v.a,{"aria-label":"Add to Cart",onClick:function(){return n(t.id,1)},children:Object(C.jsx)(q.a,{})})})]})},R=Object(m.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),I=function(e){var t=e.products,n=e.onAddToCart,a=R();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(N.a,{container:!0,justify:"center",spacing:4,children:t.map((function(e){return Object(C.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(L,{product:e,onAddToCart:n})},e.id)}))})]})},A=n(182),P=n(183),z=Object(m.a)((function(){return{media:{height:"150px",width:"155px",marginLeft:"100px"},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),D=function(e){var t=e.item,n=e.onUpdateCartQty,a=e.onRemoveFromCart,r=z();return Object(C.jsxs)(_.a,{className:"cart-item",children:[Object(C.jsx)(T.a,{image:t.media.source,alt:t.name,className:r.media}),Object(C.jsxs)(B.a,{className:r.cardContent,children:[Object(C.jsx)(g.a,{variant:"h4",children:t.name}),Object(C.jsx)(g.a,{variant:"h5",children:t.line_total.formatted_with_symbol})]}),Object(C.jsxs)(E.a,{className:r.cardActions,children:[Object(C.jsxs)("div",{className:r.buttons,children:[Object(C.jsx)(A.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity-1)},children:"-"}),Object(C.jsxs)(g.a,{children:["\xa0",t.quantity,"\xa0"]}),Object(C.jsx)(A.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity+1)},children:"+"})]}),Object(C.jsx)(A.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(t.id)},children:"Remove"})]})]})},M=Object(m.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(p.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(p.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),Q=function(e){var t=e.cart,n=e.handleUpdateCartQty,a=e.handleRemoveFromCart,r=e.handleEmptyCart,c=M(),i=function(){return Object(C.jsxs)(g.a,{variant:"subtitled",children:["You have no items in your shopping cart,",Object(C.jsx)(d.b,{to:"/",className:c.link,children:" start adding some"}),"!"]})},s=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(N.a,{container:!0,spacing:3,children:t.line_items.map((function(e){return Object(C.jsx)(N.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(D,{item:e,onUpdateCartQty:n,onRemoveFromCart:a})},e.id)}))}),Object(C.jsxs)("div",{className:c.cardDetails,children:[Object(C.jsxs)(g.a,{variant:"h4",children:[" Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(A.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(C.jsx)(A.a,{component:d.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return t.line_items?Object(C.jsxs)(P.a,{children:[Object(C.jsx)("div",{className:c.toolbar}),Object(C.jsx)(g.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),t.line_items.length?Object(C.jsx)(s,{}):Object(C.jsx)(i,{})]}):"Loading"},W=n(189),U=n(190),G=n(83),V=n(198),Z=n(192),J=n(194),Y=Object(m.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(p.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(p.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(p.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),H=n(50),K=n(197),X=n(193),$=n(187),ee=n(45),te=n(80),ne=new(n.n(te).a)("pk_test_30428b2fef383d88af977c8dbc0a90eba2629d6037314",!0),ae=n(195),re=function(e){var t=e.name,n=e.label,a=(e.required,Object(ee.d)().control);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(N.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(ee.a,{defaultValue:"",control:a,name:t,render:function(e){e.field;return Object(C.jsx)(ae.a,{fullWidth:!0,name:t,label:n,required:!0})}})})})},ce=function(e){var t=e.checkoutToken,n=e.next,r=Object(a.useState)([]),c=Object(l.a)(r,2),i=c[0],s=c[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),p=b[0],m=b[1],h=Object(a.useState)([]),x=Object(l.a)(h,2),O=x[0],f=x[1],v=Object(a.useState)(""),y=Object(l.a)(v,2),k=y[0],w=y[1],S=Object(a.useState)([]),_=Object(l.a)(S,2),T=_[0],B=_[1],E=Object(a.useState)(""),F=Object(l.a)(E,2),q=F[0],L=F[1],R=Object(ee.c)(),I=Object.entries(i).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})),P=Object.entries(O).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})),z=T.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),D=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,console.log(a),s(a),m(Object.keys(a)[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,f(a),w(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r,c=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,ne.checkout.getShippingOptions(t,{country:n,region:a});case 3:r=e.sent,B(r),L(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){D(t.id)}),[]),Object(a.useEffect)((function(){p&&M(p)}),[p]),Object(a.useEffect)((function(){k&&Q(t.id,p,k)}),[k]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"Shipping address"}),Object(C.jsx)(ee.b,Object(H.a)(Object(H.a)({},R),{},{children:Object(C.jsxs)("form",{onSubmit:R.handleSubmit((function(e){return n(Object(H.a)(Object(H.a)({},e),{},{shippingCountry:p,shippingSubdivision:k,shippingOption:q}))})),children:[Object(C.jsxs)(N.a,{container:!0,spacing:3,children:[Object(C.jsx)(re,{required:!0,name:"firstName",label:"First name"}),Object(C.jsx)(re,{required:!0,name:"lastName",label:"Last name"}),Object(C.jsx)(re,{required:!0,name:"address1",label:"Address line 1"}),Object(C.jsx)(re,{required:!0,name:"email",label:"Email"}),Object(C.jsx)(re,{required:!0,name:"city",label:"City"}),Object(C.jsx)(re,{required:!0,name:"zip",label:"Zip / Postal code"}),Object(C.jsxs)(N.a,{xs:12,sm:6,children:[Object(C.jsx)(K.a,{children:"Shipping Country"}),Object(C.jsx)(X.a,{value:p,fullwidth:!0,onChange:function(e){return m(e.target.value)},children:I.map((function(e){return Object(C.jsx)($.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(N.a,{xs:12,sm:6,children:[Object(C.jsx)(K.a,{children:"Shipping Subdivisions"}),Object(C.jsx)(X.a,{value:k,fullwidth:!0,onChange:function(e){return w(e.target.value)},children:P.map((function(e){return Object(C.jsx)($.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(N.a,{xs:12,sm:6,children:[Object(C.jsx)(K.a,{children:"Shipping Options"}),Object(C.jsx)(X.a,{value:q,fullwidth:!0,onChange:function(e){return L(e.target.value)},children:z.map((function(e){return Object(C.jsx)($.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(A.a,{component:d.b,variant:"outlined",to:"/cart",children:"Back to Cart"}),Object(C.jsx)(A.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},ie=n(51),se=n(81),oe=n(186),ue=n(137),le=n(188),je=function(e){var t=e.checkoutToken;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(C.jsxs)(oe.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(C.jsxs)(ue.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(le.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(C.jsx)(g.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(C.jsxs)(ue.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(le.a,{primary:"Total"}),Object(C.jsx)(g.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},de=Object(se.a)("pk_test_51JFxKxSHMU4AVlkKWdZFZnZONQFr1GYnM4erVPMrfjxiI0NVEQyJIm7ECXZvOU337dm2Ctf4VS8bWkLFq7vIjY9s0032oN0lwo"),be=function(e){var t=e.checkoutToken,n=e.shippingData,a=e.backStep,r=e.onCaptureCheckout,c=e.nextStep,i=e.timeout,s=function(){var e=Object(u.a)(o.a.mark((function e(a,s,u){var l,j,d,b,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),u&&s){e.next=3;break}return e.abrupt("return");case 3:return l=s.getElement(ie.CardElement),e.next=6,u.createPaymentMethod({type:"card",card:l});case 6:j=e.sent,d=j.error,b=j.paymentMethod,d?console.log(d):(p={line_items:t.live.line_items,customer:{firstname:n.firstName,lastname:n.lastName,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,county_state:n.shippingSubdivision,postal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:b.id}}},r(t.id,p),i(),c());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(je,{checkoutToken:t}),Object(C.jsx)(W.a,{}),Object(C.jsx)(g.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(C.jsx)(ie.Elements,{stripe:de,children:Object(C.jsx)(ie.ElementsConsumer,{children:function(e){var n=e.elements,r=e.stripe;return Object(C.jsxs)("form",{onSubmit:function(e){return s(e,n,r)},children:[Object(C.jsx)(ie.CardElement,{}),Object(C.jsx)("br",{})," ",Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(A.a,{variant:"outlined",onClick:a,children:"Back"}),Object(C.jsxs)(A.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},pe=["Shipping address","Payment details"],me=function(e){var t=e.cart,n=e.order,r=e.onCaptureCheckout,c=e.error,i=e.handleEmptyCart,s=Object(a.useState)(0),p=Object(l.a)(s,2),m=p[0],h=p[1],x=Object(a.useState)(null),O=Object(l.a)(x,2),f=O[0],v=O[1],y=Object(a.useState)({}),k=Object(l.a)(y,2),w=k[0],S=k[1],N=Object(a.useState)(!1),_=Object(l.a)(N,2),T=_[0],B=_[1],E=Y(),F=Object(b.f)();Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,console.log(n),v(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),F.pushState("/");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var q=function(){return h((function(e){return e+1}))},L=function(){return h((function(e){return e-1}))},R=function(e){S(e),q()},I=function(){setTimeout((function(){B(!0)}),3e3)},P=function(){return n.customer?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(g.a,{variant:"h5",children:["Thank you for your purchase, ",n.customer.firstname," ",n.customer.lastname,"!"]}),Object(C.jsx)(W.a,{className:E.divider}),Object(C.jsxs)(g.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(C.jsx)("br",{}),Object(C.jsx)(A.a,{component:d.b,variant:"outlined",type:"button",to:"/",onClick:i,children:"Back to home"})]}):T?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(g.a,{variant:"h5",children:"Thank you for your purchase!"}),Object(C.jsx)(W.a,{className:E.divider})]}),Object(C.jsx)("br",{}),Object(C.jsx)(A.a,{component:d.b,variant:"outlined",type:"button",to:"/",onClick:i,children:"Back to home"})]}):Object(C.jsx)("div",{className:E.spinner,children:Object(C.jsx)(U.a,{})})};c&&(P=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(g.a,{variant:"h5",children:"Thank you for your purchase!!"}),Object(C.jsx)("br",{}),Object(C.jsx)(A.a,{component:d.b,variant:"outlined",type:"button",to:"/",onClick:i,children:"Back to home"})]})});var z=function(){return 0===m?Object(C.jsx)(ce,{checkoutToken:f,next:R}):Object(C.jsx)(be,{shippingData:w,checkoutToken:f,nextStep:q,backStep:L,onCaptureCheckout:r,timeout:I})};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(j.a,{}),Object(C.jsx)("div",{className:E.toolbar}),Object(C.jsx)("main",{className:E.layout,children:Object(C.jsxs)(G.a,{className:E.paper,children:[Object(C.jsx)(g.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)(V.a,{activeStep:m,className:E.stepper,children:pe.map((function(e){return Object(C.jsx)(Z.a,{children:Object(C.jsx)(J.a,{children:e})},e)}))}),m===pe.length?Object(C.jsx)(P,{}):f&&Object(C.jsx)(z,{})]})})]})};var he=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),i=Object(l.a)(c,2),s=i[0],p=i[1],m=Object(a.useState)({}),h=Object(l.a)(m,2),x=h[0],O=h[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),v=g[0],y=g[1],k=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.products.list();case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,ne.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.cart.add(t,n);case 2:a=e.sent,p(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.cart.update(t,{quantity:n});case 2:a=e.sent,r=a.cart,p(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.cart.remove(t);case 2:n=e.sent,a=n.cart,p(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.cart.empty();case 2:t=e.sent,n=t.cart,p(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.cart.refresh();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.checkout.capture(t,n);case 3:a=e.sent,O(a),E(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(),w()}),[]),console.log(s),Object(C.jsx)(d.a,{children:Object(C.jsxs)("div",{style:{display:"flex"},children:[Object(C.jsx)(j.a,{}),Object(C.jsx)(S,{totalItems:s.total_items}),Object(C.jsxs)(b.c,{children:[Object(C.jsx)(b.a,{exact:!0,path:"/",children:Object(C.jsx)(I,{products:n,onAddToCart:N})}),Object(C.jsx)(b.a,{exact:!0,path:"/cart",children:Object(C.jsx)(Q,{cart:s,handleUpdateCartQty:_,handleRemoveFromCart:T,handleEmptyCart:B})}),Object(C.jsx)(b.a,{exact:!0,path:"/checkout",children:Object(C.jsx)(me,{cart:s,order:x,onCaptureCheckout:F,error:v,handleEmptyCart:B})})]})]})})};i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(he,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.e20bf3c8.chunk.js.map