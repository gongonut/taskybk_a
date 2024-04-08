"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[592],{9554:(b,C,o)=>{o.d(C,{g:()=>O});var _=o(3241),l=o(2283),p=o(7087),v=o(3279);const E=["chart"];function x(m,c){if(1&m&&(l.TgZ(0,"div",1),l._UZ(1,"apx-chart",2),l.qZA()),2&m){const t=l.oxw();l.xp6(1),l.Q6J("series",t.chartOptions.series)("chart",t.chartOptions.chart)("fill",t.chartOptions.fill)("legend",t.chartOptions.legend)("plotOptions",t.chartOptions.plotOptions)("xaxis",t.chartOptions.xaxis)("tooltip",t.chartOptions.tooltip)}}let O=(()=>{class m{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.onSelect=new l.vpe}ngOnChanges(t){this.buildChart()}buildChart(){var t=this;return(0,_.Z)(function*(){if(t.data&&0!==t.data.length){switch(t.serieList=[],t.pivot){case 0:case 1:t.timeLineTaskerPivot();break;case 2:t.timeLineTCostumerPivot();break;case 3:t.timeLineProductPivot()}t.chartOptions={series:t.serieList,chart:{height:450,type:"rangeBar",events:{dataPointSelection:(s=(0,_.Z)(function*(e,i,a){yield t.onSelectEvent(t.serieList[a.seriesIndex].data[a.dataPointIndex])}),function(i,a,n){return s.apply(this,arguments)})},toolbar:{show:!0,tools:{zoomin:!0,zoomout:!0}}},plotOptions:{bar:{horizontal:!0,barHeight:"80%",rangeBarGroupRows:1===t.bartype}},xaxis:{type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm T"},datetimeUTC:!1}},fill:{type:"solid"},legend:{position:"top",horizontalAlign:"left"},tooltip:{custom:({seriesIndex:s,dataPointIndex:e})=>{const i=t.data.find(a=>a._id===t.serieList[s].data[e].meta);if(i){let a=`: ${new Date(i.date_ini).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})} >> ${new Date(i.date_end).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})}`;switch(t.pivot){case 0:return i.tasker_name+a;case 1:return i.activity_name+a;case 2:return i.costumer_name+a;case 3:return i.crm_products+a}return i.activity_name+a}return""}}}}var s})()}timeLineTaskerPivot(){this.data.forEach(t=>{const s=this.serieList.findIndex(e=>e.name===t.activity_name);s>=0?this.serieList[s].data.push({x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}):this.serieList.push({name:t.activity_name,data:[{x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}]})}),this.cleanSeries()}timeLineTCostumerPivot(){this.data.forEach(t=>{const s=this.serieList.findIndex(e=>e.name===t.costumer_name);s>=0?this.serieList[s].data.push({x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}):this.serieList.push({name:t.costumer_name,data:[{x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}]})}),this.cleanSeries()}timeLineProductPivot(){(!this.prod_list||0===this.prod_list.length)&&(this.prod_list=[],this.data.forEach(t=>{t.crm_products&&t.crm_products.length>0&&this.prod_list.push(...t.crm_products)}),this.prod_list=[...new Set(this.prod_list)]),this.prod_list.forEach(t=>{this.serieList.push({name:t,data:[]})}),this.data.forEach(t=>{const s=this.serieList.findIndex(e=>t.crm_products.find(i=>e.name===i));s>=0?this.serieList[s].data.push({x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}):this.serieList.push({name:t.costumer_name,data:[{x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}]})}),this.cleanSeries()}onSelectEvent(t){var s=this;return(0,_.Z)(function*(){s.onSelect.emit(t)})()}cleanSeries(){this.serieList.forEach(t=>{let s=0;for(;s<t.data.length;)0===t.data[s].y.length?t.data.splice(s,1):s++})}static#e=this.\u0275fac=function(s){return new(s||m)};static#t=this.\u0275cmp=l.Xpm({type:m,selectors:[["app-time-line"]],viewQuery:function(s,e){if(1&s&&l.Gf(E,5),2&s){let i;l.iGM(i=l.CRH())&&(e.chart=i.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype"},outputs:{onSelect:"onSelect"},features:[l.TTD],decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","fill","legend","plotOptions","xaxis","tooltip"]],template:function(s,e){1&s&&l.YNc(0,x,2,7,"div",0),2&s&&l.Q6J("ngIf",e.data&&e.data.length>0)},dependencies:[p.O5,v.x]})}return m})()},6483:(b,C,o)=>{o.d(C,{q:()=>m});var _=o(7087),l=o(3759),p=o(9554),v=o(2283);const E=[{path:"",component:p.g}];let x=(()=>{class c{static#e=this.\u0275fac=function(e){return new(e||c)};static#t=this.\u0275mod=v.oAB({type:c});static#i=this.\u0275inj=v.cJS({imports:[l.Bz.forChild(E),l.Bz]})}return c})();var O=o(3279);let m=(()=>{class c{static#e=this.\u0275fac=function(e){return new(e||c)};static#t=this.\u0275mod=v.oAB({type:c});static#i=this.\u0275inj=v.cJS({imports:[_.ez,x,O.X]})}return c})()},4537:(b,C,o)=>{o.d(C,{x:()=>c});var _=o(3241),l=o(4344),p=o(2283),v=o(4758),E=o(6806),x=o(1359),O=o(7883),m=o(3620);let c=(()=>{class t{constructor(e,i,a,n,f){this.sharedvar=e,this.dtb=i,this.snkBar=a,this.dg=n,this.ds=f,this.schemaAppoint={controls:[{name:"staff",label:"Responsable:",type:"select",selectOptions:[],validators:{required:!0}},{name:"datetime",label:"Fecha y hora:",type:"datetime-local",validators:{required:!0}},{name:"dateend",label:"Fecha y hora final sugerida:",type:"datetime-local",sideBtn:"more_time",validators:{required:!0}},{name:"notes",label:"Notas:",type:"textarea",totalRows:4,style:"w-full",validators:{required:!0}},{name:"costumer",label:"Cliente",type:"text",sideBtn:"people",style:"w-full",validators:{}},{name:"contact",label:"Contacto",type:"text",style:"w-full",validators:{}},{name:"address",label:"Direcci\xf3n",type:"text",style:"w-full",validators:{}},{name:"geoLoc",label:"Geolocalizaci\xf3n",type:"text",style:"w-full",sideBtn:"room",disabled:!0,validators:{}},{name:"pollgrp_id",label:"Tarea a ejecutar:",type:"select",style:"w-full",selectOptions:[],validators:{}}]},this.groupRefTrue=[]}startAppointData(e){if(this.staffList=e,this.getGroupRef(),this.schemaAppoint.controls){const i=this.schemaAppoint.controls.find(n=>"pollgrp_id"===n.name);i&&(i.selectOptions=this.groupRefTrue);const a=this.schemaAppoint.controls.find(n=>"staff"===n.name);a&&(a.selectOptions=[],e.forEach(n=>{n._id&&a.selectOptions?.push({key:n._id,value:`${n.names} ${n.lastnames||""}`})}))}}getPollGrpName(e){if(e){const i=this.groupRefTrue.find(a=>a.key===e);if(i)return i.value}return""}getGroupRef(){this.groupRefTrue=[],this.getRefNodeTrue(this.sharedvar.pollGroupIndex)}getRefNodeTrue(e){if(e.children)for(let i=0;i<e.children.length;i++){const a=e.children[i];if(a.ref)this.groupRefTrue.push({key:a.id,value:a.model_name||a.name});else if(a.children&&a.children.length>0)return this.getRefNodeTrue(a)}}onDelAppoint(e,i){!e.appoint||0===e.appoint.length||this.snkBar.open("Eliminar item de la agenda?.","Ok",{duration:5e3}).onAction().subscribe(a=>{e.appoint?.splice(i,1),this.dtb.updateStaffAsync(e)})}onAddEditAppoint(e,i,a=!0){var n=this;let f,d,L="Agenda ";const h=null===e||-1===i;if(null==e&&(e=this.staffList[0]),e.appoint||(e.appoint=[]),d=-1===i?{datetime:this.sharedvar.dateNow(),dateend:this.sharedvar.dateNow(),ended:!1,owner:this.sharedvar.staff._id||"",staff_name:`${e.names} ${e.lastnames}`}:e.appoint[i],L+=h?"Nueva":`${e.names} ${e.lastnames||""}`,this.schemaAppoint.controls){let y=-1;y=this.schemaAppoint.controls.findIndex(r=>"contact"===r.name),y>=0&&(this.schemaAppoint.controls[y].type="text"),y=this.schemaAppoint.controls.findIndex(r=>"staff"===r.name),this.schemaAppoint.controls[y].disabled=!h,y=this.schemaAppoint.controls.findIndex(r=>"geoLoc"===r.name),y>=0&&(this.schemaAppoint.controls[y].sideBtn=a?"room":"")}e.appoint&&d&&(f={staff:e._id,...d}),this.dg.aDefault({schema:this.schemaAppoint,title:L,value:f,dgwidth:400,function:[{name:"costumer",self:this,function:this.getCostumer1},{name:"dateend",self:this,function:this.addTime},{name:"geoLoc",self:this,function:this.geolocation}]}).subscribe(function(){var y=(0,_.Z)(function*(r){if(r){const g=n.staffList.find(A=>A._id==r.staff);if(!g)return;g.appoint||(g.appoint=[]),r.dateend<=r.datetime&&(r.dateend=r.datetime+n.sharedvar.addMinutes(15)),r.staff_name=`${g.names} ${g.lastnames}`,delete r._btnEvent_,delete r._btnclick_,delete r._propName_,delete r._valid_,delete r.staff,n.dg.updatePropResult(d,r),n.selectedCostumer&&(d.contact===n.selectedCostumer.linkup_1?(d.email=n.selectedCostumer.email_1,d.phone=n.selectedCostumer.phone_1):(d.email=n.selectedCostumer.email_2,d.phone=n.selectedCostumer.phone_2)),d.pollgrp_model_name=n.getPollGrpName(r.pollgrp_id),h?g.appoint.push(d):g.appoint[i]=d,n.dtb.updateStaffAsync(g)}});return function(r){return y.apply(this,arguments)}}())}getCostumer1(e,i,a){return(0,_.Z)(function*(){if(!i)return;const n=[],f=yield e.dtb.getActiveCRMCostumAsync();if(!f)return;f.forEach(h=>{h&&n.push({selected:!1,myid:h.id,name:h.name})});const d={title:"Seleccione Cliente",dgheigth:450,viewfilter:!0,viewAdd:!1,multiSelect:!0,valuelst:n},L=yield(0,l.z)(e.ds.aSelectDefault(d));if(L){e.selectedCostumer=f.find(u=>u.name===L[0].name),i.costumer=L[0].name,i.address=e.selectedCostumer.address;const h=a.controls?.findIndex(u=>"contact"===u.name);if(h&&h>=0&&a.controls){const u=[];e.selectedCostumer?.linkup_1&&u.push({key:e.selectedCostumer.linkup_1,value:e.selectedCostumer.linkup_1}),e.selectedCostumer?.linkup_2&&u.push({key:e.selectedCostumer?.linkup_2,value:e.selectedCostumer?.linkup_2}),a.controls[h].type="select",a.controls[h].selectOptions=u}}return{schema:a,value:i}})()}addTime(e,i,a){return(0,_.Z)(function*(){if(i)return i.dateend=Number(i.dateend)+e.sharedvar.addMinutes(15),{schema:null,value:i}})()}geolocation(e,i,a){return(0,_.Z)(function*(){if(!i)return;(!i.geoLoc||0===i.geoLoc.length)&&(i.geoLoc=yield e.sharedvar.getLocalization());const f={title:"Geo localizaci\xf3n",dgheigth:600,value:[e.staff2analitic(0,i,i)]},d=yield(0,l.z)(e.dg.aMap(f));return d&&(i.geoLoc=d.geoLocStart),{schema:null,value:i}})()}onFilter(e){}staff2analitic(e,i,a){return{_id:`${i._id}:${e}`,date_ini:a.datetime,date_end:a.dateend,geoLocStart:a.geoLoc,tasker_id:i._id||"",tasker_name:i.names+" "+(i.lastnames||""),activity_id:a.pollgrp_id||"",activity_name:a.pollgrp_model_name||"No asignada",costumer_name:a.costumer||"",crm_products:[]}}static#e=this.\u0275fac=function(i){return new(i||t)(p.LFG(v.D),p.LFG(E.k),p.LFG(x.ux),p.LFG(O.x),p.LFG(m.n))};static#t=this.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},1348:b=>{b.exports=JSON.parse('{"controls":[{"name":"id","label":"Identificaci\xf3n:","type":"text","validators":{"required":true}},{"name":"names","label":"Nombre (s):","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"lastnames","label":"Apellidos (s):","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"city","label":"Ciudad de residencia","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"email","label":"Correo electr\xf3nico","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"phone","label":"Tel\xe9fono","type":"tel","validators":{"required":true}},{"name":"rol","label":"Permiso para editar","type":"multiselect","style":"w-full","validators":{"required":true},"selectOptions":[{"key":"K","value":"Es Tasker"},{"key":"P","value":"Es Administrador"},{"key":"F","value":"Edita tasker"},{"key":"U","value":"Edita usuaro"},{"key":"D","value":"Edita directorio"}]},{"name":"legal_acceptance","label":"Acepto t\xe9rminos de la ley 1581.","type":"checkbox","validators":{"required":true}},{"name":"active","label":"Activo.","type":"checkbox","validators":{"required":true}}]}')}}]);