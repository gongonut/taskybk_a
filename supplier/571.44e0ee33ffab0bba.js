"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[571],{3571:(A,f,s)=>{s.r(f),s.d(f,{PollControlStaffModule:()=>Z});var d=s(7087),u=s(3759),i=s(3241),t=s(2283),h=s(6806),m=s(4758),v=s(3620),C=s(3578),p=s(8464);function y(n,G){if(1&n){const o=t.EpF();t.TgZ(0,"div",4)(1,"div",5),t._uU(2),t.qZA(),t.TgZ(3,"mat-icon",6),t.NdJ("click",function(){const r=t.CHM(o).index,a=t.oxw();return t.KtG(a.onDeleteStaff(r))}),t._uU(4,"delete"),t.qZA()()}if(2&n){const o=G.$implicit;t.xp6(2),t.Oqu(o.staffName)}}const S=[{path:"",component:(()=>{class n{constructor(o,e,l){this.dtb=o,this.sharedvar=e,this.ds=l,this.staffList=[]}ngOnInit(){var o=this;return(0,i.Z)(function*(){o.staffList=yield o.dtb.getStaffByFilterAsync({queryType:1,active:!0,stars:0,rol:"P"})})()}getClicked(o){2===o.index&&this.onSelCtrlStaff()}onSelCtrlStaff(){var o=this;return(0,i.Z)(function*(){const e=[];o.staffList.forEach(r=>{r&&e.push({selected:!1,myid:r._id,name:`${r.names} ${r.lastnames}`})}),o.ds.aSelectDefault({title:"Seleccione Coordinador",dgheigth:450,viewfilter:!0,viewAdd:!1,multiSelect:!0,valuelst:e}).subscribe(function(){var r=(0,i.Z)(function*(a){a&&(a.forEach(c=>{o.sharedvar.pollGrpIndexSub.controlList?.find(b=>b.staff__id===c.myid)||o.sharedvar.pollGrpIndexSub.controlList?.push({staff__id:c.myid,staffName:c.name})}),yield o.dtb.updatePollGroupAsync(o.sharedvar.pollGroupIndex))});return function(a){return r.apply(this,arguments)}}())})()}onDeleteStaff(o){var e=this;return(0,i.Z)(function*(){e.sharedvar.pollGrpIndexSub.controlList?.splice(o,1),yield e.dtb.updatePollGroupAsync(e.sharedvar.pollGroupIndex)})()}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(h.k),t.Y36(m.D),t.Y36(v.n))};static#o=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-poll-control-staff"]],decls:4,vars:3,consts:[[3,"buttons","nav_menu","onClicked"],[1,"h-96","p-4"],[1,"flex-col","flex-wrap","p-2","gap-1"],["class","h-10 flex gap-1 border-b border-gray-100",4,"ngFor","ngForOf"],[1,"h-10","flex","gap-1","border-b","border-gray-100"],[1,"flex-1"],[3,"click"]],template:function(e,l){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(a){return l.getClicked(a)}),t.qZA(),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,y,5,1,"div",3),t.qZA()()),2&e&&(t.Q6J("buttons","10100")("nav_menu",!1),t.xp6(3),t.Q6J("ngForOf",l.sharedvar.pollGrpIndexSub.controlList))},dependencies:[d.sg,C.G,p.Hw]})}return n})()}];let g=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#o=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(S),u.Bz]})}return n})();var x=s(7572),P=s(769);let Z=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#o=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[d.ez,g,x.N,P.O,p.Ps]})}return n})()}}]);