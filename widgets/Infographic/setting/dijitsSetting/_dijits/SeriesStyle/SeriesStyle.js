// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/SeriesStyle/SeriesStyle.html":'\x3cdiv style\x3d"width: 100%;flex: 0 0 100%;"\x3e\r\n\r\n\t\x3cdiv style\x3d"margin-bottom: 5px" class\x3d"top"\x3e\r\n\t\t\x3cdiv class\x3d"flex-lr-balance title"\x3e${nls.chartColor}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"singleColorDiv" style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"radioPanel" class\x3d"radio-panel"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"firstRadio" class\x3d"single-radio-panel first-radio"\x3e\r\n\t\t   \x3cinput data-dojo-attach-point\x3d"useLayerSymbolRadio" data-dojo-attach-event\x3d"change:_onLayerSymbolRadioChanged" type\x3d"radio" name\x3d"chartColor" data-dojo-type\x3d"dijit/form/RadioButton"\x3e\r\n   \t\t\x3clabel class\x3d"marginleft10 text-over radio-label" title\x3d"${nls.useLayerSymbology}"\x3e${nls.useLayerSymbology}\x3c/label\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n      \x3cdiv data-dojo-attach-point\x3d"secondRadio" class\x3d"single-radio-panel second-radio"\x3e\r\n         \x3cdiv class\x3d"single-radio-panel flex-lr-balance"\x3e\r\n            \x3cinput data-dojo-attach-point\x3d"setColorRadio" type\x3d"radio" name\x3d"chartColor" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-event\x3d"change:_onSeriesColorRadioChanged"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"setColorLabel" class\x3d"marginleft10 text-over radio-label" title\x3d"${nls.setColor}"\x3e${nls.setColor}\x3c/label\x3e\r\n         \x3c/div\x3e\r\n\r\n         \x3cdiv data-dojo-attach-point\x3d"radioSingleColorDiv" class\x3d"radio-single-color-div flex-lr-balance"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\t\t\r\n      \x3cdiv data-dojo-attach-point\x3d"thirdRadio" class\x3d"single-radio-panel third-radio"\x3e\r\n         \x3cdiv class\x3d"single-radio-panel flex-lr-balance"\x3e\r\n            \x3cinput data-dojo-attach-point\x3d"customColorRadio" type\x3d"radio" name\x3d"chartColor" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-event\x3d"change:_onCustomColorRadioChange"\x3e\r\n            \x3clabel class\x3d"marginleft10 text-over radio-label" title\x3d"${nls.customColorByCategory}"\x3e${nls.customColorByCategory}\x3c/label\x3e\r\n         \x3c/div\x3e\r\n\r\n         \x3cdiv data-dojo-attach-event\x3d"click:_onCustomToggleButtonClicked" data-dojo-attach-point\x3d"toggleIconDiv" class\x3d"toggle-icon-div flex-lr-balance"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"toggleIcon" class\x3d"toggle-icon"\x3e\x3c/div\x3e\r\n         \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n\t\x3c/div\x3e\r\n\r\n   \x3cdiv data-dojo-attach-point\x3d"fieldColors" class\x3d"field-colors"\x3e\x3c/div\x3e\r\n\r\n   \x3cdiv data-dojo-attach-point\x3d"customColors" class\x3d"custom-colors indentation"\x3e\x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/on dojo/_base/lang dojo/_base/html dojo/text!./SeriesStyle.html ./_SeriesStyleItem ./_SeriesStyles ./CustomColor dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../../../utils jimu/utils dijit/form/RadioButton".split(" "),function(k,f,c,b,l,g,m,n,p,q,r,t,e,h){return k([q,r,t,p],{baseClass:"infographic-series-style",templateString:l,constructor:function(){this.inherited(arguments);this.PRE_MODLE={computed:{},config:{}};this.modle={computed:{},
config:{}};this._customIconIsOpen=!0},postCreate:function(){this.inherited(arguments);this._initBrowserClass();this._initDom();this._initEvent();this._hideFirstRadio();this._hideThirdRadio();this.render(this.modle)},updateComputed:function(a){a&&(this.PRE_MODLE=c.clone(this.modle),this.modle.computed=c.clone(a),this.render(this.modle))},setConfig:function(a){this.PRE_MODLE=c.clone(this.modle);this.modle.config=c.clone(a);this.render(this.modle)},getConfig:function(){return c.clone(this.modle.config)},
render:function(a,d){a&&(this._updateComputed(a),this._render(a,d))},_render:function(a,d){this.ignoreChangeEvents=!0;this._renderByComputed(a);this._renderByConfig(a);this.ignoreChangeEvents=!1;d||this._onChange()},_updateComputed:function(a){var d=a.config;a=a.computed;a.colorDisplayMode="none"!==a.otherRadio&&"series"!==d.type?"none":d&&d.styles&&1<d.styles.length?"multiply":"single";a.customToggleIconState="custom"===d.type?this._customIconIsOpen?"open":"close":"none"},_onChange:function(){if(!this.ignoreChangeEvents){var a=
this.getConfig();a&&this.emit("change",a)}},_renderByComputed:function(a){var d=this.PRE_MODLE.computed;a=a.computed;if(!e.isEqual(d,a)){e.isEqual(a.chartType,d.chartType)||this._updateSeriesRadioString(a.chartType);e.isEqual(a.categoryTypes,d.categoryTypes)||this.customColorDijit&&this.customColorDijit.setCategoryType(a.categoryTypes);e.isEqual(a.customColorSelects,d.customColorSelects)||this.customColorDijit&&this.customColorDijit.setCustomColorSelectOption(a.customColorSelects);e.isEqual(a.otherRadio,
d.otherRadio)||this._switchRadioDisplay(a.otherRadio);if(!e.isEqual(a.colorDisplayMode,d.colorDisplayMode)||!e.isEqual(a.otherRadio,d.otherRadio)){var b="none"!==a.otherRadio;this._hideSingleColor(!0);this._hideSingleColor(!1);"multiply"===a.colorDisplayMode?(this._hideSingleColor(b),this._showFieldColors()):"single"===a.colorDisplayMode?(this._showSingleColor(b),this._hideFieldColors()):"none"===a.colorDisplayMode&&(this._hideSingleColor(!0),this._hideSingleColor(!1),this._hideFieldColors())}e.isEqual(a.showOpacity,
d.showOpacity)||(a.showOpacity?this._showOpacityPanel():this._hideOpacityPanel());e.isEqual(a.colorSingleMode,d.colorSingleMode)||(a.colorSingleMode?this._useColorSingleMode():this._useColorMultipleMode());e.isEqual(a.customToggleIconState,d.customToggleIconState)||("none"!==a.customToggleIconState?(this._showCustomToggleIcon(),"open"===a.customToggleIconState?this._openCustomColorPanel():this._closeCustomColorPanel()):(this._hideCustomToggleIcon(),this._hideCustomColors()))}},_renderByConfig:function(a){a=
a.config;var b=this.PRE_MODLE.config;if(!e.isEqual(a,b)){e.isEqual(a.type,b.type)||("layerSymbol"===a.type?(this.useLayerSymbolRadio.setChecked(!0),this.setColorRadio.setChecked(!1),this.customColorRadio.setChecked(!1)):"series"===a.type?(this.useLayerSymbolRadio.setChecked(!1),this.setColorRadio.setChecked(!0),this.customColorRadio.setChecked(!1)):"custom"===a.type&&(this.customColorRadio.setChecked(!0),this.useLayerSymbolRadio.setChecked(!1),this.setColorRadio.setChecked(!1)));if(!e.isEqual(a.styles,
b.styles)){var c=a.styles;if(!c||0>=c.length)return;1===c.length?(this.topOneColor.setConfig(c[0]),this.radioOneColor.setConfig(c[0])):1<=c.length&&this.fieldColorsDijit.updateConfig(c)}e.isEqual(a.customColor,b.customColor)||(a=a.customColor)&&a.categories&&Array.isArray(a.categories)&&this.customColorDijit.setConfig(a)}},_initDom:function(){this.topOneColor=new g({option:{showText:!1,opacity:{min:0,max:10,step:1}}});this.topOneColor.placeAt(this.singleColorDiv);this.radioOneColor=new g({option:{showText:!1,
opacity:{min:0,max:10,step:1}}});this.radioOneColor.placeAt(this.radioSingleColorDiv);this.fieldColorsDijit=new m({nls:this.nls});this.fieldColorsDijit.placeAt(this.fieldColors);this.customColorDijit=new n({nls:this.nls});this.customColorDijit.placeAt(this.customColors);this._hideRadioPanel();this._hideOpacityPanel();this._hideSingleColor(!0);this._hideSingleColor(!1);this._hideCustomToggleIcon();this._hideFieldColors()},_initEvent:function(){this.own(f(this.topOneColor,"change",c.hitch(this,function(a){this._onTopOneColorChange(a)})));
this.own(f(this.radioOneColor,"change",c.hitch(this,function(a){this._onRadioOneColorChange(a)})));this.own(f(this.fieldColorsDijit,"change",c.hitch(this,function(a){this._onFieldColorsDijitChange(a)})));this.own(f(this.customColorDijit,"change",c.hitch(this,function(a){this._onCustomColorDijitChanged(a)})));this.own(f(this.customColorDijit,"update-colors",c.hitch(this,function(a){this.emit("update-colors",a)})))},_initBrowserClass:function(){11===h.has("ie")?b.addClass(this.domNode,"ig-setting-ie11"):
b.removeClass(this.domNode,"ig-setting-ie11");h.has("ff")?b.addClass(this.domNode,"ig-setting-ff"):b.removeClass(this.domNode,"ig-setting-ff")},_switchRadioDisplay:function(a){"none"!==a?(this._showRadioPanel(),b.addClass(this.fieldColors,"indentation")):(this._hideRadioPanel(),b.removeClass(this.fieldColors,"indentation"));switch(a){case "layerSymbol":this._showFirstRadio();this._hideThirdRadio();break;case "custom":this._showThirdRadio();this._hideFirstRadio();break;case "all":this._showThirdRadio(),
this._showFirstRadio()}},_updateSeriesRadioString:function(a){this.setColorLabel.innerHTML="pie"===a?this.nls.randomColor:this.nls.setColor},_openCustomColorPanel:function(){b.removeClass(this.toggleIcon,"closed");this._showCustomColors()},_closeCustomColorPanel:function(){b.addClass(this.toggleIcon,"closed");this._hideCustomColors()},_showFirstRadio:function(){b.removeClass(this.firstRadio,"hide")},_hideFirstRadio:function(){b.addClass(this.firstRadio,"hide")},_showCustomToggleIcon:function(){b.removeClass(this.toggleIconDiv,
"hide")},_hideCustomToggleIcon:function(){b.addClass(this.toggleIconDiv,"hide")},_showThirdRadio:function(){b.removeClass(this.thirdRadio,"hide")},_hideThirdRadio:function(){b.addClass(this.thirdRadio,"hide");this._hideCustomColors()},_showSingleColor:function(a){a?b.removeClass(this.radioSingleColorDiv,"hide"):b.removeClass(this.singleColorDiv,"hide")},_hideSingleColor:function(a){a?b.addClass(this.radioSingleColorDiv,"hide"):b.addClass(this.singleColorDiv,"hide")},_showCustomColors:function(){b.removeClass(this.customColors,
"hide")},_hideCustomColors:function(){b.addClass(this.customColors,"hide")},_showFieldColors:function(){b.removeClass(this.fieldColors,"hide")},_hideFieldColors:function(){b.addClass(this.fieldColors,"hide")},_useColorSingleMode:function(){this.topOneColor.setColorMode(!0);this.radioOneColor.setColorMode(!0)},_useColorMultipleMode:function(){this.topOneColor.setColorMode(!1);this.radioOneColor.setColorMode(!1)},_showRadioPanel:function(){b.removeClass(this.radioPanel,"hide")},_hideRadioPanel:function(){b.addClass(this.radioPanel,
"hide");this._hideCustomColors()},_showOpacityPanel:function(){this.topOneColor.setOpacityDisplay(!0);this.radioOneColor.setOpacityDisplay(!0);this.fieldColorsDijit.setOpacityDisplay(!0)},_hideOpacityPanel:function(){this.topOneColor.setOpacityDisplay(!1);this.radioOneColor.setOpacityDisplay(!1);this.fieldColorsDijit.setOpacityDisplay(!1)},_onTopOneColorChange:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),this.modle.config.styles[0]=a,this._onChange())},_onRadioOneColorChange:function(a){this.ignoreChangeEvents||
(this.PRE_MODLE=c.clone(this.modle),this.modle.config.styles[0]=a,this._onChange())},_onFieldColorsDijitChange:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),this.modle.config.styles=a,this._onChange())},_onLayerSymbolRadioChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),a&&(this.modle.config.type="layerSymbol",this._onChange()))},_onSeriesColorRadioChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),a&&(this.modle.config.type=
"series",this._onChange()))},_onCustomColorRadioChange:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),a&&(this.modle.config.type="custom",this._onChange()))},_onCustomToggleButtonClicked:function(a){a.stopPropagation();this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),this._customIconIsOpen=!this._customIconIsOpen,this.render(this.modle,!0))},_onCustomColorDijitChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),this.modle.config.customColor=
a,this._onChange())}})});