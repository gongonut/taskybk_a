"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[993],{7993:(b,m,r)=>{r.r(m),r.d(m,{PollModule:()=>te});var p=r(6895),c=r(9132),d=r(5861),E=r(6599);class _ extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class k extends Error{constructor(v){super("Could not get the public IP address",v),this.name="IpNotFoundError"}}const x={timeout:5e3},h={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},T=(s,v,e)=>{const l=new XMLHttpRequest;let o;const a=new Promise((u,i)=>{o=i,l.addEventListener("error",i,{once:!0}),l.addEventListener("timeout",i,{once:!0}),l.addEventListener("load",()=>{const f=l.responseText.trim();f&&E[e](f)?u(f):i()},{once:!0}),l.open("GET",s),l.timeout=v.timeout,l.send()});return a.cancel=()=>{l.abort(),o(new _)},a},L=(s,v)=>{let e;const l=(0,d.Z)(function*(){const o=[...h[s],...v.fallbackUrls??[]];let a;for(const u of o)try{return e=T(u,v,s),yield e}catch(i){if(a=i,i instanceof _)throw i}throw new k({cause:a})})();return l.cancel=()=>{e.cancel()},l},A={v4:s=>L("v4",{...x,...s}),v6:s=>L("v6",{...x,...s})};function R(){return(R=(0,d.Z)(function*(s){if(s={timeout:5e3,ipVersion:4,...s},!navigator?.onLine)return!1;const v=4===s.ipVersion?"v4":"v6";try{return yield A[v](s),!0}catch{return!1}})).apply(this,arguments)}var t=r(4650),M=r(8826),Z=r(7009),F=r(164),S=r(5412),y=r(4859),w=r(7392),P=r(4006);function O(s,v){if(1&s){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10)(2,"input",11),t.NdJ("change",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onChekAll())}),t.qZA()(),t.TgZ(3,"input",12),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.filtertext=o)}),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(2),t.Q6J("checked",e.chekAll),t.xp6(1),t.Q6J("ngModel",e.filtertext)}}function J(s,v){if(1&s){const e=t.EpF();t.TgZ(0,"div",15)(1,"input",16),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw().$implicit;return t.KtG(a.selected=o)}),t.qZA(),t.TgZ(2,"label",17),t._uU(3),t.qZA()()}if(2&s){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",e.selected),t.xp6(2),t.Oqu(e.name)}}function B(s,v){if(1&s&&(t.TgZ(0,"div",13),t.YNc(1,J,4,2,"div",14),t.qZA()),2&s){const e=v.$implicit,l=t.oxw();t.xp6(1),t.Q6J("ngIf",l.getViewFilter(e))}}function I(s,v){if(1&s){const e=t.EpF();t.TgZ(0,"div",18)(1,"button",7),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onNew())}),t._uU(2," Nuevo\xa0 "),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA()()()}}let N=(()=>{class s{constructor(e,l){this.dialogRef=e,this.data=l,this.filtertext="",this.selectedOptions=[],this.chekAll=!1,e.disableClose=!0}onNew(){this.dialogRef.close({new:!0})}onChekAll(){this.chekAll=!this.chekAll,this.data.valuelst?.forEach(e=>{e.selected=this.chekAll})}getViewFilter(e){const l=this.filtertext.toUpperCase();return!!(0===l.length||e&&e.name&&e.name.toUpperCase().includes(l))}onSave(){this.selectedOptions=[],this.data.valuelst?.forEach(e=>{e.selected&&this.selectedOptions.push(e)}),this.dialogRef.close(this.selectedOptions)}onDismiss(){this.dialogRef.close()}static#e=this.\u0275fac=function(l){return new(l||s)(t.Y36(S.so),t.Y36(S.WI))};static#t=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-select-dialog"]],decls:14,vars:4,consts:[[1,"flex","flex-col","h-full"],[1,"h-12","p-3","text-2xl","bg-violet-600","text-white"],["class","h-10 w-full flex flex-row items-center border-b border-violet-500",4,"ngIf"],[1,"flex-1","overflow-auto","mt-2"],["class","flex flex-column",4,"ngFor","ngForOf"],[1,"flex","p-3","justify-end","border-t","border-violet-500"],["class","flex-1","fxFlex","",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary","cdkFocusInitia","",3,"click"],[1,"h-10","w-full","flex","flex-row","items-center","border-b","border-violet-500"],[1,"w-8","ml-2","mt-2"],["type","checkbox",1,"w-4","h-4","focus:border-blue-500",3,"checked","change"],["type","search","placeholder","Filtrar...",1,"flex-1","h-8","z-20","text-gray-900","outline-none","focus:outline-none","focus:outline-none",3,"ngModel","ngModelChange"],[1,"flex","flex-column"],["class","flex flex-row h-5 ml-2",4,"ngIf"],[1,"flex","flex-row","h-5","ml-2"],["id","itemsel","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"ngModel","ngModelChange"],["for","itemsel",1,"ml-4","h-4","w-72","text-sm","text-gray-900","overflow-hidden"],["fxFlex","",1,"flex-1"]],template:function(l,o){1&l&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.YNc(3,O,4,2,"div",2),t.TgZ(4,"div",3),t.YNc(5,B,2,1,"div",4),t.qZA(),t.TgZ(6,"div",5),t.YNc(7,I,5,0,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.onDismiss()}),t.TgZ(9,"mat-icon"),t._uU(10,"close"),t.qZA()(),t.TgZ(11,"button",8),t.NdJ("click",function(){return o.onSave()}),t.TgZ(12,"mat-icon"),t._uU(13,"done"),t.qZA()()()()),2&l&&(t.xp6(2),t.Oqu(o.data.title),t.xp6(1),t.Q6J("ngIf",o.data.viewfilter),t.xp6(2),t.Q6J("ngForOf",o.data.valuelst),t.xp6(2),t.Q6J("ngIf",o.data.viewAdd))},dependencies:[p.sg,p.O5,y.lW,w.Hw,P.Fj,P.Wl,P.JJ,P.On]})}return s})(),U=(()=>{class s{constructor(e){this.dialog=e}aSelectDefault(e){let l=window.innerHeight-20;e.dgheigth=e.dgheigth||l,l=l>e.dgheigth?e.dgheigth:l;let o=window.innerWidth-20;return e.dgwidth=e.dgwidth||o,o=o>e.dgwidth?e.dgwidth:o,this.dialogRef=this.dialog.open(N,{panelClass:"custom-dialog-container",height:l.toString()+"px",width:o.toString()+"px",data:e}),this.dialogRef.afterClosed()}static#e=this.\u0275fac=function(l){return new(l||s)(t.LFG(S.uw))};static#t=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Y=r(2419),z=r(5377),H=r(1316),G=r(3646),Q=r(2395);function V(s,v){if(1&s){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onBack())}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA()()}}function j(s,v){if(1&s){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onEndPoll())}),t._uU(1," Finalizar"),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()()}}const K=[{path:"",component:(()=>{class s{constructor(e,l,o,a,u,i,f){this.dtb=e,this.snkBar=l,this.dg=o,this.ds=a,this.nvg=u,this.sharedvar=i,this.notifServ=f,this.lchat=!1,this.goto=[],this.reset=0}ngOnInit(){var e=this;return(0,d.Z)(function*(){e.sharedvar.pollExecSelected.pollList.length>0?(e.selectedPoll=e.sharedvar.pollExecSelected.pollList[0],e.goto.push(e.selectedPoll.id)):(e.snkBar.open("Listado de actividades vac\xedo.","Ok",{duration:5e3}),e.nvg.onRouteBack());const l=e.dtb.getLocalPollResult(e.sharedvar.pollExecSelected.pollResult_id).subscribe(o=>{l&&l.unsubscribe(),e.sharedvar.selPollResult=o,e.sharedvar.selPollResult.status<2&&e.OnStartPoll(),e.subscribeChatEvent(),e.sharedvar.pollExecSelected.done&&e.onEndPoll()})})()}OnStartPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.status=2,e.sharedvar.selPollResult.date_ini=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.pollExecSelected.onStart&&(e.sharedvar.pollExecSelected.onStart.sendMail2&&e.sharedvar.pollExecSelected.onStart.sendMail2.length>0&&e.dtb.notifMail(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onStart.sendMail2,"","start"),e.sharedvar.selPollResult.crm=e.sharedvar.pollExecSelected.crm||!1,e.sharedvar.pollExecSelected.onStart.geoLoc&&(e.sharedvar.selPollResult.geoLocStart=yield e.getLocalization())),e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult),e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"status")})()}OnEndPoll(){var e=this;return(0,d.Z)(function*(){e.sharedvar.selPollResult.date_end=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.selPollResult.staff_picture="",e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.geoLoc&&(e.sharedvar.selPollResult.geoLocEnd=yield e.getLocalization())})()}subscribeChatEvent(){var l,e=this;this.chatSub=this.notifServ.dtb_notification().subscribe({next:(l=(0,d.Z)(function*(o){"chat"===o.collection&&o.field_id&&o.field_id===e.sharedvar.selPollResult._id&&e.getChatState()}),function(a){return l.apply(this,arguments)}),complete:()=>{console.log()}}),this.getChatState()}getChatState(){var e=this;return(0,d.Z)(function*(){const l=yield e.dtb.getChat(e.sharedvar.selPollResult._id);e.sharedvar.selPollResult.status_date=Date.now(),e.sharedvar.selPollResult.chats=l;const o=l.length-1;return o>=0&&"W"===l[o].type?(e.snkBar.open(`Mensaje: ${e.sharedvar.selPollResult.chats[o].msg}.`,"Ok",{duration:3e3}),e.lchat=!0):e.lchat=!1,o})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(e){3===e.index&&this.dg.aChat({title:"Chat",dgwidth:400,value:this.sharedvar.selPollResult})}onGetData(e){var l=this;return(0,d.Z)(function*(){const o=e._btnclick_;if(o&&l.selectedPoll.schema.controls){const a=l.selectedPoll.schema.controls.find(u=>u.name===o);if(a&&a.tags)switch(a.tags.type){case"goto":const u=l.sharedvar.pollExecSelected.pollList.find(i=>i.id===a.avalue);if(u&&a.avalue&&a.avalue.length>0)return l.goto.push(a.avalue),l.updateLocalList(l.selectedPoll.values,e),void(l.selectedPoll=u);break;case"geolocation":e[o]=yield l.getLocalization(),a.sideBtn="done";break;case"picture":l.getPicture(e,a,o);break;case"draw":l.getDraw(e,a,o);break;case"appoint":l.getAppoint(e,o);break;case"costumer":l.getCostumer(e,o);break;case"product":l.getProduct(e,o)}}l.updateLocalList(l.selectedPoll.values,e)})()}getLocalization(){var e=this;return(0,d.Z)(function*(){const o=yield e.getPosition();o.lng=Math.trunc(1e4*o.lng)/1e4,o.lat=Math.trunc(1e4*o.lat)/1e4;const a=`${o.lat},${o.lng}`;return e.snkBar.open("Ubicaci\xf3n ingresada.","Ok",{duration:3e3}),e.dtb.getLink2geo(a)})()}updateLocalList(e,l){!e||!l||(l._btnEvent_="",l._btnclick_="",this.dg.updatePropResult(e,l),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult),this.reset++)}updateValues2Save(e,l){l._btnEvent_="",l._btnclick_="",this.dg.updatePropResult(e,l)}onBack(){if(this.selectedPoll.values&&!1===this.selectedPoll.values._valid_)this.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3});else if(this.goto.length>1){const e=this.sharedvar.pollExecSelected.pollList.find(l=>l.id===this.goto[this.goto.length-2]);e&&(this.selectedPoll=e,this.goto.splice(this.goto.length-1,1))}}onEndPoll(){var e=this;return(0,d.Z)(function*(){e.selectedPoll.values&&!1===e.selectedPoll.values._valid_?e.snkBar.open("Debe llenar los campos requeridos.","Ok",{duration:3e3}):e.selectedPoll.allowEnd&&e.snkBar.open("\xbfFinalizar?","Ok",{duration:5e3}).onAction().subscribe((0,d.Z)(function*(){e.sharedvar.selPollResult=e.onResultDone(e.sharedvar.selPollResult),e.sharedvar.selPollResult?(e.sharedvar.selPollResult.ended=!0,e.sharedvar.selPollResult.status=3,e.sharedvar.selPollResult.status_date=Date.now(),(yield function D(s){return R.apply(this,arguments)}())?e.dtb.promiseMetaData(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult).then(function(){var l=(0,d.Z)(function*(o){o&&(e.sharedvar.pollExecSelected.pollList.forEach(a=>{e.updateValues2Save(e.sharedvar.selPollResult.values,a.values)}),yield e.OnEndPoll(),e.sharedvar.selPollResult.metaValues=[],e.sharedvar.selPollResult=yield e.dtb.CreateUpdatePollResult(e.sharedvar.selPollResult),yield e.dtb.updateStaffAsync(e.sharedvar.staff),console.log(e.sharedvar.selPollResult),e.sharedvar.pollExecSelected&&e.sharedvar.pollExecSelected.onEnd?.sendMail2&&e.sharedvar.pollExecSelected.onEnd.sendMail2.length>0&&e.buildHtml2Pdf(e.sharedvar.pollExecSelected.onEnd.sendMail2),e.dtb.delFromLocalList(e.sharedvar.pollExecSelected),e.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(o){return l.apply(this,arguments)}}()):(e.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),e.sharedvar.pollExecSelected.done=!0,e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult)),e.nvg.onRouteBack()):e.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})}))})()}buildHtml2Pdf(e){let l;l={pollresult:this.sharedvar.selPollResult,emails:e},this.dg.aPollResult({schema:{},value:l,title:"Datos de la encuesta: "+this.sharedvar.selPollResult.staff_name}).subscribe(a=>{a&&this.sharedvar.pollExecSelected.onEnd&&this.sharedvar.pollExecSelected.onEnd.sendMail2&&this.dtb.notifMail(this.sharedvar.selPollResult,a.emaildata,a.html,"end")})}geoloc(){var e=this;return(0,d.Z)(function*(){yield e.getPosition().then(o=>{o.lng=Math.trunc(100*o.lng)/100,o.lat=Math.trunc(100*o.lat)/100})})()}getPosition(){return new Promise((e,l)=>{navigator.geolocation.getCurrentPosition(o=>{e({lng:o.coords.longitude,lat:o.coords.latitude})},o=>{l(o)})})}getPicture(e,l,o){this.dg.aCamera({title:"C\xe1mara",value:{img:e,name:"pepito"}}).subscribe(i=>{i&&i.urlrute&&i.urlrute.length>0&&(e[o]=i.urlrute,e[o]=`${l.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[o]=i.urlrute,this.updateLocalList(this.selectedPoll.values,e))})}getDraw(e,l,o){this.dg.aDraw({title:"Dibujar",value:{img:this.sharedvar.selPollResult.metaValues[o]?this.sharedvar.selPollResult.metaValues[o]:l.avalue,name:"pepito"}}).subscribe(i=>{i&&i.urlrute&&i.urlrute.length>0&&(e[o]=`${l.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[o]=i.urlrute,this.updateLocalList(this.selectedPoll.values,e))})}getAppoint(e,l){var o=this;return(0,d.Z)(function*(){let a="No seleccionado",u={name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}};const i={};if(o.sharedvar.selPollResult.crm_costum_id){const n=yield o.dtb.getCMRCostumAsync(o.sharedvar.selPollResult.crm_costum_id);a=n&&n.name?n.name:a;const g=[];n?.linkup_1&&(i[n.linkup_1]={email:n.email_1||"none",phone:n.phone_1||"none"},g.push({key:n.linkup_1,value:n.linkup_1})),n?.linkup_2&&(i[n.linkup_2]={email:n.email_2||"one",phone:n.phone_2||"nonde"},g.push({key:n?.linkup_2,value:n?.linkup_2})),u.type="select",u.selectOptions=g}o.dg.aDefault({title:"Agendar",schema:{controls:[{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",default:a,validators:{required:!0}},u,{name:"task",label:"Actividad/Compromiso:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}}]},value:o.sharedvar.selPollResult.metaValues[l],dgwidth:400,dgheigth:550}).subscribe(n=>{n&&n.datetime&&n.datetime.length>0&&(e[l]=`${n.datetime}: ${n.task||""}`,n.datetime=new Date(n.datetime).getTime(),n.phone=i[n.contact].phone||"none",n.email=i[n.contact].email||"none",o.sharedvar.selPollResult.metaValues[l]=n,o.updateLocalList(o.selectedPoll.values,e))})})()}getCostumer(e,l){const o=this.sharedvar.pollExecSelected.costumerList;o&&o.length>0&&this.onSelCtrlStaff(o,"Seleccione Cliente",e,l,"costumer")}getProduct(e,l){const o=this.sharedvar.pollExecSelected.productList;o&&o.length>0&&this.onSelCtrlStaff(o,"Seleccione Producto",e,l,"product")}onSelCtrlStaff(e,l,o,a,u){var i=this;return(0,d.Z)(function*(){const f=[];e.forEach(n=>{if(n){const g=n.split(":");f.push({selected:!1,myid:g[0],name:g[1]})}});const $={title:l,dgwidth:450,viewfilter:!0,viewAdd:!1,valuelst:f};return yield i.ds.aSelectDefault($).subscribe(n=>{n&&(o[a]=n[0].name,i.updateLocalList(i.selectedPoll.values,o),"product"===u?(i.sharedvar.selPollResult.crm_prod_id=n[0].myid,i.sharedvar.selPollResult.crm_prod_name=n[0].name):(i.sharedvar.selPollResult.crm_costum_id=n[0].myid,i.sharedvar.selPollResult.crm_costum_name=n[0].name))})})()}onResultDone(e){let l={...e};return this.sharedvar.pollExecSelected.pollList.forEach(o=>{l.values={...l.values,...o.values}}),l.values&&(l.values._btnEvent_="",l.values._valid_=!0),l}static#e=this.\u0275fac=function(l){return new(l||s)(t.Y36(M.k),t.Y36(Z.ux),t.Y36(F.x),t.Y36(U),t.Y36(Y.$),t.Y36(z.D),t.Y36(H.$))};static#t=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-poll"]],decls:8,vars:7,consts:[[1,"flex","flex-col","h-screen","w-screen"],[3,"buttons","lchat","onClicked"],[1,"grow","px-3","pt-3","overflow-auto"],[3,"reset","jsonFormData","values","result"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","primary","mat-raised-button","",3,"click"]],template:function(l,o){1&l&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(u){return o.getClicked(u)}),t.qZA(),t.TgZ(2,"div",2)(3,"app-dynamic-form",3),t.NdJ("result",function(u){return o.onGetData(u)}),t.qZA()(),t.TgZ(4,"div",4),t.YNc(5,V,3,0,"button",5),t._uU(6," \xa0 "),t.YNc(7,j,4,0,"button",5),t.qZA()()),2&l&&(t.xp6(1),t.Q6J("buttons","000100")("lchat",o.lchat),t.xp6(2),t.Q6J("reset",o.reset)("jsonFormData",o.selectedPoll.schema)("values",o.selectedPoll.values),t.xp6(2),t.Q6J("ngIf",o.goto.length>1),t.xp6(2),t.Q6J("ngIf",o.selectedPoll.allowEnd))},dependencies:[p.O5,G.G,Q.r,y.lW,w.Hw]})}return s})()}];let W=(()=>{class s{static#e=this.\u0275fac=function(l){return new(l||s)};static#t=this.\u0275mod=t.oAB({type:s});static#l=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(K),c.Bz]})}return s})();var q=r(8471),X=r(6842),ee=r(8255);let te=(()=>{class s{static#e=this.\u0275fac=function(l){return new(l||s)};static#t=this.\u0275mod=t.oAB({type:s});static#l=this.\u0275inj=t.cJS({imports:[p.ez,W,q.O,X.N,ee.Tx,y.ot,w.Ps,Z.ZX]})}return s})()},4066:b=>{const m="[a-fA-F\\d:]",r=h=>h&&h.includeBoundaries?`(?:(?<=\\s|^)(?=${m})|(?<=${m})(?=\\s|$))`:"",p="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",c="[a-fA-F\\d]{1,4}",d=`\n(?:\n(?:${c}:){7}(?:${c}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${c}:){6}(?:${p}|:${c}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${c}:){5}(?::${p}|(?::${c}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${c}:){4}(?:(?::${c}){0,1}:${p}|(?::${c}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${c}:){3}(?:(?::${c}){0,2}:${p}|(?::${c}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${c}:){2}(?:(?::${c}){0,3}:${p}|(?::${c}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${c}:){1}(?:(?::${c}){0,4}:${p}|(?::${c}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${c}){0,5}:${p}|(?::${c}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),E=new RegExp(`(?:^${p}$)|(?:^${d}$)`),_=new RegExp(`^${p}$`),k=new RegExp(`^${d}$`),x=h=>h&&h.exact?E:new RegExp(`(?:${r(h)}${p}${r(h)})|(?:${r(h)}${d}${r(h)})`,"g");x.v4=h=>h&&h.exact?_:new RegExp(`${r(h)}${p}${r(h)}`,"g"),x.v6=h=>h&&h.exact?k:new RegExp(`${r(h)}${d}${r(h)}`,"g"),b.exports=x},6599:(b,m,r)=>{const p=r(4066),c=d=>p({exact:!0}).test(d);c.v4=d=>p.v4({exact:!0}).test(d),c.v6=d=>p.v6({exact:!0}).test(d),c.version=d=>c(d)?c.v4(d)?4:6:void 0,b.exports=c}}]);