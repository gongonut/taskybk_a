"use strict";(self.webpackChunktasky_tasker=self.webpackChunktasky_tasker||[]).push([[559],{6559:(C,b,c)=>{c.r(b),c.d(b,{PollModule:()=>_e});var f=c(214),d=c(6870),r=c(3241),P=c(2507),S=c(8403);class k extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}class y extends Error{constructor(u){super("Could not get the public IP address",u),this.name="IpNotFoundError"}}const p={timeout:5e3},J={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},U=(a,u,e)=>{const s=new XMLHttpRequest;let l;const o=new Promise((i,n)=>{l=n,s.addEventListener("error",n,{once:!0}),s.addEventListener("timeout",n,{once:!0}),s.addEventListener("load",()=>{const h=s.responseText.trim();h&&S[e](h)?i(h):n()},{once:!0}),s.open("GET",a),s.timeout=u.timeout,s.send()});return o.cancel=()=>{s.abort(),l(new k)},o},$=(a,u)=>{let e;const s=(0,r.Z)(function*(){const l=[...J[a],...u.fallbackUrls??[]];let o;for(const i of l)try{return e=U(i,u,a),yield e}catch(n){if(o=n,n instanceof k)throw n}throw new y({cause:o})})();return s.cancel=()=>{e.cancel()},s},B={v4:a=>$("v4",{...p,...a}),v6:a=>$("v6",{...p,...a})};function R(){return(R=(0,r.Z)(function*(a){if(a={timeout:5e3,ipVersion:4,...a},!navigator?.onLine)return!1;const u=4===a.ipVersion?"v4":"v6";try{return yield B[u](a),!0}catch{return!1}})).apply(this,arguments)}var t=c(6637),D=c(9104),w=c(6090),F=c(9818),Z=c(7612),L=c(1833),A=c(6213),x=c(8861),E=c(4999);function G(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",15)(1,"input",16),t.NdJ("change",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onChekAll())}),t.qZA()()}if(2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("checked",e.chekAll)}}function V(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",11),t.YNc(1,G,2,1,"div",12),t.TgZ(2,"mat-icon",13),t._uU(3),t.qZA(),t.TgZ(4,"input",14),t.NdJ("ngModelChange",function(l){t.CHM(e);const o=t.oxw();return t.KtG(o.filtertext=l)})("change",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onViewSelected(!1))}),t.qZA()()}if(2&a){const e=t.oxw(),s=t.MAs(15);t.xp6(1),t.Q6J("ngIf",e.multiSelect),t.xp6(1),t.Q6J("matMenuTriggerFor",s),t.xp6(1),t.Oqu(e.getView()),t.xp6(1),t.Q6J("ngModel",e.filtertext)}}function Y(a,u){1&a&&(t.TgZ(0,"mat-icon",23),t._uU(1,"edit"),t.qZA())}function q(a,u){1&a&&(t.TgZ(0,"mat-icon",23),t._uU(1,"delete_outline"),t.qZA())}function Q(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",19)(1,"input",20),t.NdJ("ngModelChange",function(l){t.CHM(e);const o=t.oxw().$implicit;return t.KtG(o.selected=l)})("change",function(){t.CHM(e);const l=t.oxw().$implicit,o=t.oxw();return t.KtG(o.onSelected(l))}),t.qZA(),t.TgZ(2,"label",21),t._uU(3),t.qZA(),t.YNc(4,Y,2,0,"mat-icon",22),t.YNc(5,q,2,0,"mat-icon",22),t.qZA()}if(2&a){const e=t.oxw().$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngModel",e.selected),t.xp6(2),t.Oqu(e.name),t.xp6(1),t.Q6J("ngIf",!0===s.viewEdit),t.xp6(1),t.Q6J("ngIf",!0===s.viewDel)}}function z(a,u){if(1&a&&(t.TgZ(0,"div",17),t.YNc(1,Q,6,4,"div",18),t.qZA()),2&a){const e=u.$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngIf",s.getViewFilter(e))}}function H(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",24)(1,"button",7),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onNew())}),t._uU(2," Nuevo\xa0 "),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA()()()}}let j=(()=>{class a{constructor(e,s){this.dialogRef=e,this.data=s,this.filtertext="",this.selectedOptions=[],this.chekAll=!1,this.viewSelected=!1,this.multiSelect=!1,this.viewEdit=!1,this.viewDel=!1,e.disableClose=!0,this.multiSelect=s.multiSelect||!1,this.viewEdit=s.viewEdit||!1,this.viewDel=s.viewDel||!1}onNew(){this.dialogRef.close({new:!0})}onChekAll(){this.chekAll=!this.chekAll,this.data.valuelst?.forEach(e=>{e.selected=this.chekAll})}getViewFilter(e){if(this.viewSelected)return e.selected||!1;const s=this.filtertext.toUpperCase();return!!(0===s.length||e&&e.name&&e.name.toUpperCase().includes(s))}onSelected(e){this.multiSelect||(this.selectedOptions=[e],this.dialogRef.close(this.selectedOptions))}onSave(){this.selectedOptions=[],this.data.valuelst?.forEach(e=>{e.selected&&this.selectedOptions.push(e)}),this.dialogRef.close(this.selectedOptions)}onDismiss(){this.dialogRef.close()}getView(){return this.viewSelected?"done":"visibility"}onViewSelected(e){this.viewSelected=e}static#e=this.\u0275fac=function(s){return new(s||a)(t.Y36(Z.so),t.Y36(Z.WI))};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-select-dialog"]],decls:24,vars:4,consts:[[1,"flex","flex-col","h-full"],[1,"h-12","p-3","text-2xl","bg-violet-600","text-white"],["class","h-10 w-full flex flex-row items-center border-b border-violet-500",4,"ngIf"],[1,"flex-1","overflow-auto","mt-2"],["class","flex flex-column",4,"ngFor","ngForOf"],[1,"flex","p-3","justify-end","border-t","border-violet-500"],["class","flex-1","fxFlex","",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary","cdkFocusInitia","",3,"click"],["selectView","matMenu"],["mat-menu-item","",3,"click"],[1,"h-10","w-full","flex","flex-row","items-center","border-b","border-violet-500"],["class","w-6 ml-2 mt-2",4,"ngIf"],[1,"bg-gray-200","rounded-sm",3,"matMenuTriggerFor"],["type","search","placeholder","Filtrar...",1,"flex-1","ml-2","h-8","z-20","text-gray-900","outline-none","border-b","border-gray-200","focus:outline-none","focus:outline-none",3,"ngModel","ngModelChange","change"],[1,"w-6","ml-2","mt-2"],["type","checkbox",1,"w-4","h-4","focus:border-blue-500",3,"checked","change"],[1,"flex","flex-column"],["class","flex flex-row h-8 ml-2 text-sm",4,"ngIf"],[1,"flex","flex-row","h-8","ml-2","text-sm"],["id","itemsel","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"ngModel","ngModelChange","change"],["for","itemsel",1,"ml-4","h-4","w-72","text-sm","text-gray-900","overflow-hidden"],["class","text-gray-300",4,"ngIf"],[1,"text-gray-300"],["fxFlex","",1,"flex-1"]],template:function(s,l){1&s&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.YNc(3,V,5,4,"div",2),t.TgZ(4,"div",3),t.YNc(5,z,2,1,"div",4),t.qZA(),t.TgZ(6,"div",5),t.YNc(7,H,5,0,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return l.onDismiss()}),t.TgZ(9,"mat-icon"),t._uU(10,"close"),t.qZA()(),t.TgZ(11,"button",8),t.NdJ("click",function(){return l.onSave()}),t.TgZ(12,"mat-icon"),t._uU(13,"done"),t.qZA()()(),t.TgZ(14,"mat-menu",null,9)(16,"button",10),t.NdJ("click",function(){return l.onViewSelected(!0)}),t.TgZ(17,"mat-icon"),t._uU(18,"done"),t.qZA(),t._uU(19," Ver seleccionados "),t.qZA(),t.TgZ(20,"button",10),t.NdJ("click",function(){return l.onViewSelected(!1)}),t.TgZ(21,"mat-icon"),t._uU(22,"visibility"),t.qZA(),t._uU(23," Ver Todo "),t.qZA()()()),2&s&&(t.xp6(2),t.Oqu(l.data.title),t.xp6(1),t.Q6J("ngIf",l.data.viewfilter),t.xp6(2),t.Q6J("ngForOf",l.data.valuelst),t.xp6(2),t.Q6J("ngIf",l.data.viewAdd))},dependencies:[f.sg,f.O5,L.lW,A.Hw,x.VK,x.OP,x.p6,E.Fj,E.Wl,E.JJ,E.On]})}return a})(),M=(()=>{class a{constructor(e){this.dialog=e}aSelectDefault(e){let s=window.innerHeight-20;return e.dgheigth=e.dgheigth||s,s=s>600?600:s,this.dialogRef=this.dialog.open(j,{panelClass:"custom-dialog-container",height:s.toString()+"px",width:"400px",data:e}),this.dialogRef.afterClosed()}static#e=this.\u0275fac=function(s){return new(s||a)(t.LFG(Z.uw))};static#t=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var K=c(106),N=c(1238),W=c(8731),X=c(5715);let ee=(()=>{class a{constructor(){this.recognition=new webkitSpeechRecognition,this.isRecording=!1,this.text="",this.tempWords=""}init(){this.recognition.interimResults=!0,this.recognition.lang="es-CO",this.recognition.addEventListener("result",e=>{const s=Array.from(e.results).map(l=>l[0]).map(l=>l.transcript).join("");this.tempWords=s,console.log(this.tempWords)})}voiceRecogition(e){return this.text=e,this.isRecording?this.stop():this.start(),this.text}start(){this.isRecording||(this.isRecording=!0,this.recognition.start(),console.log("Speech recognition started"),this.recognition.addEventListener("end",e=>{this.isRecording?(this.wordConcat(),this.recognition.start()):(this.recognition.stop(),console.log("End speech recognition"))}))}stop(){this.isRecording&&(this.isRecording=!1,this.wordConcat(),this.recognition.stop(),console.log("End speech recognition"))}wordConcat(){this.text=this.text+" "+this.tempWords+".",this.tempWords=""}static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),te=(()=>{class a{constructor(e,s,l,o,i){this.sharedvar=e,this.dtb=s,this.snkBar=l,this.dg=o,this.ds=i,this.schemaAppoint={controls:[{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"dateend",label:"Fecha y hora final sugerida:",type:"datetime-local",sideBtn:"more_time",validators:{required:!0}},{name:"notes",label:"Notas:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}},{name:"crm_costum_name",label:"Cliente",type:"text",sideBtn:"people",style:"w-full",validators:{}},{name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}},{name:"address",label:"Direcci\xf3n",type:"text",style:"w-full",validators:{}},{name:"geoLoc",label:"Geolocalizaci\xf3n",type:"text",style:"w-full",sideBtn:"room",validators:{}}]}}onDelAppoint(e){if(this.sharedvar.staff.appoint&&0!==this.sharedvar.staff.appoint.length){if(this.sharedvar.staff.appoint[e].owner!==this.sharedvar.staff._id)return void this.snkBar.open("No est\xe1 permitido eliminar \xe9ste item?.","Ok",{duration:5e3});this.snkBar.open("Eliminar item de la agenda?.","Ok",{duration:5e3}).onAction().subscribe(s=>{this.sharedvar.staff.appoint?.splice(e,1),this.dtb.updateStaffAsync(this.sharedvar.staff)})}}onAddEditAppoint(e,s=!0){var l=this;return(0,r.Z)(function*(){const o=l.sharedvar.staff,i=[];let h="No seleccionado";if(e||(e=l.appointBasic("appoint")),l.schemaAppoint.controls){let m=l.schemaAppoint.controls.findIndex(v=>"crm_costum_name"===v.name);m>=0&&l.schemaAppoint.controls&&(l.sharedvar.selPollResult.crm_costum_id?(l.selectedCostumer=yield l.dtb.getCMRCostumAsync(l.sharedvar.selPollResult.crm_costum_id),e.address=l.selectedCostumer?.address,h=l.selectedCostumer&&l.selectedCostumer.name?l.selectedCostumer.name:h,l.selectedCostumer.linkup_1&&i.push({key:l.selectedCostumer.linkup_1,value:l.selectedCostumer.linkup_1}),l.selectedCostumer.linkup_2&&i.push({key:l.selectedCostumer.linkup_2,value:l.selectedCostumer.linkup_2}),e.crm_costum_name=h,l.schemaAppoint.controls[m].disabled=!0):l.schemaAppoint.controls[m].disabled=!1),m=l.schemaAppoint.controls.findIndex(v=>"contact"===v.name),m>=0&&l.schemaAppoint.controls&&(i.length>0?(l.schemaAppoint.controls[m].type="select",l.schemaAppoint.controls[m].selectOptions=i):l.schemaAppoint.controls[m].type="text"),m=l.schemaAppoint.controls.findIndex(v=>"geoLoc"===v.name),m>=0&&(l.schemaAppoint.controls[m].sideBtn=s?"room":"")}let _={schema:l.schemaAppoint,title:"Agenda",value:e,dgwidth:400,function:[{name:"datetime",self:l,btn_source:!0,function:l.updateEndTime},{name:"dateend",self:l,btn_source:!0,function:l.addTime},{name:"geoLoc",self:l,btn_source:!0,function:l.geolocation}]};const g=yield(0,P.z)(l.dg.aDefault(_));return g?e.owner!==o._id?(l.snkBar.open("No est\xe1 autorizado para edita \xe9ste item?.","Ok",{duration:5e3}),null):(g.dateend<=g.datetime&&(g.dateend=g.datetime+l.sharedvar.addMinutes(30)),delete g._btnEvent_,delete g._btnclick_,delete g._propName_,delete g._valid_,delete g.staff,e.defa_values={crm_costum_id:l.selectedCostumer.id,crm_costum_name:l.selectedCostumer.name,crm_costum_contact:e.contact,crm_costum_email:e.email,crm_costum_phone:e.phone},l.dg.updatePropResult(e,g),l.selectedCostumer&&(e.contact===l.selectedCostumer.linkup_1?(e.email=l.selectedCostumer.email_1,e.phone=l.selectedCostumer.phone_1):(e.email=l.selectedCostumer.email_2,e.phone=l.selectedCostumer.phone_2)),e):null})()}geolocation(e,s,l){return(0,r.Z)(function*(){if(!s)return;(!s.geoLoc||0===s.geoLoc.length)&&(s.geoLoc=yield e.sharedvar.getLocalization());const i={title:"Geo localizaci\xf3n",dgheigth:600,value:[{_id:`${s.staff}:0`,date_ini:s.datetime,date_end:s.dateend,geoLocStart:s.geoLoc,tasker_id:s._id||"",tasker_name:s.names+" "+(s.lastnames||""),activity_id:s.pollgrp_id||"",activity_name:s.pollgrp_model_name||"No asignada",costumer_name:s.costumer||"",crm_products:[]}]},n=yield(0,P.z)(e.dg.aMap(i));return n&&(s.geoLoc=n.geoLocStart),{schema:null,value:s}})()}updateEndTime(e,s,l){return(0,r.Z)(function*(){if(s)return s.dateend=Number(s.datetime)+e.sharedvar.addMinutes(15),{schema:null,value:s}})()}addTime(e,s,l){return(0,r.Z)(function*(){if(s)return s.datetime=Number(s.dateend)+e.sharedvar.addMinutes(15),{schema:null,value:s}})()}onFilter(e){}appointBasic(e){return{type:e,datetime:this.sharedvar.dateNow(),dateend:this.sharedvar.dateNow(),ended:!1,owner:this.sharedvar.staff._id||"",staff_name:`${this.sharedvar.staff.names} ${this.sharedvar.staff.lastnames}`}}static#e=this.\u0275fac=function(s){return new(s||a)(t.LFG(N.D),t.LFG(D.k),t.LFG(w.ux),t.LFG(F.x),t.LFG(M))};static#t=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var le=c(7117),se=c(2767),oe=c(2247);const ie=["editControlTrigger"],ae=["file2Trigger"],ne=["file2"];function re(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onBack())}),t.TgZ(1,"mat-icon"),t._uU(2,"arrow_back"),t.qZA()()}}function ce(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onEndPoll())}),t._uU(1," Finalizar"),t.TgZ(2,"mat-icon"),t._uU(3,"done"),t.qZA()()}}function de(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onDelete())}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA()()}}function ue(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){const o=t.CHM(e).$implicit,i=t.oxw();return t.KtG(i.visiteByAvailTitle(o))}),t._uU(1),t.qZA()}if(2&a){const e=u.$implicit,s=t.oxw();t.xp6(1),t.hij(" ",s.getAvailPollTitle(e)," ")}}function he(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",25)(1,"button",16),t.NdJ("click",function(){const o=t.CHM(e).index,i=t.oxw(2);return t.KtG(i.delFile(o))}),t._uU(2),t.TgZ(3,"mat-icon",17),t._uU(4,"delete"),t.qZA()()()}if(2&a){const e=u.$implicit;t.xp6(2),t.hij(" ",e.name," ")}}function pe(a,u){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,he,5,1,"div",24),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.sharedvar.selPollResult.fileList)}}const me=[{path:"",component:(()=>{class a{constructor(e,s,l,o,i,n,h,_,g,m,v){this.dtb=e,this.snkBar=s,this.dg=l,this.ds=o,this.nvg=i,this.sharedvar=n,this.notifServ=h,this.htm2pdf=_,this.service=g,this.staffServ=m,this.chats=v,this.lchat=!1,this.goto=[],this.visitePollList=[],this.reset=0,this.commands="",this.loaded=!1,this.service.init()}ngOnInit(){var e=this;return(0,r.Z)(function*(){e.sharedvar.pollExecSelected.pollList.length>0?(e.selectedPoll=e.sharedvar.pollExecSelected.pollList[0],e.goto.push(e.selectedPoll.id),e.availablePolls(e.selectedPoll.title,e.selectedPoll.id)):(e.snkBar.open("Listado de actividades vac\xedo.","Ok",{duration:5e3}),e.nvg.onRouteBack()),e.sharedvar.selPollResult=yield(0,P.z)(e.dtb.getLocalPollResult(e.sharedvar.pollExecSelected.pollResult_id)),e.loaded=!0,e.sharedvar.selPollResult.status<2&&(yield e.OnStartPoll()),e.subscribeChatEvent(),e.sharedvar.pollExecSelected.done&&e.onEndPoll()})()}OnStartPoll(){var e=this;return(0,r.Z)(function*(){e.sharedvar.selPollResult.status=2,e.sharedvar.selPollResult.date_ini=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.pollExecSelected.onStart&&(e.sharedvar.pollExecSelected.onStart.sendMail2&&e.sharedvar.pollExecSelected.onStart.sendMail2.length>0&&e.dtb.notifMail(e.sharedvar.selPollResult,e.sharedvar.pollExecSelected.onStart.sendMail2,"","start"),e.sharedvar.pollExecSelected.onStart.geoLoc&&(e.sharedvar.selPollResult.geoLocStart=yield e.sharedvar.getLocalization())),e.updateDefaValues(e.sharedvar.pollExecSelected.defa_values,e.sharedvar.selPollResult),e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult),e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"status",e.sharedvar.pollExecSelected.staff_admin_id)})()}updateDefaValues(e,s){if(!e)return;this.sharedvar.selPollResult.crm_costum_id=e.crm_costum_id||"",this.sharedvar.selPollResult.crm_costum_name=e.crm_costum_name||"",this.sharedvar.selPollResult.crm_costum_contactname=e.crm_costum_contact||"";let l=0,o=this.getCtrlValByType(l,"costumer");for(;null!=o;)o.poll&&o.name&&(o.poll.values[o.name]=e.crm_costum_name||""),l++,o=this.getCtrlValByType(l,"costumer");Object.keys(e).forEach(i=>{if(null!==e[i]){const n=this.getCtrlValByName(i);this.sharedvar.pollExecSelected.pollList[n.pollIndex].values[i]=e[i]||""}}),this.reset++}OnEndPoll(){var e=this;return(0,r.Z)(function*(){e.sharedvar.selPollResult.date_end=1e4*Math.trunc(Number(Date.now())/1e4),e.sharedvar.selPollResult.staff_picture="",e.sharedvar.pollExecSelected.onEnd&&e.sharedvar.pollExecSelected.onEnd.geoLoc&&(e.sharedvar.selPollResult.geoLocEnd=yield e.sharedvar.getLocalization())})()}availablePolls(e,s){this.visitePollList.find(l=>l===`${e}:${s}`)||this.visitePollList.push(`${e}:${s}`)}getAvailPollTitle(e){return e.split(":")[0]||""}visiteByAvailTitle(e){const s=e.split(":")[1];if(this.goto[this.goto.length-1]===s)return;const l=this.sharedvar.pollExecSelected.pollList.find(o=>o.id===s);l&&(this.goto.push(s),this.selectedPoll=l,this.reset++)}subscribeChatEvent(){var s,e=this;this.chatSub=this.notifServ.dtb_notification().subscribe({next:(s=(0,r.Z)(function*(l){"chat"===l.collection&&l.field_id&&l.field_id===e.sharedvar.selPollResult._id&&e.getChatState()}),function(o){return s.apply(this,arguments)}),complete:()=>{console.log()}}),this.getChatState()}getChatState(){var e=this;return(0,r.Z)(function*(){const s=yield e.dtb.getChat(e.sharedvar.selPollResult._id);e.sharedvar.selPollResult.status_date=Date.now(),e.sharedvar.selPollResult.chats=s;const l=s.length-1;return l>=0&&"W"===s[l].type?(e.snkBar.open(`Mensaje: ${e.sharedvar.selPollResult.chats[l].msg}.`,"Ok",{duration:3e3}),e.lchat=!0):e.lchat=!1,l})()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}getClicked(e){switch(e.index){case 4:let s=document.getElementById("spanTrigger");s&&(s.style.display="",s.style.position="absolute",s.style.left=e.pageX+5+"px",s.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu());break;case 5:let l=document.getElementById("file2Trigger");l&&(l.style.display="",l.style.position="absolute",l.style.left=e.pageX+5+"px",l.style.top=e.pageY+5+"px",this.file2Trigger.openMenu());break;case 6:this.updateResultParcial();break;case 7:this.commands="question_mark"===this.commands?"":"question_mark"}}chatExec(e){this.chats.chatExec(0===e?"Administrador":"IA "+this.selectedPoll.title,this.sharedvar.selPollResult.chats,this.adminChat,this)}adminChat(e,s,l){e.sharedvar.selPollResult.chats=s,e.dtb.updatePartialAsync(e.sharedvar.selPollResult,"chats",e.sharedvar.pollExecSelected.staff_admin_id)}onGetData(e){var s=this;return(0,r.Z)(function*(){const l=e._btnclick_,o=e._propName_;if(o&&s.selectedPoll.schema.controls){const i=s.selectedPoll.schema.controls.find(n=>n.name===o);if(i&&i.tags)if(!0===l)switch(i.tags.type){case"goto":s.getGoto(o,i,e);break;case"geolocation":e[o]=yield s.sharedvar.getLocalization(),i.sideBtn="done",s.reset++;break;case"picture":s.getPicture(e,i,o);break;case"draw":s.getDraw(e,i,o);break;case"appoint":s.getAppoint(e,o);break;case"costumer":s.getCostumer(e,o);break;case"product":s.getProduct(e,o);break;case"duplicate":const n=s.findDupPollList(s.selectedPoll,o);i.avalue=n,e[o]=n,n&&s.getGoto(o,i,e);break;case"text":case"textarea":e[o]=s.service.voiceRecogition(e[o]),s.reset++}else e._command_&&e._command_===s.commands&&i.tags.help?s.snkBar.open(i.tags.help,"Listo",{duration:1e4}):(e._btnclick_2_||"duplicate"===i.tags.type||"goto"===i.tags.type)&&s.getGoto(o,i,e)}s.updateLocalList(e)})()}onGetValid(e){this.selectedPoll.values._valid_!==e&&this.updateLocalList({_valid_:e})}getGoto(e,s,l){const o=this.sharedvar.pollExecSelected.pollList.find(i=>i.id===s.avalue);if(o&&s.avalue&&s.avalue.length>0)this.goto.push(s.avalue),this.reset++,setTimeout(()=>{delete l._valid_,this.updateLocalList(l),this.selectedPoll=o,this.sharedvar.selPollResult.metaValues[e]=this.selectedPoll.title,this.availablePolls(this.selectedPoll.title,this.selectedPoll.id),this.reset++},100);else if(s.selectOptions){const i=s.selectOptions.findIndex(n=>n.key===s.avalue);i>=0&&s.selectOptions.splice(i,1)}}updateLocalList(e){!this.selectedPoll.values||!e||(e._btnEvent_="",e._propName_="",this.selectedPoll.values=this.dg.updatePropResult(this.selectedPoll.values,e),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult))}onBack(){var e=this;this.selectedPoll.values&&!1===this.selectedPoll.values._valid_?this.snkBar.open("Hay campos sin llenar. \xbfSalir de todos modos?","Si",{duration:3e3}).onAction().subscribe((0,r.Z)(function*(){e.onBackProcess()})):this.onBackProcess()}onBackProcess(){if(this.goto.length>1){const e=this.sharedvar.pollExecSelected.pollList.find(s=>s.id===this.goto[this.goto.length-2]);e&&(this.selectedPoll=e,this.goto.splice(this.goto.length-1,1))}}onDelete(){var e=this;this.snkBar.open("\xbfBorrar \xe9ste grupo?","Ok",{duration:3e3}).onAction().subscribe((0,r.Z)(function*(){if(e.goto.length>1){const s=e.sharedvar.pollExecSelected.pollList.find(o=>o.id===e.goto[e.goto.length-2]),l=e.sharedvar.pollExecSelected.pollList.findIndex(o=>o.id===e.goto[e.goto.length-1]);l>=0&&e.sharedvar.pollExecSelected.pollList.splice(l,1),s&&(e.selectedPoll=s,e.goto.splice(e.goto.length-1,1))}}))}onEndPoll(){var e=this;return(0,r.Z)(function*(){const s=e.isValid();""===s?e.selectedPoll.allowEnd&&e.snkBar.open("Finalizar la encuesta?","Ok",{duration:5e3}).onAction().subscribe((0,r.Z)(function*(){e.sharedvar.selPollResult=e.onResultDone(e.sharedvar.selPollResult),e.sharedvar.selPollResult?(e.sharedvar.selPollResult.ended=!0,e.sharedvar.selPollResult.status=3,e.sharedvar.selPollResult.status_date=Date.now(),(yield function I(a){return R.apply(this,arguments)}())?window.location.hostname.includes("tasky-danilo-prod.up.railway.app")||window.location.hostname.includes("localhost")?yield e.exportResultDataDevelop():yield e.exportResultData():(e.snkBar.open("No fue posible exportar la informaci\xf3n. Por favor sincronice cuando est\xe9 linea.","Ok",{duration:3e3}),e.sharedvar.pollExecSelected.done=!0,e.dtb.addUpdateLocalList(e.sharedvar.pollExecSelected,e.sharedvar.selPollResult)),e.nvg.onRouteBack()):e.snkBar.open("Existen campos sin llenar.","Ok",{duration:3e3})})):e.snkBar.open(`Debe llenar campos requeridos en "${s}".`,"Ok",{duration:3e3})})()}isValid(){let e="",s=!0,l=[];for(const o of this.visitePollList){l=o.split(":");const i=this.sharedvar.pollExecSelected.pollList.find(n=>n.id===l[1]);if(i&&(s=i.values._valid_&&s,!s)){e=i.title;break}}return""!==e&&this.visiteByAvailTitle(l.join(":")),e}updateResultParcial(){var e=this;return(0,r.Z)(function*(){const s=JSON.parse(JSON.stringify(e.sharedvar.pollExecSelected)),l=JSON.parse(JSON.stringify(e.sharedvar.selPollResult));e.dtb.promiseMetaData(s,l,e.sharedvar.selPollResult.fileList).then(function(){var o=(0,r.Z)(function*(i){l.date_end=1e4*Math.trunc(Number(Date.now())/1e4),l.values={},l.values_type={},s.pollList.forEach(n=>{e.updatePollPropResult(l.values,l.values_type,n)}),yield e.dtb.CreateUpdatePollResult(l),e.snkBar.open("Encuesta parcial enviada.","Listo",{duration:5e3})});return function(i){return o.apply(this,arguments)}}())})()}exportResultData(e=0,s=0){var l=this;return(0,r.Z)(function*(){l.dtb.promiseMetaData(l.sharedvar.pollExecSelected,l.sharedvar.selPollResult,l.sharedvar.selPollResult.fileList).then(function(){var o=(0,r.Z)(function*(i){i&&(l.sharedvar.selPollResult.values={},l.sharedvar.selPollResult.values_type={},l.sharedvar.selPollResult.fileList=[],l.sharedvar.pollExecSelected.pollList.forEach(n=>{l.updatePollPropResult(l.sharedvar.selPollResult.values,l.sharedvar.selPollResult.values_type,n)}),yield l.OnEndPoll(),l.sharedvar.selPollResult.metaValues=[],e>0&&s>0&&(l.sharedvar.selPollResult.date_ini=e,l.sharedvar.selPollResult.date_end=s),l.sharedvar.selPollResult=yield l.dtb.CreateUpdatePollResult(l.sharedvar.selPollResult),yield l.dtb.updateStaffAsync(l.sharedvar.staff),l.sharedvar.pollExecSelected&&l.sharedvar.pollExecSelected.onEnd?.sendMail2&&l.sharedvar.pollExecSelected.onEnd.sendMail2.length>0&&l.htm2pdf.buildHtml2Pdf(l.sharedvar.selPollResult,l.sharedvar.pollExecSelected.onEnd.sendMail2),l.dtb.delFromLocalList(l.sharedvar.pollExecSelected),l.dtb.deleteStaffAppoint(),l.snkBar.open('Encuesta finalizada. Siga el reporte de sus encuestas en "Estado de mi Cuenta".',"Ok",{duration:5e3}))});return function(i){return o.apply(this,arguments)}}())})()}exportResultDataDevelop(){var e=this;return(0,r.Z)(function*(){const s=e.sharedvar.dateNow(),l=s+e.sharedvar.addMinutes(30);e.dg.aDefault({title:"Horario acomodado",schema:{controls:[{name:"date_ini",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"date_end",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}}]},value:{date_ini:s,date_end:l},dgwidth:400,dgheigth:360}).subscribe(n=>{n&&e.exportResultData(n.date_ini,n.date_end)})})()}updatePollPropResult(e,s,l){return l.schema.controls?.forEach(o=>{if(l.values._btnEvent_="",l.values._propName_="",l.values._valid_="",l.values._btnclick_="",o.tags&&!0===o.tags.dtbase&&l.values[o.name]&&l.values[o.name].toString().length>0){let i=o.tags.type;switch(o.tags.type){case"draw":i="picture";break;case"product":case"multiselect":i="array";break;case"textarea":case"costumer":case"duplicate":case"goto":case"header":i="text"}e[o.name]=l.values[o.name],s[o.name]=i}}),e}getPicture(e,s,l){this.dg.aCamera({title:"C\xe1mara",value:{img:e,name:"pepito"}}).subscribe(n=>{n&&n.urlrute&&n.urlrute.length>0&&(e[l]=`${s.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[l]=n.urlrute,this.updateLocalList(e),this.reset++)})}getDraw(e,s,l){this.dg.aDraw({title:"Dibujar",value:{img:this.sharedvar.selPollResult.metaValues[l]?this.sharedvar.selPollResult.metaValues[l]:s.avalue,name:"pepito"}}).subscribe(n=>{n&&n.urlrute&&n.urlrute.length>0&&(e[l]=`${s.label} \u2714\ufe0f`,this.sharedvar.selPollResult.metaValues[l]=n.urlrute,this.updateLocalList(e),this.reset++)})}getAppoint(e,s,l="appoint"){var o=this;return(0,r.Z)(function*(){const i=yield o.staffServ.onAddEditAppoint(o.sharedvar.selPollResult.metaValues[s]||null);if(i){const n=`${o.sharedvar.formatNumber2DateTime(i.datetime,"/")} - ${i.notes||""}`;e[s]=n,o.sharedvar.selPollResult.metaValues[s]=i,o.updateLocalList(e),o.reset++}})()}getCostumer(e,s){const l=this.sharedvar.pollExecSelected.costumerList;l&&l.length>0&&this.onSelCtrlList(l,"Seleccione Cliente",e,s,"costumer",!1)}getProduct(e,s){const l=this.sharedvar.pollExecSelected.productList;l&&l.length>0&&this.onSelCtrlList(l,"Seleccione Producto",e,s,"product",!0)}onSelCtrlList(e,s,l,o,i,n){var h=this;return(0,r.Z)(function*(){const _=[];e.forEach(m=>{if(m){const v=m.split(":"),O=h.sharedvar.selPollResult.crm_prod_id?.findIndex(be=>be===v[0]);_.push({selected:!!(O&&O>=0),myid:v[0],name:v[1]})}});const g={title:s,viewfilter:!0,viewAdd:!1,multiSelect:n,valuelst:_};return yield h.ds.aSelectDefault(g).subscribe(m=>{m&&("product"===i?(h.sharedvar.selPollResult.crm_prod_id=[],l[o]="",m.forEach(v=>{l[o]+=v.name+",\n"})):(h.sharedvar.selPollResult.crm_costum_id=m[0].myid,h.sharedvar.selPollResult.crm_costum_name=m[0].name,l[o]=m[0].name),h.updateLocalList(l),h.reset++)})})()}onResultDone(e){let s={...e};return this.sharedvar.pollExecSelected.pollList.forEach(l=>{s.values={...s.values,...l.values}}),s.values&&(s.values._btnEvent_="",s.values._valid_=!0),s}findDupPollList(e,s){const l=e.schema.controls?.find(n=>n.name==s);if(!l)return;const o=l.tags||{},i=this.sharedvar.pollExecSelected.pollList.find(n=>n.id===o.dupactivity);if(i){const n=JSON.parse(JSON.stringify(i));return n.title=`${i.title} ${i.dupTotal}`,i.dupTotal++,n.totalDup=0,n.id=this.dtb.getSerialKey(3,4,"_"),n.duplicated=!0,this.updatePollNames(n),l.selectOptions?.push({key:n.id,value:n.title}),this.sharedvar.pollExecSelected.pollList.push(n),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult),this.reset++,n.id}}updatePollNames(e){e.schema.controls?.forEach(s=>{s.name=this.getUniqueName(e.title,s.name,this.sharedvar.pollExecSelected.pollList)})}getUniqueName(e,s,l){let o=0,i="";e.length>0&&(e=e.replace(" ","_")+"_"),s=`${e}${s.replace(" ","_")}`;for(let n=0;n<l.length;n++){const h=l[n].schema.controls||[];for(let _=0;_<h.length;_++)if(h[_].name.toUpperCase()===`${s}${i}`.toUpperCase()){i="_"+o++,n=-1;break}}return`${s}${i}`}getCtrlValByType(e,s){let l=0;for(let o=0;o<this.sharedvar.pollExecSelected.pollList.length;o++){const i=this.sharedvar.pollExecSelected.pollList[o];if(i.schema.controls){const n=i.schema.controls.find(h=>h.tags&&h.tags.type===s);if(n&&e===l)return{poll:i,name:n.name};l++}}return null}getCtrlValByName(e){for(let s=0;s<this.sharedvar.pollExecSelected.pollList.length;s++){const l=this.sharedvar.pollExecSelected.pollList[s];if(l.schema.controls){const o=l.schema.controls.find(i=>i.name.includes(e));if(null!=o)return{pollIndex:s,type:o.tags?["type"]:"unknown"}}}return null}onFile2(){this.file2.nativeElement.click()}delFile(e){this.sharedvar.selPollResult.fileList.splice(e,1),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult)}onAddFile2Upload(e){this.sharedvar.selPollResult.fileList||(this.sharedvar.selPollResult.fileList=[]),this.sharedvar.selPollResult.fileList.push(e.target.files[0]),this.dtb.addUpdateLocalList(this.sharedvar.pollExecSelected,this.sharedvar.selPollResult)}static#e=this.\u0275fac=function(s){return new(s||a)(t.Y36(D.k),t.Y36(w.ux),t.Y36(F.x),t.Y36(M),t.Y36(K.$),t.Y36(N.D),t.Y36(W.$),t.Y36(X.Q),t.Y36(ee),t.Y36(te),t.Y36(le.a))};static#t=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-poll"]],viewQuery:function(s,l){if(1&s&&(t.Gf(ie,5),t.Gf(ae,5),t.Gf(ne,5)),2&s){let o;t.iGM(o=t.CRH())&&(l.editControlTrigger=o.first),t.iGM(o=t.CRH())&&(l.file2Trigger=o.first),t.iGM(o=t.CRH())&&(l.file2=o.first)}},decls:42,vars:17,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","lchat","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],["id","file2Trigger",3,"matMenuTriggerFor"],["file2Trigger","matMenuTrigger"],[1,"flex","align-middle","justify-center","h-8","border-b","border-violet-500","font-medium","text-lg","p-1","mb-1","text-violet-900"],[3,"matMenuTriggerFor"],[1,"grow","pt-3","mx-1","overflow-y-auto","overflow-x-hidden"],[3,"reset","jsonFormData","values","commands","result","valid"],[1,"h-12","flex","flex-row","items-center","justify-center","border-t","border-violet-500"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","warn","mat-raised-button","",3,"click",4,"ngIf"],["visitedmenu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["chatmenu","matMenu"],["mat-menu-item","",3,"click"],["color","primary"],["file2menu","matMenu"],[4,"ngIf"],["type","file",1,"invisible",3,"change"],["file2",""],["color","primary","mat-raised-button","",3,"click"],["color","warn","mat-raised-button","",3,"click"],["mat-menu-item","",4,"ngFor","ngForOf"],["mat-menu-item",""]],template:function(s,l){if(1&s&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(i){return l.getClicked(i)}),t.qZA(),t._UZ(2,"span",2,3)(4,"span",4,5),t.TgZ(6,"div",6)(7,"span",7),t._uU(8),t.qZA(),t.TgZ(9,"mat-icon",7),t._uU(10,"arrow_drop_down"),t.qZA()(),t.TgZ(11,"div",8)(12,"app-dynamic-form",9),t.NdJ("result",function(i){return l.onGetData(i)})("valid",function(i){return l.onGetValid(i)}),t.qZA()(),t.TgZ(13,"div",10),t.YNc(14,re,3,0,"button",11),t._uU(15," \xa0 "),t.YNc(16,ce,4,0,"button",11),t._uU(17," \xa0 "),t.YNc(18,de,3,0,"button",12),t.qZA()(),t.TgZ(19,"mat-menu",null,13),t.YNc(21,ue,2,1,"button",14),t.qZA(),t.TgZ(22,"mat-menu",null,15)(24,"button",16),t.NdJ("click",function(){return l.chatExec(0)}),t.TgZ(25,"mat-icon",17),t._uU(26,"forum"),t.qZA(),t._uU(27," Administrador "),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return l.chatExec(1)}),t.TgZ(29,"mat-icon",17),t._uU(30,"auto_awesome"),t.qZA(),t._uU(31),t.qZA()(),t.TgZ(32,"mat-menu",null,18),t.YNc(34,pe,2,1,"div",19),t._UZ(35,"hr"),t.TgZ(36,"button",16),t.NdJ("click",function(){return l.onFile2()}),t._uU(37," Agregar archivo "),t.TgZ(38,"mat-icon",17),t._uU(39,"add"),t.qZA()()(),t.TgZ(40,"input",20,21),t.NdJ("change",function(i){return l.onAddFile2Upload(i)}),t.qZA()),2&s){const o=t.MAs(20),i=t.MAs(23),n=t.MAs(33);t.xp6(1),t.Q6J("buttons","00001101")("lchat",l.lchat),t.xp6(1),t.Q6J("matMenuTriggerFor",i),t.xp6(2),t.Q6J("matMenuTriggerFor",n),t.xp6(3),t.Q6J("matMenuTriggerFor",o),t.xp6(1),t.Oqu(l.selectedPoll.title),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(3),t.Q6J("reset",l.reset)("jsonFormData",l.selectedPoll.schema)("values",l.selectedPoll.values)("commands",l.commands),t.xp6(2),t.Q6J("ngIf",l.goto.length>1),t.xp6(2),t.Q6J("ngIf",l.selectedPoll.allowEnd),t.xp6(2),t.Q6J("ngIf",l.selectedPoll.duplicated),t.xp6(3),t.Q6J("ngForOf",l.visitePollList),t.xp6(10),t.hij(" AI ",l.selectedPoll.title," "),t.xp6(3),t.Q6J("ngIf",l.loaded)}},dependencies:[f.sg,f.O5,se.G,oe.r,x.VK,x.OP,x.p6,L.lW,A.Hw]})}return a})()}];let fe=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=t.oAB({type:a});static#l=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(me),d.Bz]})}return a})();var ge=c(1569),ve=c(9909);let _e=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=t.oAB({type:a});static#l=this.\u0275inj=t.cJS({imports:[f.ez,fe,ge.O,ve.N,x.Tx,L.ot,A.Ps,w.ZX]})}return a})()},807:C=>{const b="[a-fA-F\\d:]",c=p=>p&&p.includeBoundaries?`(?:(?<=\\s|^)(?=${b})|(?<=${b})(?=\\s|$))`:"",f="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",d="[a-fA-F\\d]{1,4}",r=`\n(?:\n(?:${d}:){7}(?:${d}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${d}:){6}(?:${f}|:${d}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${d}:){5}(?::${f}|(?::${d}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${d}:){4}(?:(?::${d}){0,1}:${f}|(?::${d}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${d}:){3}(?:(?::${d}){0,2}:${f}|(?::${d}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${d}:){2}(?:(?::${d}){0,3}:${f}|(?::${d}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${d}:){1}(?:(?::${d}){0,4}:${f}|(?::${d}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${d}){0,5}:${f}|(?::${d}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),P=new RegExp(`(?:^${f}$)|(?:^${r}$)`),S=new RegExp(`^${f}$`),k=new RegExp(`^${r}$`),y=p=>p&&p.exact?P:new RegExp(`(?:${c(p)}${f}${c(p)})|(?:${c(p)}${r}${c(p)})`,"g");y.v4=p=>p&&p.exact?S:new RegExp(`${c(p)}${f}${c(p)}`,"g"),y.v6=p=>p&&p.exact?k:new RegExp(`${c(p)}${r}${c(p)}`,"g"),C.exports=y},8403:(C,b,c)=>{const f=c(807),d=r=>f({exact:!0}).test(r);d.v4=r=>f.v4({exact:!0}).test(r),d.v6=r=>f.v6({exact:!0}).test(r),d.version=r=>d(r)?d.v4(r)?4:6:void 0,C.exports=d}}]);