"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[508],{2508:(P,d,a)=>{a.r(d),a.d(d,{DefaultPollModule:()=>C});var p=a(7087),r=a(3759),t=a(2283),h=a(4758),u=a(6655),c=a(8046),m=a(8878),v=a(5499),f=a(3578);const y=[{path:"",component:(()=>{class s{constructor(e,o,l,i,n){this.sharedvar=e,this.dtb=o,this.nvg=l,this.dg=i,this.route=n,this.reset=0}ngOnInit(){this.defaPoll=this.nvg.jsonDefSelect,this.route.paramMap.subscribe(e=>{this.reset+=1,e.get("id")})}ngOnDestroy(){}onGetdefaData(e){e.id===this.sharedvar.pollsSelGroup.id&&(this.dg.updatePropResult(this.sharedvar.pollsSelGroup,e),this.sharedvar.pollGrpIndexSub&&e.name&&this.sharedvar.pollGrpIndexSub.name!==e.name&&(this.sharedvar.pollGrpIndexSub.name=e.name,this.dtb.updatePollGrpAsync(this.sharedvar.pollGroupIndex),this.sharedvar.pollsSelGroup.ref&&this.dtb.updatePollGrpAsync(this.sharedvar.pollsSelGroup)))}getClicked(e){}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(h.D),t.Y36(u.k),t.Y36(c.$),t.Y36(m.x),t.Y36(r.gz))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-default-poll"]],decls:3,vars:5,consts:[[3,"buttons","nav_menu","onClicked"],[1,"h-96","p-4"],[3,"jsonFormData","values","reset","result"]],template:function(o,l){1&o&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(n){return l.getClicked(n)}),t.qZA(),t.TgZ(1,"div",1)(2,"app-dynamic-form",2),t.NdJ("result",function(n){return l.onGetdefaData(n)}),t.qZA()()),2&o&&(t.Q6J("buttons","10000")("nav_menu",!0),t.xp6(2),t.Q6J("jsonFormData",l.defaPoll)("values",l.sharedvar.pollsSelGroup)("reset",l.reset))},dependencies:[v.r,f.G]})}return s})()}];let D=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(y),r.Bz]})}return s})();var g=a(7572),G=a(769);let C=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[p.ez,D,g.N,G.O]})}return s})()}}]);