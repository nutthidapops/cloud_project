"use strict";(self["webpackChunkmyfrontend"]=self["webpackChunkmyfrontend"]||[]).push([[188],{5188:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"headbody"},[o("div",[o("img",{staticClass:"shark",attrs:{src:s(7408)}})]),o("div",{staticClass:"promo"},[t._v(" โปรโมชั่น ")]),o("div",{staticClass:"promo promo2"},[t._v(" ซื้อตั๋วออนไลน์ถูกกว่า ")]),o("div",{staticClass:"flex-container cardpromotion"},t._l(t.promotion,(function(e){return o("div",{key:e.promotion_id,staticClass:"card"},[o("div",{staticClass:"card-image"},[o("figure",{staticClass:"image is-4by3"},[o("img",{attrs:{src:t.apiURL+e.file_path,alt:"Placeholder image"}})])]),o("div",{staticClass:"card-content"},[o("div",{staticClass:"content",staticStyle:{height:"5rem"}},[t._v(" "+t._s(e.pmt_name)+" ")]),t.user?o("button",{staticClass:"button is-danger"},[o("router-link",{staticClass:"has-text-white",attrs:{to:{name:"Booking",params:{id:e.promotion_id-1}}}},[t._v("BUY NOW")])],1):t._e(),o("p",{staticStyle:{"margin-left":"3px"}},[t._v("฿"+t._s(e.price_pmt_kid))])])])})),0)])},a=[],i=s(6166),r=s.n(i),n={data(){return{promotion:[],user:null,apiURL:"http://3.215.49.113:3000"}},mounted(){this.getprofileDetail(),this.onAuthChange()},methods:{getprofileDetail(){r().get("http://3.215.49.113:3000/user/promotion").then((t=>{console.log(t),this.promotion=t.data.promotion})).catch((t=>{this.error=t.response.data.message}))},onAuthChange(){const t=localStorage.getItem("token");t&&this.getUser(),console.log(t)},getUser(){const t=localStorage.getItem("token");r().get("http://3.215.49.113:3000/user/me",{headers:{Authorization:"Bearer "+t}}).then((t=>{this.user=t.data,console.log(this.user.user_id),console.log(this.user)}))}}},l=n,c=s(1001),h=(0,c.Z)(l,o,a,!1,null,null,null),u=h.exports},7408:function(t,e,s){t.exports=s.p+"img/shark1.6b4b73c3.jpg"}}]);
//# sourceMappingURL=188.6c3b1397.js.map