"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[592],{9554:(h,m,n)=>{n.d(m,{g:()=>f});var u=n(3241),a=n(2283),_=n(7087),c=n(3279);const p=["chart"];function y(d,r){if(1&d&&(a.TgZ(0,"div",1),a._UZ(1,"apx-chart",2),a.qZA()),2&d){const t=a.oxw();a.xp6(1),a.Q6J("series",t.chartOptions.series)("chart",t.chartOptions.chart)("fill",t.chartOptions.fill)("legend",t.chartOptions.legend)("plotOptions",t.chartOptions.plotOptions)("xaxis",t.chartOptions.xaxis)("tooltip",t.chartOptions.tooltip)}}let f=(()=>{class d{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.onSelect=new a.vpe}ngOnChanges(t){this.buildChart()}buildChart(){var t=this;return(0,u.Z)(function*(){if(t.data&&0!==t.data.length){switch(t.serieList=[],t.pivot){case 0:case 1:t.timeLineTaskerPivot();break;case 2:t.timeLineTCostumerPivot();break;case 3:t.timeLineProductPivot()}t.chartOptions={series:t.serieList,chart:{height:450,type:"rangeBar",events:{dataPointSelection:(e=(0,u.Z)(function*(i,s,o){yield t.onSelectEvent(t.serieList[o.seriesIndex].data[o.dataPointIndex])}),function(s,o,l){return e.apply(this,arguments)})},toolbar:{show:!0,tools:{zoomin:!0,zoomout:!0}}},plotOptions:{bar:{horizontal:!0,barHeight:"80%",rangeBarGroupRows:1===t.bartype}},xaxis:{type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm T"},datetimeUTC:!1}},fill:{type:"solid"},legend:{position:"top",horizontalAlign:"left"},tooltip:{custom:({seriesIndex:e,dataPointIndex:i})=>{const s=t.data.find(o=>o._id===t.serieList[e].data[i].meta);if(s){const o=s.ended?" FINALIZADO":" EN PROCESO ";let l=`: ${new Date(s.date_ini).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})} >> ${new Date(s.date_end).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})}`;switch(t.pivot){case 0:return s.tasker_name+o+l;case 1:return s.activity_name+o+l;case 2:return s.costumer_name+o+l;case 3:return s.crm_products+o+l}return s.activity_name+l}return""}}}}var e})()}timeLineTaskerPivot(){this.data.forEach(t=>{const e=this.serieList.findIndex(i=>i.name===t.activity_name);e>=0?this.serieList[e].data.push({x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}):this.serieList.push({name:t.activity_name,data:[{x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}]})}),this.cleanSeries()}timeLineTCostumerPivot(){this.data.forEach(t=>{const e=this.serieList.findIndex(i=>i.name===t.costumer_name);e>=0?this.serieList[e].data.push({x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}):this.serieList.push({name:t.costumer_name,data:[{x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id}]})}),this.cleanSeries()}timeLineProductPivot(){(!this.prod_list||0===this.prod_list.length)&&(this.prod_list=[],this.data.forEach(t=>{t.crm_products&&t.crm_products.length>0&&this.prod_list.push(...t.crm_products)}),this.prod_list=[...new Set(this.prod_list)]),this.prod_list.forEach(t=>{this.serieList.push({name:t,data:[]})}),this.data.forEach(t=>{const e=this.serieList.findIndex(i=>t.crm_products.find(s=>i.name===s));e>=0&&this.serieList[e].data.push({x:t.tasker_name,y:[t.date_ini,t.date_end],meta:t._id})}),this.cleanSeries()}onSelectEvent(t){var e=this;return(0,u.Z)(function*(){e.onSelect.emit(t)})()}cleanSeries(){this.serieList.forEach(t=>{let e=0;for(;e<t.data.length;)0===t.data[e].y.length?t.data.splice(e,1):e++})}static#t=this.\u0275fac=function(e){return new(e||d)};static#e=this.\u0275cmp=a.Xpm({type:d,selectors:[["app-time-line"]],viewQuery:function(e,i){if(1&e&&a.Gf(p,5),2&e){let s;a.iGM(s=a.CRH())&&(i.chart=s.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype"},outputs:{onSelect:"onSelect"},features:[a.TTD],decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","fill","legend","plotOptions","xaxis","tooltip"]],template:function(e,i){1&e&&a.YNc(0,y,2,7,"div",0),2&e&&a.Q6J("ngIf",i.data&&i.data.length>0)},dependencies:[_.O5,c.x]})}return d})()},6483:(h,m,n)=>{n.d(m,{q:()=>d});var u=n(7087),a=n(3759),_=n(9554),c=n(2283);const p=[{path:"",component:_.g}];let y=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275mod=c.oAB({type:r});static#i=this.\u0275inj=c.cJS({imports:[a.Bz.forChild(p),a.Bz]})}return r})();var f=n(3279);let d=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275mod=c.oAB({type:r});static#i=this.\u0275inj=c.cJS({imports:[u.ez,y,f.X]})}return r})()},1348:h=>{h.exports=JSON.parse('{"controls":[{"name":"id","label":"Identificaci\xf3n:","type":"text","validators":{"required":true}},{"name":"names","label":"Nombre (s):","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"lastnames","label":"Apellidos (s):","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"city","label":"Ciudad de residencia","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"email","label":"Correo electr\xf3nico","type":"text","style":"w-3/4","validators":{"required":true}},{"name":"phone","label":"Tel\xe9fono","type":"tel","validators":{"required":true}},{"name":"rol","label":"Permiso para editar","type":"multiselect","style":"w-full","validators":{"required":true},"selectOptions":[{"key":"K","value":"Es Tasker"},{"key":"P","value":"Es Administrador"},{"key":"F","value":"Edita tasker"},{"key":"U","value":"Edita usuaro"},{"key":"D","value":"Edita directorio"}]},{"name":"legal_acceptance","label":"Acepto t\xe9rminos de la ley 1581.","type":"checkbox","validators":{"required":true}},{"name":"active","label":"Activo.","type":"checkbox","validators":{"required":true}}]}')}}]);