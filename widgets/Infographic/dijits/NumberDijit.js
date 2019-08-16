// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang esri/lang ./BaseDijit dojo/dom-style dojo/_base/html jimu/utils ./utils ./styleUtils jimu/LayerInfos/LayerInfos jimu/DataSourceManager".split(" "),function(g,h,k,l,d,c,e,f,m,n,p){return g([l],{templateString:'\x3cdiv style\x3d"height:100%;width:100%;"\x3e\x3ca data-dojo-attach-point\x3d"numberContent" class\x3d"number-content no-trim" target\x3d"_blank"\x3e\x3cdiv data-dojo-attach-point\x3d"leftIcon" class\x3d"icon"\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"number" class\x3d"number"\x3e\x3cdiv data-dojo-attach-point\x3d"prefix" class\x3d"prefix"\x3e\x3c/div\x3e\x3cdiv class\x3d"value-content" data-dojo-attach-point\x3d"valueContent"\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"suffix" class\x3d"suffix"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"rightIcon" class\x3d"icon"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e',
baseClass:"infographic-number-dijit",type:"number",config:null,postCreate:function(){this.inherited(arguments);this.value=this.features=null;this.setConfig(this.config)},onDataSourceDataUpdate:function(a){this.inSettingPage?a&&"undefined"!==typeof a.features&&(this.features=a.features,this._updateStatisticsValue()):"number"===typeof a&&(this.value=a,this._updateUI(this.config,this.value))},setDataSource:function(a){this.dataSource=a;if(this.inSettingPage)if(a.layerId){var b=n.getInstanceSync().getLayerInfoById(a.layerId);
b&&b.getLayerObject().then(h.hitch(this,function(b){this.features=f.getClientFeaturesFromMap(this.map,b,a.useSelection,a.filterByExtent);this._updateStatisticsValue()}))}else a.frameWorkDsId&&(b=p.getInstance().getData(a.frameWorkDsId))&&(this.features=b.features,this._updateStatisticsValue())},_updateStatisticsValue:function(){this.value=this.features&&this.config.statistic&&this.dataSource?f.getSingleValueFromFeatures(this.config.statistic,this.dataSource,this.features):null;this._updateUI(this.config,
this.value)},setConfig:function(a){a&&a.background&&a.background.backgroundColor?c.setStyle(this.domNode,"backgroundColor",a.background.backgroundColor):c.setStyle(this.domNode,"backgroundColor","#FFFFFF");this.config=a;this._updateStatisticsValue()},_updateUI:function(a,b){this._cleanUI();this.config=a;this.valueContent.innerHTML=null===b?this.nls.noData:this._tryLocaleNumber(b);e.isNotEmptyObject(this.config)&&this._setValueDisplay(this.config)},_setValueDisplay:function(a){a&&(this._setBackground(a),
this._setFont(a),"undefined"!==typeof this.value&&(this._setDataFormat(a),a=this._getIndicatorColor(),a.color&&this._setValueColor(a.color),a.icon&&this._setIndicatorIcon(a.icon)))},_setIndicatorIcon:function(a){a&&("left"===a.placement||"right"===a.placement?this._setLeftRightIcon(a):"replace"===a.placement&&this._setReplaceIcon(a))},_setReplaceIcon:function(a){var b=c.create("div",{"class":"indicator-icon "+a.icon});c.empty(this.valueContent);c.place(b,this.valueContent);d.set(b,"color",a.color);
d.set(b,"display","inline-flex")},_setLeftRightIcon:function(a){var b;"left"===a.placement?b=this.leftIcon:"right"===a.placement&&(b=this.rightIcon);c.addClass(b,"indicator-icon "+a.icon);d.set(b,"color",a.color)},_getIndicatorColor:function(){var a=!1,b=!1,c=this.config.indicators;c&&((c=f.getVaildIndicator(this.value,c))&&c.valueColor&&(a=c.valueColor),c&&e.isNotEmptyObject(c.iconInfo)&&(b=c.iconInfo));return{color:a,icon:b}},_setFont:function(a){if(a&&a.font){var b={};m.font.setStyle(a.font,b);
c.setStyle(this.number,b)}},_setDataFormat:function(a){if(this.value&&a&&a.dataFormat){var b=this.value,c="";a=a.dataFormat;"percentage"===a.unit?(b*=100,c="%"):"thousand"===a.unit?(c=this.nls.thousandAbbreviation,b/=1E3):"million"===a.unit?(c=this.nls.millionAbbreviation,b/=1E6):"billion"===a.unit&&(c=this.nls.billionAbbreviation,b/=1E9);""!==a.decimalPlaces&&"undefined"!==typeof a.decimalPlaces&&(b=b.toFixed(Number(a.decimalPlaces)));b=this._tryLocaleNumber(b)+c;this.valueContent.innerHTML=b;a.prefix&&
(this.prefix.innerHTML=a.prefix);a.suffix&&(this.suffix.innerHTML=a.suffix)}},_cleanUI:function(){c.removeClass(this.leftIcon);c.addClass(this.leftIcon,["icon"]);c.removeClass(this.rightIcon);c.addClass(this.rightIcon,["icon"]);this.replaceIcon&&(c.destroy(this.replaceIcon),this.replaceIcon=null);c.empty(this.valueContent);c.empty(this.prefix);c.empty(this.suffix);this._setValueColor("")},_getVaildValue:function(a){if("undefined"!==typeof a)return Number(a)},_setBackground:function(a){if(a&&a.background){a=
a.background;a.backgroundColor&&c.setStyle(this.domNode,"backgroundColor",a.backgroundColor);if(a.alignment){var b=a.alignment;c.removeClass(this.domNode);c.addClass(this.domNode,"infographic-number-dijit");b.horizontal&&c.addClass(this.domNode,"horizontal-"+b.horizontal);b.vertical&&c.addClass(this.domNode,"vertical-"+b.vertical)}a.link?c.setAttr(this.numberContent,"href",a.link):c.removeAttr(this.numberContent,"href")}},_setValueColor:function(a){d.set(this.number,"color",a)},_tryLocaleNumber:function(a){var b=
a;if(k.isDefined(a)&&isFinite(a))try{var c=e.localizeNumber(a);"string"===typeof c&&(b=c)}catch(q){console.error(q)}return b+""}})});