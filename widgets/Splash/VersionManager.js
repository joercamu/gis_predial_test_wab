// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(d){function c(){this.versions=[{version:"1.0",upgrader:function(a){return a}},{version:"1.1",upgrader:function(a){return a}},{version:"1.2",upgrader:function(a){return a}},{version:"1.3",upgrader:function(a){a&&a.splash&&(a.splash.showOption=!0);return a}},{version:"1.4",upgrader:function(a){a&&a.splash&&(a.splash.backgroundColor="#485566",a.splash.confirmEverytime=!1);return a}},{version:"2.0Beta",upgrader:function(a){return a}},{version:"2.0",upgrader:function(a){return a}},
{version:"2.0.1",upgrader:function(a){return a}},{version:"2.1",upgrader:function(a){return a}},{version:"2.2",upgrader:function(a){if(a&&a.splash){var b=a.splash;"undefined"!==typeof b.backgroundColor&&(b.confirm={text:b.confirmText||"",color:"#ffffff",transparency:"0"},b.size={mode:"wh",wh:{w:600,h:null}},b.background={mode:"color",color:b.backgroundColor,transparency:"0"},b.button={color:"#518dca",transparency:"0"},b.contentVertical="top",b.confirmText=null,delete b.confirmText,b.backgroundColor=
null,delete b.backgroundColor)}return a}}]}c.prototype=new d;return c.prototype.constructor=c});