"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[9079],{6626:function(t,e,i){var n=i(655),s=i(6921),o=i(3616),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.id="",e.description="",e.message="",e.addedDate="",e.addedUserId="",e.isRead="",e.addedDateStr="",e.defaultPhoto=new o.Z,e}return(0,n.ZT)(e,t),e.prototype.init=function(t,e,i,n,s,o,r,a){return this.id=t,this.description=e,this.message=i,this.addedDate=n,this.addedUserId=s,this.isRead=o,this.addedDateStr=r,this.defaultPhoto=a,this},e.prototype.getPrimaryKey=function(){return this.id},e.prototype.toMap=function(t){var e={};return e["id"]=t.id,e["description"]=t.description,e["message"]=t.message,e["added_date"]=t.addedDate,e["added_user_id"]=t.addedUserId,e["is_read"]=t.isRead,e["added_date_str"]=t.addedDateStr,e["default_photo"]=(new o.Z).toMap(t.defaultPhoto),e},e.prototype.toMapList=function(t){for(var e=[],i=0;i<t.length;i++)null!=t[i]&&e.push(this.toMap(t[i]));return e},e.prototype.fromMap=function(t){return(new e).init(t.id,t.description,t.message,t.added_date,t.added_user_id,t.is_read,t.added_date_str,(new o.Z).fromMap(t.default_photo))},e.prototype.fromMapList=function(t){var e=[];for(var i in t)null!=i&&e.push(this.fromMap(i));return e},e}(s.L);e["Z"]=r},8593:function(t,e,i){i.d(e,{ZK:function(){return f}});var n=i(655),s=i(2262),o=i(4578),r=i(2255),a=i(1597),d=i(6626),l=function(){function t(){this.itemId="",this.buyerUserId="",this.sellerUserId="",this.message="",this.type=""}return t.prototype.ChatNotiPrameterHolder=function(){this.itemId="",this.buyerUserId="",this.sellerUserId="",this.message="",this.type=""},t.prototype.toMap=function(){var t={};return t["item_id"]=this.itemId,t["buyer_user_id"]=this.buyerUserId,t["seller_user_id"]=this.sellerUserId,t["message"]=this.message,t["type"]=this.type,t},t}(),u=l,c=i(2317),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isNoMoreRecord=(0,s.qj)({value:!1}),e.notiList=(0,s.qj)(new a.Z),e.noti=(0,s.qj)(new a.Z),e.loading=(0,s.qj)({value:!1}),e.limit=30,e.offset=0,e}return(0,n.ZT)(e,t),e.prototype.updateNotiList=function(t){var e;null!=this.notiList&&null!=this.notiList.data&&this.notiList.data.length>0&&0!=this.offset?(null!=t.data&&t.data.length>0?(e=this.notiList.data).push.apply(e,t.data):this.isNoMoreRecord.value=!0,this.notiList.code=t.code,this.notiList.status=t.status,this.notiList.message=t.message):this.notiList=t,null!=this.notiList&&null!=this.notiList.data&&(this.offset=this.notiList.data.length)},e.prototype.loadNotiList=function(t){return(0,n.mG)(this,void 0,void 0,(function(){var e;return(0,n.Jh)(this,(function(i){switch(i.label){case 0:return this.loading.value=!0,[4,r.Z.getNotificationList(new d.Z,this.limit,this.offset,t.toMap())];case 1:return e=i.sent(),this.updateNotiList(e),this.loading.value=!1,[2]}}))}))},e.prototype.resetNotiList=function(t){return(0,n.mG)(this,void 0,void 0,(function(){var e;return(0,n.Jh)(this,(function(i){switch(i.label){case 0:return this.offset=0,this.loading.value=!0,[4,r.Z.getNotificationList(new d.Z,this.limit,this.offset,t.toMap())];case 1:return e=i.sent(),this.updateNotiList(e),this.loading.value=!1,[2]}}))}))},e.prototype.postNoti=function(t){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return this.offset=0,this.loading.value=!0,[4,r.Z.postNoti(new d.Z,t.toMap())];case 1:return e.sent(),this.loading.value=!1,[2]}}))}))},e.prototype.loadNoti=function(t,e){return(0,n.mG)(this,void 0,void 0,(function(){var i;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.loading.value=!0,i=this,[4,r.Z.getNotiDetail(new d.Z,t,e,this.limit,this.offset)];case 1:return i.noti=n.sent(),this.loading.value=!1,[2]}}))}))},e.prototype.postChatNoti=function(t,e,i,s,o){return(0,n.mG)(this,void 0,void 0,(function(){var a;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return a=new u,a.itemId=t,a.sellerUserId=e,a.buyerUserId=i,a.message=s,a.type=o,[4,r.Z.postChatNoti(new c.Z,a.toMap())];case 1:return n.sent(),[2]}}))}))},e}(o.n),f=(Symbol("NotiProvider"),function(){return(0,s.qj)(new h)})},593:function(t,e,i){i.d(e,{Z:function(){return u}});var n=i(6252),s=i(3577),o=["type","disabled"];function r(t,e,i,r,a,d){return(0,n.wg)(),(0,n.iD)("button",{type:i.type,disabled:i.disabled,class:(0,s.C_)(["items-center theme px-4 py-2 font-medium capitalize tracking-widest active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",[i.disabled?"bg-primary-500 dark:bg-primaryDark-accent text-secondary-000 dark:text-secondaryDark-grey":i.theme,i.rounded,i.textSize]])},[(0,n.WI)(t.$slots,"default",{class:""})],10,o)}var a={name:"PsButton",props:{type:{type:String,default:"submit"},theme:{type:String,default:"bg-primary-500 dark:bg-primaryDark-accent text-textLight dark:text-textDark"},rounded:{type:String,default:"rounded-x sm:rounded-xl lg:rounded-2xl"},disabled:{type:Boolean,default:!1},textSize:{type:String,default:"lg:text-sm sm:text-xs text-xxs"}}},d=i(3744);const l=(0,d.Z)(a,[["render",r]]);var u=l},5480:function(t,e,i){i.r(e),i.d(e,{default:function(){return H}});var n=i(6252),s=i(3577),o={class:"mt-36 mb-16 w-mobile sm:w-median lg:w-large mx-auto"},r={class:"mb-4"},a={class:"i"},d={class:"flex flex-row mb-16"},l={class:"w-full flex flex-col"},u={class:"flex flex-col"};function c(t,e,i,c,h,f){var p=(0,n.up)("ps-label"),m=(0,n.up)("noti-horizontal-item"),g=(0,n.up)("ps-button");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",r,[(0,n._)("div",a,[(0,n.Wm)(p,{class:"text-xl sm:text-2xl lg:text-3xl font-medium"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,s.zw)(t.$t("notification_list__notification_list")),1)]})),_:1})]),(0,n._)("div",d,[(0,n._)("div",l,[(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.notiProvider.notiList.data,(function(t){return(0,n.wg)(),(0,n.iD)("div",{class:"w-full mt-2",key:t.id},[(0,n.Wm)(m,{noti:t,onClick:c.notiClicked},null,8,["noti","onClick"])])})),128))]),0==c.notiProvider.loading.value?((0,n.wg)(),(0,n.j4)(g,{key:0,class:(0,s.C_)(["w-60 mx-auto mt-8",c.notiProvider.isNoMoreRecord?"hidden":""]),onClick:c.loadMore},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,s.zw)(t.$t("notification_list__load_more")),1)]})),_:1},8,["onClick","class"])):((0,n.wg)(),(0,n.j4)(g,{key:1,class:"w-60 mx-auto mt-8",onClick:c.loadMore,disabled:!0},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,s.zw)(t.$t("notification_list__loading")),1)]})),_:1},8,["onClick"]))])])])])}var h=i(3824),f=i(593),p=i(9576),m=i(9399),g=i(8593),v={class:"flex flex-row"},x={class:"rounded-2xl bg-background dark:bg-primaryDark-black"},y={class:"sm:w-36 w-24 h-16"},w=["src"],_={class:"flex sm:hidden flex-col ms-4"},b={class:"hidden sm:flex flex-col ms-4"};function k(t,e,i,s,o,r){var a=(0,n.up)("ps-label");return(0,n.wg)(),(0,n.iD)("div",{class:"w-full cursor-pointer h-20 bg-primary-000 dark:bg-primaryDark-black p-2 rounded-2xl",onClick:e[1]||(e[1]=function(t){return null!=i.onClick?i.onClick(i.noti):null})},[(0,n._)("div",v,[(0,n._)("div",x,[(0,n._)("div",y,[(0,n._)("img",{alt:"Placeholder",width:"15px",height:"10px",class:"block w-full h-full rounded-2xl object-contain",src:s.notiProvider.imageUrl(i.noti?i.noti.defaultPhoto.imgPath:""),onError:e[0]||(e[0]=function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return s.notiProvider.defaultCarImage&&(t=s.notiProvider).defaultCarImage.apply(t,e)})},null,40,w)])]),(0,n._)("div",_,[(0,n.Wm)(a,{class:"text-xs sm:text-sm lg:text-base",innerHTML:i.noti.message.length>18?i.noti.message.slice(0,15)+" ....":i.noti.message},null,8,["innerHTML"]),(0,n.Wm)(a,{class:"text-xxs sm:text-xxs lg:text-xs mt-1",innerHTML:i.noti.description.length>100?i.noti.description.slice(0,95)+" ....":i.noti.description},null,8,["innerHTML"])]),(0,n._)("div",b,[(0,n.Wm)(a,{class:"text-xs sm:text-sm lg:text-base",innerHTML:i.noti.message.length>50?i.noti.message.slice(0,45)+" ....":i.noti.message},null,8,["innerHTML"]),(0,n.Wm)(a,{class:"text-xxs sm:text-xxs lg:text-xs mt-1",innerHTML:i.noti.description.length>200?i.noti.description.slice(0,190)+" ....":i.noti.description},null,8,["innerHTML"])])])])}var L=i(6626),Z={name:"NotiHorizontalItem",components:{PsLabel:p.Z},props:{noti:{type:L.Z,default:new L.Z},onClick:Function},setup:function(){var t=(0,g.ZK)();return{notiProvider:t}}},M=i(3744);const I=(0,M.Z)(Z,[["render",k]]);var N=I,P=function(){function t(){this.userId="",this.deviceToken=""}return t.prototype.NotiParameterHolder=function(){this.userId="",this.deviceToken=""},t.prototype.toMap=function(){var t={};return t["user_id"]=this.userId,t["device_token"]=this.deviceToken,t},t}(),C=P,D={name:"NotificationListView",components:{NotiHorizontalItem:N,PsButton:f.Z,PsLabel:p.Z},setup:function(){var t=m.$.psValueHolder,e=t.getLoginUserId(),i=(0,g.ZK)(),n=new C;function s(){i.loadNotiList(n)}function o(t){h.Z.push({name:"notification",params:{notificationId:t.id,message:t.message,description:t.description,image:t.defaultPhoto.imgPath}})}return n.userId=e,i.loadNotiList(n),{notiProvider:i,notiClicked:o,loadMore:s}}};const U=(0,M.Z)(D,[["render",c]]);var H=U}}]);
//# sourceMappingURL=NotificationList.3f1f6e38.js.map