(this.webpackJsonptech=this.webpackJsonptech||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),c=n.n(o),s=n(27),r=n.n(s),i=(n(58),n(21)),l=n(31),d=n(6),u=n(7),j=n(19),h=n(9),b=n(8),p=(n(59),o.Component,n(13)),O=n.n(p),m=function(e){return O.a.delete("/api/product/product/".concat(e))},g=function(e,t){return O.a.put("/api/product/product/".concat(e),t)},x=n(92),f=n(87),v=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).FoundProduct=function(e){e.preventDefault();var t=a.props.quantity-1,n={name:a.props.name,price:a.props.price,quantitiy:t,_id:a.props.id};a.setState({Cart:n}),console.log(a.state.Cart);var o=a.state.Cart;console.log(o),a.props.AddToCart(o),console.log(a.state.Cart)},a.deleteProoduct=function(e){e.preventDefault(),a.props.deleteProoduct(a.props.id)},a.state={Cart:{name:a.props.name,price:a.props.price,quantitiy:a.props.quantity,id:a.props.id}},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"mr-3 mt-2 text-center",children:[Object(a.jsxs)(x.a,{border:"dark",bg:"light",style:{width:"15rem",height:"350px"},children:[Object(a.jsx)(x.a.Img,{variant:"top",src:this.props.image,style:{width:"100%",height:"150px"}}),Object(a.jsxs)(x.a.Body,{children:[Object(a.jsx)(x.a.Title,{children:this.props.name}),Object(a.jsxs)(x.a.Text,{children:[Object(a.jsx)("div",{className:"price d-inline",children:this.props.price})," ",Object(a.jsx)("div",{className:"d-inline",children:"SR"}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)("br",{})})})]})]}),Object(a.jsx)(x.a.Footer,{children:this.props.admin?Object(a.jsx)(f.a,{className:"mt-1",variant:"danger",onClick:this.deleteProoduct,children:"REMOVE"}):[0===this.props.quantity?Object(a.jsx)(f.a,{variant:"secondary",disabled:!0,children:"Out of Stock"}):Object(a.jsx)(f.a,{variant:"outline-primary",onClick:function(t){e.FoundProduct(t)},children:"Add to Cart"})]})]}),Object(a.jsx)("br",{})]})}}]),n}(o.Component),C=n(88),y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).deleteProoduct=function(e){console.log("The Product ID to Delete",e),m(e).then((function(t){console.log("The Product with the ID ".concat(e," has been deleted."));var n=a.props.prods.filter((function(t){return t._id!==e}));a.props.setProducts(n)})).catch((function(e){console.log("API ERROR:",e)}))},a.state={testt:"2"},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("Component DID MOUNT!"),O.a.get("/api/product/product").then((function(t){console.log("RESSSS: ",t.data),e.props.setProducts(t.data)})).catch((function(e){console.log("API ERROR:",e)}))}},{key:"render",value:function(){var e=this,t=this.props.prods.map((function(t,n){return Object(a.jsx)(v,{id:t._id,name:t.name,price:t.price,image:t.image,admin:e.props.isAdmin,quantity:t.quantitiy,deleteProoduct:e.deleteProoduct})}));return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{class:"display-4 ",children:["Welcome, ",this.props.name]}),Object(a.jsx)("h1",{class:"display-4 ",children:"All Products"}),t.length?Object(a.jsxs)(C.a,{children:[" ",t," "]}):Object(a.jsx)("h4",{children:"No products!"})]})}}]),n}(o.Component),S=n(10),I=n(16),k=n(89),E=n(91),A=n(90),P=n(50),N=(n(78),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).AddToCart=function(e){a.setState({cart:[].concat(Object(l.a)(a.state.cart),[e])}),a.state.cart.includes(e._id,0)?alert("You Already added to cart!!"):(console.log(e),console.log(e.name),console.log(e.price),console.log(e.quantity),a.props.AddToCart(e),console.log("hi from cover"),g(e._id,e).then((function(e){console.log("DecQuantitiy: ",e.data)})).catch((function(e){console.log("API ERROR:",e)})))},a.deleteProoduct=function(e){console.log("The Product ID to Delete",e),m(e).then((function(t){console.log("The Product with the ID ".concat(e," has been deleted."));var n=a.props.covers.filter((function(t){return t._id!==e}));a.props.setCvr(n)})).catch((function(e){console.log("API ERROR:",e)}))},a.state={cart:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("Component DID MOUNT COVERSSSSSS!"),O.a.get("/api/product/covers").then((function(t){console.log("RESSSS cvr: ",t.data),e.props.setCvr(t.data)})).catch((function(e){console.log("API ERROR:",e)}))}},{key:"render",value:function(){var e=this,t=this.props.covers.map((function(t,n){if("cover"===t.type)return Object(a.jsx)(v,{id:t._id,name:t.name,price:t.price,image:t.image,admin:e.props.isAdmin,quantity:t.quantitiy,deleteProoduct:e.deleteProoduct,AddToCart:e.AddToCart})}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{class:"display-4",children:"All Covers"}),Object(a.jsxs)(C.a,{children:[" ",t," "]})]})}}]),n}(o.Component)),w=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).deleteProoduct=function(e){console.log("The Product ID to Delete",e),m(e).then((function(t){console.log("The Product with the ID ".concat(e," has been deleted."));var n=a.props.powerBanks.filter((function(t){return t._id!==e}));a.props.setPowerbank(n)})).catch((function(e){console.log("API ERROR:",e)}))},a.state={},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("Component DID MOUNT pwr!"),O.a.get("/api/product/powerbanks").then((function(t){console.log("pwr",t.data),e.props.setPowerbank(t.data)})).catch((function(e){console.log("API ERROR:",e)}))}},{key:"render",value:function(){var e=this,t=this.props.powerBanks.map((function(t,n){if("PowerBank"===e.props.powerBanks[n].type)return Object(a.jsx)(v,{id:t._id,name:t.name,price:t.price,image:t.image,admin:e.props.isAdmin,quantity:t.quantitiy,deleteProoduct:e.deleteProoduct})}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{class:"display-4 ",children:"All Power Banks"}),Object(a.jsxs)(C.a,{children:[" ",t," "]})]})}}]),n}(o.Component),T=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).deleteProoduct=function(e){console.log("The Product ID to Delete",e),m(e).then((function(t){console.log("The Product with the ID ".concat(e," has been deleted."));var n=a.props.cables.filter((function(t){return t._id!==e}));a.props.setCables(n)})).catch((function(e){console.log("API ERROR:",e)}))},a.state={},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("Component DID MOUNT pwr!"),O.a.get("/api/product/cables").then((function(t){console.log("cbl",t.data),e.props.setCables(t.data)})).catch((function(e){console.log("API ERROR:",e)}))}},{key:"render",value:function(){var e=this,t=this.props.cables.map((function(t,n){if(console.log(e.props.cables[n]),"cable"===e.props.cables[n].type)return Object(a.jsx)(v,{id:t._id,name:t.name,price:t.price,image:t.image,admin:e.props.isAdmin,quantity:t.quantitiy,deleteProoduct:e.deleteProoduct})}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{class:"display-4",children:"All Cables"}),Object(a.jsxs)(C.a,{children:[" ",t," "]})]})}}]),n}(o.Component),R=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{class:"display-4 ",children:["Welcome, ",this.props.name]}),Object(a.jsx)("h2",{children:"Check the sales going on:"})]})}}]),n}(o.Component);var L=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).renderRedirect=function(){if(o.state.redirect)return o.setState({redirect:!1}),Object(a.jsx)(S.a,{to:"/allproducts"})},o.state={email:"",password:"",redirectLogin:!1,redirect:!1,status:"NOT SIGNED IN",token:"",rtoken:"",isLoading:"",signInError:"",signInEmail:"",signInPassword:""},o.onTextboxChangeSignInEmail=o.onTextboxChangeSignInEmail.bind(Object(j.a)(o)),o.onTextboxChangeSignInPassword=o.onTextboxChangeSignInPassword.bind(Object(j.a)(o)),o.onSignIn=o.onSignIn.bind(Object(j.a)(o)),o}return Object(u.a)(n,[{key:"onTextboxChangeSignInEmail",value:function(e){this.setState({signInEmail:e.target.value})}},{key:"onTextboxChangeSignInPassword",value:function(e){this.setState({signInPassword:e.target.value})}},{key:"onSignIn",value:function(){var e=this,t=this.state,n=t.signInEmail,a=t.signInPassword;this.setState({isLoading:!0}),function(e,t){return console.log("AAAAAAAA",e),O.a.post("/api/user/login",{email:e,password:t})}(n,a).then((function(t){console.log("ENTERED THE FUNC"),console.log("json",t),t.data.success?(!function(e,t){e||console.error("Error: Key is missing");try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error(n)}}("the_main_app",{token:t.data.token}),console.log("YEEEEEEEES"),e.setState({signInError:t.message,isLoading:!1,signInPassword:"",signInEmail:"",token:t.data.token,rtoken:t.data.rtoken,status:"SIGNED IN",redirect:!0}),e.renderRedirect(),e.props.LogToken(t.data.token,t.data.name,n,a,t.data.rtoken,t.data.admin)):(console.log("NO"),e.setState({signInError:t.message,status:"NOT SIGNED IN",isLoading:!1}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(a.jsx)(S.a,{to:"/"}):Object(a.jsxs)("div",{children:[this.renderRedirect(),Object(a.jsx)("h1",{className:"display-4 App",children:"Sign in"}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"App center",children:[Object(a.jsx)("div",{className:"w-50",children:Object(a.jsxs)(A.a,{children:[Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Email address"}),Object(a.jsx)(A.a.Control,{style:{width:"100%"},type:"email",placeholder:"Enter email",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({signInEmail:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(A.a.Label,{children:"Password"}),Object(a.jsx)(A.a.Control,{type:"password",placeholder:"Password",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({signInPassword:t.target.value})}})]})]})})," "]}),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(f.a,{onClick:this.onSignIn,children:"Sign In"})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("h4",{className:"App",children:["You dont have account? ",Object(a.jsx)("a",{href:"./Register",children:" register now "})]})]})}}]),n}(o.Component),B=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).submitInfo=function(e){e.preventDefault();var t={name:a.state.name,email:a.state.email,Address:{country:a.state.country,city:a.state.city,houseNumber:a.state.houseNumber}};(function(e,t){return console.log("xxxx",e),console.log("zzzzz",t),O.a.put("/api/user/",t)})(a.props.token,t).then((function(e){console.log("user: ",e.data)})).catch((function(e){console.log("API ERROR:",e)})),a.props.EditInfo(t),a.props.hide()},a.state={name:"",email:"",country:"",city:"",houseNumber:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsxs)(A.a,{children:[Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Username"}),Object(a.jsx)(A.a.Control,{type:"Username",placeholder:"Username",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({name:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Email address"}),Object(a.jsx)(A.a.Control,{type:"email",placeholder:"you@example.com",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({email:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)("h3",{children:"Address"}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(A.a.Label,{children:"Country"}),Object(a.jsx)(A.a.Control,{type:"text",placeholder:"Saudi Arabia",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({country:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(A.a.Label,{children:"City"}),Object(a.jsx)(A.a.Control,{type:"text",placeholder:"makkah",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({city:t.target.value})}})]}),Object(a.jsx)(A.a.Label,{children:"House Number"}),Object(a.jsx)(A.a.Control,{type:"Number",placeholder:"Ex: 1 ",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({houseNumber:t.target.value})}})]}),Object(a.jsx)(f.a,{variant:"primary",type:"submit",onClick:this.submitInfo,children:"SAVE"})]})})}}]),n}(o.Component),G=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).EditProfile=function(){a.setState({showComponent:!a.state.showComponent}),console.log(a.state.showComponent)},a.hide=function(){a.setState({showComponent:!1}),console.log(a.state.showComponent)},a.EditInfo=function(e){console.log(e),a.setState({name:e.name}),a.setState({email:e.email}),a.setState({country:e.Address.country}),a.setState({city:e.Address.city}),a.setState({HouseNumber:e.Address.houseNumber})},a.state={showComponent:!1,user:{name:"",email:"",country:"",city:"",HouseNumber:0}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.token,O.a.get("/api/user/userById/".concat(e))).then((function(e){console.log("res: ",e.data),t.setState({user:e.data[2]});t.state.user;t.setState({name:e.data.name}),t.setState({email:e.data.email}),t.setState({country:e.data.Address.country}),t.setState({city:e.data.Address.city}),t.setState({HouseNumber:e.data.Address.houseNumber})})).catch((function(e){console.log("API ERROR:",e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"profile",children:[Object(a.jsxs)(A.a,{children:[Object(a.jsx)(A.a.Group,{controlId:"formBasicEmail",children:Object(a.jsxs)(A.a.Label,{children:["Username: ",this.state.name]})}),Object(a.jsx)(A.a.Group,{controlId:"formBasicEmail",children:Object(a.jsxs)(A.a.Label,{children:["Email address: ",this.state.email]})}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)("h3",{children:"Address: "}),Object(a.jsx)(A.a.Group,{controlId:"formBasicEmail",children:Object(a.jsxs)(A.a.Label,{children:["Country: ",this.state.country]})}),Object(a.jsx)(A.a.Group,{controlId:"formBasicEmail",children:Object(a.jsxs)(A.a.Label,{children:["City: ",this.state.city]})}),Object(a.jsxs)(A.a.Label,{children:["House number: ",this.state.HouseNumber]})]}),Object(a.jsx)(f.a,{onClick:this.EditProfile,class:"btn btn-secondary",children:"Edit"})]}),this.state.showComponent?Object(a.jsx)(B,{hide:this.hide,EditInfo:this.EditInfo,token:this.props.token}):null]})}}]),n}(o.Component),D=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{class:"display-4",children:"Search Results: "}),this.props.results.length>0?this.props.results.map((function(e){return Object(a.jsx)("h5",{children:e.name})})):"Empty"]})}}]),n}(o.Component),H=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).register=function(e){e.preventDefault();var t={name:a.state.name,email:a.state.email,password:a.state.password};console.log("TTTTTTTTTTTTTTTTT"),function(e){return O.a.post("/api/user/register",e)}(t).then((function(e){alert(e.data.message),console.log(e.data)})).catch((function(e){console.log(e)}))},a.state={name:"",email:"",password:"",redirectReg:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return this.state.redirectLogin?Object(a.jsx)(L,{to:"/login"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"display-4",children:"Register"}),Object(a.jsxs)(A.a,{children:[Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Your full name "}),Object(a.jsx)(A.a.Control,{type:"text",placeholder:"Enter your name",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({name:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Email address"}),Object(a.jsx)(A.a.Control,{type:"email",placeholder:"Enter email",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({email:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(A.a.Label,{children:"Password"}),Object(a.jsx)(A.a.Control,{type:"password",placeholder:"Password",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({password:t.target.value})}})]})]}),Object(a.jsx)(f.a,{variant:"primary",type:"submit",onClick:function(t){e.register(t)},children:"Register"})]})}}]),n}(o.Component),q=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).AddToStock=function(e){e.preventDefault();var t,n={name:o.state.name,price:o.state.price,type:o.state.type,description:o.state.description,quantitiy:o.state.quantitiy,image:o.state.image};console.log(n),(t=n,O.a.post("/api/product/product",t)).then((function(e){console.log("Product: ",e.data)})).catch((function(e){console.log("API ERROR:",e)}))},o.redirectFunc=function(){if(!o.props.isAdmin)return alert("Not Admin, NOT ALLOWED"),Object(a.jsx)(S.a,{to:"/"})},o.state={name:"",price:"",type:"",description:"",quantitiy:"",image:""},o}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[this.redirectFunc(),Object(a.jsx)("h1",{className:"display-4 App",children:"Add New Product"}),Object(a.jsxs)(A.a,{children:[Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Product name"}),Object(a.jsx)(A.a.Control,{type:"text",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({name:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Price "}),Object(a.jsx)(A.a.Control,{type:"Number",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({price:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Type "}),Object(a.jsxs)("select",{id:"inputState",class:"form-control",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({type:t.target.value})},children:[Object(a.jsx)("option",{selected:!0,children:"Choose..."}),Object(a.jsx)("option",{value:"cover",children:"Covers"}),Object(a.jsx)("option",{value:"cable",children:"Cables"}),Object(a.jsx)("option",{value:"PowerBank",children:"Power Banks"})]})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Description"}),Object(a.jsx)(A.a.Control,{type:"Text",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({description:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Quantitiy "}),Object(a.jsx)(A.a.Control,{type:"Number",onChange:function(t){console.log("CHANGE: ",t.target.value),e.setState({quantitiy:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Image "}),Object(a.jsx)(A.a.Control,{type:"Text",onChange:function(t){e.setState({image:t.target.value})}})]}),Object(a.jsxs)(A.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(A.a.Label,{children:"Upload image for product "}),Object(a.jsx)(A.a.Control,{type:"file",onChange:function(t){console.log("CHANGE: ",t.target.files),console.log("CHANGE: ",t.target.files[0]);var n=t.target.files[0];e.setState({image:n})}})]}),Object(a.jsx)(f.a,{variant:"primary",type:"submit",onClick:this.AddToStock,children:"Add Product"})]})]})}}]),n}(o.Component),_=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).IncQuatity=function(){var e=a.state.count;e++,a.setState({count:e}),a.props.getCount(e,a.props.id)},a.decQuatity=function(){var e=a.state.count;--e>=1&&(a.setState({count:e}),a.props.getCount(e,a.props.id))},a.state={count:1},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{class:"col-xs-6 col-md-4",children:Object(a.jsx)("h3",{children:this.props.name})}),Object(a.jsx)("div",{class:"col-xs-6 col-md-4",children:Object(a.jsx)("h3",{children:this.props.price})}),Object(a.jsxs)("div",{class:"col-xs-6 col-md-4",children:[Object(a.jsx)(f.a,{onClick:this.IncQuatity,children:"+"}),Object(a.jsx)("h3",{children:this.state.count}),Object(a.jsx)(f.a,{onClick:this.decQuatity,children:"-"})]})]})})}}]),n}(o.Component),F=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).getCount=function(e,t,n){a.setState({count:e}),a.setState({id:t}),console.log(a.state.count)},a.BuyProductd=function(){var e={quantitiy:a.state.count};console.log(e.quantitiy),g(a.state.id,e).then((function(e){console.log("DecQuantitiy: ",e.data)})).catch((function(e){console.log("API ERROR:",e)}))},a.state={count:1,id:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;console.log(this.props.currentCart);var t=this.props.currentCart.map((function(t,n){return console.log(t.name),Object(a.jsx)(_,{id:t.id,name:t.name,price:t.price,quantity:t.quantitiy,getCount:e.getCount,gitId:e.BuyProductd})}));return Object(a.jsxs)("div",{children:[t,Object(a.jsx)(f.a,{onClick:this.BuyProductd,children:"Buy"})]})}}]),n}(o.Component),M=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).funcSetProducts=function(e){o.setState({products:e})},o.dynamicSearch=function(){console.log(o.state.searchValue),o.setState({searchResult:o.state.products.filter((function(e){return e.name.toLowerCase().includes(o.state.searchValue)}))})},o.handleChange=function(e){e.preventDefault(),o.setState({searchValue:e.target.value})},o.funcSetCvr=function(e){o.setState({covers:e})},o.funcSetPowerBank=function(e){o.setState({powerbanks:e})},o.funcSetCable=function(e){o.setState({cables:e})},o.LogToken=function(e,t,n,a,c,s){console.log("in app from login, ",t),o.setState({isLoggedIn:!0,token:e,name:t,signInEmail:n,signInPassword:a,rtoken:c,isAdmin:s})},o.logoutFunc=function(){o.setState({isLoggedIn:!1})},o.renderRedirect=function(){if(console.log("redirect"),o.state.redirect)return o.setState({redirect:!1}),Object(a.jsx)(S.a,{to:"/login"})},o.AddToCart=function(e){o.setState({cart:[].concat(Object(l.a)(o.state.cart),[e])}),console.log("hi from App")},o.state={products:[],searchValue:"",searchResult:[],isLoggedIn:!1,covers:[],powerbanks:[],cables:[],redirect:!1,testt:"1",isLoading:!0,token:"",rtoken:"",name:"",signInEmail:"",signInPassword:"",cart:[],isAdmin:!1},o.AddToCart=o.AddToCart.bind(Object(j.a)(o)),o.handleChange=o.handleChange.bind(Object(j.a)(o)),o.LogToken=o.LogToken.bind(Object(j.a)(o)),o.onlogout=o.onlogout.bind(Object(j.a)(o)),o.dynamicSearch=o.dynamicSearch.bind(Object(j.a)(o)),o}return Object(u.a)(n,[{key:"onlogout",value:function(){var e=this,t=function(e){if(!e)return null;try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){return null}}("the_main_app");console.log("AAA",t);var n=this.state.signInEmail,a=this.state.signInPassword;t&&t.token?function(e,t,n){return O.a.get("/api/user/logout?token="+n,{email:e,password:t})}(n,a,t.token).then((function(t){t.data.success?(e.setState({token:"",isLoggedIn:!1,isAdmin:!1,redirect:!0}),e.renderRedirect()):e.setState({isLoading:!1})})):this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(I.a,{children:[this.renderRedirect(),Object(a.jsx)("div",{className:"",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)(k.a,{bg:"light",variant:"light",sticky:"top",className:"font-weight-bold",children:[Object(a.jsx)(k.a.Brand,{href:"#home",children:"TECH"}),Object(a.jsxs)(E.a,{className:"mr-auto",children:[Object(a.jsx)(E.a.Link,{as:I.b,to:"/",children:"Home"}),Object(a.jsx)(E.a.Link,{className:"mr-5",as:I.b,to:"/allproducts",children:"All Products"}),Object(a.jsx)(E.a.Link,{className:"ml-3",as:I.b,to:"/powerbanks",children:"Power Banks"}),Object(a.jsx)(E.a.Link,{as:I.b,to:"/covers",children:"Covers"}),Object(a.jsx)(E.a.Link,{as:I.b,to:"/cables",children:"Cables"}),this.state.isAdmin?Object(a.jsx)(E.a.Link,{className:"red",as:I.b,to:"/addprod",children:Object(a.jsx)("div",{className:"admin",children:"Add Products "})}):null]}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(A.a,{inline:!0,children:[Object(a.jsx)(P.a,{type:"text",placeholder:"search",className:"mr-sm-2",value:this.state.searchValue,onChange:this.handleChange}),Object(a.jsx)(I.b,{to:"/search",children:Object(a.jsx)(f.a,{variant:"outline-primary",className:"mr-2",onClick:this.dynamicSearch,children:"Search"})}),this.state.isLoggedIn?Object(a.jsxs)("div",{className:"myacc",children:[Object(a.jsxs)(E.a.Link,{className:"d-inline mr-2",as:I.b,to:"/profile",children:["My Account: ",Object(a.jsx)("div",{className:"d-inline name",children:this.state.name})]}),Object(a.jsx)(f.a,{variant:"secondary",onClick:this.onlogout,children:"Log Out"})]}):Object(a.jsx)(I.b,{to:"/login",children:Object(a.jsx)(f.a,{variant:"outline-success",onClick:"",children:"Sing in"})}),Object(a.jsx)(I.b,{to:"/cart",children:Object(a.jsx)(f.a,{variant:"outline-light",onClick:"",className:"ml-2",children:Object(a.jsx)("img",{src:"https://www.flaticon.com//vstatic/svg/833/833314.svg?token=exp=1612176439~hmac=2cfcee3809abe403d5864ff08b494741",width:"20px"})})})]})})]}),Object(a.jsx)(S.d,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(S.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(R,{name:e.state.name})}}),Object(a.jsx)(S.b,{exact:!0,path:"/allproducts",render:function(){return Object(a.jsx)(y,{name:e.state.name,prods:e.state.products,isAdmin:e.state.isAdmin,setProducts:e.funcSetProducts,isLoggedIn:e.state.isLoggedIn})}}),Object(a.jsx)(S.b,{path:"/search",render:function(t){return Object(a.jsx)(D,Object(i.a)(Object(i.a)({},t),{},{results:e.state.searchResult}))}}),Object(a.jsx)(S.b,{exact:!0,path:"/covers",render:function(t){return Object(a.jsx)(N,Object(i.a)(Object(i.a)({},t),{},{covers:e.state.covers,setCvr:e.funcSetCvr,isAdmin:e.state.isAdmin,AddToCart:e.AddToCart}))}}),Object(a.jsx)(S.b,{exact:!0,path:"/powerbanks",render:function(t){return Object(a.jsx)(w,Object(i.a)(Object(i.a)({},t),{},{powerBanks:e.state.powerbanks,setPowerbank:e.funcSetPowerBank,isAdmin:e.state.isAdmin}))}}),Object(a.jsx)(S.b,{exact:!0,path:"/cables",render:function(t){return Object(a.jsx)(T,Object(i.a)(Object(i.a)({},t),{},{cables:e.state.cables,setCables:e.funcSetCable,isAdmin:e.state.isAdmin}))}}),Object(a.jsx)(S.b,{exact:!0,path:"/profile",render:function(){return Object(a.jsx)(G,{token:e.state.rtoken})}}),Object(a.jsx)(S.b,{exact:!0,path:"/login",component:function(){return Object(a.jsx)(L,{isLoggedIn:e.state.isLoggedIn,LogToken:e.LogToken,logout:e.logoutFunc})}}),Object(a.jsx)(S.b,{exact:!0,path:"/addprod",render:function(){return Object(a.jsx)(q,{isAdmin:e.state.isAdmin})}}),Object(a.jsx)(S.b,{exact:!0,path:"/Register",render:function(e){return Object(a.jsx)(H,Object(i.a)({},e))}}),Object(a.jsx)(S.b,{exact:!0,path:"/cart",render:function(t){return Object(a.jsx)(F,Object(i.a)(Object(i.a)({},t),{},{currentCart:e.state.cart}))}})]})})]})})]})}}]),n}(o.Component),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),U()}},[[85,1,2]]]);
//# sourceMappingURL=main.0ac45a5b.chunk.js.map