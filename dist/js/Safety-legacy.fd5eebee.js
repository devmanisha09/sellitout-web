"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[5309],{1185:function(t,o,a){a.d(o,{u1:function(){return b}});var n=a(655),e=a(2262),i=a(4578),u=a(2255),r=a(6921),s=a(3616),l=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.aboutId="",o.aboutTitle="",o.aboutDescription="",o.aboutEmail="",o.aboutPhone="",o.aboutWebsite="",o.adsOn="",o.adsClient="",o.adsSlot="",o.analytOn="",o.analytTrackId="",o.facebook="",o.googlePlus="",o.instagram="",o.youtube="",o.pinterest="",o.twitter="",o.privacypolicy="",o.gdpr="",o.uploadPoint="",o.safetyTips="",o.defaultPhoto=new s.Z,o}return(0,n.ZT)(o,t),o.prototype.init=function(t,o,a,n,e,i,u,r,s,l,p,c,d,b,f,h,y,v,_,g,m,w){return this.aboutId=t,this.aboutTitle=o,this.aboutDescription=a,this.aboutEmail=n,this.aboutPhone=e,this.aboutWebsite=i,this.adsOn=u,this.adsClient=r,this.adsSlot=s,this.analytOn=l,this.analytTrackId=p,this.facebook=c,this.googlePlus=d,this.instagram=b,this.youtube=f,this.pinterest=h,this.twitter=y,this.privacypolicy=v,this.gdpr=_,this.uploadPoint=g,this.safetyTips=m,this.defaultPhoto=w,this},o.prototype.getPrimaryKey=function(){return this.aboutId},o.prototype.fromMap=function(t){return(new o).init(t.about_id,t.about_title,t.about_description,t.about_email,t.about_phone,t.about_website,t.ads_on,t.ads_client,t.ads_slot,t.analyt_on,t.analyt_track_id,t.facebook,t.google_plus,t.instagram,t.youtube,t.pinterest,t.twitter,t.privacypolicy,t.GDPR,t.upload_point,t.safety_tips,(new s.Z).fromMap(t.default_photo))},o.prototype.fromMapList=function(t){var o=[];for(var a in t)null!=a&&o.push(this.fromMap(a));return o},o.prototype.toMap=function(t){var o={};return o["about_id"]=t.aboutId,o["about_title"]=t.aboutTitle,o["about_description"]=t.aboutDescription,o["about_email"]=t.aboutEmail,o["about_phone"]=t.aboutPhone,o["about_website"]=t.aboutWebsite,o["ads_on"]=t.adsOn,o["ads_client"]=t.adsClient,o["ads_slot"]=t.adsSlot,o["analyt_on"]=t.analytOn,o["analyt_track_id"]=t.analytTrackId,o["facebook"]=t.facebook,o["google_plus"]=t.googlePlus,o["instagram"]=t.instagram,o["youtube"]=t.youtube,o["pinterest"]=t.pinterest,o["twitter"]=t.twitter,o["privacypolicy"]=t.privacypolicy,o["GDPR"]=t.gdpr,o["upload_point"]=t.uploadPoint,o["safety_tips"]=t.safetyTips,o["default_photo"]=(new s.Z).toMap(t.defaultPhoto),o},o.prototype.toMapList=function(t){for(var o=[],a=0;a<t.length;a++)null!=t[a]&&o.push(this.toMap(t[a]));return o},o}(r.L),p=l,c=a(1597),d=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.aboutus=(0,e.qj)(new c.Z),o.loading=(0,e.qj)({value:!1}),o.limit=30,o.offset=0,o}return(0,n.ZT)(o,t),o.prototype.loadAboutUs=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t;return(0,n.Jh)(this,(function(o){switch(o.label){case 0:return this.loading.value=!0,[4,u.Z.getAboutUsDataList(new p)];case 1:return t=o.sent(),null!=t.data&&t.data.length>0&&(this.aboutus.data=t.data[0]),this.loading.value=!1,[2]}}))}))},o.prototype.resetAboutUs=function(){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return this.offset=0,this.loading.value=!0,[4,u.Z.getAboutUsDataList(new p)];case 1:return t.sent(),this.loading.value=!1,[2]}}))}))},o}(i.n),b=(Symbol("AboutUsProvider"),function(){return(0,e.qj)(new d)})},2052:function(t,o,a){a.d(o,{Z:function(){return l}});var n=a(6252);function e(t,o,a,e,i,u){var r=(0,n.up)("ps-label");return(0,n.wg)(),(0,n.j4)(r,{class:"lg:text-xl sm:text-lg text-base font-medium",textColor:t.textColor},{default:(0,n.w5)((function(){return[(0,n.WI)(t.$slots,"default")]})),_:3},8,["textColor"])}var i=a(9576),u=(0,n.aZ)({name:"PsLabelTitle",components:{PsLabel:i.Z},props:{textColor:{type:String,default:"text-secondary-500 dark:text-secondaryDark-white"}}}),r=a(3744);const s=(0,r.Z)(u,[["render",e]]);var l=s},4803:function(t,o,a){a.d(o,{Z:function(){return p}});var n=a(6252),e={class:"w-mobile sm:w-median lg:w-large mx-auto"};function i(t,o,a,i,u,r){return(0,n.wg)(),(0,n.iD)("div",e,[(0,n.WI)(t.$slots,"content")])}var u=a(8345),r={name:"PsContentContainer",setup:function(){var t=(0,u.yj)();return{route:t}}},s=a(3744);const l=(0,s.Z)(r,[["render",i]]);var p=l},4208:function(t,o,a){a.r(o),a.d(o,{default:function(){return h}});var n=a(6252),e=a(3577),i={class:"mt-36 mb-16"},u={class:"mt-4"};function r(t,o,a,r,s,l){var p=(0,n.up)("ps-label-title"),c=(0,n.up)("ps-label"),d=(0,n.up)("ps-content-container");return(0,n.wg)(),(0,n.j4)(d,null,{content:(0,n.w5)((function(){var o,a;return[(0,n._)("div",i,[(0,n.Wm)(p,null,{default:(0,n.w5)((function(){return[(0,n.Uk)((0,e.zw)(t.$t("safety__safety_tips")),1)]})),_:1}),(0,n._)("p",u,[(0,n.Wm)(c,{innerHTML:null===(a=null===(o=r.aboutUsProvider.aboutus)||void 0===o?void 0:o.data)||void 0===a?void 0:a.safetyTips},null,8,["innerHTML"])])])]})),_:1})}var s=a(4803),l=a(2052),p=a(9576),c=a(1185),d={name:"SafetyView",components:{PsContentContainer:s.Z,PsLabelTitle:l.Z,PsLabel:p.Z},setup:function(){var t=(0,c.u1)();return t.loadAboutUs(),{aboutUsProvider:t}}},b=a(3744);const f=(0,b.Z)(d,[["render",r]]);var h=f}}]);
//# sourceMappingURL=Safety-legacy.fd5eebee.js.map