"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[357],{9381:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>PollDetailComponent});var C_Users_Juan_Carlos_Documents_proyectos_tasky_tasky_supplier_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3241),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2283),src_app_shared_var_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4758),src_app_dialog_service__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6510),_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1359),src_app_database_service__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6806),_angular_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7087),_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5499),_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9347),_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(8464);const _c0=["parent"],_c1=["editControlTrigger"];function PollDetailComponent_div_2_Template(o,s){if(1&o){const l=_angular_core__WEBPACK_IMPORTED_MODULE_0__.EpF();_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"div",7,8)(2,"app-dynamic-form",9),_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("result",function(c){_angular_core__WEBPACK_IMPORTED_MODULE_0__.CHM(l);const e=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();return _angular_core__WEBPACK_IMPORTED_MODULE_0__.KtG(e.onGetData(c))}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()}if(2&o){const l=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("jsonFormData",l.sharedvar.pollSelected.schema)("editBtn","more_horiz")}}let PollDetailComponent=(()=>{class _PollDetailComponent{constructor(o,s,l,r){this.sharedvar=o,this.dg=s,this.snkBar=l,this.dtb=r,this.roundBtnClass="",this.defaPoll={controls:[{name:"welcome",label:"welcome",default:"Selecciona un Modelo",type:"header",style:"w-full",validators:{}}]}}ngOnInit(){var o=this;return(0,C_Users_Juan_Carlos_Documents_proyectos_tasky_tasky_supplier_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(){let s=100;o.parentEl&&(s=o.parentEl.nativeElement.offsetLeft),o.roundBtnClass=`fixed z-90 bottom-8 left-${s} border-solid border-2 bg-white w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-violet-700 hover:bg-gray-200`})()}ngOnDestroy(){}getClicked(o){2===o.index&&this.onAddEditControl(-1)}onAddEditControl(o=-1){if(!this.sharedvar.pollSelected)return void this.snkBar.open("Seleccione un modelo.","Ok",{duration:5e3});let s;this.sharedvar.pollSelected.schema.controls||(this.sharedvar.pollSelected.schema.controls=[]),o>=0&&(s=JSON.parse(JSON.stringify(this.sharedvar.pollSelected.schema.controls[o]))),this.dg.aDinamycDialog(s).subscribe(l=>{if(l){if(!l._valid_)return void this.snkBar.open("Debe ingresar la informaci\xf3n solicitada.","Ok",{duration:5e3});let r=JSON.parse(JSON.stringify(this.sharedvar.pollSelected?.schema));const c=this.buildPollItem(l);s?r.controls[o]=c:r.controls.push(c),this.sharedvar.pollSelected&&(this.sharedvar.pollSelected.schema=r)}})}buildPollItem(item){const ctrl={name:this.getUniqueName(item.name),label:item.label,type:item.type,validators:item.validators||{}};return item.default&&(ctrl.default=item.default),item.style&&(ctrl.style=item.style),item.default&&(ctrl.default=item.default),item.selectOptions&&(ctrl.selectOptions=eval(item.selectOptions)),item.totalRows&&(ctrl.totalRows=item.totalRows),item.avalue&&(ctrl.avalue=item.avalue),item.description&&(ctrl.description=item.description),item.tags&&(ctrl.tags=item.tags),item.required?ctrl.validators.required=!0:ctrl.validators.nullValidator=!0,item.sideBtn&&(ctrl.sideBtn=item.sideBtn),item.sideBtn2&&(ctrl.sideBtn2=item.sideBtn2),item.disabled&&(ctrl.disabled=item.disabled),ctrl}getUniqueName(o){let s=1,l=o;for(let r=0;r<this.sharedvar.pollGrpExecuted.pollList.length;r++){const c=this.sharedvar.pollGrpExecuted.pollList[r].schema.controls||[];for(let e=0;e<c.length;e++)if(c[e].name===l){s++,l=`${l}_${s}`,r=-1;break}}return l}onGetData(o){this.result=o;const s=this.result._propName_;if(this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema.controls){const l=this.sharedvar.pollSelected.schema.controls.findIndex(r=>r.name===s);if(l>=0){this.ctrlSel=l;let r=document.getElementById("spanTrigger");r&&(r.style.display="",r.style.position="absolute",r.style.left=o._btnEvent_.pageX+5+"px",r.style.top=o._btnEvent_.pageY+5+"px",this.editControlTrigger.openMenu())}}}onGetGeneralData(o){this.dg.updatePropResult(this.sharedvar.pollSelected,o)}onEditCtrl(){this.onAddEditControl(this.ctrlSel)}onHelpCtrl(){if(this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema&&this.sharedvar.pollSelected.schema.controls){const o=this.sharedvar.pollSelected.schema.controls[this.ctrlSel];this.dg.aDefault({title:"Ayuda/Tips",schema:{controls:[{name:"help",label:"Ayuda:",type:"textarea",style:"w-full",totalRows:5,validators:{}}]},value:{help:o.tags?o.tags.help:""},dgheigth:315}).subscribe(function(){var r=(0,C_Users_Juan_Carlos_Documents_proyectos_tasky_tasky_supplier_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(c){c&&(o.tags||(o.tags=[]),o.tags.help=c.help)});return function(c){return r.apply(this,arguments)}}())}}onDeleteCtrl(){this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema.controls?.splice(this.ctrlSel,1)}onSwitchCtrl(){if(this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema.controls&&this.ctrlSel>0){const o=this.sharedvar.pollSelected.schema.controls[this.ctrlSel];this.sharedvar.pollSelected.schema.controls[this.ctrlSel]=this.sharedvar.pollSelected.schema.controls[this.ctrlSel-1],this.sharedvar.pollSelected.schema.controls[this.ctrlSel-1]=o}}onDupCtrl(){if(this.sharedvar.pollSelected&&this.sharedvar.pollSelected.schema.controls){const o=JSON.stringify(this.sharedvar.pollSelected.schema.controls[this.ctrlSel]);this.sharedvar.pollSelected.schema.controls.push(JSON.parse(o))}}static#_=this.\u0275fac=function o(s){return new(s||_PollDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(src_app_shared_var_service__WEBPACK_IMPORTED_MODULE_2__.D),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(src_app_dialog_service__WEBPACK_IMPORTED_MODULE_3__.x),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.ux),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(src_app_database_service__WEBPACK_IMPORTED_MODULE_5__.k))};static#_2=this.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({type:_PollDetailComponent,selectors:[["app-poll-detail"]],viewQuery:function o(s,l){if(1&s&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gf(_c0,5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gf(_c1,5)),2&s){let r;_angular_core__WEBPACK_IMPORTED_MODULE_0__.iGM(r=_angular_core__WEBPACK_IMPORTED_MODULE_0__.CRH())&&(l.parentEl=r.first),_angular_core__WEBPACK_IMPORTED_MODULE_0__.iGM(r=_angular_core__WEBPACK_IMPORTED_MODULE_0__.CRH())&&(l.editControlTrigger=r.first)}},decls:28,vars:4,consts:[["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],["class","p-2 flex flex-col items-stretch",4,"ngIf"],[3,"click"],["controlEdit","matMenu"],["mat-menu-item","",3,"click"],[1,"mat-18"],[1,"p-2","flex","flex-col","items-stretch"],["parent",""],[3,"jsonFormData","editBtn","result"]],template:function o(s,l){if(1&s&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(0,"span",0,1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(2,PollDetailComponent_div_2_Template,3,2,"div",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(3,"button",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click",function(){return l.onAddEditControl()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(4,"mat-icon"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(5,"add"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(6,"mat-menu",null,4)(8,"button",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click",function(){return l.onEditCtrl()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(9,"mat-icon",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(10,"edit"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(11," Editar "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(12,"button",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click",function(){return l.onHelpCtrl()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(13,"mat-icon",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(14,"question_mark"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(15," Ayuda/Tips "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(16,"button",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click",function(){return l.onDeleteCtrl()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(17,"mat-icon",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(18,"delete"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(19," Eliminar "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(20,"button",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click",function(){return l.onSwitchCtrl()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(21,"mat-icon",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(22,"import_export"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(23," Subir una posici\xf3n "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(24,"button",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click",function(){return l.onDupCtrl()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(25,"mat-icon",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(26,"copy"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(27," Duplicar "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()),2&s){const r=_angular_core__WEBPACK_IMPORTED_MODULE_0__.MAs(7);_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("matMenuTriggerFor",r),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",l.sharedvar.pollSelected&&l.sharedvar.pollSelected.schema),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Tol(l.roundBtnClass)}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_6__.O5,_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__.r,_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.VK,_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.OP,_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.p6,_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.Hw]})}return _PollDetailComponent})()},6357:(o,s,l)=>{l.r(s),l.d(s,{PollListEditModule:()=>J});var r=l(7087),c=l(3759),e=l(2283),g=l(4758),f=l(6806),D=l(6510),u=l(1359),v=l(3578),T=l(3241),A=l(8046),P=l(6410),p=l(8464);const b=["parent"];function L(a,m){if(1&a){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8),e._uU(2),e.TgZ(3,"mat-icon",9),e.NdJ("click",function(){const i=e.CHM(t).index,d=e.oxw();return e.KtG(d.onAddEditPoll(i))}),e._uU(4,"edit"),e.qZA()(),e.TgZ(5,"p",10),e._uU(6),e.qZA(),e.TgZ(7,"div",11)(8,"div",12)(9,"div",13)(10,"input",14),e.NdJ("change",function(n){const d=e.CHM(t).$implicit,h=e.oxw();return e.KtG(h.setBoolStartState(d,n))}),e.qZA(),e.TgZ(11,"label",15),e._uU(12,"Inicio"),e.qZA()(),e.TgZ(13,"div",16)(14,"input",17),e.NdJ("change",function(n){const d=e.CHM(t).$implicit,h=e.oxw();return e.KtG(h.setBoolEndState(d,n))}),e.qZA(),e.TgZ(15,"label",18),e._uU(16,"Fin"),e.qZA()()(),e.TgZ(17,"div")(18,"button",19),e.NdJ("click",function(){const i=e.CHM(t).index,d=e.oxw();return e.KtG(d.onDelete(i))}),e.TgZ(19,"mat-icon"),e._uU(20,"delete"),e.qZA()(),e._uU(21," \xa0 "),e.TgZ(22,"button",20),e.NdJ("click",function(){const i=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.onDetaill(i))}),e._uU(23," Detalle "),e.TgZ(24,"mat-icon"),e._uU(25,"east"),e.qZA()()()()()}if(2&a){const t=m.$implicit,_=e.oxw();e.Q6J("ngClass",_.getClass(t)),e.xp6(2),e.hij("",t.title," "),e.xp6(4),e.Oqu(t.description),e.xp6(4),e.Q6J("checked",t.allowStart),e.xp6(4),e.Q6J("checked",t.allowEnd)}}let C=(()=>{class a{constructor(t,_,n,i,d){this.sharedvar=t,this.dtb=_,this.dg=n,this.snkBar=i,this.nvg=d,this.onClicked=new e.vpe,this.roundBtnClass="",this.flexHeightClass="overflow-auto flex flex-row flex-wrap p-2 gap-2",this.formData={controls:[{name:"title",label:"Nombre del Modelo:",type:"text",style:"w-full",validators:{required:!0}},{name:"description",label:"Descripci\xf3n:",type:"textarea",totalRows:4,style:"w-full",validators:{}},{name:"allowStart",label:"Iniciar",type:"checkbox",validators:{}},{name:"allowEnd",label:"Finalizar",type:"checkbox",validators:{}}]},this.formDataOnStartEnd={controls:[{name:"sendMail2",label:"Enviar a correos electr\xf3nicos:",type:"textarea",totalRows:4,style:"w-full",validators:{}},{name:"geoLoc",label:"Agregar ubicaci\xf3n",type:"checkbox",validators:{}}]}}ngOnInit(){var t=this;return(0,T.Z)(function*(){let _=100;t.parentEl&&(_=t.parentEl.nativeElement.offsetLeft),t.roundBtnClass=`fixed z-90 bottom-8 left-${_} border-solid border-2 bg-white w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-violet-700 hover:bg-gray-200`,t.flexHeightClass="w-96 flex flex-col p-2 gap-2 "})()}getClicked(t){2===t.index&&this.onAddEditPoll()}getClass(t){let _="h-[12rem] w-80 rounded-md p-3 shadow-lg ";return this.sharedvar.pollSelected?.id===t.id?_+"bg-yellow-100 ":_+"bg-white "}onAddEditPoll(t=-1){let _=this.dtb.newPoll();t>=0&&(_=this.sharedvar.pollGrpExecuted.pollList[t]),this.dg.aDefault({title:"Modelo",schema:this.formData,dgwidth:300,dgheigth:450,value:_}).subscribe(i=>{if(i){if(!i._valid_)return void this.snkBar.open("Debe ingresar la informaci\xf3n solicitada.","Ok",{duration:5e3});this.dg.updatePropResult(_,i),t<0?this.sharedvar.pollGrpExecuted.pollList.push(_):this.sharedvar.pollGrpExecuted.pollList[t]=_,this.sharedvar.pollSelected=_}})}setBoolStartState(t,_){t.allowStart=_.target.checked,this.sharedvar.pollGrpExecuted.pollList.sort((n,i)=>Number(i.allowStart)-Number(n.allowStart))}setBoolEndState(t,_){t.allowEnd=_.target.checked}setBool(t){t.allowStart&&this.sharedvar.pollGrpExecuted.pollList.forEach(_=>{_.id!==t.id&&(t.allowStart=!1)})}onStarEndData(t){let _;_=t?this.sharedvar.pollGrpExecuted.onStart:this.sharedvar.pollGrpExecuted.onEnd,this.dg.aDefault({schema:this.formDataOnStartEnd,value:_,title:"Actividades autom\xe1ticas",dgwidth:350,dgheigth:350}).subscribe(i=>{i&&(t?this.sharedvar.pollGrpExecuted.onStart=i:this.sharedvar.pollGrpExecuted.onEnd=i)})}onDetaill(t){this.sharedvar.pollSelected=t,this.onClicked.emit(t)}onDelete(t){this.snkBar.open(`Eliminar: ${this.sharedvar.pollGrpExecuted.pollList[t].title}.`,"Eliminar",{duration:5e3}).onAction().subscribe(_=>{this.sharedvar.pollGrpExecuted.pollList.splice(t,1),this.sharedvar.pollSelected=null})}getButtonPos(){let t=100;return this.parentEl&&(t=this.parentEl.nativeElement.offsetLeft),console.log("Element",t),`fixed z-90 bottom-8 left-${t} bg-black w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-red-500 hover:bg-gray-700`}static#e=this.\u0275fac=function(_){return new(_||a)(e.Y36(g.D),e.Y36(f.k),e.Y36(D.x),e.Y36(u.ux),e.Y36(A.$))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-poll-list"]],viewQuery:function(_,n){if(1&_&&e.Gf(b,5),2&_){let i;e.iGM(i=e.CRH())&&(n.parentEl=i.first)}},outputs:{onClicked:"onClicked"},decls:19,vars:5,consts:[["parent",""],[1,"flex","flex-col","gap-1"],[1,"flex","items-center","justify-start","h-12","w-80","rounded-md","bg-white","p-3","shadow-lg",3,"click"],[1,"flex-1","mt-1","mb-2","font-medium","leading-tight","overflow-hidden"],["mat-stroked-button","","color","primary"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"click"],[3,"ngClass"],[1,"mb-2","font-medium","leading-tight","overflow-hidden"],[1,"text-violet-500","ml-2",3,"click"],[1,"mb-4","h-12","pl-3","overflow-hidden"],[1,"flex","items-center","justify-start"],[1,"flex-1"],[1,"flex","items-center","mb-1"],["id","inicio","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"checked","change"],["for","inicio",1,"ml-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],[1,"flex","items-center"],["checked","","id","fin","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"checked","change"],["for","fin",1,"ml-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary",3,"click"]],template:function(_,n){1&_&&(e.TgZ(0,"div",null,0)(2,"div",1)(3,"div",2),e.NdJ("click",function(){return n.onStarEndData(!0)}),e.TgZ(4,"div",3),e._uU(5,"Actividades comienzo"),e.qZA(),e.TgZ(6,"div")(7,"button",4),e._uU(8," Detalle "),e.qZA()()(),e.TgZ(9,"div",2),e.NdJ("click",function(){return n.onStarEndData(!1)}),e.TgZ(10,"div",3),e._uU(11,"Actividades Fin"),e.qZA(),e.TgZ(12,"div")(13,"button",4),e._uU(14," Detalle "),e.qZA()()(),e.YNc(15,L,26,5,"div",5),e.qZA()(),e.TgZ(16,"button",6),e.NdJ("click",function(){return n.onAddEditPoll()}),e.TgZ(17,"mat-icon"),e._uU(18,"add"),e.qZA()()),2&_&&(e.Tol(n.flexHeightClass),e.xp6(15),e.Q6J("ngForOf",n.sharedvar.pollGrpExecuted.pollList),e.xp6(1),e.Tol(n.roundBtnClass))},dependencies:[r.mk,r.sg,P.lW,p.Hw]})}return a})();var M=l(9381);function B(a,m){1&a&&e._UZ(0,"app-poll-list")}function U(a,m){if(1&a){const t=e.EpF();e.TgZ(0,"div",5)(1,"div",6)(2,"app-poll-list",7),e.NdJ("onClicked",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.getClicked(n))}),e.qZA()(),e.TgZ(3,"div",8),e._UZ(4,"app-poll-detail"),e.qZA()()}}const x=[{path:"",component:(()=>{class a{constructor(t,_,n,i){this.sharedvar=t,this.dtb=_,this.dg=n,this.snkBar=i,this.screenSplit=!0,this.formData={controls:[{name:"title",label:"Nombre del Modelo:",type:"text",style:"w-full",validators:{required:!0}},{name:"description",label:"Descripci\xf3n:",type:"textarea",style:"w-full h-36",totalRows:5,validators:{}},{name:"allowStart",label:"Iniciar",type:"checkbox",validators:{}},{name:"allowEnd",label:"Finalizar",type:"checkbox",validators:{}}]}}ngOnInit(){this.sharedvar.pollSelected=this.sharedvar.pollGrpExecuted.pollList.length>0?this.sharedvar.pollGrpExecuted.pollList[0]:null}getClicked(t){}onAddEditPoll(t=-1){let _=this.dtb.newPoll();t>=0&&(_=this.sharedvar.pollGrpExecuted.pollList[t]),this.dg.aDefault({title:"Modelo",schema:this.formData,dgwidth:300,dgheigth:450,value:_}).subscribe(i=>{if(i){if(!i._valid_)return void this.snkBar.open("Debe ingresar la informaci\xf3n solicitada.","Ok",{duration:5e3});this.dg.updatePropResult(_,i),t<0?this.sharedvar.pollGrpExecuted.pollList.push(_):this.sharedvar.pollGrpExecuted.pollList[t]=_}})}static#e=this.\u0275fac=function(_){return new(_||a)(e.Y36(g.D),e.Y36(f.k),e.Y36(D.x),e.Y36(u.ux))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-poll-list-edit"]],decls:5,vars:4,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","nav_menu","onClicked"],[1,"flex-1","m-2","overflow-scroll"],[4,"ngIf"],["class","flex max-h-screen",4,"ngIf"],[1,"flex","max-h-screen"],[1,"overflow-y-visible","h-screen","w-96","bg-slate-200"],[3,"onClicked"],[1,"overflow-y-visible","h-screen","w-3/5","p-2"]],template:function(_,n){1&_&&(e.TgZ(0,"div",0)(1,"app-header",1),e.NdJ("onClicked",function(d){return n.getClicked(d)}),e.qZA(),e.TgZ(2,"div",2),e.YNc(3,B,1,0,"app-poll-list",3),e.YNc(4,U,5,0,"div",4),e.qZA()()),2&_&&(e.xp6(1),e.Q6J("buttons","110101")("nav_menu",!0),e.xp6(2),e.Q6J("ngIf",!n.screenSplit),e.xp6(1),e.Q6J("ngIf",n.screenSplit))},dependencies:[r.O5,v.G,C,M.p]})}return a})()}];let y=(()=>{class a{static#e=this.\u0275fac=function(_){return new(_||a)};static#t=this.\u0275mod=e.oAB({type:a});static#_=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(x),c.Bz]})}return a})();var E=l(769),O=l(7572);const k=[{path:"",component:C}];let I=(()=>{class a{static#e=this.\u0275fac=function(_){return new(_||a)};static#t=this.\u0275mod=e.oAB({type:a});static#_=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(k),c.Bz]})}return a})();var R=l(6302);let K=(()=>{class a{static#e=this.\u0275fac=function(_){return new(_||a)};static#t=this.\u0275mod=e.oAB({type:a});static#_=this.\u0275inj=e.cJS({imports:[r.ez,I,E.O,P.ot,p.Ps,R.p9]})}return a})();const w=[{path:"",component:M.p}];let W=(()=>{class a{static#e=this.\u0275fac=function(_){return new(_||a)};static#t=this.\u0275mod=e.oAB({type:a});static#_=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(w),c.Bz]})}return a})();var S=l(9347);let Z=(()=>{class a{static#e=this.\u0275fac=function(_){return new(_||a)};static#t=this.\u0275mod=e.oAB({type:a});static#_=this.\u0275inj=e.cJS({imports:[r.ez,W,u.ZX,O.N,E.O,S.Tx,p.Ps]})}return a})(),J=(()=>{class a{static#e=this.\u0275fac=function(_){return new(_||a)};static#t=this.\u0275mod=e.oAB({type:a});static#_=this.\u0275inj=e.cJS({imports:[r.ez,y,E.O,O.N,K,Z]})}return a})()}}]);