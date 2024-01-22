"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[586],{6586:(st,C,h)=>{h.r(C),h.d(C,{TaskReportModule:()=>et});var g=h(7087),k=h(3759),m=h(3241),t=h(2283),x=h(4758),S=h(6806),w=h(6510),M=h(1682),F=h(3578),T=h(9347),b=h(8464),y=h(3279);const P=["chart"];function R(s,_){if(1&s&&(t.TgZ(0,"div",1),t._UZ(1,"apx-chart",2),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("series",e.chartOptions.series)("chart",e.chartOptions.chart)("fill",e.chartOptions.fill)("legend",e.chartOptions.legend)("plotOptions",e.chartOptions.plotOptions)("xaxis",e.chartOptions.xaxis)("tooltip",e.chartOptions.tooltip)}}let Z=(()=>{class s{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.onSelect=new t.vpe}ngOnChanges(e){this.buildChart()}buildChart(){var e=this;return(0,m.Z)(function*(){if(e.data&&0!==e.data.length){switch(e.serieList=[],e.pivot){case 0:case 1:e.timeLineTaskerPivot();break;case 2:e.timeLineTCostumerPivot();break;case 3:e.timeLineProductPivot()}e.chartOptions={series:e.serieList,chart:{height:450,type:"rangeBar",events:{dataPointSelection:(i=(0,m.Z)(function*(a,n,o){yield e.onSelectEvent(e.serieList[o.seriesIndex].data[o.dataPointIndex])}),function(n,o,l){return i.apply(this,arguments)})},toolbar:{show:!0,tools:{zoomin:!0,zoomout:!0}}},plotOptions:{bar:{horizontal:!0,barHeight:"80%",rangeBarGroupRows:1===e.bartype}},xaxis:{type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm"},datetimeUTC:!1},tickAmount:6},fill:{type:"solid"},legend:{position:"top",horizontalAlign:"left"},tooltip:{custom:({seriesIndex:i,dataPointIndex:a})=>{const n=e.data.find(o=>o._id===e.serieList[i].data[a].meta);if(n){let o=`: ${new Date(n.date_ini).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})} >> ${new Date(n.date_end).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})}`;switch(e.pivot){case 0:return n.tasker_name+o;case 1:return n.activity_name+o;case 2:return n.costumer_name+o;case 3:return n.crm_products+o}return n.activity_name+o}return""}}}}var i})()}timeLineTaskerPivot(){this.data.forEach(e=>{const i=this.serieList.findIndex(a=>a.name===e.activity_name);i>=0?this.serieList[i].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.activity_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})}),this.cleanSeries()}timeLineTCostumerPivot(){this.data.forEach(e=>{const i=this.serieList.findIndex(a=>a.name===e.costumer_name);i>=0?this.serieList[i].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.costumer_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})}),this.cleanSeries()}timeLineProductPivot(){(!this.prod_list||0===this.prod_list.length)&&(this.prod_list=[],this.data.forEach(e=>{e.crm_products&&e.crm_products.length>0&&this.prod_list.push(...e.crm_products)}),this.prod_list=[...new Set(this.prod_list)]),this.prod_list.forEach(e=>{this.serieList.push({name:e,data:[]})}),this.data.forEach(e=>{const i=this.serieList.findIndex(a=>e.crm_products.find(n=>a.name===n));i>=0?this.serieList[i].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.costumer_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})}),this.cleanSeries()}onSelectEvent(e){var i=this;return(0,m.Z)(function*(){i.onSelect.emit(e)})()}cleanSeries(){this.serieList.forEach(e=>{let i=0;for(;i<e.data.length;)0===e.data[i].y.length?e.data.splice(i,1):i++})}static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-time-line"]],viewQuery:function(i,a){if(1&i&&t.Gf(P,5),2&i){let n;t.iGM(n=t.CRH())&&(a.chart=n.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype"},outputs:{onSelect:"onSelect"},features:[t.TTD],decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","fill","legend","plotOptions","xaxis","tooltip"]],template:function(i,a){1&i&&t.YNc(0,R,2,7,"div",0),2&i&&t.Q6J("ngIf",a.data&&a.data.length>0)},dependencies:[g.O5,y.x]})}return s})();const O=["chart"];function N(s,_){if(1&s&&(t.TgZ(0,"div",1),t._UZ(1,"apx-chart",2),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("series",e.chartOptions.series)("chart",e.chartOptions.chart)("dataLabels",e.chartOptions.dataLabels)("plotOptions",e.chartOptions.plotOptions)("responsive",e.chartOptions.responsive)("xaxis",e.chartOptions.xaxis)("legend",e.chartOptions.legend)("fill",e.chartOptions.fill)}}let D=(()=>{class s{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.chunk="M",this.onSelect=new t.vpe,this.sliceChunk=[]}ngOnChanges(e){this.data&&this.data.length>0&&(this.setChunkList(),this.buildChart())}buildChart(){var e=this;return(0,m.Z)(function*(){switch(e.pivot){case 0:e.getDataTaskCostumerChunk(e.sliceChunk,"T");break;case 1:e.getDataTaskCostumerChunk(e.sliceChunk,"A");break;case 2:e.getDataTaskCostumerChunk(e.sliceChunk,"C");break;case 3:e.timeLineProductPivot(e.sliceChunk)}e.chartOptions={series:e.serieList,chart:{type:"bar",height:350,stacked:!0,stackType:"100%",toolbar:{show:!0,tools:{pan:!0,zoomin:!0,zoomout:!0}}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],xaxis:{categories:e.categ},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left",offsetX:0,offsetY:10}}})()}setChunkList(){let e=this.getChunkSlice(this.data[0].date_ini).firstDay;const i=this.getChunkSlice(this.data[this.data.length-1].date_end).lastDay;for(this.sliceChunk=[];e<i;)this.sliceChunk.push(this.getChunkSlice(e)),e=this.getChunkNextDate(this.sliceChunk[this.sliceChunk.length-1].lastDay)}getChunkSlice(e){let i;const a=new Date(e);switch(this.chunk){case"D":const n=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0).getTime(),o=new Date(a.getFullYear(),a.getMonth(),a.getDate(),23).getTime();return i=`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`,{firstDay:n,lastDay:o,name:i};case"M":const l=new Date(a.getFullYear(),a.getMonth(),1,0).getTime(),c=new Date(a.getFullYear(),a.getMonth()+1,0,23).getTime();return i=`${a.getMonth()+1}/${a.getFullYear()}`,{firstDay:l,lastDay:c,name:i};case"Y":const r=a.getFullYear();return i=r.toString(),{firstDay:new Date(r,0,1,0).getTime(),lastDay:new Date(r,11,31,23).getTime(),name:i}}return{firstDay:0,lastDay:0,name:"ni idea"}}getChunkNextDate(e){const i=new Date(e);switch(this.chunk){case"D":return new Date(i.getFullYear(),i.getMonth(),i.getDate()+1,0).getTime();case"M":return new Date(i.getFullYear(),i.getMonth()+1,i.getDate(),0).getTime();case"Y":return new Date(i.getFullYear()+1,0,1,0).getTime()}return 0}getDataTaskCostumerChunk(e,i){let a=[];this.serieList=[];let n=[];this.data.forEach(r=>{let d="";switch(i){case"T":d=r.tasker_name;break;case"A":d=r.activity_name;break;case"C":d=r.costumer_name}a.push(d)}),a=[...new Set(a)],a.forEach(r=>{r&&(n.push({key:r,value:0}),this.serieList.push({name:r,data:[]}))}),a=[],this.categ=[],n.forEach(r=>r.value=0);let c,o=0,l=0;for(;l<this.data.length;){if(!(o<e.length))return;for(c=e[o],this.categ.push(c.name),o++;l<this.data.length&&this.data[l].date_ini>=c.firstDay&&this.data[l].date_end<=c.lastDay;l++){const r=n.find(d=>{switch(i){case"T":return d.key===this.data[l].tasker_name;case"A":return d.key===this.data[l].activity_name;case"C":return d.key===this.data[l].costumer_name}return null});r&&r.value++}this.serieList.forEach(r=>{const d=n.find(v=>v.key===r.name);d&&r.data.push(d.value)})}}timeLineProductPivot(e){(!this.prod_list||0===this.prod_list.length)&&(this.prod_list=[],this.data.forEach(c=>{c.crm_products&&c.crm_products.length>0&&this.prod_list.push(...c.crm_products)}));let i=[...new Set(this.prod_list)];this.serieList=[];let a=[];i.forEach(c=>{c&&(a.push({key:c,value:0}),this.serieList.push({name:c,data:[]}))}),i=[],this.categ=[];let l,n=0,o=0;for(a.forEach(c=>c.value=0);o<this.data.length;){if(!(n<e.length))return;for(l=e[n],this.categ.push(l.name),n++;o<this.data.length&&this.data[o].date_ini>=l.firstDay&&this.data[o].date_end<=l.lastDay;o++)a.forEach(c=>{this.data[o].crm_products.find(d=>d===c.key)&&c.value++});this.serieList.forEach(c=>{const r=a.find(d=>d.key===c.name);r&&c.data.push(r.value)})}}static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-stack-col-ptj"]],viewQuery:function(i,a){if(1&i&&t.Gf(O,5),2&i){let n;t.iGM(n=t.CRH())&&(a.chart=n.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype",chunk:"chunk"},outputs:{onSelect:"onSelect"},features:[t.TTD],decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","dataLabels","plotOptions","responsive","xaxis","legend","fill"]],template:function(i,a){1&i&&t.YNc(0,N,2,8,"div",0),2&i&&t.Q6J("ngIf",a.data&&a.data.length>0)},dependencies:[g.O5,y.x]})}return s})();const J=["editControlTrigger"];function U(s,_){1&s&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function E(s,_){1&s&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function Y(s,_){1&s&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function I(s,_){1&s&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function Q(s,_){1&s&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function G(s,_){1&s&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function j(s,_){1&s&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}const q=[{path:"",component:(()=>{class s{constructor(e,i,a,n){this.sharedvar=e,this.dtb=i,this.dg=a,this.data2excel=n,this.pivot=0,this.bartype=1,this.chunk="D",this.graphtypeName="Linea de tiempo apilado"}ngOnInit(){var e=this;return(0,m.Z)(function*(){const i=new Date,a=i.setHours(0,0,0,0),n=i.setHours(23,59,59,999);e.localFilter={crm:"T",staff__id:[],pollGrpData:[],costumers:[],products:[],products_name_sel:[],date_ini:a,date_end:n},yield e.dtb.getPollGrpAnaliticAsync(e.localFilter).then(o=>{e.dataList=o.data,e.header=o.header})})()}getClicked(e){switch(e.index){case 1:this.filterDialog();break;case 3:let i=document.getElementById("spanTrigger");i&&(i.style.display="",i.style.position="absolute",i.style.left=e.pageX+5+"px",i.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu())}}getTitleText(){return`${this.graphtypeName} - ${this.getPivotName()} - Porcentaje por ${this.getTimechunk()} ... Fecha desde: ${this.sharedvar.formatNumber2Date(this.localFilter.date_ini||0,"/")}\n    hasta: ${this.sharedvar.formatNumber2Date(this.localFilter.date_end||0,"/")}`}filterDialog(){var e=this;return(0,m.Z)(function*(){e.sharedvar.wait=!0;let i=[],a=[],n=[],o=[];(yield e.dtb.getStaffByFilterAsync({queryType:3,active:!0,stars:0,rol:"K"})).forEach(p=>{i.push({key:p._id,value:`${p.names||p.email} ${p.second_names||""}`})}),(yield e.dtb.getPollGrpActiveAsync()).forEach(p=>{"index"!==p.id&&a.push({key:p._id,value:p.name})}),(yield e.dtb.getActiveCRMCostumAsync()).forEach(p=>{n.push({key:p.id,value:p.name})}),(yield e.dtb.getAllCRMProdAsync()).forEach(p=>{o.push({key:p.id,value:p.name})}),e.dg.aDefault({schema:{controls:[{name:"staff__id",label:"Taskers:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:i},{name:"pollGrpData",label:"Modelos:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:a},{name:"costumers",label:"Clientes:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:n},{name:"products",label:"Productos:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:o},{name:"date_ini",label:"Fecha inicio:",type:"date",validators:{}},{name:"date_end",label:"Fecha final:",type:"date",validators:{}}]},title:"Filtros",dgheigth:615,dgwidth:550,value:e.localFilter}).subscribe(function(){var p=(0,m.Z)(function*(u){if(e.sharedvar.wait=!1,u){if(u.alldates)u.date_ini=0,u.date_end=0;else{let f=new Date(u.date_ini||0);u.date_ini=f.setHours(0,0,0,0),f=new Date(u.date_end||0),u.date_end=f.setHours(23,59,59,999)}const A=[];u.products&&u.products.length>0&&u.products.forEach(f=>{const L=o.find(it=>it.key===f);L&&A.push(L.value)}),e.localFilter={crm:"T",staff__id:u.staff__id,pollGrpData:u.pollGrpData,costumers:u.costumers,products:u.products,date_ini:u.date_ini,date_end:u.date_end,products_name_sel:[...A]},yield e.dtb.getPollGrpAnaliticAsync(e.localFilter).then(f=>{e.dataList=f.data,e.header=f.header})}});return function(u){return p.apply(this,arguments)}}())})()}onSelect(e){var i=this;return(0,m.Z)(function*(){let n={schema:{},value:yield i.dtb.getPollResultAsync(e.meta),title:"Datos de la encuesta"};yield i.dg.aPollResult(n).subscribe(o=>{})})()}onExportexcel(){const e=`Reporte CRM fechas ${this.sharedvar.formatNumber2Date(this.localFilter.date_ini||0,"-")} - \n    ${this.sharedvar.formatNumber2Date(this.localFilter.date_end||0,"-")}`;this.data2excel.excelExport(this.dataList,e,"CRM",this.header,[])}onSelPivot(e){this.pivot=e}getPivotName(){switch(this.pivot){case 0:return"Tasker";case 1:return"Actividades";case 2:return"Clientes";case 3:return"Productos"}return""}setGraphType(e){switch(this.bartype=e,e){case 0:this.graphtypeName="Linea de tiempo discriminado";break;case 1:this.graphtypeName="Linea de tiempo apilado";break;case 2:this.graphtypeName="Barra de porcentaje"}}setTimechunk(e){this.chunk=e}getTimechunk(){switch(this.chunk){case"D":return"d\xedas";case"M":return"meses";case"Y":return"a\xf1os"}return""}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(x.D),t.Y36(S.k),t.Y36(w.x),t.Y36(M.Z))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-task-report"]],viewQuery:function(i,a){if(1&i&&t.Gf(J,5),2&i){let n;t.iGM(n=t.CRH())&&(a.editControlTrigger=n.first)}},decls:67,vars:22,consts:[[1,"flex","flex-col","max-h-screen"],[3,"buttons","nav_menu","bar_text","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"flex-1","m-2","bg-gray-100","overflow-scroll"],[1,"border","border-gray-200","rounded-sm","shadow-lg"],[3,"data","prod_list","pivot","bartype","onSelect"],[3,"data","prod_list","pivot","bartype","chunk","onSelect"],["controlEdit","matMenu"],["mat-menu-item","",3,"matMenuTriggerFor"],["color","primary"],[1,"mt-1","text-violet-500","text-lg","font-medium"],[1,"ml-3"],["mat-menu-item","",3,"click"],[4,"ngIf"],["mat-menu-item",""],[1,"ml-1","mt-1","text-violet-500","text-lg","font-medium"],["graphtype","matMenu"]],template:function(i,a){if(1&i&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("onClicked",function(o){return a.getClicked(o)}),t.qZA(),t._UZ(2,"span",2,3),t.TgZ(4,"div",4)(5,"div",5)(6,"app-time-line",6),t.NdJ("onSelect",function(o){return a.onSelect(o)}),t.qZA()(),t.TgZ(7,"div",5)(8,"app-stack-col-ptj",7),t.NdJ("onSelect",function(o){return a.onSelect(o)}),t.qZA()()()(),t.TgZ(9,"mat-menu",null,8)(11,"button",9)(12,"mat-icon",10),t._uU(13,"trending_up"),t.qZA(),t.TgZ(14,"span",11),t._uU(15),t.qZA()(),t.TgZ(16,"div",12)(17,"button",13),t.NdJ("click",function(){return a.onSelPivot(0)}),t.YNc(18,U,2,0,"mat-icon",14),t._uU(19," Tasker "),t.qZA(),t.TgZ(20,"button",13),t.NdJ("click",function(){return a.onSelPivot(1)}),t.YNc(21,E,2,0,"mat-icon",14),t._uU(22," Actividad "),t.qZA(),t.TgZ(23,"button",13),t.NdJ("click",function(){return a.onSelPivot(2)}),t.YNc(24,Y,2,0,"mat-icon",14),t._uU(25," Cliente "),t.qZA(),t.TgZ(26,"button",13),t.NdJ("click",function(){return a.onSelPivot(3)}),t.YNc(27,I,2,0,"mat-icon",14),t._uU(28," Producto "),t.qZA()(),t._UZ(29,"hr"),t.TgZ(30,"h2",11)(31,"mat-icon"),t._uU(32,"percent"),t.qZA(),t._uU(33,"\xa0Porcentajes por:"),t.qZA(),t.TgZ(34,"button",13),t.NdJ("click",function(){return a.setTimechunk("D")}),t.YNc(35,Q,2,0,"mat-icon",14),t._uU(36," D\xedas "),t.qZA(),t.TgZ(37,"button",13),t.NdJ("click",function(){return a.setTimechunk("M")}),t.YNc(38,G,2,0,"mat-icon",14),t._uU(39," Meses "),t.qZA(),t.TgZ(40,"button",13),t.NdJ("click",function(){return a.setTimechunk("Y")}),t.YNc(41,j,2,0,"mat-icon",14),t._uU(42," A\xf1os "),t.qZA(),t._UZ(43,"hr"),t.TgZ(44,"h2",11)(45,"mat-icon"),t._uU(46,"trending_up"),t.qZA(),t._uU(47,"\xa0Inteligencia Artificial "),t.qZA(),t.TgZ(48,"div")(49,"button",15),t._uU(50," An\xe1lisis con soporte de IA "),t.qZA()(),t._UZ(51,"hr"),t.TgZ(52,"h2",16)(53,"mat-icon"),t._uU(54,"file_download"),t.qZA(),t._uU(55,"\xa0Exportar"),t.qZA(),t.TgZ(56,"div",12)(57,"button",13),t.NdJ("click",function(){return a.onExportexcel()}),t._uU(58," Exportar Informe a Excel. "),t.qZA(),t.TgZ(59,"button",15),t._uU(60," Enviar Informe a Google Spread Sheet "),t.qZA()()(),t.TgZ(61,"mat-menu",null,17)(63,"button",13),t.NdJ("click",function(){return a.setGraphType(0)}),t._uU(64," Linea de tiempo discriminado "),t.qZA(),t.TgZ(65,"button",13),t.NdJ("click",function(){return a.setGraphType(1)}),t._uU(66," Linea de tiempo apilado "),t.qZA()()),2&i){const n=t.MAs(10),o=t.MAs(62);t.xp6(1),t.Q6J("buttons","11010")("nav_menu",!1)("bar_text",a.getTitleText()),t.xp6(1),t.Q6J("matMenuTriggerFor",n),t.xp6(4),t.Q6J("data",a.dataList)("prod_list",a.localFilter.products_name_sel)("pivot",a.pivot)("bartype",a.bartype),t.xp6(2),t.Q6J("data",a.dataList)("prod_list",a.localFilter.products_name_sel)("pivot",a.pivot)("bartype",a.bartype)("chunk",a.chunk),t.xp6(3),t.Q6J("matMenuTriggerFor",o),t.xp6(4),t.Oqu(a.graphtypeName),t.xp6(3),t.Q6J("ngIf",0===a.pivot),t.xp6(3),t.Q6J("ngIf",1===a.pivot),t.xp6(3),t.Q6J("ngIf",2===a.pivot),t.xp6(3),t.Q6J("ngIf",3===a.pivot),t.xp6(8),t.Q6J("ngIf","D"===a.chunk),t.xp6(3),t.Q6J("ngIf","M"===a.chunk),t.xp6(3),t.Q6J("ngIf","Y"===a.chunk)}},dependencies:[g.O5,F.G,T.VK,T.OP,T.p6,b.Hw,Z,D]})}return s})()}];let B=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[k.Bz.forChild(q),k.Bz]})}return s})();var z=h(769),$=h(1359);const X=[{path:"",component:Z}];let H=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[k.Bz.forChild(X),k.Bz]})}return s})(),K=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[g.ez,H,y.X]})}return s})();const V=[{path:"",component:D}];let W=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[k.Bz.forChild(V),k.Bz]})}return s})(),tt=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[g.ez,W,y.X]})}return s})(),et=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[g.ez,B,z.O,$.ZX,y.X,T.Tx,b.Ps,K,tt]})}return s})()}}]);