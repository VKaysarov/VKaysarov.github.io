"use strict";(self["webpackChunksubscriptions"]=self["webpackChunksubscriptions"]||[]).push([[7],{7:function(e,s,t){t.r(s),t.d(s,{default:function(){return g}});var n=t(3396),a=t(9242),o=t(7139),i=t(1605);const c=e=>((0,n.dD)("data-v-4ae3b03c"),e=e(),(0,n.Cn)(),e),r={class:"main"},l={class:"wrapper"},d=c((()=>(0,n._)("div",{class:"container"},[(0,n._)("h2",{class:"subtitle"}," Вы действительно хотите отменить подписку? "),(0,n._)("span",{class:"description"}," После отмены вам станут недоступны: ")],-1))),u={class:"buttons__wrapper container"},b={class:"stay__button"},h=c((()=>(0,n._)("img",{src:i,alt:"error",class:"modal__header_img",width:"50",height:"50"},null,-1)));function p(e,s,t,i,c,p){const m=(0,n.up)("Preloader"),w=(0,n.up)("NewStories"),_=(0,n.up)("Button"),k=(0,n.up)("router-link"),f=(0,n.up)("ModalWindow");return(0,n.wg)(),(0,n.iD)("main",r,[(0,n.Wm)(m),(0,n._)("div",l,[d,(0,n.Wm)(w,{"show-title":!1})]),(0,n._)("div",u,[(0,n.Wm)(k,{class:"stay__button",to:`/management/?token=${c.token}`,onClick:s[0]||(s[0]=s=>e.$store.dispatch("sendUserEvent","YardSubManagementStaySubSecond"))},{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Оставить подписку ")])),_:1})])),_:1},8,["to"]),(0,n._)("div",b,[(0,n.Wm)(_,{color:"gray",onClick:p.unsubscribe},{default:(0,n.w5)((()=>[(0,n.Uk)(" Отменить подписку ")])),_:1},8,["onClick"])])]),(0,n.wy)((0,n.Wm)(f,{onClick:(0,a.iM)(p.closeModal,["self"])},{title:(0,n.w5)((()=>[h,(0,n.Uk)(" Подписка отключена! ")])),description:(0,n.w5)((()=>[(0,n.Uk)(" Подписка будет активна до конца расчетного периода "+(0,o.zw)(c.endDate),1)])),footer:(0,n.w5)((()=>[(0,n.Wm)(_,{class:"successModalBtn",color:"gray",small:"",onClick:s[1]||(s[1]=e=>p.closeModal(!0))},{default:(0,n.w5)((()=>[(0,n.Uk)(" Готово ")])),_:1})])),_:1},8,["onClick"]),[[a.F8,c.showUnsubscribeModal]])])}t(2062),t(7658);var m=t(9370),w=t(6205),_={name:"Unsubscribe",components:{Preloader:(0,n.RC)((()=>t.e(240).then(t.bind(t,2240)))),NewStories:(0,n.RC)((()=>t.e(25).then(t.bind(t,2025)))),ModalWindow:(0,n.RC)((()=>t.e(349).then(t.bind(t,5349)))),Button:(0,n.RC)((()=>t.e(286).then(t.bind(t,8286))))},data(){return{token:m.bl.TOKEN,showUnsubscribeModal:!1,endDate:""}},methods:{async unsubscribe(){this.$store.dispatch("sendUserEvent","YardSubManagementCancelButtonFinal");const e=new URLSearchParams(location.search).get("reasonId");if(e){const s=await(0,w.Pq)(e);s?.result?(this.$store.dispatch("changePayButtonDisplay",!1),this.$store.dispatch("getSubscriptionInfo"),this.endDate=(0,m.vc)(s?.subscriptionModel?.endDate),this.showUnsubscribeModal=!0):alert("Не удалось отменить подписку")}},closeModal(e=!1){this.showUnsubscribeModal=!1,this.$store.dispatch("sendUserEvent","YardSubManagementCancel_done"),e&&this.$router.push(`/management/?token=${this.token}`)}}},k=t(7477);const f=(0,k.Z)(_,[["render",p],["__scopeId","data-v-4ae3b03c"]]);var g=f},1605:function(e,s,t){e.exports=t.p+"img/modal_success.b152f5c3.svg"}}]);
//# sourceMappingURL=7.27862011.js.map