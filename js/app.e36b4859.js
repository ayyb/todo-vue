(function(){"use strict";var e={7468:function(e,t,o){var n=o(9242),r=o(3396);const a={id:"app"},d={key:0},s={key:1};function i(e,t,o,n,i,u){const l=(0,r.up)("Header"),c=(0,r.up)("Title"),m=(0,r.up)("ToDoInput"),p=(0,r.up)("ToDoList"),h=(0,r.up)("Footer"),f=(0,r.up)("TodoHello");return(0,r.wg)(),(0,r.iD)("div",a,[i.userName?((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(l),(0,r.Wm)(c,{propName:i.userName},null,8,["propName"]),(0,r.Wm)(m,{onAddToDo:u.addTodo},null,8,["onAddToDo"]),(0,r.Wm)(p,{todos:e.todos},null,8,["todos"]),(0,r.Wm)(h)])):((0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(f,{onAddName:u.addUserName},null,8,["onAddName"])]))])}var u=o(7139);const l={class:"title"},c={class:"title__message"},m={class:"title__task"},p=(0,r.Uk)(" You've got "),h={class:"title__task-total"},f=(0,r.Uk)(" tasks today. ");function v(e,t,o,a,d,s){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("p",c,[(0,r._)("span",null,(0,u.zw)(d.message)+",",1),(0,r._)("span",{onKeyup:t[0]||(t[0]=(0,n.D2)(((...e)=>s.handleName&&s.handleName(...e)),["enter"])),onBlur:t[1]||(t[1]=(...e)=>s.handleBlur&&s.handleBlur(...e)),class:"title__name",ref:"test",contenteditable:"true"},(0,u.zw)(o.propName),545)]),(0,r._)("p",m,[p,(0,r._)("span",h,(0,u.zw)(s.leftItem)+" / "+(0,u.zw)(s.totalItem),1),f])])}var g={name:"TitleComp",props:["propName"],computed:{totalItem(){return this.$store.state.todos.length},leftItem(){let e=0;for(let t=0;t<this.$store.state.todos.length;t++)!1===this.$store.state.todos[t].completed&&e++;return e}},data(){return{message:"Good evening"}},methods:{handleBlur(e){const t=this.propName,o=e.target.innerText;o!==t&&(""===o?e.target.innerText=t:this.$emit("changeName",o))},handleName(){this.$refs.test.blur()}}},_=o(89);const T=(0,_.Z)(g,[["render",v]]);var w=T;const N={id:"todoinput"};function k(e,t,o,a,d,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",N,[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>d.content=e),onKeypress:t[1]||(t[1]=(0,n.D2)(((...e)=>s.addTodo&&s.addTodo(...e)),["enter"])),placeholder:"Enter your task here"},null,544),[[n.nr,d.content]]),(0,r._)("button",{type:"submit",onClick:t[2]||(t[2]=(...e)=>s.addTodo&&s.addTodo(...e))},"add")])])}var y=()=>{const e=new Date,t=e.getMonth()+1,o=e.getDate(),n=["Sun.","Mon.","Tue.","Wed.","Thu.","Fri","Sat."],r=n[e.getDay()],a=e.getTime();return{month:t,date:o,week:r,time:a}},D={name:"ToDoInput.vue",data(){return{content:""}},methods:{addTodo(){let e={content:this.content,createdDate:`${y().month}/${y().date}`,completed:!1};this.$store.commit("addTodo",e),this.content=""}}};const b=(0,_.Z)(D,[["render",k]]);var $=b;const C={id:"todolist"},x=["id","checked","onChange"],O=["for"],U={class:"list__text"},H={class:"list__date"},I=["onClick"],W=["onClick"];function z(e,t,o,n,a,d){return(0,r.wg)(),(0,r.iD)("ul",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.todos,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{id:"container",key:e.id},[(0,r._)("input",{type:"checkbox",id:t,checked:!0===e.completed,onChange:o=>d.toggleCheck(e,t)},null,40,x),(0,r._)("label",{for:t},[(0,r._)("span",U,(0,u.zw)(e.content),1)],8,O),(0,r._)("p",H,(0,u.zw)(e.createdDate),1),(0,r._)("button",{class:"list__modify",onClick:e=>d.modify(t)},"Modify",8,I),(0,r._)("button",{class:"list__delete",onClick:e=>d.del(t)},"Delete",8,W)])))),128))])}var Z={name:"ToDoList.vue",computed:{todos(){return this.$store.state.todos}},methods:{del(e){this.$store.commit("delTodo",e)},modify(e){alert(e)},toggleCheck(e,t){let o={data:!e.completed,idx:t};console.log(o),this.$store.commit("changeCheck",o)}}};const j=(0,_.Z)(Z,[["render",z],["__scopeId","data-v-1d920d84"]]);var M=j;const A={class:"header"},F=(0,r._)("h1",{class:"logo"},"Todo List 😎",-1),L={class:"date"};function B(e,t,o,n,a,d){return(0,r.wg)(),(0,r.iD)("header",A,[F,(0,r._)("p",L,(0,u.zw)(a.timestamp),1)])}var K={name:"TodoHeader",data(){return{timestamp:`${y().month} / ${y().date} ${y().week}`}}};const E=(0,_.Z)(K,[["render",B]]);var P=E;const S={class:"footer"};function V(e,t,o,n,a,d){return(0,r.wg)(),(0,r.iD)("footer",S,"Made by Liam with 🎶")}var Y={name:"TodoFooter"};const G=(0,_.Z)(Y,[["render",V]]);var q=G;const J=(0,r._)("h1",null,"Hello!",-1),Q=(0,r._)("h3",null,"What is your name?",-1),R=(0,r._)("label",{for:"user-name"},"Name : ",-1);function X(e,t,o,a,d,s){return(0,r.wg)(),(0,r.iD)("div",null,[J,Q,R,(0,r.wy)((0,r._)("input",{type:"text",id:"user-name","onUpdate:modelValue":t[0]||(t[0]=e=>d.userName=e),onKeyup:t[1]||(t[1]=(0,n.D2)(((...e)=>s.addUserName&&s.addUserName(...e)),["enter"]))},null,544),[[n.nr,d.userName]]),(0,r._)("button",{onClick:t[2]||(t[2]=(...e)=>s.addUserName&&s.addUserName(...e))},"Enter")])}var ee={name:"TodoHello",data(){return{userName:""}},methods:{addUserName(){this.$store.commit("addName",this.userName),this.$emit("addName",this.userName)}}};const te=(0,_.Z)(ee,[["render",X]]);var oe=te,ne={name:"App",components:{Title:w,ToDoInput:$,ToDoList:M,Header:P,Footer:q,TodoHello:oe},data(){return{userName:""}},created(){this.userName=this.$store.state.name},methods:{addTodo(e){this.todos.push(e)},addUserName(e){this.userName=e}}};const re=(0,_.Z)(ne,[["render",i]]);var ae=re,de=o(65);const se=(0,de.MT)({state(){return{todos:[],name:""}},mutations:{addTodo(e,t){e.todos.push(t)},delTodo(e,t){e.todos.splice(t,1)},addName(e,t){e.name=t},changeCheck(e,t){e.todos[t.idx].completed=t.data}}});var ie=se;(0,n.ri)(ae).use(ie).mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var d=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,i=0;i<n.length;i++)(!1&a||d>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(s=!1,a<d&&(d=a));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,d=n[0],s=n[1],i=n[2],u=0;if(d.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(i)var l=i(o)}for(t&&t(n);u<d.length;u++)a=d[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(l)},n=self["webpackChunkvue3"]=self["webpackChunkvue3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7468)}));n=o.O(n)})();
//# sourceMappingURL=app.e36b4859.js.map