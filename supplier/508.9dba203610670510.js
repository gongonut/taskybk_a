"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[508],{2508:(A,d,s)=>{s.r(d),s.d(d,{DefaultPollModule:()=>G});var c=s(7087),i=s(3759),u=s(3241),t=s(2283),p=s(4758),h=s(6806),f=s(8046),m=s(6510),v=s(5499),y=s(3578);const P=[{path:"",component:(()=>{class a{constructor(e,o,l,r,n){this.sharedvar=e,this.dtb=o,this.nvg=l,this.dg=r,this.route=n,this.reset=0,this.defaPoll=this.nvg.jsonDefSelect}ngOnInit(){var e=this;return(0,u.Z)(function*(){if(e.defaPoll&&e.defaPoll.controls){let o=[];(yield e.dtb.getStaffByFilterAsync({queryType:1,active:!0,stars:0,rol:"P"})).forEach(n=>{o.push({key:n._id,value:`${n.names||n.email} ${n.lastnames||""}`})});const r=e.defaPoll.controls.find(n=>"staff_admin_id"===n.name);r&&(r.selectOptions=o)}e.route.paramMap.subscribe(o=>{e.reset+=1})})()}ngOnDestroy(){}onGetdefaData(e){this.dg.updatePropResult(this.sharedvar.pollGrpIndexSub,e),this.sharedvar.pollGrpExecuted._id&&(this.dg.updatePropResult(this.sharedvar.pollGrpExecuted,e),this.dtb.updatePollGrpAsync(this.sharedvar.pollGrpExecuted)),this.dtb.updatePollGrpAsync(this.sharedvar.pollGroupIndex)}getClicked(e){}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(p.D),t.Y36(h.k),t.Y36(f.$),t.Y36(m.x),t.Y36(i.gz))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-default-poll"]],decls:3,vars:5,consts:[[3,"buttons","nav_menu","onClicked"],[1,"h-96","p-4"],[3,"jsonFormData","values","reset","result"]],template:function(o,l){1&o&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(n){return l.getClicked(n)}),t.qZA(),t.TgZ(1,"div",1)(2,"app-dynamic-form",2),t.NdJ("result",function(n){return l.onGetdefaData(n)}),t.qZA()()),2&o&&(t.Q6J("buttons","10000")("nav_menu",!0),t.xp6(2),t.Q6J("jsonFormData",l.defaPoll)("values",l.sharedvar.pollGrpExecuted)("reset",l.reset))},dependencies:[v.r,y.G]})}return a})()}];let D=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275mod=t.oAB({type:a});static#s=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(P),i.Bz]})}return a})();var C=s(7572),g=s(769);let G=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275mod=t.oAB({type:a});static#s=this.\u0275inj=t.cJS({imports:[c.ez,D,C.N,g.O]})}return a})()}}]);