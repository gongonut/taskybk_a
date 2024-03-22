"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[158],{1158:(N,h,a)=>{a.r(h),a.d(h,{StaffListModule:()=>E});var f=a(7087),l=a(3759),m=a(3241),C=a(1348),_=a.t(C,2),t=a(2283),v=a(4758),S=a(6655),T=a(8878),Z=a(1359),u=a(9347),d=a(8464),y=a(3578);const x=function(n){return{"background-color":n}};let g=(()=>{class n{constructor(){this.onClicked=new t.vpe}ngOnInit(){}getBackColor(){return this.staff.active?"white":"#ffffcc"}getPicture(){return this.staff.picture&&this.staff.picture.length>0?this.staff.picture:"../assets/images/favicon.png"}onClick(e){this.staff.tag=e,this.onClicked.emit(this.staff)}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-staff"]],inputs:{staff:"staff"},outputs:{onClicked:"onClicked"},decls:35,vars:9,consts:[[1,"h-32","w-64","flex","flex-col","rounded","border","border-gray-200","p-1","shadow-sm",3,"ngStyle"],[1,"flex","flex-row"],["alt","aja",1,"h-12","w-12","rounded-full","object-fill",3,"src"],[1,"flex","flex-col","items-start","px-2"],[1,"h-6","w-48","overflow-hidden","font-medium","leading-tight"],[1,"pl-2","h-5","w-48","font-light","text-xs","overflow-hidden"],[1,"w-48","h-6","px-1","border-t","border-violet-300","flex","flex-row","gap-x-4","justify-end","text-violet-300"],[1,"pt-1"],[1,"hover:text-gray-900",3,"click"],[1,"hover:text-gray-900"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5)(7,"strong"),t._uU(8,"M\xf3vil:"),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"div",5)(11,"strong"),t._uU(12,"email:"),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"div",5)(15,"strong"),t._uU(16,"Calificaci\xf3n:"),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"div",6)(19,"div",7)(20,"span")(21,"mat-icon",8),t.NdJ("click",function(){return s.onClick("1")}),t._uU(22,"perm_identity"),t.qZA(),t.TgZ(23,"mat-icon",9),t._uU(24,"task_alt"),t.qZA(),t.TgZ(25,"mat-icon",9),t._uU(26,"forum"),t.qZA()(),t._uU(27," \xa0 "),t.TgZ(28,"span")(29,"mat-icon",8),t.NdJ("click",function(){return s.onClick("2")}),t._uU(30,"delete"),t.qZA(),t.TgZ(31,"mat-icon",8),t.NdJ("click",function(){return s.onClick("0")}),t._uU(32,"lock_open"),t.qZA(),t.TgZ(33,"mat-icon",8),t.NdJ("click",function(){return s.onClick("1")}),t._uU(34,"edit"),t.qZA()()()()()()()),2&i&&(t.Q6J("ngStyle",t.VKq(7,x,s.getBackColor())),t.xp6(2),t.Q6J("src",s.getPicture(),t.LSH),t.xp6(3),t.AsE("",s.staff.names," ",s.staff.lastnames,""),t.xp6(4),t.hij(" ",s.staff.phone,""),t.xp6(4),t.hij(" ",s.staff.email,""),t.xp6(4),t.hij(" ",s.staff.stars,""))},dependencies:[f.PC,d.Hw]})}return n})();const b=["editControlTrigger"],A=["excelUpload"];function U(n,O){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"app-staff",9),t.NdJ("onClicked",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.getStaffClicked(o))}),t.qZA()()}if(2&n){const e=O.$implicit;t.xp6(1),t.Q6J("staff",e)}}const J=[{path:"",component:(()=>{class n{constructor(e,i,s,o,r){this.sharedvar=e,this.dtb=i,this.dg=s,this.snkBar=o,this.route=r,this.arol="K",this.loading=!1,this.staffList=[]}ngOnInit(){var e=this;return(0,m.Z)(function*(){e.sub=e.route.params.subscribe(function(){var i=(0,m.Z)(function*(s){e.arol=s.rol,e.staffList=yield e.dtb.getStaffByFilterAsync({queryType:1,active:!0,stars:0,rol:e.arol})});return function(s){return i.apply(this,arguments)}}())})()}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}getClicked(e){switch(e.index){case 2:this.onStaff();break;case 3:let i=document.getElementById("spanTrigger");i&&(i.style.display="",i.style.position="absolute",i.style.left=e.pageX+5+"px",i.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu())}}getStaffClicked(e){switch(e.tag){case"0":this.snkBar.open(`Rieniciar contrase\xf1a: ${e.names} ${e.lastnames}?.`,"Ok",{duration:5e3}).onAction().subscribe(i=>{e.password="",this.dtb.updateStaffAsync(e)});break;case"1":this.onStaff(e);break;case"2":this.snkBar.open(`Eliminar tasker: ${e.names} ${e.lastnames}?.`,"Ok",{duration:5e3}).onAction().subscribe(i=>{e.active=!1,this.dtb.updateStaffAsync(e)})}}onStaff(e=null){const i=JSON.parse(JSON.stringify(_));if("K"===this.arol){const r=i.controls.findIndex(p=>"rol"===p.name);r>=0&&i.controls.splice(r,1)}let s=!1;e||(e={},s=!0);let o={schema:i,value:e,title:"Datos del Tasker/Usuario",showImage:!0,image:e.picture,imgwidth:300,imgheight:300,newUsr:s};this.dg.aDefault(o).subscribe(r=>{r&&e&&(this.dg.updatePropResult(e,r),e.rol||(e.rol=[]),e.rol.includes(this.arol)||e.rol.push(this.arol),e.rol.includes("A")||e.rol.push("A"),o.image&&(e.picture=o.image),this.dtb.setStaff(e).subscribe({next:c=>{e=c;const k=this.staffList.findIndex(j=>j._id===c._id);k>=0?this.staffList[k]=c:this.staffList.push(c)}}),navigator.clipboard.writeText(`${this.sharedvar.TASKY_SERVER}tasker/?staff=${e._id}`).then(c=>{}).catch(c=>alert(c)),this.snkBar.open("V\xednculo al cliente copiado al portapapeles.","Ok",{duration:3e3}))})}onExcel2Dtb(e){this.excelUpload&&this.excelUpload.nativeElement.click()}onExcelFileSelected(e){const i=e.target.files[0];this.loading=!this.loading,this.dtb.upload2Excel("staff",i).subscribe({next:s=>{this.loading=!1,this.snkBar.open("Base de tasker/usuarios actualizada","Ok",{duration:1e4}).onAction().subscribe(o=>{location.reload()})}})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(v.D),t.Y36(S.k),t.Y36(T.x),t.Y36(Z.ux),t.Y36(l.gz))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-staff-list"]],viewQuery:function(i,s){if(1&i&&(t.Gf(b,5),t.Gf(A,5)),2&i){let o;t.iGM(o=t.CRH())&&(s.editControlTrigger=o.first),t.iGM(o=t.CRH())&&(s.excelUpload=o.first)}},decls:14,vars:4,consts:[[3,"buttons","nav_menu","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"flex","flex-wrap","p-2","gap-1"],[4,"ngFor","ngForOf"],["controlEdit","matMenu"],["mat-menu-item","",3,"click"],["type","file","accept",".xlsx",1,"invisible",3,"change"],["excelUpload",""],[3,"staff","onClicked"]],template:function(i,s){if(1&i&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(r){return s.getClicked(r)}),t.qZA(),t._UZ(1,"span",1,2),t.TgZ(3,"div",3),t.YNc(4,U,2,1,"div",4),t.qZA(),t.TgZ(5,"mat-menu",null,5)(7,"button",6),t.NdJ("click",function(r){return s.onExcel2Dtb(r)}),t.TgZ(8,"mat-icon"),t._uU(9,"build"),t.qZA(),t._uU(10," Importar de Excel "),t.qZA(),t._UZ(11,"hr"),t.qZA(),t.TgZ(12,"input",7,8),t.NdJ("change",function(r){return s.onExcelFileSelected(r)}),t.qZA()),2&i){const o=t.MAs(6);t.Q6J("buttons","11110")("nav_menu",!1),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(3),t.Q6J("ngForOf",s.staffList)}},dependencies:[f.sg,u.VK,u.OP,u.p6,d.Hw,y.G,g]})}return n})()}];let L=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(J),l.Bz]})}return n})();var w=a(769);const B=[{path:"",component:g}];let F=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(B),l.Bz]})}return n})(),M=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[f.ez,F,d.Ps]})}return n})(),E=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[f.ez,L,u.Tx,d.Ps,w.O,M]})}return n})()}}]);