"use strict";(self["webpackChunkmyfrontend"]=self["webpackChunkmyfrontend"]||[]).push([[661],{3661:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headbody"},[a("div",[a("img",{staticClass:"shark",attrs:{src:s(7408)}})]),a("div",{staticClass:"promo"},[t._v(" โปรโมชั่น ")]),a("div",{staticClass:"promo promo2"},[t._v(" ซื้อตั๋วออนไลน์ถูกกว่า ")]),a("div",{staticClass:"flex-container cardpromotion"},t._l(t.promotion,(function(e){return a("div",{key:e.promotion_id,staticClass:"card"},[a("div",{staticClass:"card-image"},[e.file_path?a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:e.file_path,alt:"Placeholder image"}})]):a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"https://cdn.discordapp.com/attachments/1066603623162843227/1103041451782324285/licensed-image.jpg",alt:"Placeholder image"}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content",staticStyle:{height:"5rem"}},[t._v(" "+t._s(e.pmt_name)+" ")]),t.user?a("button",{staticClass:"button is-danger"},[a("router-link",{staticClass:"has-text-white",attrs:{to:{name:"Booking",params:{id:e.promotion_id-1}}}},[t._v("BUY NOW")])],1):t._e(),a("p",{staticStyle:{"margin-left":"3px"}},[t._v("฿"+t._s(e.price_pmt_kid))])])])})),0)])},i=[],o=s(6166),n=s.n(o),r={data:function(){return{promotion:[],user:null,apiURL:"http://3.215.49.113:3000"}},mounted:function(){this.getprofileDetail(),this.onAuthChange()},methods:{getprofileDetail:function(){var t=this;n().get("http://3.215.49.113:3000/user/promotion").then((function(e){console.log(e),t.promotion=e.data.promotion})).catch((function(e){t.error=e.response.data.message}))},onAuthChange:function(){var t=localStorage.getItem("token");t&&this.getUser(),console.log(t)},getUser:function(){var t=this,e=localStorage.getItem("token");n().get("http://3.215.49.113:3000/user/me",{headers:{Authorization:"Bearer "+e}}).then((function(e){t.user=e.data,console.log(t.user.user_id),console.log(t.user)}))}}},c=r,l=s(1001),u=(0,l.Z)(c,a,i,!1,null,null,null),m=u.exports},7408:function(t,e,s){t.exports=s.p+"img/shark1.6b4b73c3.jpg"}}]);
//# sourceMappingURL=661-legacy.50b201ff.js.map