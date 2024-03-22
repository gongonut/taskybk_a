"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[592],{9554:(A,g,n)=>{n.d(g,{g:()=>O});var y=n(3241),o=n(2283),p=n(7087),f=n(3279);const E=["chart"];function L(u,d){if(1&u&&(o.TgZ(0,"div",1),o._UZ(1,"apx-chart",2),o.qZA()),2&u){const t=o.oxw();o.xp6(1),o.Q6J("series",t.chartOptions.series)("chart",t.chartOptions.chart)("fill",t.chartOptions.fill)("legend",t.chartOptions.legend)("plotOptions",t.chartOptions.plotOptions)("xaxis",t.chartOptions.xaxis)("tooltip",t.chartOptions.tooltip)}}let O=(()=>{class u{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.onSelect=new o.vpe}ngOnChanges(t){this.buildChart()}buildChart(){var t=this;return(0,y.Z)(function*(){if(t.data&&0!==t.data.length){switch(t.serieList=[],t.pivot){case 0:case 1:t.timeLineTaskerPivot();break;case 2:t.timeLineTCostumerPivot();break;case 3:t.timeLineProductPivot()}t.chartOptions={series:t.serieList,chart:{height:450,type:"rangeBar",events:{dataPointSelection:(s=(0,y.Z)(function*(e,i,a){yield t.onSelectEvent(t.serieList[a.seriesIndex].data[a.dataPointIndex])}),function(i,a,r){return s.apply(this,arguments)})},toolbar:{show:!0,tools:{zoomin:!0,zoomout:!0}}},plotOptions:{bar:{horizontal:!0,barHeight:"80%",rangeBarGroupRows:1===t.bartype}},xaxis:{type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm"},datetimeUTC:!1},tickAmount:6},fill:{type:"solid"},legend:{position:"top",horizontalAlign:"left"},tooltip:{custom:({seriesIndex:s,dataPointIndex:e})=>{const i=t.data.find(a=>a._id===t.serieList[s].data[e].meta);if(i){let a=`: ${new Date(i.date_ini).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})} >> ${new Date(i.date_end).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})}`;switch(t.pivot){case 0:return i.tasker_name+a;case 1:return i.activity_name+a;case 2:return i.costumer_name+a;case 3:return i.crm_products+a}return i.activity_name+a}return""}}}}var s})()}timeLineTaskerPivot(){this.data.forEach(t=>{const s=this.serieList.findIndex(e=>e.name===t.activity_name);s>=0?this.serieList[s].data.push({x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}):this.serieList.push({name:t.activity_name,data:[{x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}]})}),this.cleanSeries()}timeLineTCostumerPivot(){this.data.forEach(t=>{const s=this.serieList.findIndex(e=>e.name===t.costumer_name);s>=0?this.serieList[s].data.push({x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}):this.serieList.push({name:t.costumer_name,data:[{x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}]})}),this.cleanSeries()}timeLineProductPivot(){(!this.prod_list||0===this.prod_list.length)&&(this.prod_list=[],this.data.forEach(t=>{t.crm_products&&t.crm_products.length>0&&this.prod_list.push(...t.crm_products)}),this.prod_list=[...new Set(this.prod_list)]),this.prod_list.forEach(t=>{this.serieList.push({name:t,data:[]})}),this.data.forEach(t=>{const s=this.serieList.findIndex(e=>t.crm_products.find(i=>e.name===i));s>=0?this.serieList[s].data.push({x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}):this.serieList.push({name:t.costumer_name,data:[{x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}]})}),this.cleanSeries()}onSelectEvent(t){var s=this;return(0,y.Z)(function*(){s.onSelect.emit(t)})()}cleanSeries(){this.serieList.forEach(t=>{let s=0;for(;s<t.data.length;)0===t.data[s].y.length?t.data.splice(s,1):s++})}static#t=this.\u0275fac=function(s){return new(s||u)};static#e=this.\u0275cmp=o.Xpm({type:u,selectors:[["app-time-line"]],viewQuery:function(s,e){if(1&s&&o.Gf(E,5),2&s){let i;o.iGM(i=o.CRH())&&(e.chart=i.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype"},outputs:{onSelect:"onSelect"},features:[o.TTD],decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","fill","legend","plotOptions","xaxis","tooltip"]],template:function(s,e){1&s&&o.YNc(0,L,2,7,"div",0),2&s&&o.Q6J("ngIf",e.data&&e.data.length>0)},dependencies:[p.O5,f.x]})}return u})()},6483:(A,g,n)=>{n.d(g,{q:()=>u});var y=n(7087),o=n(3759),p=n(9554),f=n(2283);const E=[{path:"",component:p.g}];let L=(()=>{class d{static#t=this.\u0275fac=function(e){return new(e||d)};static#e=this.\u0275mod=f.oAB({type:d});static#i=this.\u0275inj=f.cJS({imports:[o.Bz.forChild(E),o.Bz]})}return d})();var O=n(3279);let u=(()=>{class d{static#t=this.\u0275fac=function(e){return new(e||d)};static#e=this.\u0275mod=f.oAB({type:d});static#i=this.\u0275inj=f.cJS({imports:[y.ez,L,O.X]})}return d})()},4537:(A,g,n)=>{n.d(g,{x:()=>d});var y=n(3241),o=n(4344),p=n(2283),f=n(4758),E=n(6806),L=n(1359),O=n(6510),u=n(3620);let d=(()=>{class t{constructor(e,i,a,r,m){this.sharedvar=e,this.dtb=i,this.snkBar=a,this.dg=r,this.ds=m,this.schemaAppoint={controls:[{name:"staff",label:"Responsable:",type:"select",selectOptions:[],validators:{required:!0}},{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"dateend",label:"Fecha y hora final:",type:"datetime-local",validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",sideBtn:"people",style:"w-full",validators:{}},{name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}},{name:"address",label:"Direcci\xf3n",type:"text",style:"w-full",validators:{}},{name:"geoLoc",label:"Geolocalizaci\xf3n",type:"text",style:"w-full",sideBtn:"room",validators:{}},{name:"notes",label:"Notas:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}},{name:"pollgrp_id",label:"Tarea a ejecutar:",type:"select",style:"w-full",selectOptions:[],validators:{}}]},this.groupRefTrue=[]}startAppointData(e){if(this.staffList=e,this.getGroupRef(),this.schemaAppoint.controls){const i=this.schemaAppoint.controls.find(r=>"pollgrp_id"===r.name);i&&(i.selectOptions=this.groupRefTrue);const a=this.schemaAppoint.controls.find(r=>"staff"===r.name);a&&(a.selectOptions=[],e.forEach(r=>{r._id&&a.selectOptions?.push({key:r._id,value:`${r.names} ${r.lastnames}`})}))}}getPollGrpName(e){if(e){const i=this.groupRefTrue.find(a=>a.key===e);if(i)return i.value}return""}getGroupRef(){this.groupRefTrue=[],this.getRefNodeTrue(this.sharedvar.pollGroupIndex)}getRefNodeTrue(e){if(e.children)for(let i=0;i<e.children.length;i++){const a=e.children[i];if(a.ref)this.groupRefTrue.push({key:a.id,value:a.model_name||a.name});else if(a.children&&a.children.length>0)return this.getRefNodeTrue(a)}}onDelAppoint(e,i){!e.appoint||0===e.appoint.length||this.snkBar.open("Eliminar item de la agenda?.","Ok",{duration:5e3}).onAction().subscribe(a=>{e.appoint?.splice(i,1),this.dtb.updateStaffAsync(e)})}onAddEditAppoint(e,i){var a=this;let r;const m=this.schemaAppoint.controls?.findIndex(v=>"contact"===v.name);m&&m>=0&&this.schemaAppoint.controls&&(this.schemaAppoint.controls[m].type="text");const x=this.schemaAppoint.controls?.findIndex(v=>"staff"===v.name);e&&x&&x>=0&&this.schemaAppoint.controls&&(this.schemaAppoint.controls[x].avalue=e._id);const b=-1===i;let h="Agenda ";h+=e?e.names+" "+e.lastnames:"Nueva",e&&e.appoint&&(r=i>=0?{staff:e._id,...e.appoint[i]}:e.appoint[i]);const _=this;this.dg.aDefault({schema:this.schemaAppoint,title:h,value:r,dgwidth:400,function:[{name:"costumer",self:this,function:this.getCostumer1}]}).subscribe(function(){var v=(0,y.Z)(function*(c){if(c){if(!(e=a.staffList.find(C=>C._id==c.staff)))return;e.appoint||(e.appoint=[]),0===c.dateend&&(c.dateend=c.datetime+_.sharedvar.toMinuteNumber(30)),b&&(e.appoint.push({datetime:0,dateend:0,ended:!1}),i=e.appoint.length-1),delete c._btnEvent_,delete c._btnclick_,delete c._propName_,delete c._valid_,delete c.staff,_.staffList=[],e.appoint[i]=_.dg.updatePropResult(e.appoint[i],c),e.appoint[i].pollgrp_model_name=_.getPollGrpName(c.pollgrp_id),_.dtb.updateStaffAsync(e)}});return function(c){return v.apply(this,arguments)}}())}getCostumer1(e,i,a){return(0,y.Z)(function*(){if(!i)return;const r=[],m=yield e.dtb.getActiveCRMCostumAsync();if(!m)return;m.forEach(h=>{h&&r.push({selected:!1,myid:h.id,name:h.name})});const x={title:"Seleccione Cliente",dgheigth:450,viewfilter:!0,viewAdd:!1,multiSelect:!0,valuelst:r},b=yield(0,o.z)(e.ds.aSelectDefault(x));if(b){i.costumer=b[0].name;const h=a.controls?.findIndex(l=>"contact"===l.name);if(h&&h>=0&&a.controls){const l=m.find(v=>v.name===b[0].name),_=[];l?.linkup_1&&_.push({key:l.linkup_1,value:l.linkup_1}),l?.linkup_2&&_.push({key:l?.linkup_2,value:l?.linkup_2}),a.controls[h].type="select",a.controls[h].selectOptions=_}}return{schema:a,value:i}})()}onFilter(e){}static#t=this.\u0275fac=function(i){return new(i||t)(p.LFG(f.D),p.LFG(E.k),p.LFG(L.ux),p.LFG(O.x),p.LFG(u.n))};static#e=this.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},1348:A=>{A.exports=JSON.parse('{"controls":[{"name":"id","label":"Identificaci\xf3n:","type":"text","validators":{"required":true}},{"name":"names","label":"Nombre (s):","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"lastnames","label":"Apellidos (s):","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"city","label":"Ciudad de residencia","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"email","label":"Correo electr\xf3nico","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"phone","label":"Tel\xe9fono","type":"tel","validators":{"required":true}},{"name":"rol","label":"Permiso para editar","type":"multiselect","style":"w-full","validators":{"required":true},"selectOptions":[{"key":"K","value":"Es Tasker"},{"key":"P","value":"Es Administrador"},{"key":"F","value":"Edita tasker"},{"key":"U","value":"Edita usuaro"},{"key":"D","value":"Edita directorio"}]},{"name":"legal_acceptance","label":"Acepto t\xe9rminos de la ley 1581.","type":"checkbox","validators":{"required":true}},{"name":"active","label":"Activo.","type":"checkbox","validators":{"required":true}}]}')}}]);