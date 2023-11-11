"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[698],{3698:(g,p,n)=>{n.r(p),n.d(p,{PollModule:()=>G});var u=n(6895),a=n(9132),r=n(5861),P=n(6599);class m extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class x extends Error{constructor(v){super("Could not get the public IP address",v),this.name="IpNotFoundError"}}const f={timeout:5e3},d={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},S=(o,v,t)=>{const e=new XMLHttpRequest;let l;const i=new Promise((h,c)=>{l=c,e.addEventListener("error",c,{once:!0}),e.addEventListener("timeout",c,{once:!0}),e.addEventListener("load",()=>{const $=e.responseText.trim();$&&P[t]($)?h($):c()},{once:!0}),e.open("GET",o),e.timeout=v.timeout,e.send()});return i.cancel=()=>{e.abort(),l(new m)},i},L=(o,v)=>{let t;const e=(0,r.Z)(function*(){const l=[...d[o],...v.fallbackUrls??[]];let i;for(const h of l)try{return t=S(h,v,o),yield t}catch(c){if(i=c,c instanceof m)throw c}throw new x({cause:i})})();return e.cancel=()=>{t.cancel()},e},C={v4:o=>L("v4",{...f,...o}),v6:o=>L("v6",{...f,...o})};function b(){return(b=(0,r.Z)(function*(o){if(o={timeout:5e3,ipVersion:4,...o},!navigator?.onLine)return!1;const v=4===o.ipVersion?"v4":"v6";try{return yield C[v](o),!0}catch{return!1}})).apply(this,arguments)}var s=n(4650),w=n(8826),R=n(7009),B=n(5475),O=n(2419),_=n(5377),D=n(3833);let T=(()=>{class o{constructor(t){this.socket=t,this.socket.on("connect",()=>{console.log(this.socket)}),this.socket.on("disconnect",()=>{console.log("Disconnect from Socket Server...")})}emit(t,e,l){this.socket.emit(t,e,l)}listen(t){return this.socket.fromEvent(t)}notification(t){return this.socket.fromEvent("collection-notificacion")}static#t=this.\u0275fac=function(e){return new(e||o)(s.LFG(D.s))};static#e=this.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var F=n(3646),z=n(2395),k=n(4859),y=n(7392);function A(o,v){if(1&o){const t=s.EpF();s.TgZ(0,"button",6),s.NdJ("click",function(){s.CHM(t);const l=s.oxw();return s.KtG(l.onBack())}),s.TgZ(1,"mat-icon"),s._uU(2,"arrow_back"),s.qZA()()}}function J(o,v){if(1&o){const t=s.EpF();s.TgZ(0,"button",6),s.NdJ("click",function(){s.CHM(t);const l=s.oxw();return s.KtG(l.onEndPoll())}),s._uU(1," Finalizar"),s.TgZ(2,"mat-icon"),s._uU(3,"done"),s.qZA()()}}const N=[{path:"",component:(()=>{class o{constructor(t,e,l,i,h,c){this.dtb=t,this.snkBar=e,this.dg=l,this.nvg=i,this.sharedvar=h,this.notifServ=c,this.lchat=!1,this.goto=[],this.selectedPoll=this.sharedvar.pollExecSelected.pollList[0],this.goto.push(this.selectedPoll.id)}ngOnInit(){var t=this;return(0,r.Z)(function*(){const e=t.dtb.getLocalPollResult(t.sharedvar.pollExecSelected.pollResult_id).subscribe(l=>{e&&e.unsubscribe(),t.sharedvar.selPollResult=JSON.parse(JSON.stringify(l)),t.sharedvar.selPollResult.status<2&&t.OnStartPoll(),t.getChatEvent(),t.sharedvar.pollExecSelected.done&&t.onEndPoll()})})()}OnStartPoll(){var t=this;return(0,r.Z)(function*(){t.sharedvar.selPollResult.status=2,t.sharedvar.selPollResult.date_ini=Number(Date.now()),t.sharedvar.pollExecSelected.onStart&&t.sharedvar.pollExecSelected.onStart.geoLoc&&(t.sharedvar.selPollResult.geoLocStart=yield t.getLocalization()),t.dtb.addUpdateLocalList(t.sharedvar.pollExecSelected,t.sharedvar.selPollResult)})()}OnEndPoll(){var t=this;return(0,r.Z)(function*(){t.sharedvar.selPollResult.date_end=Number(Date.now()),t.sharedvar.selPollResult.staff_picture="",t.sharedvar.pollExecSelected.onEnd&&t.sharedvar.pollExecSelected.onEnd.geoLoc&&(t.sharedvar.selPollResult.geoLocEnd=yield t.getLocalization())})()}getChatEvent(){var e,t=this;this.chatSub=this.notifServ.listen("dtb-notification").subscribe({next:(e=(0,r.Z)(function*(l){"pollresult"===l.collection&&l.collect_id&&l.collect_id===t.sharedvar.selPollResult._id&&t.getChatState()}),function(i){return e.apply(this,arguments)})}),this.getChatState()}getChatState(){var t=this;return(0,r.Z)(function*(){const e=yield t.dtb.getPollResultAsync(t.sharedvar.selPollResult._id),l=e.chats.length-1;return t.sharedvar.selPollResult.status_date=Date.now(),t.sharedvar.selPollResult.chats=e.chats,l>=0&&"W"===e.chats[l].type?(t.snkBar.open(`Mensaje: ${e.chats[l].msg}.`,"Ok",{duration:3e3}),t.lchat=!0):t.lchat=!1,l})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(t){3===t.index&&this.dg.aChat({title:"Chat",dgwidth:400,value:this.sharedvar.selPollResult})}onGetData(t){var e=this;return(0,r.Z)(function*(){const l=t._btnclick_;if(l&&e.selectedPoll.schema.controls){const i=e.selectedPoll.schema.controls.find(h=>h.name===l);if(i&&i.tags)switch(i.tags.type){case"goto":const h=e.sharedvar.pollExecSelected.pollList.find(c=>c.id===i.avalue);if(h&&i.avalue&&i.avalue.length>0)return e.goto.push(i.avalue),e.updateLocalList(e.selectedPoll.values,t),void(e.selectedPoll=h);break;case"geolocation":t[l]=yield e.getLocalization(),i.sideBtn="done";break;case"picture":e.getPicture(t,i,l);break;case"draw":e.getDraw(t,i,l)}}e.updateLocalList(e.selectedPoll.values,t)})()}getLocalization(){var t=this;return(0,r.Z)(function*(){const l=yield t.getPosition();l.lng=Math.trunc(100*l.lng)/100,l.lat=Math.trunc(100*l.lat)/100;const i=`${l.lat},${l.lng}`;return t.snkBar.open("Ubicaci\xf3n ingresada.","Ok",{duration:3e3}),t.dtb.getLink2geo(i)})()}updateLocalList(t,e){e._btnEvent_="",e._btnclick_="",this.dg.updatePropResult(t,e),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult)}updateValues2Save(t,e){e._btnEvent_="",e._btnclick_="",this.dg.updatePropResult(t,e)}onBack(){if(this.selectedPoll.values&&!1===this.selectedPoll.values._valid_)this.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3});else if(this.goto.length>1){const t=this.sharedvar.pollExecSelected.pollList.find(e=>e.id===this.goto[this.goto.length-2]);t&&(this.selectedPoll=t,this.goto.splice(this.goto.length-1,1))}}onEndPoll(){var t=this;return(0,r.Z)(function*(){t.selectedPoll.values&&!1===t.selectedPoll.values._valid_?t.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3}):t.selectedPoll.allowEnd&&t.snkBar.open("\xbfFinalizar?","Ok",{duration:5e3}).onAction().subscribe((0,r.Z)(function*(){t.sharedvar.selPollResult=t.onResultDone(t.sharedvar.selPollResult),t.sharedvar.selPollResult?(t.sharedvar.selPollResult.ended=!0,t.sharedvar.selPollResult.status=3,t.sharedvar.selPollResult.status_date=Date.now(),(yield function Z(o){return b.apply(this,arguments)}())?t.dtb.promisePictList(t.sharedvar.pollExecSelected,t.sharedvar.selPollResult).then(function(){var e=(0,r.Z)(function*(l){l&&(t.sharedvar.pollExecSelected.pollList.forEach(i=>{t.updateValues2Save(t.sharedvar.selPollResult.values,i.values)}),yield t.OnEndPoll(),t.sharedvar.selPollResult=yield t.dtb.CreateUpdatePollResult(t.sharedvar.selPollResult),console.log(t.sharedvar.selPollResult),t.dtb.delFromLocalList(t.sharedvar.pollExecSelected),t.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(l){return e.apply(this,arguments)}}()):(t.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),t.sharedvar.pollExecSelected.done=!0,t.dtb.addUpdateLocalList(t.sharedvar.pollExecSelected,t.sharedvar.selPollResult)),t.nvg.onRouteBack()):t.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})}))})()}geoloc(){var t=this;return(0,r.Z)(function*(){yield t.getPosition().then(l=>{l.lng=Math.trunc(100*l.lng)/100,l.lat=Math.trunc(100*l.lat)/100})})()}getPosition(){return new Promise((t,e)=>{navigator.geolocation.getCurrentPosition(l=>{t({lng:l.coords.longitude,lat:l.coords.latitude})},l=>{e(l)})})}getPicture(t,e,l){this.dg.aCamera({title:"C\xe1mara",value:{img:t,name:"pepito"}}).subscribe(c=>{c&&c.urlrute&&c.urlrute.length>0&&(t[l]=c.urlrute,e.sideBtn="done",this.updateLocalList(this.selectedPoll.values,t))})}getDraw(t,e,l){this.dg.aDraw({title:"Dibujar",value:{img:t[l]?t[l]:e.avalue,name:"pepito"}}).subscribe(c=>{c&&c.urlrute&&c.urlrute.length>0&&(t[l]=c.urlrute,e.sideBtn="done",this.updateLocalList(this.selectedPoll.values,t))})}onResultDone(t){let e={...t};return this.sharedvar.pollExecSelected.pollList.forEach(l=>{e.values={...e.values,...l.values}}),e.values&&(e.values._btnEvent_="",e.values._valid_=!0),e}static#t=this.\u0275fac=function(e){return new(e||o)(s.Y36(w.k),s.Y36(R.ux),s.Y36(B.x),s.Y36(O.$),s.Y36(_.D),s.Y36(T))};static#e=this.\u0275cmp=s.Xpm({type:o,selectors:[["app-poll"]],decls:8,vars:6,consts:[[1,"flex","flex-col","h-screen","w-screen"],[3,"buttons","lchat","onClicked"],[1,"grow","px-3","pt-3","overflow-auto"],[3,"jsonFormData","values","result"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","primary","mat-raised-button","",3,"click"]],template:function(e,l){1&e&&(s.TgZ(0,"div",0)(1,"app-header",1),s.NdJ("onClicked",function(h){return l.getClicked(h)}),s.qZA(),s.TgZ(2,"div",2)(3,"app-dynamic-form",3),s.NdJ("result",function(h){return l.onGetData(h)}),s.qZA()(),s.TgZ(4,"div",4),s.YNc(5,A,3,0,"button",5),s._uU(6," \xa0 "),s.YNc(7,J,4,0,"button",5),s.qZA()()),2&e&&(s.xp6(1),s.Q6J("buttons","000100")("lchat",l.lchat),s.xp6(2),s.Q6J("jsonFormData",l.selectedPoll.schema)("values",l.selectedPoll.values),s.xp6(2),s.Q6J("ngIf",l.goto.length>1),s.xp6(2),s.Q6J("ngIf",l.selectedPoll.allowEnd))},dependencies:[u.O5,F.G,z.r,k.lW,y.Hw]})}return o})()}];let I=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=s.oAB({type:o});static#l=this.\u0275inj=s.cJS({imports:[a.Bz.forChild(N),a.Bz]})}return o})();var M=n(8471),U=n(6842),Y=n(8255);let G=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=s.oAB({type:o});static#l=this.\u0275inj=s.cJS({imports:[u.ez,I,M.O,U.N,Y.Tx,k.ot,y.Ps,R.ZX]})}return o})()},4066:g=>{const p="[a-fA-F\\d:]",n=d=>d&&d.includeBoundaries?`(?:(?<=\\s|^)(?=${p})|(?<=${p})(?=\\s|$))`:"",u="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",a="[a-fA-F\\d]{1,4}",r=`\n(?:\n(?:${a}:){7}(?:${a}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${a}:){6}(?:${u}|:${a}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${a}:){5}(?::${u}|(?::${a}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${a}:){4}(?:(?::${a}){0,1}:${u}|(?::${a}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${a}:){3}(?:(?::${a}){0,2}:${u}|(?::${a}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${a}:){2}(?:(?::${a}){0,3}:${u}|(?::${a}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${a}:){1}(?:(?::${a}){0,4}:${u}|(?::${a}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${a}){0,5}:${u}|(?::${a}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),P=new RegExp(`(?:^${u}$)|(?:^${r}$)`),m=new RegExp(`^${u}$`),x=new RegExp(`^${r}$`),f=d=>d&&d.exact?P:new RegExp(`(?:${n(d)}${u}${n(d)})|(?:${n(d)}${r}${n(d)})`,"g");f.v4=d=>d&&d.exact?m:new RegExp(`${n(d)}${u}${n(d)}`,"g"),f.v6=d=>d&&d.exact?x:new RegExp(`${n(d)}${r}${n(d)}`,"g"),g.exports=f},6599:(g,p,n)=>{const u=n(4066),a=r=>u({exact:!0}).test(r);a.v4=r=>u.v4({exact:!0}).test(r),a.v6=r=>u.v6({exact:!0}).test(r),a.version=r=>a(r)?a.v4(r)?4:6:void 0,g.exports=a}}]);