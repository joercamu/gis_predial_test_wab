// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on esri/graphic esri/Color esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query esri/geometry/geometryEngine jimu/utils ./analysisUtils".split(" "),function(O,k,J,F,H,G,w,z,P,K,E,L,Q,A,M,N,R,S,T,x,U,n){return O("ProximityInfo",
null,{featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,constructor:function(a,d,f){this.tab=a;this.container=d;this.parent=f;this.graphicsLayer=this.incident=null;this.specialFields={};this.typeIdField="";this.types=[];this.dateFields={};this.config=f.config;this.baseLabel=""!==a.label?a.label:a.layerTitle?a.layerTitle:a.layers},queryTabCount:function(a,d,f,h){var e=new G;this.incidentCount=a.length;var b=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&
(b=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var c;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,d,f,h,b).then(function(a){e.resolve(a)})):(c=new A(this.summaryLayer.url),c.infoTemplate=this.tab.tabLayers[0].infoTemplate,
b=[c],this.tab.tabLayers=b,E(c,"load",k.hitch(this,function(){this.summaryLayer=c;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,d,f,h,b).then(function(a){e.resolve(a)})})))):this.loading||(c=new A(this.tab.tabLayers[0].url),this.loading=!0,E(c,"load",k.hitch(this,function(){this.summaryLayer=c;this.summaryFields=this._getFields(this.summaryLayer);for(var b=this.tab.tabLayers[0].url.split("MapServer/")[1],k=this.parent.map.itemInfo.itemData.operationalLayers,v=0;v<k.length;v++){var r=
k[v];if("undefined"!==typeof r.layerObject&&r.layerObject.infoTemplates&&(r=r.layerObject.infoTemplates[b])){c.infoTemplate=r.infoTemplate;break}}this.tab.tabLayers=[c];this.loading=!1;this._performQuery(a,d,f,h,this.tab.tabLayers).then(function(a){e.resolve(a)})})))}this.mapServiceLayer||this._performQuery(a,d,f,h,b).then(function(a){e.resolve(a)});return e},_performQuery:function(a,d,f,h,e){var b=new G,c=[],g,q;0<d.length?q=n.getGeoms(d):0<a.length&&(q=n.getGeoms(a));this.summaryGeoms=q;if(0<q.length)for(a=
0;a<q.length;a++)c=q[a],d=n.createDefArray(e,c,this.parent.opLayers,this.tab),g=0===a?c=d:c=g.concat(d);(new H(c)).then(k.hitch(this,function(a){for(var c=0,e=0;e<a.length;e++){var d=a[e][1];isNaN(d)?d&&d.features?c+=d.features.length:d&&"undefined"!==typeof d.length&&(c+=d.length):c+=d}this.updateTabCount(c,f,h);b.resolve(c)}));return b},updateTabCount:function(a,d,f){this.featureCount=a;n.updateTabCount(this.featureCount,d,f,this.baseLabel,this.incidentCount)},updateForIncident:function(a,d,f,h,
e,b){this.incidentCount=a.length;this.allFields="undefined"!==typeof e&&"undefined"!==typeof b?e?!0:b:!1;var c="undefined"!==typeof h,g;F.forEach(this.tab.tabLayers,k.hitch(this,function(b){c&&(g=new G);if(b.url){var e=new A(b.url,{mode:A.MODE_ONDEMAND,infoTemplate:b.infoTemplate});E(e,"load",k.hitch(this,function(){this.tab.tabLayers=[e];c?this.processIncident(a,d,f,h).then(k.hitch(this,function(a){g.resolve(a)}),k.hitch(this,function(a){console.error(a);g.reject(a)})):this.processIncident(a,d,f,
h)}))}else c?this.processIncident(a,d,f,h).then(k.hitch(this,function(a){g.resolve(a)}),k.hitch(this,function(a){console.error(a);g.reject(a)})):this.processIncident(a,d,f,h)}));if(c)return g},processIncident:function(a,d,f,h){this.incidents=a;var e=[],b;if(0===d.length)for(var c=0;c<a.length;c++)b=a[c],b=b.geometry?b.geometry:b,"polygon"===b.type?(d.push(b),e.push({geometry:b,buffer:b})):e.push({geometry:void 0,buffer:void 0});else for(c=0;c<a.length;c++){b=a[c];var g=d[c].geometry?d[c].geometry:
d[c];b=b.geometry?b.geometry:b;e.push({geometry:b,buffer:g})}if(0!==d.length){for(a=0;a<e.length;a++)if(d=e[a].buffer,"undefined"!==typeof d)for(b=0;b<e.length;b++)if(b!==a&&(c=e[b].buffer,"undefined"!==typeof c&&x.overlaps(d,c))){e[a].buffer=x.difference(d,c);e[b].buffer=x.difference(c,d);c=x.union(c,d);c=x.difference(c,e[a].buffer);c=x.difference(c,e[b].buffer);if(Array.isArray(e[a].geometry)){if(Array.isArray(e[b].geometry))for(g=0;g<e[b].geometry.length;g++)e[a].geometry.push(e[b].geometry[g]);
else e[a].geometry.push(e[b].geometry);g=e[a].geometry}else if(g=[],g.push(e[a].geometry),Array.isArray(e[b].geometry))for(var q=0;q<e[b].geometry.length;q++)g.push(e[b].geometry[q]);else g.push(e[b].geometry);e.push({geometry:g,buffer:c})}var v,r="undefined"!==typeof h;r?v=new G:(this.container.innerHTML="",w.add(this.container,"loading"));var l=[];this.graphicsLayer=f;f=this.tab.tabLayers[0];var u=this._getFields(f);h=-1===[null,void 0,""].indexOf(f.id)?f.id:this.tab.layers;h=n.getFilter(h,this.parent.opLayers);
a=[];for(d=0;d<e.length;d++)b=new T,b.returnGeometry=!0,b.outSpatialReference=this.parent.map.spatialReference,b.geometry=e[d].buffer,b.where=h,b.outFields="true"===this.parent.config.csvAllFields||!0===this.parent.config.csvAllFields?["*"]:u,"undefined"!==typeof f.queryFeatures&&a.push(f.queryFeatures(b));(new H(a)).then(k.hitch(this,function(a){for(var b=0;b<a.length;b++){var c=a[b][1];if(c&&c.features)for(var c=c.features,d=e[b].geometry,f=0;f<c.length;f++){var h=c[f],g=h.geometry,p;if(Array.isArray(d)){var m;
for(p=0;p<d.length;p++){var t=n.getDistance(d[p],g,this.parent.config.distanceUnits);if("undefined"===typeof m||t<m)m=t}p=m;g={DISTANCE:m}}else p=n.getDistance(d,g,this.parent.config.distanceUnits),g={DISTANCE:p};for(t=0;t<u.length;t++)g[u[t]]=h.attributes[u[t]];!0===this.config.csvAllFields||"true"===this.config.csvAllFields?h.attributes.DISTANCE=p:h.attributes=g;l.push(h)}}l.sort(n.compareDistance);if(r){var q={graphics:l,analysisResults:l.length,context:this};this._processResults(l,!0).then(k.hitch(this,
function(a){v.resolve(k.mixin(q,a))}))}else this._processResults(l)}),k.hitch(this,function(a){console.error(a);v.reject(a)}));if(r)return v}},_processResults:function(a,d){var f,h,e=a&&0<a.length;if(e&&"point"!==a[0].geometry.type)for(var b=a.length-1;0<=b;b--)"undefined"===typeof a[b].geometry.getExtent()&&a.splice(b,1);d?f=new G:(this.container.innerHTML="",w.remove(this.container,"loading"),this.graphicsLayer.clear(),e&&(h=z.create("div",{"class":"SAT_tabPanelContent"},this.container),b=z.create("div",
{},h),w.add(b,"SATcolExport"),w.add(b,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),b=z.create("div",{title:this.parent.nls.downloadCSV},b),w.add(b,"btnExport"),E(b,"click",k.hitch(this,this._exportToCSV,a))));var b=this.parent.nls[this.parent.config.distanceUnits],c;"undefined"!==typeof this.tab.advStat&&"undefined"!==typeof this.tab.advStat.stats&&"undefined"!==typeof this.tab.advStat.stats.outFields?c=this.tab.advStat.stats.outFields:(c=[],0<this.tab.tabLayers.length&&F.forEach(this.tab.tabLayers,
k.hitch(this,function(a){"undefined"!==typeof a.popupInfo?F.forEach(a.popupInfo.fieldInfos,k.hitch(this,function(a){if(a.visible){var b={value:0};b.expression=a.fieldName;b.label=a.label;c.push(b)}})):a.infoTemplate?F.forEach(a.infoTemplate.info.fieldInfos,k.hitch(this,function(a){if(a.visible){var b={value:0};b.expression=a.fieldName;b.label=a.label;c.push(b)}})):F.forEach((a.layerObject?a.layerObject:a).fields,k.hitch(this,function(a){var b={value:0};b.expression=a.name;b.label=a.alias;c.push(b)}))})));
var g=220,q=[];if(e)for(var v=0;v<a.length;v++){var r=v+1,l=a[v],u=l.geometry,x=u;"point"!==u.type&&(x=u.getExtent().getCenter());var u=l.attributes,y=n.getDistanceLabel(u.DISTANCE,b,this.parent.nls.approximate),B="",D=0,C=[];if("undefined"!==typeof c){for(var A=0;A<c.length;A++){var H=c[A],p;for(p in u)if("DISTANCE"!==p&&3>D&&H.expression===p){var m=n.getFieldValue(p,u[p],this.specialFields,this.dateFields,"longMonthDayYear",this.typeIdField,this.types),m="undefined"!==typeof m&&null!==m?U.stripHTML(m.toString()):
"",t,I=l._layer&&l._layer.fields?l._layer.fields:this.tab.tabLayers&&this.tab.tabLayers[0]?this.tab.tabLayers[0].fields:void 0;I&&(I=n.getField(I,p))&&(t=I.alias);if("undefined"===typeof t||t in[""," ",null,void 0])t=p;n.isURL(m)?m='\x3ca href\x3d"'+m+'" target\x3d"_blank" style\x3d"color: inherit;"\x3e'+t+"\x3c/a\x3e":n.isEmail(m)&&(m='\x3ca href\x3d"mailto:'+m+'" style\x3d"color: inherit;"\x3e'+t+"\x3c/a\x3e");B+=m+"\x3cbr/\x3e";D+=1;C.push({label:t,value:m})}}C.push({label:this.parent.nls.distance,
value:y});0<C.length&&q.push(C)}d||(l=z.create("div",{},h),w.add(l,"SATcolRec"),w.add(l,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),D=z.create("div",{},l),w.add(D,"SATcolRecBar"),C=z.create("div",{innerHTML:r},D),w.add(C,"SATcolRecNum"),K.set(C,"backgroundColor",this.parent.config.activeColor),E(C,"click",k.hitch(this,this._zoomToLocation,x)),"point"===this.incidents[0].geometry.type&&(y=z.create("div",{innerHTML:y},D),w.add(y,"SATcolDistance")),this.parent.config.enableRouting&&
(y=z.create("div",{title:this.parent.nls.get_directions},D),w.add(y,"SATcolDir"),E(y,"click",k.hitch(this,this._routeToIncident,x))),B=z.create("div",{"class":"SATcolWrap",innerHTML:B},l),w.add(B,"SATcolInfo"),g+=P.position(l).w,B=new N(N.STYLE_SOLID,new J.fromString(this.parent.config.activeMapGraphicColor),1),B=new M(M.STYLE_CIRCLE,24,B,new J.fromString(this.parent.config.activeMapGraphicColor)),y=new R,y.family="Arial",y.size="12px",r=new S(r,y,new Q(this.parent.config.fontColor)),r.setOffset(0,
-4),this.graphicsLayer.add(new L(x,B,u)),this.graphicsLayer.add(new L(x,r,u)))}if(!d&&e)K.set(h,"width",g+"px");else return f.resolve({reportResults:q}),f},_exportToCSV:function(a,d,f,h){a=n.exportToCSV(a,d,f,h,{type:"proximity",baseLabel:this.baseLabel,csvAllFields:this.parent.config.csvAllFields,layer:this.tab.tabLayers[0],opLayers:this.parent.opLayers,nlsValue:this.parent.nls.proximity,nlsCount:this.parent.nls.count,unit:this.parent.nls[this.parent.config.distanceUnits],approximateLabel:this.parent.nls.approximate});
this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){a=n.getFields(a,this.tab,this.allFields,this.parent);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=a.types;this.displayFields=n.getDisplayFields(this.tab);return a.fields},_zoomToLocation:function(a){this.parent.zoomToLocation(a)},_routeToIncident:function(a){this.parent.routeToIncident(a)}})});