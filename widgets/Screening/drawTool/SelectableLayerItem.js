// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Screening/drawTool/SelectableLayerItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-row" data-dojo-attach-point\x3d"layerContent"\x3e\r\n    \x3cdiv class\x3d"selectable-check" title\x3d"${nls.drawToolWidget.toggleSelectability}" data-dojo-attach-point\x3d"selectableCheckBox"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-name jimu-ellipsis" data-dojo-attach-point\x3d"layerNameNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/_base/event dojo/on dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SelectableLayerItem.html".split(" "),function(e,b,c,f,d,g,h,k,l,m){return e([h,k,l,g],{baseClass:"jimu-widget-screening-selectable-layer-item",templateString:m,layerName:"layer",layerVisible:!0,checked:!1,constructor:function(a){this.layerName="layer";this.layerVisible=!0;this.checked=!1;c.mixin(this,a)},postCreate:function(){this.inherited(arguments)},
init:function(a){this.featureLayer=a;this.layerName=this.layerInfo.title||"layer";this.own(d(this.featureLayer,"selection-clear",c.hitch(this,function(){b.addClass(this.domNode,"no-action")})));this.layerNameNode.innerHTML=this.layerName;this.layerNameNode.title=this.layerName;b.addClass(this.selectableCheckBox,"checked");this.own(d(this.selectableCheckBox,"click",c.hitch(this,this._toggleChecked)));this.own(d(this.layerContent,"click",c.hitch(this,this._toggleContent)))},isLayerVisible:function(){return this.layerVisible},
isChecked:function(){return this.checked},_toggleChecked:function(a){f.stop(a);b.toggleClass(this.selectableCheckBox,"checked");this.checked=b.hasClass(this.selectableCheckBox,"checked");this.emit("stateChange",{checked:this.checked,layerInfo:this.layerInfo})}})});