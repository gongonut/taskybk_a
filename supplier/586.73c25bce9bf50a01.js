"use strict";(self.webpackChunktasky_supplier=self.webpackChunktasky_supplier||[]).push([[586],{6586:(it,L,m)=>{m.r(L),m.d(L,{TaskReportModule:()=>et});var k=m(7087),y=m(3759),f=m(3241),t=m(2283),S=m(4758),x=m(6806),M=m(6510),P=m(3578),b=m(9347),Z=m(8464),T=m(3279);const F=["chart"];function O(n,g){if(1&n&&(t.TgZ(0,"div",1),t._UZ(1,"apx-chart",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("series",e.chartOptions.series)("chart",e.chartOptions.chart)("fill",e.chartOptions.fill)("legend",e.chartOptions.legend)("plotOptions",e.chartOptions.plotOptions)("xaxis",e.chartOptions.xaxis)("tooltip",e.chartOptions.tooltip)}}let D=(()=>{class n{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.onSelect=new t.vpe}ngOnChanges(e){this.buildChart()}buildChart(){var e=this;return(0,f.Z)(function*(){if(e.data&&0!==e.data.length){switch(e.serieList=[],e.pivot){case 0:case 1:e.timeLineTaskerPivot();break;case 2:e.timeLineTCostumerPivot();break;case 3:e.timeLineProductPivot()}e.chartOptions={series:e.serieList,chart:{height:450,type:"rangeBar",events:{dataPointSelection:(i=(0,f.Z)(function*(a,s,c){yield e.onSelectEvent(e.serieList[c.seriesIndex].data[c.dataPointIndex])}),function(s,c,h){return i.apply(this,arguments)})},toolbar:{show:!0,tools:{zoomin:!0,zoomout:!0}}},plotOptions:{bar:{horizontal:!0,barHeight:"80%",rangeBarGroupRows:1===e.bartype}},xaxis:{type:"datetime",labels:{datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"hh:mm"},datetimeUTC:!1},tickAmount:6},fill:{type:"solid"},legend:{position:"top",horizontalAlign:"left"},tooltip:{custom:({seriesIndex:i,dataPointIndex:a})=>{const s=e.data.find(c=>c._id===e.serieList[i].data[a].meta);return s?`${s.activity_name}: ${new Date(s.date_ini).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})} >> ${new Date(s.date_end).toLocaleString("es-CO",{dateStyle:"short",timeStyle:"short",hour12:!0})}`:""}}}}var i})()}timeLineTaskerPivot(){this.data.forEach(e=>{const i=this.serieList.findIndex(a=>a.name===e.activity_name);i>=0?this.serieList[i].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.activity_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})})}timeLineTCostumerPivot(){this.data.forEach(e=>{const i=this.serieList.findIndex(a=>a.name===e.costumer_name);i>=0?this.serieList[i].data.push({x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}):this.serieList.push({name:e.costumer_name,data:[{x:e.tasker_name,y:[e.date_ini,e.date_end],meta:e._id}]})})}timeLineProductPivot(){(!this.prod_list||0===this.prod_list.length)&&(this.prod_list=[],this.data.forEach(e=>{e.crm_prods&&e.crm_prods.length>0&&this.prod_list.push(...e.crm_prods)}),this.prod_list=[...new Set(this.prod_list)]),this.prod_list.forEach(e=>{this.serieList.push({name:e,data:[]})}),this.data.forEach(e=>{const i=this.serieList.findIndex(a=>e.crm_prods.find(s=>a.name===s));i>=0&&this.serieList[i].data.push({x:e.staff_name,y:[e.date_ini,e.date_end],meta:e._id})})}onSelectEvent(e){var i=this;return(0,f.Z)(function*(){i.onSelect.emit(e)})()}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-time-line"]],viewQuery:function(i,a){if(1&i&&t.Gf(F,5),2&i){let s;t.iGM(s=t.CRH())&&(a.chart=s.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype"},outputs:{onSelect:"onSelect"},features:[t.TTD],decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","fill","legend","plotOptions","xaxis","tooltip"]],template:function(i,a){1&i&&t.YNc(0,O,2,7,"div",0),2&i&&t.Q6J("ngIf",a.data&&a.data.length>0)},dependencies:[k.O5,T.x]})}return n})();const R=["chart"];function U(n,g){if(1&n&&(t.TgZ(0,"div",1),t._UZ(1,"apx-chart",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("series",e.chartOptions.series)("chart",e.chartOptions.chart)("dataLabels",e.chartOptions.dataLabels)("plotOptions",e.chartOptions.plotOptions)("responsive",e.chartOptions.responsive)("xaxis",e.chartOptions.xaxis)("legend",e.chartOptions.legend)("fill",e.chartOptions.fill)}}let A=(()=>{class n{constructor(){this.data=[],this.prod_list=[],this.pivot=0,this.bartype=0,this.chunk="M",this.onSelect=new t.vpe,this.sliceChunk=[]}ngOnChanges(e){this.data&&this.data.length>0&&(this.setChunkList(),this.buildChart())}buildChart(){var e=this;return(0,f.Z)(function*(){switch(e.pivot){case 0:case 1:e.getDataTaskCostumerChunk(e.sliceChunk,"T");break;case 2:e.getDataTaskCostumerChunk(e.sliceChunk,"C");break;case 3:e.timeLineProductPivot(e.sliceChunk)}e.chartOptions={series:e.serieList,chart:{type:"bar",height:350,stacked:!0,stackType:"100%",toolbar:{show:!0,tools:{pan:!0,zoomin:!0,zoomout:!0}}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],xaxis:{categories:e.categ},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left",offsetX:0,offsetY:-5}}})()}setChunkList(){let e=this.getChunkSlice(this.data[0].date_ini).firstDay;const i=this.getChunkSlice(this.data[this.data.length-1].date_end).lastDay;for(this.sliceChunk=[];e<i;)this.sliceChunk.push(this.getChunkSlice(e)),e=this.getChunkNextDate(this.sliceChunk[this.sliceChunk.length-1].lastDay)}getChunkSlice(e){let i;const a=new Date(e);switch(this.chunk){case"D":const s=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0).getTime(),c=new Date(a.getFullYear(),a.getMonth(),a.getDate(),23).getTime();return i=`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`,{firstDay:s,lastDay:c,name:i};case"M":const h=new Date(a.getFullYear(),a.getMonth(),1,0).getTime(),o=new Date(a.getFullYear(),a.getMonth()+1,0,23).getTime();return i=`${a.getMonth()+1}/${a.getFullYear()}`,{firstDay:h,lastDay:o,name:i};case"Y":const r=a.getFullYear();return i=r.toString(),{firstDay:new Date(r,0,1,0).getTime(),lastDay:new Date(r,11,31,23).getTime(),name:i}}return{firstDay:0,lastDay:0,name:"ni idea"}}getChunkNextDate(e){const i=new Date(e);switch(this.chunk){case"D":return new Date(i.getFullYear(),i.getMonth(),i.getDate()+1,0).getTime();case"M":return new Date(i.getFullYear(),i.getMonth()+1,i.getDate(),0).getTime();case"Y":return new Date(i.getFullYear()+1,0,1,0).getTime()}return 0}getDataTaskerChunk(e){this.categ=[],this.serieList=[];let i,c,a=0,s=0;for(;s<this.data.length;){if(!(a<e.length))return void this.serieList.forEach(o=>{if(o.data.length<a){const r=a-o.data.length;let l=new Array(r);for(let d=0;d<r;++d)l[d]=0;o.data=[...o.data,...l]}});for(c=e[a],this.categ.push(c.name),a++,i=[];s<this.data.length&&this.data[s].date_ini>=c.firstDay&&this.data[s].date_end<=c.lastDay;s++){const o=this.data[s].date_end-this.data[s].date_ini,r=i.find(l=>l.key===this.data[s].tasker_name);r?r.value+=o:i.push({key:this.data[s].tasker_name,value:o})}const h=a-1;i.forEach(o=>{const r=this.serieList.findIndex(l=>l.name===o.key);if(r>=0){const l=h-this.serieList[r].data.length;let d=new Array(l);for(let _=0;_<l;++_)d[_]=0;this.serieList[r].data=[...this.serieList[r].data,...d,o.value]}else{let l=new Array(h);for(let d=0;d<h;++d)l[d]=0;this.serieList.push({name:o.key,data:[...l,o.value]})}})}}getDataCostumerChunk(e){this.categ=[],this.serieList=[];let i,c,a=0,s=0;for(;s<this.data.length;){if(!(a<e.length))return void this.serieList.forEach(o=>{if(o.data.length<a){const r=a-o.data.length;let l=new Array(r);for(let d=0;d<r;++d)l[d]=0;o.data=[...o.data,...l]}});for(c=e[a],this.categ.push(c.name),a++,i=[];s<this.data.length&&this.data[s].date_ini>=c.firstDay&&this.data[s].date_end<=c.lastDay;s++){const o=this.data[s].date_end-this.data[s].date_ini,r=i.find(l=>l.key===this.data[s].costumer_name);r?r.value+=o:i.push({key:this.data[s].costumer_name,value:o})}const h=a-1;i.forEach(o=>{const r=this.serieList.findIndex(l=>l.name===o.key);if(r>=0){const l=h-this.serieList[r].data.length;let d=new Array(l);for(let _=0;_<l;++_)d[_]=0;this.serieList[r].data=[...this.serieList[r].data,...d,o.value]}else{let l=new Array(h);for(let d=0;d<h;++d)l[d]=0;this.serieList.push({name:o.key,data:[...l,o.value]})}})}}getDataTaskCostumerChunk(e,i){let a=[];this.serieList=[];let s=[];this.data.forEach(r=>a.push("T"===i?r.tasker_name:r.costumer_name)),a=[...new Set(a)],a.forEach(r=>{r&&(s.push({key:r,value:0}),this.serieList.push({name:r,data:[]}))}),a=[],this.categ=[];let o,c=0,h=0;for(;h<this.data.length;){if(!(c<e.length))return;for(o=e[c],this.categ.push(o.name),c++,s.forEach(r=>r.value=0);h<this.data.length&&this.data[h].date_ini>=o.firstDay&&this.data[h].date_end<=o.lastDay;h++){const r=this.data[h].date_end-this.data[h].date_ini,l=s.find(d=>"T"===i?d.key===this.data[h].tasker_name:d.key===this.data[h].costumer_name);l&&(l.value+=r)}this.serieList.forEach(r=>{const l=s.find(d=>d.key===r.name);l&&r.data.push(l.value)})}}timeLineProductPivot(e){(!this.prod_list||0===this.prod_list.length)&&(this.prod_list=[],this.data.forEach(o=>{o.crm_prods&&o.crm_prods.length>0&&this.prod_list.push(...o.crm_prods)}));let i=[...new Set(this.prod_list)];this.serieList=[];let a=[];i.forEach(o=>{o&&(a.push({key:o,value:0}),this.serieList.push({name:o,data:[]}))}),i=[],this.categ=[];let h,s=0,c=0;for(;c<this.data.length;){if(!(s<e.length))return;for(h=e[s],this.categ.push(h.name),s++,a.forEach(o=>o.value=0);c<this.data.length&&this.data[c].date_ini>=h.firstDay&&this.data[c].date_end<=h.lastDay;c++){const o=this.data[c].date_end-this.data[c].date_ini,r=a.find(l=>this.data[c].crm_products.find(d=>d===l.key));r&&(r.value+=o)}this.serieList.forEach(o=>{const r=a.find(l=>l.key===o.name);r&&o.data.push(r.value)})}}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-stack-col-ptj"]],viewQuery:function(i,a){if(1&i&&t.Gf(R,5),2&i){let s;t.iGM(s=t.CRH())&&(a.chart=s.first)}},inputs:{data:"data",prod_list:"prod_list",pivot:"pivot",bartype:"bartype",chunk:"chunk"},outputs:{onSelect:"onSelect"},features:[t.TTD],decls:1,vars:1,consts:[["id","chart",4,"ngIf"],["id","chart"],[3,"series","chart","dataLabels","plotOptions","responsive","xaxis","legend","fill"]],template:function(i,a){1&i&&t.YNc(0,U,2,8,"div",0),2&i&&t.Q6J("ngIf",a.data&&a.data.length>0)},dependencies:[k.O5,T.x]})}return n})();const E=["editControlTrigger"];function J(n,g){1&n&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function N(n,g){1&n&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function Y(n,g){1&n&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function I(n,g){1&n&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function G(n,g){1&n&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function Q(n,g){1&n&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}function j(n,g){1&n&&(t.TgZ(0,"mat-icon"),t._uU(1,"done"),t.qZA())}const q=[{path:"",component:(()=>{class n{constructor(e,i,a){this.sharedvar=e,this.dtb=i,this.dg=a,this.pivot=0,this.bartype=1,this.chunk="D",this.graphtypeName="Linea de tiempo apilado"}ngOnInit(){var e=this;return(0,f.Z)(function*(){const i=new Date,a=i.setHours(0,0,0,0),s=i.setHours(23,59,59,999);e.localFilter={crm:"T",staff__id:[],pollGrpData:[],costumers:[],products:[],products_name_sel:[],date_ini:a,date_end:s},e.dataList=yield e.dtb.getPollGrpAnaliticAsync(e.localFilter)})()}getClicked(e){switch(e.index){case 1:this.filterDialog();break;case 3:let i=document.getElementById("spanTrigger");i&&(i.style.display="",i.style.position="absolute",i.style.left=e.pageX+5+"px",i.style.top=e.pageY+5+"px",this.editControlTrigger.openMenu())}}getTitleText(){return`${this.graphtypeName} - ${this.getPivotName()} - Porcentaje por ${this.getTimechunk()} ... Fecha desde: ${this.sharedvar.formatNumber2Date(this.localFilter.date_ini||0,"/")}\n    hasta: ${this.sharedvar.formatNumber2Date(this.localFilter.date_end||0,"/")}`}filterDialog(){var e=this;return(0,f.Z)(function*(){e.sharedvar.wait=!0;let i=[],a=[],s=[],c=[];(yield e.dtb.getStaffByFilterAsync({queryType:3,active:!0,stars:0,rol:"K"})).forEach(p=>{i.push({key:p._id,value:`${p.names||p.email} ${p.lastnames||""}`})}),(yield e.dtb.getPollGrpActiveAsync()).forEach(p=>{"index"!==p.id&&a.push({key:p._id,value:p.name})}),(yield e.dtb.getAllCRMCostAsync()).forEach(p=>{s.push({key:p.id,value:p.name})}),(yield e.dtb.getAllCRMProdAsync()).forEach(p=>{c.push({key:p.id,value:p.name})}),e.dg.aDefault({schema:{controls:[{name:"staff__id",label:"Taskers:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:i},{name:"pollGrpData",label:"Modelos:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:a},{name:"costumers",label:"Clientes:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:s},{name:"products",label:"Productos:",type:"multiselect",placeholder:"Todos",style:"w-full",validators:{},selectOptions:c},{name:"date_ini",label:"Fecha inicio:",type:"date",validators:{}},{name:"date_end",label:"Fecha final:",type:"date",validators:{}}]},title:"Filtros",dgheigth:615,dgwidth:550,value:e.localFilter}).subscribe(function(){var p=(0,f.Z)(function*(u){if(e.sharedvar.wait=!1,u){if(u.alldates)u.date_ini=0,u.date_end=0;else{let v=new Date(u.date_ini);u.date_ini=v.setHours(0,0,0,0),v=new Date(u.date_end),v.setHours(23,59,59,999)}const w=[];u.products&&u.products.length>0&&u.products.forEach(v=>{const C=c.find(at=>at.key===v);C&&w.push(C.value)}),e.localFilter={crm:"T",staff__id:u.staff__id,pollGrpData:u.pollGrpData,costumers:u.costumers,products:u.products,date_ini:u.date_ini,date_end:u.date_end,products_name_sel:[...w]},e.dataList=yield e.dtb.getPollGrpAnaliticAsync(e.localFilter)}});return function(u){return p.apply(this,arguments)}}())})()}onSelect(e){var i=this;return(0,f.Z)(function*(){let s={schema:{},value:yield i.dtb.getPollResultAsync(e.meta),title:"Datos de la encuesta"};yield i.dg.aPollResult(s).subscribe(c=>{})})()}csvStream(){let e="";const i=["pollGrp_name","date_ini","date_end","staff_name","crm_costum_id","crm_costum_name","crm_prod_id","crm_prod_name"];return e="Actividad\tFecha inicial\tFecha final\tTasker\tcliente id\tCliente nombre\tProducto id\tProducto nombre\n",this.dataList.forEach(a=>{i.forEach(s=>{e+="date_ini"===s||"date_end"===s?`${new Date(a[s])}\t`:`${a[s]||"none"}\t`}),e+="\n"}),e}onExportcsv(){const e=new Blob([this.csvStream()],{type:"text/csv;charset=utf-8"});var i=URL.createObjectURL(e);window.open(i)}onSelPivot(e){this.pivot=e}getPivotName(){switch(this.pivot){case 0:return"Takser";case 1:return"Actividades";case 2:return"Clientes";case 3:return"Productos"}return""}setGraphType(e){switch(this.bartype=e,e){case 0:this.graphtypeName="Linea de tiempo discriminado";break;case 1:this.graphtypeName="Linea de tiempo apilado";break;case 2:this.graphtypeName="Barra de porcentaje"}}setTimechunk(e){this.chunk=e}getTimechunk(){switch(this.chunk){case"D":return"d\xedas";case"M":return"meses";case"Y":return"a\xf1os"}return""}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(S.D),t.Y36(x.k),t.Y36(M.x))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-task-report"]],viewQuery:function(i,a){if(1&i&&t.Gf(E,5),2&i){let s;t.iGM(s=t.CRH())&&(a.editControlTrigger=s.first)}},decls:66,vars:22,consts:[[3,"buttons","nav_menu","bar_text","onClicked"],["id","spanTrigger",3,"matMenuTriggerFor"],["editControlTrigger","matMenuTrigger"],[1,"m-2","bg-gray-100","overflow-hidden"],[1,"border","border-gray-200","rounded-sm","shadow-lg"],[3,"data","prod_list","pivot","bartype","onSelect"],[3,"data","prod_list","pivot","bartype","chunk","onSelect"],["controlEdit","matMenu"],["mat-menu-item","",3,"matMenuTriggerFor"],["color","primary"],[1,"mt-1","text-violet-500","text-lg","font-medium"],[1,"ml-3"],["mat-menu-item","",3,"click"],[4,"ngIf"],["mat-menu-item",""],[1,"ml-1","mt-1","text-violet-500","text-lg","font-medium"],["graphtype","matMenu"]],template:function(i,a){if(1&i&&(t.TgZ(0,"app-header",0),t.NdJ("onClicked",function(c){return a.getClicked(c)}),t.qZA(),t._UZ(1,"span",1,2),t.TgZ(3,"div",3)(4,"div",4)(5,"app-time-line",5),t.NdJ("onSelect",function(c){return a.onSelect(c)}),t.qZA()(),t.TgZ(6,"div",4)(7,"app-stack-col-ptj",6),t.NdJ("onSelect",function(c){return a.onSelect(c)}),t.qZA()()(),t.TgZ(8,"mat-menu",null,7)(10,"button",8)(11,"mat-icon",9),t._uU(12,"trending_up"),t.qZA(),t.TgZ(13,"span",10),t._uU(14),t.qZA()(),t.TgZ(15,"div",11)(16,"button",12),t.NdJ("click",function(){return a.onSelPivot(0)}),t.YNc(17,J,2,0,"mat-icon",13),t._uU(18," Tasker "),t.qZA(),t.TgZ(19,"button",12),t.NdJ("click",function(){return a.onSelPivot(1)}),t.YNc(20,N,2,0,"mat-icon",13),t._uU(21," Actividad "),t.qZA(),t.TgZ(22,"button",12),t.NdJ("click",function(){return a.onSelPivot(2)}),t.YNc(23,Y,2,0,"mat-icon",13),t._uU(24," Cliente "),t.qZA(),t.TgZ(25,"button",12),t.NdJ("click",function(){return a.onSelPivot(3)}),t.YNc(26,I,2,0,"mat-icon",13),t._uU(27," Producto "),t.qZA()(),t._UZ(28,"hr"),t.TgZ(29,"h2",10)(30,"mat-icon"),t._uU(31,"percent"),t.qZA(),t._uU(32,"\xa0Porcentajes por:"),t.qZA(),t.TgZ(33,"button",12),t.NdJ("click",function(){return a.setTimechunk("D")}),t.YNc(34,G,2,0,"mat-icon",13),t._uU(35," D\xedas "),t.qZA(),t.TgZ(36,"button",12),t.NdJ("click",function(){return a.setTimechunk("M")}),t.YNc(37,Q,2,0,"mat-icon",13),t._uU(38," Meses "),t.qZA(),t.TgZ(39,"button",12),t.NdJ("click",function(){return a.setTimechunk("Y")}),t.YNc(40,j,2,0,"mat-icon",13),t._uU(41," A\xf1os "),t.qZA(),t._UZ(42,"hr"),t.TgZ(43,"h2",10)(44,"mat-icon"),t._uU(45,"trending_up"),t.qZA(),t._uU(46,"\xa0Inteligencia Artificial "),t.qZA(),t.TgZ(47,"div")(48,"button",14),t._uU(49," An\xe1lisis con soporte de IA "),t.qZA()(),t._UZ(50,"hr"),t.TgZ(51,"h2",15)(52,"mat-icon"),t._uU(53,"file_download"),t.qZA(),t._uU(54,"\xa0Exportar"),t.qZA(),t.TgZ(55,"div",11)(56,"button",12),t.NdJ("click",function(){return a.onExportcsv()}),t._uU(57," Exportar Informe a csv. "),t.qZA(),t.TgZ(58,"button",14),t._uU(59," Enviar Informe a Google Spread Sheet "),t.qZA()()(),t.TgZ(60,"mat-menu",null,16)(62,"button",12),t.NdJ("click",function(){return a.setGraphType(0)}),t._uU(63," Linea de tiempo discriminado "),t.qZA(),t.TgZ(64,"button",12),t.NdJ("click",function(){return a.setGraphType(1)}),t._uU(65," Linea de tiempo apilado "),t.qZA()()),2&i){const s=t.MAs(9),c=t.MAs(61);t.Q6J("buttons","11010")("nav_menu",!1)("bar_text",a.getTitleText()),t.xp6(1),t.Q6J("matMenuTriggerFor",s),t.xp6(4),t.Q6J("data",a.dataList)("prod_list",a.localFilter.products_name_sel)("pivot",a.pivot)("bartype",a.bartype),t.xp6(2),t.Q6J("data",a.dataList)("prod_list",a.localFilter.products_name_sel)("pivot",a.pivot)("bartype",a.bartype)("chunk",a.chunk),t.xp6(3),t.Q6J("matMenuTriggerFor",c),t.xp6(4),t.Oqu(a.graphtypeName),t.xp6(3),t.Q6J("ngIf",0===a.pivot),t.xp6(3),t.Q6J("ngIf",1===a.pivot),t.xp6(3),t.Q6J("ngIf",2===a.pivot),t.xp6(3),t.Q6J("ngIf",3===a.pivot),t.xp6(8),t.Q6J("ngIf","D"===a.chunk),t.xp6(3),t.Q6J("ngIf","M"===a.chunk),t.xp6(3),t.Q6J("ngIf","Y"===a.chunk)}},dependencies:[k.O5,P.G,b.VK,b.OP,b.p6,Z.Hw,D,A]})}return n})()}];let B=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[y.Bz.forChild(q),y.Bz]})}return n})();var $=m(769),z=m(1359);const H=[{path:"",component:D}];let X=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[y.Bz.forChild(H),y.Bz]})}return n})(),K=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[k.ez,X,T.X]})}return n})();const V=[{path:"",component:A}];let W=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[y.Bz.forChild(V),y.Bz]})}return n})(),tt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[k.ez,W,T.X]})}return n})(),et=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[k.ez,B,$.O,z.ZX,T.X,b.Tx,Z.Ps,K,tt]})}return n})()}}]);