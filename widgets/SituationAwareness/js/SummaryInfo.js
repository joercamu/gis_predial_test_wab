// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/Evented dojo/_base/array dojo/DeferredList dojo/Deferred dojo/_base/lang dojo/_base/Color dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/number dojo/on dojo/has dijit/form/Button jimu/dijit/Popup jimu/utils jimu/dijit/Message esri/config esri/geometry/geometryEngine esri/geometry/mathUtils esri/geometry/Point esri/geometry/webMercatorUtils esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query ./analysisUtils".split(" "),
function(A,B,w,x,t,n,F,G,q,r,H,I,C,u,J,K,L,D,y,M,N,O,P,Q,E,v,R,S,T,U,z,p){return A("SummaryInfo",[B],{summaryLayer:null,summaryFields:[],summaryIds:[],summaryFeatures:[],tabNum:null,symbolField:null,graphicsLayer:null,lyrRenderer:null,lyrSymbol:null,featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,allFields:!1,constructor:function(a,h,f){this.tab=a;this.container=h;this.parent=f;this.config=f.config;this.graphicsLayer=null;this.baseLabel=""!==a.label?a.label:a.layerTitle?
a.layerTitle:a.layers},queryTabCount:function(a,h,f,b){var k=new t;this.incidentCount=a.length;var d=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&(d=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var c;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?
(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,h,f,b,d).then(function(a){k.resolve(a)})):(c=new v(this.summaryLayer.url),c.infoTemplate=this.tab.tabLayers[0].infoTemplate,d=[c],this.tab.tabLayers=d,u(c,"load",n.hitch(this,function(){this.summaryLayer=c;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,h,f,b,d).then(function(a){k.resolve(a)})})))):this.loading||(c=new v(this.tab.tabLayers[0].url),this.loading=!0,u(c,"load",n.hitch(this,function(){this.summaryLayer=
c;this.summaryFields=this._getFields(this.summaryLayer);for(var g=this.tab.tabLayers[0].url.split("MapServer/")[1],e=this.parent.map.itemInfo.itemData.operationalLayers,l=0;l<e.length;l++){var m=e[l];if("undefined"!==typeof m.layerObject)if(m.layerObject.infoTemplates){if(m=m.layerObject.infoTemplates[g]){c.infoTemplate=m.infoTemplate;break}}else if(m.layerObject.infoTemplate){c.infoTemplate=m.layerObject.infoTemplate;break}}d=[c];this.tab.tabLayers=d;this.loading=!1;this._performQuery(a,h,f,b,d).then(function(a){k.resolve(a)})})))}this.mapServiceLayer||
this._performQuery(a,h,f,b,d).then(function(a){k.resolve(a)});return k},_performQuery:function(a,h,f,b,k){var d=new t,c=[],g,e;0<h.length?e=p.getGeoms(h):0<a.length&&(e=p.getGeoms(a));this.summaryGeoms=e;if(0<e.length)for(a=0;a<e.length;a++)c=e[a],h=p.createDefArray(k,c,this.parent.opLayers,this.tab),g=0===a?c=h:c=g.concat(h);(new x(c)).then(n.hitch(this,function(a){for(var e=0,c=0;c<a.length;c++){var g=a[c][1];isNaN(g)?g&&g.features?e+=g.features.length:g&&"undefined"!==typeof g.length&&(e+=g.length):
e+=g}this.updateTabCount(e,f,b);this.queryOnLoad&&n.hitch(this,this._queryFeatures(this.summaryGeoms));d.resolve(e)}));return d},updateTabCount:function(a,h,f){this.featureCount=a;p.updateTabCount(this.featureCount,h,f,this.baseLabel,this.incidentCount)},updateForIncident:function(a,h,f,b,k,d,c){this.incidentCount=a.length;this.allFields="undefined"!==typeof d&&"undefined"!==typeof c?d?!0:c:!1;var g="undefined"!==typeof k,e;this.tabNum=b;g?e=new t:(this.container.innerHTML="",q.add(this.container,
"loading"));this.summaryIds=[];this.summaryFeatures=[];if(0<this.tab.tabLayers.length){var l=this.summaryGeoms,m;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],m=new v(this.summaryLayer.url),m.infoTemplate=this.tab.tabLayers[0].infoTemplate,this.tab.tabLayers[1]=m,this.summaryFields=this._getFields(this.tab.tabLayers[0]),g?this._queryFeatures(l,g).then(function(a){e.resolve(a)}):(this._initGraphicsLayer(f),n.hitch(this,this._queryFeatures(l)))):(m=
new v(this.tab.tabLayers[0].url),u(m,"load",n.hitch(this,function(){this.summaryLayer=m;if(-1<this.tab.tabLayers[0].url.indexOf("MapServer"))for(var a=this.tab.tabLayers[0].url.split("MapServer/")[1],c=this.parent.map.itemInfo.itemData.operationalLayers,b=0;b<c.length;b++){var d=c[b];if("undefined"!==typeof d.layerObject&&d.layerObject.infoTemplates&&(d=d.layerObject.infoTemplates[a])){m.infoTemplate=d.infoTemplate;break}}this.tab.tabLayers[1]=m;this.summaryFields=this._getFields(this.tab.tabLayers[1]);
g?this._queryFeatures(l,g).then(function(a){e.resolve(a)}):(this._initGraphicsLayer(f),n.hitch(this,this._queryFeatures(l)))})));if(g)return e}},_initGraphicsLayer:function(a){null!==a&&(this.graphicsLayer=a,this.graphicsLayer.clear(),this.summaryLayer&&this.summaryLayer.renderer&&(this.lyrRenderer=this.summaryLayer.renderer,this.graphicsLayer.renderer=this.lyrRenderer,"undefined"!==typeof this.summaryLayer.renderer.attributeField?this.symbolField=this.summaryLayer.renderer.attributeField:this.lyrSymbol=
this.lyrRenderer.symbol))},_queryFeatures:function(a,h){var f;h&&(f=new t);for(var b=[],k=-1===[null,void 0,""].indexOf(this.tab.tabLayers[0].id)?this.tab.tabLayers[0].id:this.tab.layers,k=p.getFilter(k,this.parent.opLayers),d=new z,c=0;c<a.length;c++)d.geometry=a[c],d.where=k,b.push(this.summaryLayer.queryIds(d));(new x(b)).then(n.hitch(this,function(a){for(var e,c,b=0;b<a.length;b++)a[b][0]&&(e=a[b][1],c=e=0===b?e:c.concat(e));e?(this.summaryIds=e,0<this.summaryIds.length?h?this._queryFeaturesByIds(h).then(function(a){f.resolve(a)}):
this._queryFeaturesByIds():h||this._processResults()):h||this._processResults()}),n.hitch(this,function(a){console.error(a);new y({message:a})}));if(h)return f},_queryFeaturesByIds:function(a){var h,f=[];a&&(h=new t);var b=this.summaryLayer.maxRecordCount||1E3,k=this.summaryIds.slice(0,b);this.summaryIds.splice(0,b);var d=new z;d.where=p.getFilter(this.summaryLayer.id,this.parent.opLayers);var c=!1;w.some(this.summaryFields,n.hitch(this,function(a){if("area"===a.type||"length"===a.type||this.graphicsLayer)return c=
!0}));a&&(c=!0);d.returnGeometry=c;d.outSpatialReference=this.parent.map.spatialReference;var g=[];w.forEach(this.summaryFields,function(a){g.push(a.field)});this.symbolField&&g.push(this.symbolField);d.outFields=!0===this.config.csvAllFields||"true"===this.config.csvAllFields?["*"]:g;d.objectIds=k;for(f.push(this.summaryLayer.queryFeatures(d));0<this.summaryIds.length;)k=this.summaryIds.slice(0,b),this.summaryIds.splice(0,b),d.objectIds=k,f.push(this.summaryLayer.queryFeatures(d));(new x(f)).then(n.hitch(this,
function(b){this.summaryFeatures=[];for(var c=0;c<b.length;c++)if(b[c][0]){var d=b[c][1];d.features&&(this.summaryFeatures=this.summaryFeatures.concat(d.features))}a?this._processResults(a).then(n.hitch(this,function(a){this.SA_SAT_download&&q.replace(this.SA_SAT_download,"download","processing");h.resolve(a)})):(this._processResults(),this.SA_SAT_download&&q.replace(this.SA_SAT_download,"download","processing"));this.SA_SAT_download&&q.replace(this.SA_SAT_download,"download","processing")}),n.hitch(this,
function(a){console.error(a);new y({message:a})}));if(a)return h},_prepResults:function(){for(var a=0;a<this.summaryFields.length;a++){var h=this.summaryFields[a],f=h.field,b=h.total;switch(h.type){case "count":b=this.summaryFeatures.length;break;case "area":b=p.getArea(this.summaryFeatures,this.summaryGeoms,this.config.distanceSettings,this.config.distanceUnits);break;case "length":b=p.getLength(this.summaryFeatures,this.summaryGeoms,this.config.distanceSettings,this.config.distanceUnits);break;
case "sum":b=p.getSum(this.summaryFeatures,f);break;case "avg":b=p.getSum(this.summaryFeatures,f)/this.summaryFeatures.length;break;case "min":b=p.getMin(this.summaryFeatures,f);break;case "max":b=p.getMax(this.summaryFeatures,f)}h.total=b}},_processResults:function(a){this._prepResults();var h,f=this.summaryFields,b=0,k;if(a)h=new t;else{this.container.innerHTML="";q.remove(this.container,"loading");if(0===this.summaryFeatures.length){this.container.innerHTML=this.parent.nls.noFeaturesFound;return}k=
r.create("div",{style:"width:"+220*(f.length+1)+"px;"},this.container);q.add(k,"SAT_tabPanelContent");var d=r.create("div",{},k);q.add(d,"SATcolExport");q.add(d,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");d=r.create("div",{"data-dojo-attach-point":"SA_SAT_download",title:this.parent.nls.downloadCSV},d);q.add(d,[this.parent.isBlackTheme?"btnExportBlack":"btnExport","download"]);u(d,"click",n.hitch(this,this._exportToCSV,f))}for(var d=[],c=0;c<f.length;c++){var g=f[c],e=D.stripHTML(g.alias?
g.alias:"")+"\x3cbr/\x3e",b=g.alias===this.parent.nls.area||g.alias===this.parent.nls.length?g.total:Math.round(g.total);isNaN(b)&&(b=0);g=C.format(b);if(a)d.push({num:g,info:e,total:b});else{b=r.create("div",{"class":"SATcol"},k);q.add(b,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");var l=r.create("div",{style:"max-height: 60px;"},b);r.create("div",{"class":" SATcolWrap",style:"max-height: 30px; overflow: hidden;",innerHTML:e},l);r.create("div",{"class":" colSummary",innerHTML:g},
b)}}f=[];k=null!==this.graphicsLayer;!a&&k&&(this.graphicsLayer.clear(),this.tab.tabLayers[1].clear());if(this.summaryFeatures)for(c=0;c<this.summaryFeatures.length;c++)e=this.summaryFeatures[c],this.lyrSymbol?e.symbol=this.lyrSymbol:k&&this.graphicsLayer.renderer?(g=this.graphicsLayer.renderer.getSymbol(e),e.symbol=g):this.summaryLayer.renderer&&this.summaryLayer.renderer.getSymbol&&(e.symbol=this.summaryLayer.renderer.getSymbol(e)),e=e.toJson?new E(e.toJson()):e,!a&&k?(this.graphicsLayer.add(e),
this.tab.tabLayers[1].add(e)):f.push(e);!a&&k&&(this.graphicsLayer.setVisibility(!0),this.parent._toggleTabLayersNew(this.tabNum),this.tab.restore&&this.emit("summary-complete",{bubbles:!0,cancelable:!0,tab:this.tabNum}));if(a)return h.resolve({graphics:f,analysisResults:d,context:this}),h},_exportToCSV:function(a,h,f,b){a=p.exportToCSV(this.summaryFeatures,h,f,b,{type:"summary",baseLabel:this.baseLabel,csvAllFields:this.parent.config.csvAllFields,layer:this.summaryLayer,opLayers:this.parent.opLayers,
nlsValue:this.parent.nls.summary,nlsCount:this.parent.nls.count,summaryFields:this.summaryFields,calcFields:this.calcFields});this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){var h=p.getSkipFields(a),f=[];if("undefined"!==typeof this.tab.advStat){var b=this.tab.advStat.stats,k;for(k in b)0<b[k].length&&w.forEach(b[k],function(a){f.push({field:a.expression,alias:a.label+"",type:k,total:0})})}else{if(a.infoTemplate)b=a.infoTemplate.info.fieldInfos;else if(-1<this.tab.tabLayers[0].url.indexOf("MapServer"))for(var d=
this.tab.tabLayers[0].url.split("MapServer/")[1],c=this.parent.map.itemInfo.itemData.operationalLayers,b=null,g=0;g<c.length;g++){var e=c[g];if(e.layerObject.infoTemplates&&(e=e.layerObject.infoTemplates[d])){b=e.infoTemplate.info.fieldInfos;break}}else b=a.fields;b||(b=a.fields);for(d=0;d<b.length;d++)if(c=b[d],"undefined"!==typeof a.fields){var g=a.fields[d].type,l;c.name===a.objectIdField||"esriFieldTypeDouble"!==g&&"esriFieldTypeInteger"!==g&&"esriFieldTypeSmallInteger"!==g||("undefined"!==typeof c.visible?
c.visible&&(l={field:c.fieldName,alias:c.label,type:"sum",total:0}):l={field:c.name,alias:c.alias,type:"sum",total:0},l&&-1===h.indexOf(l.field)&&f.push(l),l=null)}}this.calcFields=n.clone(f);if(this.allFields)for(b=0;b<a.fields.length;b++){l=a.fields[b];d=!0;c=0;b:for(;c<f.length;c++)if(l.name===f[c].field){d=!1;break b}-1===h.indexOf(l.name)&&d&&f.push({field:l.name,alias:l.alias,type:l.type})}a=p.getSpecialFields(a);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=
a.typeIdField;this.types=a.types;return f}})});