"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[109],{4109:(Y,m,s)=>{s.r(m),s.d(m,{PlayPollModule:()=>U});var r=s(7087),d=s(3759),h=s(3241),C=s(1348),_=s.t(C,2),t=s(2283),y=s(4758),x=s(8046),k=s(6806),T=s(3638),g=s(1359),b=s(8035),I=s(5583),Z=s(3578),p=s(9347),u=s(8464);function P(i,f){if(1&i){const e=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onClick(0))}),t.TgZ(1,"span")(2,"mat-icon"),t._uU(3,"delete"),t.qZA()()()}}function F(i,f){if(1&i){const e=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onClick(2))}),t.TgZ(1,"span")(2,"mat-icon"),t._uU(3,"task_alt"),t.qZA()()()}}function S(i,f){if(1&i){const e=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.onClick(3))}),t.TgZ(1,"span")(2,"mat-icon"),t._uU(3,"forum"),t.qZA()()()}}const A=function(i){return{"background-color":i}};let v=(()=>{class i{constructor(){this.onClicked=new t.vpe}getLastChat(){return this.chatItem.chats&&this.chatItem.chats.length>0&&this.chatItem.chats[this.chatItem.chats.length-1].msg||"Esperando..."}getBackColor(){return this.chatItem.ended?"#C6DEFF":this.chatItem.chats&&this.chatItem.chats.length>0&&"W"===this.chatItem.chats[this.chatItem.chats.length-1].type?"white":"#ffffcc"}getPicture(){return this.chatItem.staff_picture&&this.chatItem.staff_picture.length>0?this.chatItem.staff_picture:"../assets/images/favicon.png"}onClick(e){this.onClicked.emit({chatItem:this.chatItem,cmd:e})}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-chat"]],inputs:{chatItem:"chatItem"},outputs:{onClicked:"onClicked"},decls:18,vars:9,consts:[[1,"h-24","w-64","flex","flex-col","rounded","border","border-gray-200","p-1","shadow-sm",3,"ngStyle"],[1,"flex","flex-row"],["alt","chatItem.staff_name",1,"h-12","w-12","rounded-full","object-fill",3,"src"],[1,"flex","flex-col","items-start","px-2"],[1,"h-6","w-48","overflow-hidden","font-medium","leading-tight"],[1,"h-5","w-48","overflow-hidden","text-justify","font-thin"],[1,"h-3"],[1,"w-48","h-6","px-1","border-t","border-violet-300","flex","flex-row","gap-x-2","justify-end","text-gray-200"],["class","pt-1 hover:border-violet-500 hover:text-violet-500",3,"click",4,"ngIf"],[1,"pt-1","hover:border-violet-500","hover:text-violet-500",3,"click"]],template:function(a,l){1&a&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5),t._uU(7),t.qZA(),t._UZ(8,"div",6),t.TgZ(9,"div",7),t.YNc(10,P,4,0,"div",8),t._uU(11," \xa0 "),t.TgZ(12,"div",9),t.NdJ("click",function(){return l.onClick(1)}),t.TgZ(13,"span")(14,"mat-icon"),t._uU(15,"perm_identity"),t.qZA()()(),t.YNc(16,F,4,0,"div",8),t.YNc(17,S,4,0,"div",8),t.qZA()()()()),2&a&&(t.Q6J("ngStyle",t.VKq(7,A,l.getBackColor())),t.xp6(2),t.Q6J("src",l.getPicture(),t.LSH),t.xp6(3),t.Oqu(l.chatItem.staff_name),t.xp6(2),t.Oqu(l.getLastChat()),t.xp6(3),t.Q6J("ngIf",!l.chatItem.ended),t.xp6(6),t.Q6J("ngIf",l.chatItem.ended),t.xp6(1),t.Q6J("ngIf",!l.chatItem.ended))},dependencies:[r.O5,r.PC,u.Hw]})}return i})();const R=["editControlTrigger"];function E(i,f){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"app-chat",9),t.NdJ("onClicked",function(l){t.CHM(e);const o=t.oxw();return t.KtG(o.onChatItemClicked(l))}),t.qZA()()}if(2&i){const e=f.$implicit;t.xp6(1),t.Q6J("chatItem",e)}}const J=[{path:"",component:(()=>{class i{constructor(e,a,l,o,n,c,D){this.sharedvar=e,this.nvg=a,this.dtb=l,this.dg=o,this.snkBar=n,this.notif=c,this.chats=D,this.FilterResult={filter:1,status:2,pollGrp_id:"",date_ini:0,date_end:0},this.ctrlList=this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema?this.sharedvar.pollSelected.schema:{controls:[]}}ngOnInit(){this.nvg.playing=!0,this.FilterResult.pollGrp_id=this.sharedvar.pollGrpExecuted._id||"",this.execFilter(),this.chatSub=this.notif.getNotif_obs().subscribe({next:e=>{if("chat"===e.mycollection&&e.field_id){const a=this.pollResultList.findIndex(l=>l._id===e.field_id);a>=0&&this.setPollResultState(a,e)}"pollresult"===e.mycollection&&e.data&&this.sharedvar.pollGrpExecuted._id===e.data.pollGrp_id&&this.execFilter()},complete(){}})}setPollResultState(e,a){var l=this;return(0,h.Z)(function*(){const o=yield l.dtb.getPollResultAsync(a.field_id);o.status_date=Date.now(),l.pollResultList[e]=o})()}getClicked(e){switch(e.index){case 1:this.filterDialog();break;case 3:let a=document.getElementById("spanTrigger");a&&(a.style.display="",a.style.position="absolute",a.style.left=e.pageX+5+"px",a.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu());break;case 4:this.execFilter()}}onSend2Mobil(){navigator.clipboard.writeText(`https://epoll-cli.firebaseapp.com/?pollexec=${this.sharedvar.pollGrpExecuted.id}`).then(a=>{}).catch(a=>alert(a)),this.snkBar.open("V\xednculo copiado al portapapeles.","Ok",{duration:3e3})}onChatItemClicked(e){var a=this;return(0,h.Z)(function*(){switch(e.cmd){case 0:a.snkBar.open("Esta acci\xf3n eliminar\xe1 el formulario en proceso","Eliminar",{duration:5e3}).onAction().subscribe((0,h.Z)(function*(){a.dtb.deletePollResult(e.chatItem._id),a.notif.sendCommand({cmd:"delete_tasker_poll",user_id:a.sharedvar.staff._id,usert_id:e.chatItem.staff__id,data:{pollGrp_id:e.chatItem.pollGrp_id,pollResult_id:e.chatItem._id}})}));break;case 1:const l=yield a.dtb.getStaffById(e.chatItem.staff__id);a.dg.aDefault({schema:_,value:l,title:"Datos del Tasker"}).subscribe(c=>{c&&(a.dg.updatePropResult(l,c),a.dtb.setStaff(l))});break;case 2:a.dg.aPollResult({schema:{},value:e.chatItem,title:"Datos de la encuesta: "+e.chatItem.staff_name}).subscribe(c=>{});break;case 3:a.selChat=e.chatItem,a.chats.chatExec(`tasker ${a.selChat.staff_name}`,a.selChat.chats||[],a.adminChat,a)}})()}adminChat(e,a,l){e.selChat.chats=a,e.dtb.updatePartialAsync(e.selChat,"chats",e.selChat.staff__id),e.selResultId=""}filterDialog(){var e=this;this.dg.aDefault({schema:{controls:[{name:"filter",label:"Tipo de b\xfasqueda:",type:"select",validators:{},selectOptions:[{key:"0",value:"Todo"},{key:"1",value:"Estado por fecha"},{key:"3",value:"Todo por fecha"}]},{name:"status",label:"Estado:",type:"select",validators:{},selectOptions:[{key:"1",value:"Seleccionado"},{key:"2",value:"En proceso"},{key:"3",value:"Finalizado"},{key:"4",value:"Aprobado"},{key:"5",value:"pagado"}]},{name:"alldates",label:"desde siempre",type:"checkbox",validators:{}},{name:"date_ini_str",label:"Fecha inicio:",type:"date",validators:{}},{name:"date_end_str",label:"Fecha final:",type:"date",validators:{}}]},value:this.FilterResult,title:"Filtros",dgwidth:250,dgheigth:800}).subscribe(function(){var o=(0,h.Z)(function*(n){n&&(n.alldates?(n.date_ini=0,n.date_end=0):(n.date_ini=Date.parse(n.date_ini_str)||0,n.date_end=Date.parse(n.date_end_str)||0),e.dg.updateOnlyExistProp(e.FilterResult,n),e.execFilter())});return function(n){return o.apply(this,arguments)}}())}execFilter(){const e=this.dtb.getPollResultByFilter(this.FilterResult).subscribe({next:a=>{this.pollResultList=[],this.pollResultList=a},complete:()=>{e&&e.unsubscribe()}})}static#t=this.\u0275fac=function(a){return new(a||i)(t.Y36(y.D),t.Y36(x.$),t.Y36(k.k),t.Y36(T.x),t.Y36(g.ux),t.Y36(b.$),t.Y36(I.a))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-play-poll"]],viewQuery:function(a,l){if(1&a&&t.Gf(R,5),2&a){let o;t.iGM(o=t.CRH())&&(l.editControlTrigger=o.first)}},decls:14,vars:4,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","nav_menu","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"flex-1","m-2","p-1","overflow-scroll"],[1,"p-1","flex","flex-row","flex-wrap","gap-1"],[4,"ngFor","ngForOf"],["controlEdit","matMenu"],["mat-menu-item","",3,"click"],[3,"chatItem","onClicked"]],template:function(a,l){if(1&a&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(n){return l.getClicked(n)}),t.qZA(),t._UZ(2,"span",2,3),t.TgZ(4,"div",4)(5,"div",5),t.YNc(6,E,2,1,"div",6),t.qZA()()(),t.TgZ(7,"mat-menu",null,7)(9,"button",8),t.NdJ("click",function(){return l.onSend2Mobil()}),t.TgZ(10,"mat-icon"),t._uU(11,"build"),t.qZA(),t._uU(12," Ejecutar Formulario en Modo de Prueba "),t.qZA(),t._UZ(13,"hr"),t.qZA()),2&a){const o=t.MAs(8);t.xp6(1),t.Q6J("buttons","110110")("nav_menu",!0),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(4),t.Q6J("ngForOf",l.pollResultList)}},dependencies:[r.sg,Z.G,p.VK,p.OP,p.p6,u.Hw,v]})}return i})()}];let M=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(J),d.Bz]})}return i})();var w=s(769),B=s(7572);const G=[{path:"",component:v}];let N=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(G),d.Bz]})}return i})(),O=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[r.ez,N,u.Ps]})}return i})(),U=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275mod=t.oAB({type:i});static#a=this.\u0275inj=t.cJS({imports:[r.ez,M,w.O,B.N,p.Tx,u.Ps,g.ZX,O]})}return i})()}}]);