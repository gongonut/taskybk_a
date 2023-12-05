"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[993],{7993:(x,m,r)=>{r.r(m),r.d(m,{PollModule:()=>se});var p=r(6895),c=r(9132),d=r(5861),_=r(6599);class b extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class R extends Error{constructor(v){super("Could not get the public IP address",v),this.name="IpNotFoundError"}}const P={timeout:5e3},h={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},D=(o,v,e)=>{const s=new XMLHttpRequest;let l;const a=new Promise((u,i)=>{l=i,s.addEventListener("error",i,{once:!0}),s.addEventListener("timeout",i,{once:!0}),s.addEventListener("load",()=>{const f=s.responseText.trim();f&&_[e](f)?u(f):i()},{once:!0}),s.open("GET",o),s.timeout=v.timeout,s.send()});return a.cancel=()=>{s.abort(),l(new b)},a},w=(o,v)=>{let e;const s=(0,d.Z)(function*(){const l=[...h[o],...v.fallbackUrls??[]];let a;for(const u of l)try{return e=D(u,v,o),yield e}catch(i){if(a=i,i instanceof b)throw i}throw new R({cause:a})})();return s.cancel=()=>{e.cancel()},s},M={v4:o=>w("v4",{...P,...o}),v6:o=>w("v6",{...P,...o})};function S(){return(S=(0,d.Z)(function*(o){if(o={timeout:5e3,ipVersion:4,...o},!navigator?.onLine)return!1;const v=4===o.ipVersion?"v4":"v6";try{return yield M[v](o),!0}catch{return!1}})).apply(this,arguments)}var t=r(4650),F=r(8826),T=r(7009),J=r(5475),C=r(5412),y=r(4859),$=r(7392),k=r(4006),L=r(9549),U=r(4144),A=r(4633);function B(o,v){if(1&o){const e=t.EpF();t.TgZ(0,"div",10)(1,"mat-form-field",10)(2,"mat-label"),t._uU(3,"Filtro"),t.qZA(),t.TgZ(4,"input",11),t.NdJ("ngModelChange",function(l){t.CHM(e);const a=t.oxw();return t.KtG(a.filtertext=l)}),t.qZA(),t.TgZ(5,"mat-icon",12),t._uU(6,"search"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.filtertext)}}function I(o,v){if(1&o&&(t.TgZ(0,"mat-list-option",13),t._uU(1),t.qZA()),2&o){const e=v.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.name," ")}}function N(o,v){if(1&o){const e=t.EpF();t.TgZ(0,"div",14)(1,"button",8),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onNew())}),t._uU(2," Nuevo\xa0 "),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA()()()}}let Y=(()=>{class o{constructor(e,s){this.dialogRef=e,this.data=s,this.valuelst=[],this.filtertext="",this.selectedOptions=[],e.disableClose=!0}onNew(){this.dialogRef.close({new:!0})}ngOnInit(){this.valuelst=this.data.valuelst}onFilter(e){const s=this.filtertext.toUpperCase();return!!(0===s.length||e&&e.name&&e.name.toUpperCase().search(s)>=0)}onSave(){this.dialogRef.close(this.selectedOptions)}onDismiss(){this.dialogRef.close()}static#e=this.\u0275fac=function(s){return new(s||o)(t.Y36(C.so),t.Y36(C.WI))};static#t=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-select-dialog"]],decls:18,vars:6,consts:[[1,"flex","flex-col","h-full"],[1,"h-20","p-3","text-9xl","bg-violet-600","text-white"],["style","width: 100%;",4,"ngIf"],[1,"flex-1","overflow-auto"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex","p-3","justify-end","border-t","border-violet-500"],["class","flex-1","fxFlex","",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary","cdkFocusInitia","",3,"click"],[2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matSuffix",""],[3,"value"],["fxFlex","",1,"flex-1"]],template:function(s,l){1&s&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.YNc(5,B,7,1,"div",2),t.TgZ(6,"div",3)(7,"mat-selection-list",4),t.NdJ("ngModelChange",function(u){return l.selectedOptions=u}),t.YNc(8,I,2,2,"mat-list-option",5),t.qZA()(),t.TgZ(9,"div",6),t.YNc(10,N,5,0,"div",7),t.TgZ(11,"button",8),t.NdJ("click",function(){return l.onDismiss()}),t.TgZ(12,"mat-icon"),t._uU(13,"close"),t.qZA()(),t._uU(14," \xa0 "),t.TgZ(15,"button",9),t.NdJ("click",function(){return l.onSave()}),t.TgZ(16,"mat-icon"),t._uU(17,"done"),t.qZA()()()()),2&s&&(t.xp6(2),t.Oqu(l.data.title),t.xp6(2),t.Oqu(l.data.description),t.xp6(1),t.Q6J("ngIf",l.data.viewfilter),t.xp6(2),t.Q6J("ngModel",l.selectedOptions),t.xp6(1),t.Q6J("ngForOf",l.valuelst),t.xp6(2),t.Q6J("ngIf",l.data.viewAdd))},dependencies:[p.sg,p.O5,y.lW,$.Hw,k.Fj,k.JJ,k.On,L.KE,L.hX,L.R9,U.Nt,A.Ub,A.vS]})}return o})(),z=(()=>{class o{constructor(e){this.dialog=e}aSelectDefault(e){let s=window.innerHeight-20;e.dgheigth=e.dgheigth||s,s=s>e.dgheigth?e.dgheigth:s;let l=window.innerWidth-20;return e.dgwidth=e.dgwidth||l,l=l>e.dgwidth?e.dgwidth:l,this.dialogRef=this.dialog.open(Y,{panelClass:"custom-dialog-container",height:s.toString()+"px",width:l.toString()+"px",data:e}),this.dialogRef.afterClosed()}static#e=this.\u0275fac=function(s){return new(s||o)(t.LFG(C.uw))};static#t=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var G=r(2419),Q=r(5377),j=r(1316),H=r(3646),V=r(2395);function X(o,v){if(1&o){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onBack())}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA()()}}function K(o,v){if(1&o){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onEndPoll())}),t._uU(1," Finalizar"),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()()}}const W=[{path:"",component:(()=>{class o{constructor(e,s,l,a,u,i,f){this.dtb=e,this.snkBar=s,this.dg=l,this.ds=a,this.nvg=u,this.sharedvar=i,this.notifServ=f,this.lchat=!1,this.goto=[],this.reset=0}ngOnInit(){var e=this;return(0,d.Z)(function*(){e.sharedvar.pollExecSelected.pollList.length>0?(e.selectedPoll=e.sharedvar.pollExecSelected.pollList[0],e.goto.push(e.selectedPoll.id)):(e.snkBar.open("Listado de actividades vac\xedo.","Ok",{duration:5e3}),e.nvg.onRouteBack());const s=e.dtb.getLocalPollResult(e.sharedvar.pollExecSelected.pollResult_id).subscribe(l=>{s&&s.unsubscribe(),e.sharedvar.selPollResult=l,e.sharedvar.selPollResult.status<2&&e.OnStartPoll(),e.subscribeChatEvent(),e.sharedvar.pollExecSelected.done&&e.onEndPoll()})})()}OnStartPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.status=2,e.sharedvar.selPollResult.date_ini=Math.trunc(Number(Date.now())/6e4),e.sharedvar.pollExecSelected.onStart&&(e.sharedvar.pollExecSelected.onStart.sendMail2&&e.sharedvar.pollExecSelected.onStart.sendMail2.length>0&&e.dtb.notifMail(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onStart.sendMail2,!0),e.sharedvar.selPollResult.crm=e.sharedvar.pollExecSelected.crm||!1,e.sharedvar.pollExecSelected.onStart.geoLoc&&(e.sharedvar.selPollResult.geoLocStart=yield e.getLocalization())),e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult),e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"status")})()}OnEndPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.date_end=Number(Date.now()),e.sharedvar.selPollResult.staff_picture="",e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.geoLoc&&(e.sharedvar.selPollResult.geoLocEnd=yield e.getLocalization())})()}subscribeChatEvent(){var s,e=this;this.chatSub=this.notifServ.dtb_notification().subscribe({next:(s=(0,d.Z)(function*(l){"chat"===l.collection&&l.field_id&&l.field_id===e.sharedvar.selPollResult._id&&e.getChatState()}),function(a){return s.apply(this,arguments)}),complete:()=>{console.log()}}),this.getChatState()}getChatState(){var e=this;return(0,d.Z)(function*(){const s=yield e.dtb.getChat(e.sharedvar.selPollResult._id);e.sharedvar.selPollResult.status_date=Date.now(),e.sharedvar.selPollResult.chats=s;const l=s.length-1;return l>=0&&"W"===s[l].type?(e.snkBar.open(`Mensaje: ${e.sharedvar.selPollResult.chats[l].msg}.`,"Ok",{duration:3e3}),e.lchat=!0):e.lchat=!1,l})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(e){3===e.index&&this.dg.aChat({title:"Chat",dgwidth:400,value:this.sharedvar.selPollResult})}onGetData(e){var s=this;return(0,d.Z)(function*(){const l=e._btnclick_;if(l&&s.selectedPoll.schema.controls){const a=s.selectedPoll.schema.controls.find(u=>u.name===l);if(a&&a.tags)switch(a.tags.type){case"goto":const u=s.sharedvar.pollExecSelected.pollList.find(i=>i.id===a.avalue);if(u&&a.avalue&&a.avalue.length>0)return s.goto.push(a.avalue),s.updateLocalList(s.selectedPoll.values,e),void(s.selectedPoll=u);break;case"geolocation":e[l]=yield s.getLocalization(),a.sideBtn="done";break;case"picture":s.getPicture(e,a,l);break;case"draw":s.getDraw(e,a,l);break;case"appoint":s.getAppoint(e,l);break;case"costumer":s.getCostumer(e,l);break;case"product":s.getProduct(e,l)}}s.updateLocalList(s.selectedPoll.values,e)})()}getLocalization(){var e=this;return(0,d.Z)(function*(){const l=yield e.getPosition();l.lng=Math.trunc(1e4*l.lng)/1e4,l.lat=Math.trunc(1e4*l.lat)/1e4;const a=`${l.lat},${l.lng}`;return e.snkBar.open("Ubicaci\xf3n ingresada.","Ok",{duration:3e3}),e.dtb.getLink2geo(a)})()}updateLocalList(e,s){!e||!s||(s._btnEvent_="",s._btnclick_="",this.dg.updatePropResult(e,s),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult),this.reset++)}updateValues2Save(e,s){s._btnEvent_="",s._btnclick_="",this.dg.updatePropResult(e,s)}onBack(){if(this.selectedPoll.values&&!1===this.selectedPoll.values._valid_)this.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3});else if(this.goto.length>1){const e=this.sharedvar.pollExecSelected.pollList.find(s=>s.id===this.goto[this.goto.length-2]);e&&(this.selectedPoll=e,this.goto.splice(this.goto.length-1,1))}}onEndPoll(){var e=this;return(0,d.Z)(function*(){e.selectedPoll.values&&!1===e.selectedPoll.values._valid_?e.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3}):e.selectedPoll.allowEnd&&e.snkBar.open("\xbfFinalizar?","Ok",{duration:5e3}).onAction().subscribe((0,d.Z)(function*(){e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.sendMail2&&e.dtb.notifMail(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onEnd.sendMail2,!1),e.sharedvar.selPollResult=e.onResultDone(e.sharedvar.selPollResult),e.sharedvar.selPollResult?(e.sharedvar.selPollResult.ended=!0,e.sharedvar.selPollResult.status=3,e.sharedvar.selPollResult.status_date=Date.now(),(yield function O(o){return S.apply(this,arguments)}())?e.dtb.promiseMetaData(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult).then(function(){var s=(0,d.Z)(function*(l){l&&(e.sharedvar.pollExecSelected.pollList.forEach(a=>{e.updateValues2Save(e.sharedvar.selPollResult.values,a.values)}),yield e.OnEndPoll(),e.sharedvar.selPollResult.metaValues=[],e.sharedvar.selPollResult=yield e.dtb.CreateUpdatePollResult(e.sharedvar.selPollResult),yield e.dtb.updateStaffAsycn(e.sharedvar.staff),console.log(e.sharedvar.selPollResult),e.dtb.delFromLocalList(e.sharedvar.pollExecSelected),e.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(l){return s.apply(this,arguments)}}()):(e.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),e.sharedvar.pollExecSelected.done=!0,e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult)),e.nvg.onRouteBack()):e.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})}))})()}geoloc(){var e=this;return(0,d.Z)(function*(){yield e.getPosition().then(l=>{l.lng=Math.trunc(100*l.lng)/100,l.lat=Math.trunc(100*l.lat)/100})})()}getPosition(){return new Promise((e,s)=>{navigator.geolocation.getCurrentPosition(l=>{e({lng:l.coords.longitude,lat:l.coords.latitude})},l=>{s(l)})})}getPicture(e,s,l){this.dg.aCamera({title:"C\xe1mara",value:{img:e,name:"pepito"}}).subscribe(i=>{i&&i.urlrute&&i.urlrute.length>0&&(e[l]=i.urlrute,e[l]=`${s.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[l]=i.urlrute,this.updateLocalList(this.selectedPoll.values,e))})}getDraw(e,s,l){this.dg.aDraw({title:"Dibujar",value:{img:this.sharedvar.selPollResult.metaValues[l]?this.sharedvar.selPollResult.metaValues[l]:s.avalue,name:"pepito"}}).subscribe(i=>{i&&i.urlrute&&i.urlrute.length>0&&(e[l]=`${s.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[l]=i.urlrute,this.updateLocalList(this.selectedPoll.values,e))})}getAppoint(e,s){var l=this;return(0,d.Z)(function*(){let a="No seleccionado",u={name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}};const i={};if(l.sharedvar.selPollResult.crm_costum_id){const n=yield l.dtb.getCMRCostumAsync(l.sharedvar.selPollResult.crm_costum_id);a=n&&n.name?n.name:a;const g=[];n?.linkup_1&&(i[n.linkup_1]={email:n.email_1||"none",phone:n.phone_1||"none"},g.push({key:n.linkup_1,value:n.linkup_1})),n?.linkup_2&&(i[n.linkup_2]={email:n.email_2||"one",phone:n.phone_2||"nonde"},g.push({key:n?.linkup_2,value:n?.linkup_2})),u.type="select",u.selectOptions=g}l.dg.aDefault({title:"Agendar",schema:{controls:[{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",default:a,validators:{required:!0}},u,{name:"task",label:"Actividad/Compromiso:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},value:l.sharedvar.selPollResult.metaValues[s],dgwidth:400,dgheigth:550}).subscribe(n=>{n&&n.datetime&&n.datetime.length>0&&(e[s]=`${n.datetime}: ${n.task||""}`,n.datetime=new Date(n.datetime).getTime(),n.phone=i[n.contact].phone||"none",n.email=i[n.contact].email||"none",l.sharedvar.selPollResult.metaValues[s]=n,l.updateLocalList(l.selectedPoll.values,e))})})()}getCostumer(e,s){const l=this.sharedvar.pollExecSelected.costumerList;l&&l.length>0&&this.onSelCtrlStaff(l,"Seleccione Cliente",e,s,"costumer")}getProduct(e,s){const l=this.sharedvar.pollExecSelected.productList;l&&l.length>0&&this.onSelCtrlStaff(l,"Seleccione Producto",e,s,"product")}onSelCtrlStaff(e,s,l,a,u){var i=this;return(0,d.Z)(function*(){const f=[];e.forEach(n=>{if(n){const g=n.split(":");f.push({selected:!1,myid:g[0],name:g[1]})}});const Z={title:s,dgwidth:450,viewfilter:!0,viewAdd:!1,valuelst:f};return yield i.ds.aSelectDefault(Z).subscribe(n=>{n&&(l[a]=n[0].name,i.updateLocalList(i.selectedPoll.values,l),"product"===u?(i.sharedvar.selPollResult.crm_prod_id=n[0].myid,i.sharedvar.selPollResult.crm_prod_name=n[0].name):(i.sharedvar.selPollResult.crm_costum_id=n[0].myid,i.sharedvar.selPollResult.crm_costum_name=n[0].name))})})()}onResultDone(e){let s={...e};return this.sharedvar.pollExecSelected.pollList.forEach(l=>{s.values={...s.values,...l.values}}),s.values&&(s.values._btnEvent_="",s.values._valid_=!0),s}static#e=this.\u0275fac=function(s){return new(s||o)(t.Y36(F.k),t.Y36(T.ux),t.Y36(J.x),t.Y36(z),t.Y36(G.$),t.Y36(Q.D),t.Y36(j.$))};static#t=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-poll"]],decls:8,vars:7,consts:[[1,"flex","flex-col","h-screen","w-screen"],[3,"buttons","lchat","onClicked"],[1,"grow","px-3","pt-3","overflow-auto"],[3,"reset","jsonFormData","values","result"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","primary","mat-raised-button","",3,"click"]],template:function(s,l){1&s&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(u){return l.getClicked(u)}),t.qZA(),t.TgZ(2,"div",2)(3,"app-dynamic-form",3),t.NdJ("result",function(u){return l.onGetData(u)}),t.qZA()(),t.TgZ(4,"div",4),t.YNc(5,X,3,0,"button",5),t._uU(6," \xa0 "),t.YNc(7,K,4,0,"button",5),t.qZA()()),2&s&&(t.xp6(1),t.Q6J("buttons","000100")("lchat",l.lchat),t.xp6(2),t.Q6J("reset",l.reset)("jsonFormData",l.selectedPoll.schema)("values",l.selectedPoll.values),t.xp6(2),t.Q6J("ngIf",l.goto.length>1),t.xp6(2),t.Q6J("ngIf",l.selectedPoll.allowEnd))},dependencies:[p.O5,H.G,V.r,y.lW,$.Hw]})}return o})()}];let q=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=t.oAB({type:o});static#l=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(W),c.Bz]})}return o})();var ee=r(8471),te=r(6842),le=r(8255);let se=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=t.oAB({type:o});static#l=this.\u0275inj=t.cJS({imports:[p.ez,q,ee.O,te.N,le.Tx,y.ot,$.Ps,T.ZX]})}return o})()},4066:x=>{const m="[a-fA-F\\d:]",r=h=>h&&h.includeBoundaries?`(?:(?<=\\s|^)(?=${m})|(?<=${m})(?=\\s|$))`:"",p="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",c="[a-fA-F\\d]{1,4}",d=`\n(?:\n(?:${c}:){7}(?:${c}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${c}:){6}(?:${p}|:${c}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${c}:){5}(?::${p}|(?::${c}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${c}:){4}(?:(?::${c}){0,1}:${p}|(?::${c}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${c}:){3}(?:(?::${c}){0,2}:${p}|(?::${c}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${c}:){2}(?:(?::${c}){0,3}:${p}|(?::${c}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${c}:){1}(?:(?::${c}){0,4}:${p}|(?::${c}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${c}){0,5}:${p}|(?::${c}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),_=new RegExp(`(?:^${p}$)|(?:^${d}$)`),b=new RegExp(`^${p}$`),R=new RegExp(`^${d}$`),P=h=>h&&h.exact?_:new RegExp(`(?:${r(h)}${p}${r(h)})|(?:${r(h)}${d}${r(h)})`,"g");P.v4=h=>h&&h.exact?b:new RegExp(`${r(h)}${p}${r(h)}`,"g"),P.v6=h=>h&&h.exact?R:new RegExp(`${r(h)}${d}${r(h)}`,"g"),x.exports=P},6599:(x,m,r)=>{const p=r(4066),c=d=>p({exact:!0}).test(d);c.v4=d=>p.v4({exact:!0}).test(d),c.v6=d=>p.v6({exact:!0}).test(d),c.version=d=>c(d)?c.v4(d)?4:6:void 0,x.exports=c}}]);