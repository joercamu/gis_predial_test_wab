// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/event dojo/_base/lang dojo/_base/Color dojo/_base/html dojo/DeferredList dojo/dom-class dojo/dom dojox/gfx/fx dojo/on dojo/Evented jimu/utils esri/layers/GraphicsLayer esri/graphic esri/geometry/Extent esri/geometry/Point esri/symbols/PictureMarkerSymbol esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/TextSymbol esri/symbols/Font esri/renderers/SimpleRenderer esri/tasks/query esri/tasks/QueryTask esri/tasks/FeatureSet esri/symbols/jsonUtils esri/renderers/jsonUtils esri/layers/FeatureLayer".split(" "),
function(D,x,E,m,n,t,F,C,G,H,I,J,y,K,l,L,v,z,h,p,M,N,O,u,A,P,w,B,Q){return D("ClusterLayer",[K,J],{constructor:function(a){this.clusterGraphics=[];this.cancelRequest=!1;this.clusterSize=120;this._singles=[];this._showSingles=!0;this.updateFeatures=void 0;this.hidePanel=a.hidePanel;this._parent=a._parent;if(this._parentLayer=a.parentLayer)this.objectIdField=this._parentLayer.objectIdField,this.fields=this._parentLayer.fields;this.name=a.name;this._map=a.map;this.color=n.fromString(a.color||"#ff0000");
this._styleColor=a._styleColor;this.symbolData=a.lyrInfo.symbolData;this.countColor=this.symbolData._highLightColor;this.itemId=a.lyrInfo.itemId;this.refresh=a.lyrInfo.refresh;this.displayFeatureCount=this.symbolData.displayFeatureCount;this.node=a.node;this.countEnabled=a.countEnabled;this.legendNode=a.legendNode;this.id=a.id;this.infoTemplate=a.infoTemplate;this.url=a.lyrInfo.url;this._testRenderer=a.lyrInfo.renderer;(this.originOperLayer=a.originOperLayer)&&this._getInfoTemplate(this.originOperLayer);
this.lyrInfo=a.lyrInfo;this.lyrType=a.lyrType;this.filter=a.filter;this.showAllFeatures=a.showAllFeatures;this.listDisabled=a.listDisabled;this.selfType=a.selfType;this._setupSymbols();this._setFieldNames();this.countFeatures(this._parentLayer);0<this._parentLayer.refreshInterval&&setInterval(m.hitch(this,this._updateEnd),6E4*this._parentLayer.refreshInterval)},countFeatures:function(a){var b=new u;b.geometry=this.showAllFeatures?a.fullExtent:this._map.extent;a.queryCount?a.queryCount(b,m.hitch(this,
function(b){if(0<b)this.hidePanel||(this.nodeCount=b),this._initFeatures(this._parentLayer);else if(!this.hidePanel)if(this.nodeCount=0,a.url){var c=new Q(a.url);I(c,"load",m.hitch(this,function(){this.countFeatures(c)}))}else this._initFeatures(this._parentLayer)})):this._initFeatures(this._parentLayer)},_initFeatures:function(a){this._features=[];var b=!0,c=new u;(-1<["CSV","Feature Collection","GeoRSS","KML"].indexOf(this.lyrType)||!this.url)&&a.graphics?(this._getSourceFeatures(a.graphics),this.clusterFeatures()):
"undefined"!==typeof this.url?this.loadData(this.url):(c.where=!this.showAllFeatures&&this.filter?this.filter:"1\x3d1",c.outFields=["*"],c.returnGeometry=!0,a.queryFeatures?a.queryFeatures(c).then(m.hitch(this,function(a){a.features&&(this._getSourceFeatures(a.features),this.clusterFeatures())})):b="error");"error"!==b&&(this.extentChangeSignal||(this.extentChangeSignal=this._map.on("extent-change",m.hitch(this,this.handleMapExtentChange))),this.clickSignal||(this.clickSignal=this.on("click",m.hitch(this,
this.handleClick))))},_getSourceFeatures:function(a){this._features=[];for(var b=0;b<a.length;b++){var c=a[b];c.geometry&&this._features.push(c)}},_getInfoTemplate:function(a){a=a.parentLayerInfo?a.parentLayerInfo:a;if(a.controlPopupInfo&&(a=a.controlPopupInfo.infoTemplates)){if(this.url){var b=this.url.split("/").pop();b&&(a.indexOf?-1<a.indexOf(b)&&(this.infoTemplate=a[b].infoTemplate):a.hasOwnProperty(b)&&(this.infoTemplate=a[b].infoTemplate))}this.setInfoTemplate(this.infoTemplate)}},_setFieldNames:function(){this._fieldNames=
[];if(this.infoTemplate&&"undefined"!==typeof this.infoTemplate.info){var a=this.infoTemplate.info.fieldInfos;if(a)for(var b=0;b<a.length;b++)a[b].visible&&this._fieldNames.push(a[b].fieldName)}if(this.symbolData.featureDisplayOptions&&0<this.symbolData.featureDisplayOptions.fields.length)for(a=0;a<this.symbolData.featureDisplayOptions.fields.length;a++)b=this.symbolData.featureDisplayOptions.fields[a],-1===this._fieldNames.indexOf(b.name)&&this._fieldNames.push(b.name);1>this._fieldNames.length&&
(this._fieldNames=["*"])},setLayerInfo:function(a){this.lyrInfo=a},clearSingles:function(a){x.forEach(a||this._singles,function(a){this.remove(a)},this);this._singles.length=0},_getSingleGraphic:function(a){a=new l(new v(a.geometry.x,a.geometry.y,this._map.spatialReference),null,a.attributes);a.setSymbol(this._singleSym);return a},_addSingles:function(a){x.forEach(a,function(a){a=this._getSingleGraphic(a);this._singles.push(a);this._showSingles&&this.add(a)},this);this._map.infoWindow.setFeatures(this._singles)},
initalCount:function(a){if(!this.hidePanel){var b=new u;b.returnGeometry=!1;b.geometry=this.showAllFeatures?null:this._map.extent;b.where=!this.showAllFeatures&&this.filter?this.filter:"1\x3d1";(new A(a)).executeForIds(b).then(m.hitch(this,function(a){var b;this.node?(C.contains(this.node,"searching")&&C.remove(this.node,"searching"),this.node.innerHTML=a?y.localizeNumber(a.length):0,b=this.node.parentNode):this.legendNode&&(b=this.legendNode.previousSibling);this.updateExpand(b,a?!1:!0)}))}},updateExpand:function(a,
b){if(!this.hidePanel&&"undefined"!==typeof a){var c;-1<a.id.indexOf("rec_")&&(c=a.id.replace("rec_",""),c=G.byId("exp_"+c));b?(a&&(t.addClass(a,"recDefault"),t.addClass(a,"inActive")),c&&t.addClass(c,"expandInActive")):this.visible&&(a&&(t.removeClass(a,"recDefault"),t.removeClass(a,"inActive")),c&&t.removeClass(c,"expandInActive"))}},loadData:function(a){if(0<a.length){this.initalCount(a);var b=new u;b.where="1\x3d1";!this.showAllFeatures&&this.filter&&(b.where=this.filter);b.returnGeometry=!1;
this.queryPending=!0;(new A(a)).executeForIds(b).then(m.hitch(this,function(b){var c=this._parentLayer&&this._parentLayer.maxRecordCount?this._parentLayer.maxRecordCount:1E3;if(b){this.queryIDs=b;b=[];var g,h;g=0;for(h=this.queryIDs.length;g<h;g+=c){var f=this.queryIDs.slice(g,g+c),e=new u;e.outFields=["*"];e.objectIds=f;e.returnGeometry=!0;e.outSpatialReference=this._map.spatialReference;f=new A(a);b.push(f.execute(e))}this._features=[];this.cancelRequest?console.log("Cancelled ClusterLayer 1"):
(new F(b)).then(m.hitch(this,function(a){this.queryPending=!1;if(this.cancelRequest)console.log("Cancelled ClusterLayer 2");else if(a){for(var b=this._map.spatialReference,c=[],d=0;d<a.length;d++)if(a[d][1].features)for(var e=0;e<a[d][1].features.length;e++){var f=a[d][1].features[e];if("undefined"!==typeof f.geometry&&null!==f.geometry&&f.geometry){var g=new v(f.geometry.x,f.geometry.y,b),g=new l(g);g.setAttributes(f.attributes);this.infoTemplate&&g.setInfoTemplate(this.infoTemplate);c.push(g)}}a=
!0;1E4>c&&(a=JSON.stringify(this._features)!==JSON.stringify(c));a&&(this.requiresReload=!0,this._features=c,this.clusterFeatures(),this.emit("update-end",{bubbles:!0,cancelable:!0}))}}))}}))}},handleClick:function(a){var b=[];if(a.graphic&&(b=a.graphic,b.attributes)){var c=b.attributes;c.Data&&1<c.Data.length?(this.clearSingles(this._singles),b=c.Data,a.stopPropagation(),this._addSingles(b)):c.Data&&1===c.Data.length?(c.Data[0].symbol=b.symbol,this._map.infoWindow.setFeatures([c.Data[0]])):this._map.infoWindow.setFeatures([b])}this.infoTemplate&&
this._map.infoWindow.show(a.mapPoint);E.stop(a)},handleMapExtentChange:function(a){if(a.levelChange)this.clusterFeatures();else if(a.delta){a=a.delta;var b=Math.abs(a.y);(50<Math.abs(a.x)||50<b)&&this.clusterFeatures()}},refreshFeatures:function(a){if(this.itemId){var b=a.featureSet.features;a.featureSet.transform&&(b=(new P(a.featureSet)).features);"undefined"===typeof this.updateFeatures&&(this.updateFeatures=b);a=!0;1E4>b.length&&(a=JSON.stringify(this.updateFeatures)!==JSON.stringify(b));if(a){this.requiresReload=
!0;this._features=[];this._parentLayer.clear();a=this._parentLayer.spatialReference;for(var c=0;c<b.length;c++){var d=b[c];if(d.geometry){var g=new l(this.getGraphicOptions(d,a));g.setAttributes(d.attributes);this.infoTemplate&&g.setInfoTemplate(this.infoTemplate);this._parentLayer.add(g);this._features.push(g)}else console.log("Null geometry skipped")}this.clusterFeatures()}this.updateFeatures=b}else this.url&&this.loadData(this.url)},getGraphicOptions:function(a,b){return"undefined"!==typeof a.geometry.rings?
{geometry:{rings:a.geometry.rings,spatialReference:{wkid:b.wkid}}}:"undefined"!==typeof a.geometry.paths?{geometry:{paths:a.geometry.paths,spatialReference:{wkid:b.wkid}}}:"undefined"!==typeof a.geometry.points?{geometry:{points:a.geometry.points,spatialReference:{wkid:b.wkid}}}:{geometry:new v(a.geometry.x,a.geometry.y,a.geometry.spatialReference)}},flashFeatures:function(){this._map.graphics.clear();this.flashGraphics(this.graphics)},flashSingle:function(a){if("undefined"===typeof a.symbol){var b=
new p(p.STYLE_NULL,new n(0,0,0,0),0),c=this.color.toRgb();a.setSymbol(new h(h.STYLE_CIRCLE,9,b,new n([c[0],c[1],c[2],.5])))}this.flashGraphics([a])},flashGraphics:function(a){for(var b=0;b<a.length;b++)this._flashFeature(a[b]);setTimeout(m.hitch(this,this._clearFeatures),1100)},_flashFeature:function(a){var b;if(a.geometry){var c=n.fromHex(this._styleColor),d=m.clone(c);d.a=.4;"undefined"!==typeof a.symbol&&(b=new h(h.STYLE_CIRCLE,a.symbol.size,new p(p.STYLE_SOLID,c,1),d))}"undefined"!==typeof b&&
(a=new l(a.geometry,b),this._map.graphics.add(a),b=a.getDojoShape())&&(H.animateStroke({shape:b,duration:700,color:{start:b.strokeStyle.color,end:b.strokeStyle.color},width:{start:18,end:0}}).play(),setTimeout(this._clearFeature,850,a))},_clearFeatures:function(){this._map.graphics.clear()},_clearFeature:function(a){a.getLayer().remove(a)},setColor:function(a){this.color=a},setStyleColor:function(a){this._styleColor=a},cancelPendingRequests:function(){console.log("Cancel Query...");this.queryPending&&
(this.cancelRequest=!0);this.removeEventListeners()},removeEventListeners:function(){this.extentChangeSignal&&(this.extentChangeSignal.remove(),this.extentChangeSignal=null);this.clickSignal&&(this.clickSignal.remove(),this.clickSignal=null)},clusterFeatures:function(){this.clear();null===this._map&&(this._map=this._parent.map);this._map.infoWindow.isShowing&&this._map.infoWindow.hide();var a=this._features,b=0;if("undefined"!==typeof a){if(0<a.length&&(this.visible||this.requiresReload)){var c=this.clusterSize;
this.clusterGraphics=[];for(var d=this._map.spatialReference,g=this._map.extent,h=new v(g.xmin,g.ymax,d),f=Math.ceil(this._map.height/c),e=Math.ceil(this._map.width/c),k=g.getWidth()/this._map.width*c,c=g.getHeight()/this._map.height*c,g=0;g<f;g++)for(var p=0;p<e;p++){var m=h.x+k*p,n=h.y-c*g,n=new L(m,n-c,m+k,n,d),m=[],r;for(r in a){var t=a[r];n.contains(t.geometry)&&(b+=1,m.push(t))}0<m.length&&(n=this.getClusterCenter(m),this.clusterGraphics.push({center:n,graphics:m}))}for(var u in this.clusterGraphics){d=
this.clusterGraphics[u];h=d.graphics.length;f=d.graphics;r=y.localizeNumber(h);k=e=19*r.length;e+=5;c=new N;c.family="Arial";c.size="16px";r=new M(r,c,this.countColor);r.setOffset(0,-4);var q;this.symbolData&&this.symbolData.symbol?this.symbolData.symbol.size?q=this.symbolData.symbol.size:this.symbolData.symbol.width&&(q=this.symbolData.symbol.width,c=this.symbolData.symbol.height,q=q>=c?q:c):this.icon.width?(e=this.icon.width>=e?this.icon.width+5:e,e=this.icon.height>=e?this.icon.height+5:e,k=this.icon.width>=
k?this.icon.width+1:k,k=this.icon.height>=k?this.icon.height+1:k):this.icon.size&&(q=this.icon.size);q&&(e=q>=e?q+5:e,k=q>=k?q+1:k);k>=e&&(e+=0===k-e?4:k-e+5);this._setSymbols(e+15,e);f={Count:h,Data:f};1<h?"undefined"!==typeof this.symbolData?"CustomSymbol"!==this.symbolData.symbolType?(this.add(new l(d.center,this.csym,f)),this.displayFeatureCount?this.add(new l(d.center,r,f)):this.add(new l(d.center,this.csym3,f))):(this.add(new l(d.center,this.csym,f)),this.displayFeatureCount?this.add(new l(d.center,
r,f)):this.add(new l(d.center,this.psym,f))):(this.add(new l(d.center,this.csym,f)),this.displayFeatureCount?this.add(new l(d.center,r,f)):this.add(new l(d.center,this.psym,f))):(d=d.graphics[0].geometry,this.renderer&&(d=(this.renderer.hasOwnProperty("getSymbol")||this.renderer.hasOwnProperty("symbol"))&&"LayerSymbol"===this.symbolData.symbolType?new l(d,null,f.Data[0].attributes,this.infoTemplate):"EsriSymbol"===this.symbolData.symbolType?new l(d,w.fromJson(this.symbolData.symbol),f,this.infoTemplate):
"LayerSymbol"!==this.symbolData.symbolType?new l(d,this.psym,f,this.infoTemplate):this.renderer.symbol?new l(d,null,f,this.infoTemplate):new l(d,this.psym,f,this.infoTemplate),"undefined"!==typeof d&&this.add(d)))}}this._updateNode(this.showAllFeatures?a.length:b)}},_updateNode:function(a){if(!this.hidePanel){var b;this.node?(this.node.innerHTML=y.localizeNumber(a?a:0),b=this.node.parentNode):this.legendNode&&(b=this.legendNode.previousSibling);this.updateExpand(b,a&&0<a&&this.visible?!1:!0)}},_setSymbols:function(a,
b){var c=this.color.toRgb(),d,g,l;if("undefined"!==typeof this.symbolData){var f;"custom"===this.backgroundClusterSymbol?f=c:(d=w.fromJson(this.backgroundClusterSymbol),0===d.outline.color.a||0===d.outline.width?(g=p.STYLE_NULL,l=0):(g=p.STYLE_SOLID,l=d.outline.width));d?(c=p(g,d.outline.color,l),f=d.color.toRgb(),this.csym=new h(h.STYLE_CIRCLE,a,c,new n([f[0],f[1],f[2],.75]))):this.csym=new h(h.STYLE_CIRCLE,a,null,new n([f[0],f[1],f[2],.75]));(a=this.symbolData.s)&&-1<a.indexOf("${appPath}")?(a=
window.location.pathname.replace("index.html",""),a=this.symbolData.s.replace("${appPath}",window.location.origin+a)):a=this.symbolData.s?this.symbolData.s:this.icon.imageData;if(a&&"CustomIcon"===this.symbolData.iconType){var e,k;this.symbolData.symbol&&this.symbolData.symbol.height&&(e=this.symbolData.symbol.height);this.symbolData.symbol&&this.symbolData.symbol.width&&(k=this.symbolData.symbol.width);e&&k?k=e=k>e?k:e:(e=this.symbolData.icon.height?this.symbolData.icon.height:b,k=this.symbolData.icon.width?
this.symbolData.icon.width:b);this.psym=new z(a,e,k)}else a&&"LayerIcon"===this.symbolData.iconType?this.psym=w.fromJson(this.symbolData.symbol):"esriPMS"===this.icon.type?this.psym=this.icon:(b=p(this.icon.outline.style,this.icon.outline.color,this.icon.outline.width),this.psym=new h(this.icon.style,this.icon.size,b,this.icon.color));this.csym2=m.clone(this.psym);this.csym3=m.clone(this.csym2);"undefined"!==typeof this.csym2.xoffset&&(this.csym3.xoffset=0);"undefined"!==typeof this.csym2.yoffset&&
(this.csym3.yoffset=0)}else e=new p(p.STYLE_NULL,new n(0,0,0,0),0),this.csym=new h(h.STYLE_CIRCLE,a,e,new n([c[0],c[1],c[2],.5])),this.psym=new z(this.icon.url,a-10,a-10),this.psym2=new z(this.icon.url,b-7,b-7),e=new p(p.STYLE_NULL,new n(0,0,0,0),0),this.csym2=new h(h.STYLE_CIRCLE,b,e,new n([c[0],c[1],c[2],.5]))},_setupSymbols:function(){if("undefined"!==typeof this.symbolData){this.countColor=this.symbolData._highLightColor;this.backgroundClusterSymbol=this.symbolData.clusterSymbol;this.icon=this.symbolData.icon;
"LayerSymbol"===this.symbolData.symbolType?this._parentLayer.renderer?this.renderer=this._parentLayer.renderer.toJson?this._parentLayer.renderer:B.fromJson(this._parentLayer.renderer):this._testRenderer?this.renderer=B.fromJson(this._testRenderer):this.symbolData.renderer&&(this.renderer=this.symbolData.renderer.toJson?this.symbolData.renderer:B.fromJson(this.symbolData.renderer)):this.renderer=new O(w.fromJson(this.symbolData.symbol));var a=this.color.toRgb(),b=new p(p.STYLE_NULL,new n(0,0,0,0),
0);this._singleSym=new h(h.STYLE_CIRCLE,9,b,new n([a[0],a[1],a[2],.5]))}},getLayer:function(){return this},getClusterCenter:function(a){var b=0,c=0,d=a.length;x.forEach(a,function(a){b+=a.geometry.x;c+=a.geometry.y},this);return new v(b/d,c/d,a[0].geometry.spatialReference)},destroy:function(){this._clear();this.removeEventListeners()},_clear:function(){this.clear();this._features=[]},_updateEnd:function(){this.url&&this.loadData(this.url)}})});