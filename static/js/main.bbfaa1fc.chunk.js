(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__328H8",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__4kWAD"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3dMY9",Modal:"Modal_Modal__1qBQg"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1aC43"}},28:function(e,t,a){e.exports={Button:"Button_Button__121KY"}},33:function(e,t,a){},35:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),o=a.n(c),l=(a(33),a(8)),s=a.n(l),u=a(17),i=a(11),m=a(4),h=a(5),d=a(7),p=a(6),b=(a(35),a(9)),g=a.n(b),j=a(0),f=function(e){var t=e.onClick;return Object(j.jsx)("header",{className:g.a.Searchbar,children:Object(j.jsxs)("form",{className:g.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(e.target.elements.request.value.trim())},children:[Object(j.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(j.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:g.a.SearchFormInput,name:"request",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},O=a(26),S=a.n(O),y=a(14),v=a.n(y),I=function(e){var t=e.data,a=e.onSelect;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(j.jsx)("img",{onClick:function(){return a(e.webformatURL)},src:e.largeImageURL,alt:e.tags,className:v.a.ImageGalleryItemImage})},e.id)}))})},x=function(e){var t=e.data,a=e.onSelect;return Object(j.jsx)("ul",{className:S.a.ImageGallery,children:Object(j.jsx)(I,{data:t,onSelect:a})})},_=a(15),k=a.n(_),w=document.querySelector("#modal-root"),B=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.modalToggle(null))},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.modalToggle(null)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(j.jsx)("div",{className:k.a.Overlay,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:k.a.Modal,children:Object(j.jsx)("img",{src:this.props.link,alt:""})})}),w)}}]),a}(n.Component),C=a(27),q=a.n(C),F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(j.jsx)(q.a,{type:"ThreeDots",color:"#999999",height:100,width:100})}}]),a}(n.Component),G=a(28),N=a.n(G),M=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:N.a.Button,onClick:t,children:"Load more"})},L=a(16),D=a.n(L);D.a.defaults.baseURL="https://pixabay.com/api/";var E=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("?key=".concat("16347216-fb50075837ded8f23f3479d31","&q=").concat(t,"&page=").concat(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={allImages:[],selectedImage:null,reqStatus:null,request:"",page:1},e.handleSelectImage=function(t){e.setState({selectedImage:t})},e.handleSubmit=function(t){e.setState({allImages:[],request:t})},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.request,c=n.page,a.request===r&&a.page===c){e.next=8;break}return this.setState({reqStatus:"loading"}),e.next=5,E(r,c);case 5:o=e.sent,this.setState((function(e){return{allImages:[].concat(Object(u.a)(e.allImages),Object(u.a)(o.hits))}})),this.setState({reqStatus:null});case 8:a.page!==c&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.allImages,a=e.selectedImage,n=e.reqStatus,r=Boolean(t.length);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{onClick:this.handleSubmit}),Object(j.jsx)(x,{data:t,onSelect:this.handleSelectImage}),a&&Object(j.jsx)(B,{link:a,modalToggle:this.handleSelectImage}),r&&!n&&Object(j.jsx)(M,{onClick:this.loadMore}),n&&Object(j.jsx)(F,{})]})}}]),a}(n.Component),U=T;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3oXeV",SearchForm:"Searchbar_SearchForm__2Jsjh",SearchFormButton:"Searchbar_SearchFormButton__2zaq2",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1atgW",SearchFormInput:"Searchbar_SearchFormInput__kyOvO"}}},[[76,1,2]]]);
//# sourceMappingURL=main.bbfaa1fc.chunk.js.map