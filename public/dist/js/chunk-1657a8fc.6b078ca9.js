(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1657a8fc"],{"10a8":function(t,e,n){},1386:function(t,e,n){"use strict";var a=n("88bc"),c=n.n(a);c.a},"151b":function(t,e,n){t.exports=n.p+"img/logo.953bee6c.png"},"219a":function(t,e,n){"use strict";var a=n("10a8"),c=n.n(a);c.a},"26a5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-logo"},[a("section",[a("img",{attrs:{src:n("151b"),alt:""}})])])}],o={name:"LoginLogo"},i=o,s=(n("c91b"),n("2877")),r=Object(s["a"])(i,a,c,!1,null,null,null);e["a"]=r.exports},4995:function(t,e,n){},"4e45":function(t,e,n){"use strict";var a=n("624a"),c=n.n(a);c.a},"624a":function(t,e,n){},"88bc":function(t,e,n){},"8dda":function(t,e,n){"use strict";var a=n("9014"),c=n.n(a);c.a},9014:function(t,e,n){},c153:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"public-button"},[n("div",{staticClass:"btn"},[n("input",{attrs:{type:"button",value:t.buttonTitle,id:"login"}})])])},c=[],o={name:"PublicButton",props:{buttonTitle:{type:String,default:"登陆"}}},i=o,s=(n("8dda"),n("2877")),r=Object(s["a"])(i,a,c,!1,null,"77091d2c",null);e["a"]=r.exports},c91b:function(t,e,n){"use strict";var a=n("4995"),c=n.n(a);c.a},d514:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"public-header"},[n("section",[n("a",{attrs:{href:"javascript:;"},on:{click:t.back}}),n("h3",[t._v(t._s(t.headerTitle))])])])},c=[],o={name:"PublicHeader",props:{headerTitle:{type:String,default:""}},methods:{back:function(){history.go(-1)}}},i=o,s=(n("219a"),n("2877")),r=Object(s["a"])(i,a,c,!1,null,"76035ef3",null);e["a"]=r.exports},fb7c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reg"},[n("Header",{attrs:{"header-title":"注册"}}),n("div",{staticClass:"reg-wel"},[n("p",[t._v("欢迎来到图书馆")]),n("Logo")],1),n("RegBody")],1)},c=[],o=n("d514"),i=n("26a5"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reg-body"},[n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})])]),n("Button",{attrs:{"button-title":"注册"},nativeOn:{click:function(e){return t.reg(e)}}})],1)},r=[],u=n("c153"),l=n("d399"),d={name:"RegBody",data:function(){return{nickname:"",account:"",pwd:"",code:""}},components:{Button:u["a"]},methods:{reg:function(){var t=this,e=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,n=/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;if(e.test(this.account)||n.test(this.account)){var a=new FormData;a.append("nickname",this.nickname),a.append("account",this.account),a.append("code",this.code),a.append("password",this.password),this.$axios({url:"".concat(baseUrl,"/api/reg"),method:"post",data:a}).then((function(e){200==e.data.code&&"注册成功"==e.data.msg?(Object(l["a"])(e.data.msg),t.$router.push({name:"login"})):Object(l["a"])(e.data.msg)}))}else Object(l["a"])("请输入正确的手机号或邮箱")}}},p=d,m=(n("4e45"),n("2877")),v=Object(m["a"])(p,s,r,!1,null,"226edde2",null),f=v.exports,g={name:"Reg",data:function(){return{nickname:"",account:"",password:"",sms:"",icon:""}},components:{Header:o["a"],Logo:i["a"],RegBody:f}},b=g,h=(n("1386"),Object(m["a"])(b,a,c,!1,null,"6c498e84",null));e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-1657a8fc.6b078ca9.js.map