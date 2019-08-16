// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/templates/GpSource.html":'\x3cdiv\x3e\r\n\t\x3ctable class\x3d"radio-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd nowrap\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"portalRadio" type\x3d"radio" data-dojo-attach-event\x3d"onclick: _onRadioClicked" class\x3d"portal-radio jimu-radio-btn" /\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"portalLabel"\x3e${nls.selectFromPortal}\x3c/label\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd nowrap\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"urlRadio" type\x3d"radio" checked data-dojo-attach-event\x3d"onclick: _onRadioClicked" class\x3d"url-radio jimu-radio-btn" /\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"urlLabel"\x3e${nls.addServiceUrl}\x3c/label\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cdiv class\x3d"source-content"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"operationTip" class\x3d"operation-tip"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"hflcContainer" class\x3d"dijit-container hflc-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"flscContainer" class\x3d"dijit-container flsc-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/GpSource.html dojo/_base/lang dojo/_base/html dojo/on dojo/Evented jimu/dijit/GpChooserFromPortal jimu/dijit/_GpServiceChooserContent jimu/portalUrlUtils".split(" "),function(e,f,g,h,k,c,b,d,l,m,n,p){return e([f,g,h,l],{templateString:k,baseClass:"jimu-gp-source",declaredClass:"jimu.dijit.GpSource",nls:null,multiple:!1,portalUrl:null,postMixInProperties:function(){this.nls=window.jimuNls.gpSource;
this.portalUrl=p.getStandardPortalUrl(this.portalUrl)},postCreate:function(){this.inherited(arguments);this._initSelf()},getSelectedItems:function(){var a=[];this.portalRadio.checked?a=this.gpcPortal.getSelectedItems():this.urlRadio.checked&&(a=this.gpcUrl.getSelectedItems());return a},startup:function(){this._started||(this.inherited(arguments),this.gpcPortal.startup(),this.gpcUrl.startup());this._started=!0},_initSelf:function(){this._initRadios();this._createGpChooserFromPortal();this._createGpServiceChooserContent();
this._onRadioClicked()},_createGpChooserFromPortal:function(){this.gpcPortal=new m({multiple:this.multiple,portalUrl:this.portalUrl,style:{width:"100%",height:"100%"}});this.gpcPortal.operationTip=this.nls.chooseItem;this.gpcPortal.placeAt(this.hflcContainer);this.own(d(this.gpcPortal,"next",c.hitch(this,function(){this.gpcPortal.operationTip=this.nls.chooseItem+" -\x3e "+this.nls.chooseTask;this._updateOperationTip()})));this.own(d(this.gpcPortal,"back",c.hitch(this,function(){this.gpcPortal.operationTip=
this.nls.chooseItem;this._updateOperationTip()})));this.own(d(this.gpcPortal,"ok",c.hitch(this,function(a){a&&0<a.length&&this.emit("ok",a)})));this.own(d(this.gpcPortal,"cancel",c.hitch(this,function(){this.emit("cancel")})));0<=(this.portalUrl||"").toLowerCase().indexOf(".arcgis.com")?this.portalLabel.innerHTML=this.nls.selectFromOnline:this.portalLabel.innerHTML=this.nls.selectFromPortal},_createGpServiceChooserContent:function(){this.gpcUrl=new n({multiple:this.multiple,style:{width:"100%",height:"100%"}});
this.gpcUrl.operationTip=this.nls.setServiceUrl;this.gpcUrl.placeAt(this.flscContainer);this.own(d(this.gpcUrl,"ok",c.hitch(this,function(a){a&&0<a.length&&this.emit("ok",a)})));this.own(d(this.gpcUrl,"cancel",c.hitch(this,function(){this.emit("cancel")})))},_initRadios:function(){var a="gpSourceRadios_"+this._getRandomString();this.portalRadio.name=a;b.setAttr(this.portalRadio,"id","portalRadio_"+this._getRandomString());b.setAttr(this.portalLabel,"for",this.portalRadio.id);this.urlRadio.name=a;
b.setAttr(this.urlRadio,"id","urlRadio_"+this._getRandomString());b.setAttr(this.urlLabel,"for",this.urlRadio.id)},_getRandomString:function(){var a=Math.random().toString();return a=a.slice(2,a.length)},_onRadioClicked:function(){b.setStyle(this.hflcContainer,"display","none");b.setStyle(this.flscContainer,"display","none");this.portalRadio.checked?(b.setStyle(this.hflcContainer,"display","block"),this.operationTip.innerHTML=this.nls.chooseItem):this.urlRadio.checked&&(b.setStyle(this.flscContainer,
"display","block"),this.operationTip.innerHTML=this.nls.setServiceUrl,setTimeout(c.hitch(this,function(){this.gpcUrl.focusInput()}),50));this._updateOperationTip()},_updateOperationTip:function(){if(this.portalRadio.checked){this.operationTip.innerHTML=this.gpcPortal.operationTip;var a=this.gpcPortal.browserContainer;a.style.top=0;var b=this.operationTip.clientHeight;19<=b&&(a.style.top=b-19+"px")}else this.urlRadio.checked&&(this.operationTip.innerHTML=this.gpcUrl.operationTip)}})});