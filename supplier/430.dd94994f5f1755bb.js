"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[430],{430:(E,f,s)=>{s.r(f),s.d(f,{TargetModule:()=>U});var p=s(7087),m=s(3759),d=s(3241),t=s(2283),v=s(4758),y=s(6510),T=s(3620),Z=s(6806),C=s(3578),g=s(8464),u=s(9347);const x=["editControlTrigger"];function k(r,L){if(1&r){const a=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t._uU(2),t.qZA(),t.TgZ(3,"div",11),t._uU(4,"Tel\xe9fono:"),t.qZA(),t._uU(5,"\xa0 "),t.TgZ(6,"div",12),t._uU(7),t.qZA(),t._UZ(8,"div",13),t.TgZ(9,"div",11),t._uU(10,"Correo:"),t.qZA(),t._uU(11,"\xa0 "),t.TgZ(12,"div",14),t._uU(13),t.qZA(),t.TgZ(14,"mat-icon",15),t.NdJ("click",function(){const o=t.CHM(a).index,i=t.oxw();return t.KtG(i.onDeleteStaff(o))}),t._uU(15,"delete"),t.qZA()()}if(2&r){const a=L.$implicit,e=t.oxw();t.xp6(2),t.Oqu(e.getTaskerStrData(0,a)),t.xp6(5),t.Oqu(e.getTaskerStrData(1,a)),t.xp6(6),t.Oqu(e.getTaskerStrData(2,a))}}const b=[{path:"",component:(()=>{class r{constructor(a,e,n,o){this.sharedvar=a,this.dg=e,this.ds=n,this.dtb=o}ngOnInit(){return(0,d.Z)(function*(){})()}getClicked(a){if(2===a.index){let e=document.getElementById("spanTrigger");e&&(e.style.display="",e.style.position="absolute",e.style.left=a.pageX+5+"px",e.style.top=a.pageY+5+"px",this.editControlTrigger.openMenu())}}onTaskerCond(a,e){var n=this;return(0,d.Z)(function*(){switch(a){case 0:yield n.onSelCtrlStaff();break;case 1:n.filterStaff()}})()}onSelCtrlStaff(){var a=this;return(0,d.Z)(function*(){const e=[];(yield a.dtb.getStaffByFilterAsync({queryType:1,active:!0,stars:0,rol:"K"})).forEach(i=>{i&&e.push({selected:!1,myid:i._id,name:`${i.names} ${i.second_names}`,hide1:`${i.phone}:${i.email}`})}),a.ds.aSelectDefault({title:"Seleccione Tasker",dgheigth:450,viewfilter:!0,viewAdd:!1,multiSelect:!0,valuelst:e}).subscribe(function(){var i=(0,d.Z)(function*(l){l&&a.updateTaskerList(l)});return function(l){return i.apply(this,arguments)}}())})()}updateTaskerList(a){var e=this;return(0,d.Z)(function*(){a.forEach(n=>{e.sharedvar.pollGrpExecuted.taskerList?.includes(n.myid)||(e.sharedvar.pollGrpExecuted.taskerList.push(n.myid),e.sharedvar.pollGrpExecuted.taskerNameList.push(n.name+":"+n.hide1))}),yield e.dtb.updatePollGroupAsync(e.sharedvar.pollGrpExecuted)})()}filterStaff(){var a=this;this.dg.aDefault({schema:{controls:[{name:"age_from",label:"edad m\xednima:",type:"number",default:18,validators:{}},{name:"age_to",label:"edad l\xedmite:",type:"number",default:100,validators:{}},{name:"city",label:"Ciudad",type:"textarea",style:"w-full",totalRows:5,validators:{}},{name:"studyLevel",label:"Nivel del estudio:",type:"select",validators:{},selectOptions:[{key:"0",value:"Ninguno"},{key:"1",value:"Primaria"},{key:"2",value:"Secundario"},{key:"3",value:"Universitario"}]},{name:"stars",label:"Calificaci\xf3n (1..5):",type:"number",default:1,validators:{min:1,max:5}}]},title:"Filtros",dgwidth:300}).subscribe(function(){var o=(0,d.Z)(function*(i){if(i){const l={queryType:3,active:!0,rol:"K"};i.city&&i.city.length>0&&(l.city=i.city.split("\n")),i.studyLevel&&(l.studyLevel=i.studyLevel);const h=yield a.dtb.getStaffByFilterAsync(l);if(!h)return;i=[],h.forEach(c=>{i.push({myid:c._id,name:`${c.names} ${c.second_names}`,hide1:`${c.phone}:${c.email}`})}),a.updateTaskerList(i)}});return function(i){return o.apply(this,arguments)}}())}execFilter(){return(0,d.Z)(function*(){})()}getTaskerStrData(a,e){return e.split(":")[a]||""}onDeleteStaff(a){var e=this;return(0,d.Z)(function*(){e.sharedvar.pollGrpExecuted.taskerList?.splice(a,1),e.sharedvar.pollGrpExecuted.taskerNameList?.splice(a,1),yield e.dtb.updatePollGroupAsync(e.sharedvar.pollGrpExecuted)})()}static#t=this.\u0275fac=function(e){return new(e||r)(t.Y36(v.D),t.Y36(y.x),t.Y36(T.n),t.Y36(Z.k))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-target"]],viewQuery:function(e,n){if(1&e&&t.Gf(x,5),2&e){let o;t.iGM(o=t.CRH())&&(n.editControlTrigger=o.first)}},decls:23,vars:4,consts:[[3,"buttons","nav_menu","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"h-96","p-4"],[1,"flex-col","flex-wrap","p-2","gap-1"],["class","h-10 flex gap-1 border-b border-gray-100",4,"ngFor","ngForOf"],["targetEdit","matMenu"],[1,"h-8","m-2","font-medium","text-xl"],["mat-menu-item","",3,"click"],[1,"h-10","flex","gap-1","border-b","border-gray-100"],[1,"w-60","font-medium"],[1,"font-thin"],[1,"w-20","font-thin","text-gray-400"],[1,"w-2"],[1,"w-72","font-thin","text-gray-400"],[1,"text-gray-300","hover:text-violet-500",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(i){return n.getClicked(i)}),t.qZA(),t._UZ(1,"span",1,2),t.TgZ(3,"div",3)(4,"div",4),t.YNc(5,k,16,3,"div",5),t.qZA()(),t.TgZ(6,"mat-menu",null,6)(8,"div",7),t._uU(9,"Condiciones"),t.qZA(),t._UZ(10,"hr"),t.TgZ(11,"button",8),t.NdJ("click",function(){return n.onTaskerCond(0,"De la lista")}),t.TgZ(12,"mat-icon"),t._uU(13,"build"),t.qZA(),t._uU(14," De la lista "),t.qZA(),t.TgZ(15,"button",8),t.NdJ("click",function(){return n.onTaskerCond(1,"De un filtro")}),t.TgZ(16,"mat-icon"),t._uU(17,"file_download"),t.qZA(),t._uU(18," Filtro "),t.qZA(),t.TgZ(19,"button",8),t.NdJ("click",function(){return n.onTaskerCond(2,"Todos")}),t.TgZ(20,"mat-icon"),t._uU(21,"file_download"),t.qZA(),t._uU(22," Todos "),t.qZA()()),2&e){const o=t.MAs(7);t.Q6J("buttons","10100")("nav_menu",!0),t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(4),t.Q6J("ngForOf",n.sharedvar.pollGrpExecuted.taskerNameList)}},dependencies:[p.sg,C.G,g.Hw,u.VK,u.OP,u.p6]})}return r})()}];let A=(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#e=this.\u0275mod=t.oAB({type:r});static#a=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(b),m.Bz]})}return r})();var _=s(769),S=s(7572);let U=(()=>{class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#e=this.\u0275mod=t.oAB({type:r});static#a=this.\u0275inj=t.cJS({imports:[p.ez,A,_.O,S.N,g.Ps,u.Tx]})}return r})()}}]);