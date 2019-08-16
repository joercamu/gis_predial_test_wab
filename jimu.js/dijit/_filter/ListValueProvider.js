// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/_filter/ListValueProvider.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"valuesSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" data-dojo-props\x3d\'searchAttr:"label",required:false,intermediateChanges:true\' style\x3d"width:100%;" data-dojo-attach-event\x3d"input:_onFilteringSelectInput"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/aspect dojo/Deferred dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare ./ValueProvider dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./ListValueProvider.html dojo/store/Memory jimu/utils dijit/form/FilteringSelect".split(" "),function(k,h,d,f,g,l,m,n,p,q,r,t){return l([m,n,p],{templateString:q,codedValues:null,staticValues:null,showNullValues:!1,layerDataChanged:!1,postCreate:function(){this.inherited(arguments);f.addClass(this.domNode,"jimu-filter-list-value-provider");
this._uniqueValueCache={};var b=new r({idProperty:"id",data:[]});this.valuesSelect.set("store",b);if(!this.staticValues&&"function"===typeof this.valuesSelect._onDropDownMouseDown&&(!this.codedValues||this.codedValues&&this.filterCodedValue)&&(this.own(k.before(this.valuesSelect,"_onDropDownMouseDown",d.hitch(this,this._onBeforeDropDownMouseDown))),this.layerInfo))this.layerInfo.layerObject.on("edits-complete",d.hitch(this,function(){this.layerDataChanged=!0}))},_onFilteringSelectInput:function(){this.emit("change")},
_getCodedValueLabelsBySubTypeId:function(){var b=this.getDropdownFilterPartsObj();return this.getCodedValueListByPartsObj(this.layerDefinition,this.fieldName,b,this.codedValues)},_onBeforeDropDownMouseDown:function(){this._tryUpdatingUniqueValues(void 0,!0);return arguments},getDijits:function(){return[this.valuesSelect]},setValueObject:function(b){return this.staticValues?this._setValueForStaticValues(b.value,this.staticValues):this.codedValues?this.filterCodedValue?this._tryUpdatingUniqueValues(b.value,
!1):this._setValueForStaticValues(b.value,this.codedValues):this._tryUpdatingUniqueValues(b.value,!1)},getValueObject:function(){if(this.isValidValue()){var b=this.valuesSelect.get("item").value;return{isValid:!0,type:this.partObj.valueObj.type,value:b}}return null},tryGetValueObject:function(){return this.isValidValue()?this.getValueObject():this.isEmptyValue()?{isValid:!0,type:this.partObj.valueObj.type,value:"string"===this.shortType?"":null}:null},setRequired:function(b){this.valuesSelect.set("required",
b)},_setValueForStaticValues:function(b,c){var a=null,e=-1,a=null;c&&(a=g.map(c,d.hitch(this,function(a,c){a={id:c,value:a.value,label:a.label};a.value===b&&(e=c);return a})),this.valuesSelect.store.setData(a),0<=e&&(a=this.valuesSelect.store.get(e))&&this.valuesSelect.set("item",a))},_uniqueValueLoadingDef:null,_uniqueValueLoadingExpr:"",_uniqueValueCache:null,_tryUpdatingUniqueValues:function(b,c){var a=new h;if(this.valuesSelect._opened)a.resolve();else{var e=this.getDropdownFilterExpr();e!==this._uniqueValueLoadingExpr||
this.layerDataChanged?(this.valuesSelect.readOnly=!0,this._uniqueValueLoadingDef&&(this._uniqueValueLoadingDef.reject(),this._uniqueValueLoadingDef=null),this._uniqueValueLoadingExpr=e,this._uniqueValueLoadingDef=this._getUniqueValues(e),this._uniqueValueLoadingDef.then(d.hitch(this,function(u){this.domNode&&(this._uniqueValueLoadingDef=null,this.valuesSelect.readOnly=!1,this._setValueForUniqueValues(b,u),this._hideLoadingIcon(),c&&this.valuesSelect.toggleDropDown(),a.resolve())}),d.hitch(this,function(b){console.error(b);
this.domNode&&(this._uniqueValueLoadingDef=null,this.valuesSelect.readOnly=!1,this._hideLoadingIcon(),a.reject(b))}))):a.resolve()}return a},_setValueForUniqueValues:function(b,c){c.sort(function(b,a){return b.value<a.value?-1:b.value===a.value?0:1});this.showNullValues||(c=g.filter(c,d.hitch(this,function(b){return"\x3cNull\x3e"!==b.value&&null!==b.value})));if(void 0===b){var a=this.getValueObject();a&&(b=a.value)}var e=-1,a=null;c=g.map(c,d.hitch(this,function(a,c){var d={id:c,value:a.value,label:a.label};
a.value===b&&(e=c);return d}));this.valuesSelect.store.setData(c);0<=e&&(a=this.valuesSelect.store.get(e));this.valuesSelect.set("item",a)},_showLoadingIcon:function(){f.addClass(this.valuesSelect.domNode,"loading")},_hideLoadingIcon:function(){f.removeClass(this.valuesSelect.domNode,"loading")},_getUniqueValues:function(b){var c=new h;this._uniqueValueCache[b]&&!this.layerDataChanged?c.resolve(this._uniqueValueCache[b]):(this._showLoadingIcon(),t.getUniqueValues(this.url,this.fieldName,b,this.layerDefinition,
this.fieldPopupInfo).then(d.hitch(this,function(a){this.domNode&&(this._uniqueValueCache[b]=a,c.resolve(a),this._hideLoadingIcon())}),d.hitch(this,function(a){this.domNode&&(c.reject(a),this._hideLoadingIcon())})));this.layerDataChanged=!1;return c}})});