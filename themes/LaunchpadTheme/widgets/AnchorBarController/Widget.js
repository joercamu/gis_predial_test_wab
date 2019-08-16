// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/LaunchpadTheme/widgets/AnchorBarController/DockableItem":function(){define("dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-attr dojo/_base/fx ./BaseIconItem".split(" "),function(p,h,c,f,e,g){return p([g],{visible:!0,postCreate:function(){this.inherited(arguments);c.add(this.iconItemNode,"dockable");f.set(this.domNode,"settingid",this.config.id)},hideAnim:function(){var g=this.domNode.style,f=[],l={};window.isRTL?l["margin-right"]=0:l["margin-left"]=0;c.remove(this.iconItemStatus,
"selected");f.push(e.animateProperty({node:this.domNode,duration:500,properties:l,onEnd:h.hitch(this,function(){g.display="none";this.visible=!1})}));f.push(e.animateProperty({node:this.iconItemNode,duration:500,properties:{width:1}}));f.push(e.animateProperty({node:this.imgNode,duration:500,properties:{width:1}}));return f},showAnim:function(f){var g=this.domNode.style,l=this.iconItemNode.style,n=this.imgNode.style,m=[],p=this.size,a={};f={start:function(){g.display="";return 0},end:f};window.isRTL?
a["margin-right"]=f:a["margin-left"]=f;m.push(e.animateProperty({node:this.domNode,duration:500,properties:a,onEnd:h.hitch(this,function(){this.isOpen&&c.add(this.iconItemStatus,"selected");this.visible=!0})}));m.push(e.animateProperty({node:this.iconItemNode,duration:500,properties:{width:{start:function(){l.width="1px";return 1},end:p}}}));m.push(e.animateProperty({node:this.imgNode,duration:500,properties:{width:{start:function(){n.width="1px";return 1},end:20}}}));return m}})})},"themes/LaunchpadTheme/widgets/AnchorBarController/BaseIconItem":function(){define("dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-style dojo/on dojo/mouse dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/popup dijit/TooltipDialog dojo/text!./BaseIconItem.html".split(" "),
function(p,h,c,f,e,g,n,q,l,r,m,t){return p([q,l,n],{baseClass:"jimu-anchorbar-iconitem jimu-float-leading",templateString:t,config:null,backgroundIndex:-1,isOpen:!1,panelIndex:-1,size:40,postCreate:function(){this.inherited(arguments);this.tooltipDialog=new m({content:this.config.label,"class":"launchpad-tooltip"});c.add(this.iconItemNode,"icon-item-background"+this.getBackgroundColorIndex());this.own(e(this.iconItemNode,g.enter,h.hitch(this,function(){window.appInfo.isRunInMobile||r.open({parent:this,
popup:this.tooltipDialog,around:this.iconItemNode,orient:["above-centered"],onCancel:h.hitch(this,function(){r.close(this.tooltipDialog)})})})));this.own(e(this.iconItemNode,g.leave,h.hitch(this,function(){window.appInfo.isRunInMobile||r.close(this.tooltipDialog)})))},getConfigForPanel:function(){var a=h.clone(this.config);a.backgroundColor=this.getColor();a.panel.position=this._initPosition();a.panel.position.index=this.panelIndex;return a},_initPosition:function(){return{top:window.appInfo.isRunInMobile?
20:120,left:10,width:350,height:480,margin:10}},_onNodeClick:function(){c.toggle(this.iconItemStatus,"selected");c.toggle(this.iconItemNode,"selected");this.isOpen=c.contains(this.iconItemNode,"selected");this.isOpen||(this.panelIndex=-1);this.emit("nodeClick",{target:this})},isGroup:function(){return this.config.widgets&&1<this.config.widgets.length?!0:!1},isOpenAtStart:function(){return this.config&&!0===this.config.openAtStart},setOpened:function(a){a?(this.iconItemStatus&&c.add(this.iconItemStatus,
"selected"),this.iconItemNode&&c.add(this.iconItemNode,"selected"),this.isOpen=!0):(this.iconItemStatus&&c.remove(this.iconItemStatus,"selected"),this.iconItemNode&&c.remove(this.iconItemNode,"selected"),this.isOpen=!1,this.panelIndex=-1)},getPanelIndex:function(){return this.panelIndex},setPanelIndex:function(a){this.panelIndex=a},getColor:function(){return f.get(this.iconItemNode,"background-color")||"#FFFFFF"},getBackgroundColorIndex:function(){return this.backgroundIndex%6}})})},"themes/LaunchpadTheme/widgets/AnchorBarController/GroupItems":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/fx dojo/on dojo/Evented dojo/dom-style dojo/dom-class dojo/dom-geometry dojo/dnd/move dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./GroupItems.html ./BaseIconItem".split(" "),
function(p,h,c,f,e,g,n,q,l,r,m,t,a,k){return p([m,t,g],{baseClass:"jimu-anchorbar-controller-group",templateString:a,config:null,dockableItem:null,backgroundColor:null,itemList:[],box:null,postCreate:function(){this.inherited(arguments);h.forEach(this.config.widgets,function(a,u){a=new k({config:a,backgroundIndex:u});a.placeAt(this.containerNode);this.own(e(a,"nodeClick",c.hitch(this,this._onIconClick)));this.itemList.push(a)},this);q.add(this.colorfulHeader,"icon-item-background"+this.dockableItem.getBackgroundColorIndex())},
startup:function(){this.inherited(arguments);this.box=l.getMarginBox(this.domNode);this.makeMoveable(this.titleNode,this.box)},getItemList:function(){return this.itemList},makeMoveable:function(a,k){var b;this.disableMoveable();b=l.getMarginBox(jimuConfig.layoutId);b.l-=.5*k.w;b.w+=k.w;this.moveable=new r.boxConstrainedMoveable(this.domNode,{box:b,handle:a||this.titleNode,within:!0});this.own(e(this.moveable,"Moving",c.hitch(this,this.onMoving)));this.own(e(this.moveable,"MoveStop",c.hitch(this,this.onMoveStop)))},
getItemNum:function(){return this.config.widgets.length},disableMoveable:function(){this.moveable&&(this.moveable.destroy(),this.moveable=null)},onMoving:function(a){n.set(a.node,"opacity",.9)},onMoveStop:function(a){n.set(a.node,"opacity",1)},open:function(){f.wipeIn({node:this.domNode,duration:400}).play()},close:function(){f.wipeOut({node:this.domNode,duration:400}).play();this.dockableItem.setOpened(!1)},closeImmedaite:function(){n.set(this.domNode,"display","none");this.dockableItem.setOpened(!1)},
_onCloseBtnClicked:function(){this.close()},_onIconClick:function(a){this.emit("groupItemClicked",c.mixin({group:this},a))},setPosition:function(a){n.set(this.domNode,{top:"number"===typeof a.top?a.top+"px":"auto",left:"number"===typeof a.left?a.left+"px":"auto",right:"number"===typeof a.right?a.right+"px":"auto"})}})})},"themes/LaunchpadTheme/widgets/AnchorBarController/PopupMoreNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/dom-style dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),
function(p,h,c,f,e,g,n,q,l,r,m,t){return p([l,r],{baseClass:"jimu-anchorbar-more-pupup jimu-main-background",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',margin:4,nodes:[],forIcon:null,postCreate:function(){this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new m({views:[],
viewType:"dom"},this.pagesNode);this.viewStack.startup()},setForIcon:function(a){this.forIcon=a},setNodes:function(a){this.nodes=a;this.oldGridParam=null;this.resize()},resize:function(){var a=this._calculateGridParam(),k;null!==a?(f.setStyle(this.domNode,t.getPositionStyle(a.position)),this.nodeWidth=a.cellSize-this.margin,this.clearPages(),this.createPages(a),c.forEach(q(".icon-node",this.domNode),h.hitch(this,function(k,c){this.setItemNodePosition(k,c,a)})),this.oldGridParam=a,k=q("div.close",
this.domNode)[0],f.setStyle(k,{width:.25*this.nodeWidth+"px",height:.25*this.nodeWidth+"px"})):(this.oldGridParam=null,f.setStyle(this.domNode,t.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0)},setItemNodePosition:function(a,k,c){var e;e=0===k%c.cols?0:this.margin/2;k=k%(c.rows*c.cols)<c.cols?0:this.margin/2;c={};"number"===typeof this.nodeWidth&&(c.width=this.nodeWidth+"px",c.height=this.nodeWidth+"px");"number"===typeof e&&(window.isRTL?c.marginRight=e+"px":c.marginLeft=
e+"px");"number"===typeof k&&(c.marginTop=k+"px");f.setStyle(a,c)},clearPages:function(){c.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},this);g.empty(this.pointsNode);this.pages=[]},createPages:function(a){var c,f,u,b;c=Math.ceil(this.nodes.length/(a.rows*a.cols));for(f=0;f<c;f++)u=g.create("div",{"class":"page"}),this.createPageItems(f,u,a),this.viewStack.addView(u),1<c&&(b=g.create("div",{"class":"point"},this.pointsNode),this.own(e(b,"click",h.hitch(this,this._onPageNodeClick,
f)))),this.pages.push({pageNode:u,pointNode:b});0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},_selectPage:function(a){1<this.pages.length&&(q(".point",this.domNode).removeClass("point-selected"),f.addClass(this.pages[a].pointNode,"point-selected"));this.viewStack.switchView(this.pages[a].pageNode)},createPageItems:function(a,c,f){var e,b,d;e=this.nodes.length;b=f.rows*f.cols;f=(a+1)*b;d=f-e;f=Math.min(f,e);for(a*=b;a<f;a++)this.createItemNode(a,
c);for(a=e;a<e+d;a++)this.createEmptyItemNode(c)},createItemNode:function(a,c){var f;c=g.create("div",{"class":"icon-node jimu-float-leading"},c);f=(this.nodeWidth-this.nodes[a].size)/2;n.set(this.nodes[a].domNode,{position:"absolute",left:f+"px",top:f+"px","margin-left":""});this.nodes[a].placeAt(c)},createEmptyItemNode:function(a){return g.create("div",{"class":"icon-node jimu-float-leading"},a)},createCloseBtn:function(){var a;a=g.create("div",{"class":"close"},this.domNode);g.create("div",{"class":"close-inner"},
a);e(a,"click",h.hitch(this,function(){this.hide()}));return a},hide:function(){f.setStyle(this.domNode,"display","none");this.forIcon&&this.forIcon.setOpened(!1)},show:function(){f.setStyle(this.domNode,"display","block")},_calculateGridParam:function(){var a,c,e,g,b=!1,d=!0;a=f.getContentBox(jimuConfig.mapId);c=Math.min(a.w,a.h)-40;if(240<=c)g=80;else{g=Math.floor(c/3);if(10>g)return null;b=!0;60>g&&(d=!1)}c=Math.floor((a.h-40)/g);e=Math.floor((a.w-40)/g);c=4<c?4:c;c=3>c?3:c;e=3>c?3:4<e?4:e;return{rows:c,
cols:e,cellSize:g,iconScaled:b,showLabel:d,position:{top:(a.h-g*c)/2,bottom:(a.h-g*c)/2,left:(a.w-g*e)/2,right:(a.w-g*e)/2,width:g*e-this.margin*(e-1)/2,height:g*c-this.margin*(c-1)/2,zIndex:111}}}})})},"themes/LaunchpadTheme/widgets/AnchorBarController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/LaunchpadTheme/widgets/AnchorBarController/BaseIconItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"icon-item" data-dojo-attach-point\x3d"iconItemNode"\r\n       data-dojo-attach-event\x3d"onclick:_onNodeClick"\x3e\r\n    \x3cimg class\x3d"icon" src\x3d"${config.icon}" data-dojo-attach-point\x3d"imgNode"/\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"status" data-dojo-attach-point\x3d"iconItemStatus"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/LaunchpadTheme/widgets/AnchorBarController/GroupItems.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"title jimu-panel-title jimu-main-background jimu-corner-top" data-dojo-attach-point\x3d"titleNode"\x3e\r\n    \x3cdiv class\x3d"color-header" data-dojo-attach-point\x3d"colorfulHeader"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"widget-icon"\x3e\r\n      \x3cimg class\x3d"icon" src\x3d"${config.icon}"/\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"title-label" data-dojo-attach-point\x3d"titleLabelNode"\x3e\r\n      ${config.label}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"close-icon jimu-float-trailing" data-dojo-attach-point\x3d"closeNode"\r\n         data-dojo-attach-event\x3d"onclick:_onCloseBtnClicked"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-panel-content jimu-corner-bottom" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:themes/LaunchpadTheme/widgets/AnchorBarController/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"docker jimu-main-background jimu-corner-all"\x3e\r\n    \x3cdiv class\x3d"previousBtn jimu-corner-left" data-dojo-attach-point\x3d"previousButton"\r\n         data-dojo-attach-event\x3d"onclick:_previous"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"seperatorLeft" data-dojo-attach-point\x3d"seperatorLeft"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"iconList" data-dojo-attach-point\x3d"widgetList"\x3e\r\n      \x3cdiv class\x3d"iconGroup" data-dojo-attach-point\x3d"iconGroupNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"seperatorRight" data-dojo-attach-point\x3d"seperatorRight"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"nextBtn jimu-corner-right" data-dojo-attach-point\x3d"nextButton"\r\n         data-dojo-attach-event\x3d"onclick:_next"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/LaunchpadTheme/widgets/AnchorBarController/css/style.css":".jimu-anchorbar-iconitem .icon-item{width: 40px; height: 40px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; text-align: center; cursor: pointer;}.jimu-anchorbar-iconitem .icon-item.dockable{margin-top: -20px;}.jimu-anchorbar-iconitem .icon-item:hover{}.jimu-anchorbar-iconitem .icon-item.selected{margin-top: -5px;}.jimu-anchorbar-iconitem .icon-item.dockable.selected{margin-top: -25px;}.jimu-anchorbar-iconitem .status{margin-top: 4px; width: 4px; height: 4px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; display: none;}.jimu-anchorbar-iconitem .status.selected{display: block; margin: 5px 18px;}.jimu-anchorbar-iconitem .icon-item .icon{width: 24px; height: 24px; margin-top: 8px; cursor: pointer;}.jimu-panel-content .jimu-anchorbar-iconitem{margin: 10px;}.jimu-anchorbar-controller .docker{position: relative; height: 30px;}.jimu-anchorbar-controller .docker .iconList{position: absolute; left: 30px; right: 30px;}.jimu-anchorbar-controller.mobile .docker .iconList{left: 0; right: 0;}.jimu-anchorbar-controller .docker .iconList .iconGroup{position: absolute; top: 0; left: 0; height: 30px;}.jimu-rtl .jimu-anchorbar-controller .docker .iconList .iconGroup{right: 0; left: auto;}.jimu-anchorbar-controller .docker .previousBtn{position: absolute; left: 0; width: 30px; height: 30px; cursor: pointer; z-index: 60;}.jimu-anchorbar-controller.mobile .docker .previousBtn{display: none;}.jimu-rtl .jimu-anchorbar-controller .docker .previousBtn{left: auto; right: 0;}.jimu-anchorbar-controller .docker .nextBtn{position: absolute; right: 0; width: 30px; height: 30px; cursor: pointer; z-index: 60;}.jimu-anchorbar-controller.mobile .docker .nextBtn{display: none;}.jimu-rtl .jimu-anchorbar-controller .docker .nextBtn{right: auto; left: 0;}.jimu-anchorbar-controller .docker .seperatorLeft{position: absolute; left: 30px; top: 2px; width: 1px; height: 26px; z-index: 60;}.jimu-anchorbar-controller.mobile .docker .seperatorLeft{display: none;}.jimu-anchorbar-controller .docker .seperatorRight{position: absolute; right: 30px; top: 2px; width: 1px; height: 26px; z-index: 60;}.jimu-anchorbar-controller.mobile .docker .seperatorRight{display: none;}.jimu-anchorbar-controller-group{position: absolute; height: auto;}.jimu-anchorbar-controller-group .color-header{height: 2px; width: 100%;}.jimu-anchorbar-controller-group .title{position: relative; height: 30px; width: 100%; cursor: move;}.jimu-anchorbar-controller-group .title .widget-icon{position: absolute; left: 4px; top: 8px; width: 24px; height: 24px; cursor: default;}.jimu-anchorbar-controller-group .title .widget-icon .icon{width: 16px; height: 16px;}.jimu-rtl .jimu-anchorbar-controller-group .title .widget-icon{right: 4px;}.jimu-anchorbar-controller-group .title-label{overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 28px; position: absolute; left: 48px; right: 96px;}.jimu-rtl .jimu-anchorbar-controller-group .title-label{right: 48px; left: 96px;}.jimu-anchorbar-controller-group .title .close-icon{width: 24px; height: 28px; cursor: pointer; background: transparent url(images/x.png) center no-repeat;}.jimu-anchorbar-controller-group .jimu-panel-content{background-color: #ffffff; overflow: hidden;}.jimu-anchorbar-controller-group .jimu-widgets-controller-item{margin: 5px 10px; display: inline; float: left;}.jimu-rtl .jimu-anchorbar-controller-group .jimu-widgets-controller-item{float: right;}.jimu-anchorbar-more-pupup{position: absolute; border-radius: 2px; z-index: 111;}.jimu-anchorbar-more-pupup .pages{position: relative; overflow: hidden; padding: 2px;}.jimu-anchorbar-more-pupup .points{position: absolute; overflow: hidden; bottom: -15px; left: 0; right: 0; text-align: center; background-color: #bababa;}.jimu-anchorbar-more-pupup .points-inner{display: inline-block; overflow: hidden;}.jimu-anchorbar-more-pupup .point{float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-rtl .jimu-anchorbar-more-pupup .point{float: right; margin-right: 5px; margin-left: 0;}.jimu-anchorbar-more-pupup .point-selected{background-color: #485566;}.jimu-anchorbar-more-pupup .page{position: relative; overflow: hidden;}.jimu-anchorbar-more-pupup .close{position: absolute; top: -04.46428571428571%; right: -04.46428571428571%; border-radius: 50%; background-color: #697a8c; cursor: pointer;}.jimu-rtl .jimu-anchorbar-more-pupup .close{left: -04.46428571428571%; right: auto;}.jimu-anchorbar-more-pupup .close-inner{width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background: #1d2123 url(images/close.png) no-repeat center center;}.jimu-rtl .jimu-anchorbar-more-pupup .close-inner{margin-right: 10%; margin-left: 0;}.jimu-anchorbar-more-pupup .icon-node{background-color: #697a8c; cursor: pointer; position: relative;}.jimu-anchorbar-more-pupup .jimu-anchorbar-iconitem .icon-item.dockable{margin-top: 0;}.jimu-more-icon-cover{z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.jimu-rtl .jimu-more-icon-cover{right: 0; left: auto;}",
"*now":function(p){p(['dojo/i18n!*preload*themes/LaunchpadTheme/widgets/AnchorBarController/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-geometry dojo/dom-style dojo/dom-class dojo/dom-construct dojo/fx dojo/on dojo/query dojo/aspect jimu/BaseWidget jimu/PoolControllerMixin ./DockableItem ./GroupItems ./PopupMoreNodes".split(" "),function(p,h,c,f,e,g,n,q,l,r,m,t,a,k,v,u){return p([t,a],{baseClass:"jimu-anchorbar-controller",visibleIcons:0,iconList:[],enableNext:!1,enablePrevious:!1,currentMode:1,iconMargin:8,groupList:[],openedIds:[],currentStyle:"default",postCreate:function(){this.inherited(arguments);
this.iconList=[];this.groupList=[];this.openedIds=[];this.currentStyle=this.appConfig.theme.styles[0];this.allConfigs=this.getAllConfigs();c.forEach(this.allConfigs,function(b,d){this._createItem(b,d)},this)},_createItem:function(b,d){var a;d=new k({config:b,backgroundIndex:d});d.placeAt(this.iconGroupNode);this.iconList.push(d);d.isGroup()?(a=new v({config:b,dockableItem:d}),b=window.appInfo.isRunInMobile?jimuConfig.layoutId:jimuConfig.mapId,a.placeAt(b),e.set(a.domNode,"display","none"),this.own(l(a,
"groupItemClicked",h.hitch(this,function(b){this._onDockableNodeClick(b.target)}))),this.own(l(d,"nodeClick",h.hitch(this,function(b){this._onGroupNodeClick(b.target,a)}))),this.groupList.push(a)):this.own(l(d,"nodeClick",h.hitch(this,function(b){this._onDockableNodeClick(b.target)})));return d},startup:function(){this.inherited(arguments);this.resize();c.some(this.iconList,function(b,d){if(b.isOpenAtStart())return window.appInfo.isRunInMobile||this._makeIconVisible(d),b._onNodeClick(),!0},this)},
destroy:function(){this.inherited(arguments);c.forEach(this.groupList,function(b){b.destroy()})},onAction:function(b,d){"highLight"===b&&d&&(d=r('div[settingid\x3d"'+d.widgetId+'"]',this.domNode)[0],this._highLight(d));"removeHighLight"===b&&this._removeHighLight()},onOpen:function(){0===this.iconList.length&&"config"!==this.appConfig.mode&&this.widgetManager.closeWidget(this)},onAppConfigChanged:function(b){this.currentStyle=b.theme.styles[0]},setOpenedIds:function(b){var d;0!==b.length&&c.forEach(b,
function(b){d=this._getIconItemById(b);null!==d&&d._onNodeClick()},this)},getOpenedIds:function(){this.inherited(arguments);return c.filter(this.openedIds,function(b){return"undefined"!==typeof b})},_highLight:function(b){this.hlDiv&&this._removeHighLight();if(b&&"none"!==e.get(b,"display")){var d=e.get(b,"margin-left"),a=f.getMarginBox(b),d={position:"absolute",left:a.l+d+"px",top:a.t+"px",width:"40px",height:"40px"};"style2"!==this.currentStyle&&(d["margin-top"]="-20px");this.hlDiv=n.create("div",
{style:d,"class":"icon-highlight"},b,"before")}},_removeHighLight:function(){this.hlDiv&&(n.destroy(this.hlDiv),this.hlDiv=null)},clearIconGroupNode:function(){for(;this.iconGroupNode.firstChild;)this.iconGroupNode.removeChild(this.iconGroupNode.firstChild)},resize:function(){window.appInfo.isRunInMobile?(1===this.currentMode&&(this.currentMode=2,g.add(this.domNode,"mobile"),this.clearIconGroupNode(),this.lastVisibleIcons=0),this.popupMore&&this.popupMore.hide(),this.switchToMobileStyle()):(2===this.currentMode&&
(this.currentMode=1,g.remove(this.domNode,"mobile"),this.clearIconGroupNode(),this.lastVisibleIcons=0,e.set(this.iconGroupNode,"width",80*this.allConfigs.length+"px"),c.forEach(this.iconList,function(b){b.placeAt(this.iconGroupNode)},this)),this.switchToNormalStyle());this._resizeOpenedPanel()},switchToMobileStyle:function(){var b;b=f.getContentBox(jimuConfig.mapId).w;e.set(this.iconGroupNode,"width",Math.max(b,80*this.allConfigs.length)+"px");this.visibleIcons=Math.floor(b/48);this.visibleIcons>=
this.iconList.length&&(this.visibleIcons=this.iconList.length);this.visibleIcons!==this.lastVisibleIcons?(this.lastVisibleIcons=this.visibleIcons,this.clearIconGroupNode(),this._reArrangeIconItems(b)):this._adjustIconMargin(b)},_reArrangeIconItems:function(b){var d,a,f=[],g;a=(d=this.visibleIcons<this.iconList.length)?this.visibleIcons-1:this.visibleIcons;this.iconMargin=Math.floor((b-40*this.visibleIcons)/(this.visibleIcons+1));c.forEach(this.iconList,function(b,d){g={display:"",position:"",left:"",
top:""};e.set(b.iconItemNode,{width:"40px",height:"40px"});e.set(b.imgNode,{width:"20px",height:"20px"});d<a?(window.isRTL?g["margin-right"]=this.iconMargin+"px":g["margin-left"]=this.iconMargin+"px",e.set(b.domNode,g),b.placeAt(this.iconGroupNode)):(e.set(b.domNode,g),f.push(b))},this);d&&(b=this._createIconItemForMore(),g={},window.isRTL?g["margin-right"]=this.iconMargin+"px":g["margin-left"]=this.iconMargin+"px",e.set(b.domNode,g),b.placeAt(this.iconGroupNode),this.own(l(b,"nodeClick",h.hitch(this,
function(b){this._onShowMoreNodeClick(b.target,f)}))))},_createIconItemForMore:function(){return new k({config:{id:"show_more_widget_icons",label:this.nls.more,icon:this.folderUrl+"images/more_icon.png"},backgroundIndex:this.visibleIcons})},_adjustIconMargin:function(b){var d={};this.iconMargin=Math.floor((b-40*this.visibleIcons)/(this.visibleIcons+1));window.isRTL?d["margin-right"]=this.iconMargin+"px":d["margin-left"]=this.iconMargin+"px";r("div.jimu-anchorbar-iconitem",this.iconGroupNode).forEach(function(b){e.set(b,
d)},this)},switchToNormalStyle:function(){var b,d,a=0;b=f.getContentBox(jimuConfig.mapId);d=Math.floor(b.w/2);d>48*this.allConfigs.length+60&&(d=48*this.allConfigs.length+60);e.set(this.domNode,{width:d+"px",left:Math.floor((b.w-d)/2)+"px"});b=d-60;this.visibleIcons=Math.floor(b/48);this.visibleIcons>this.iconList.length&&(this.visibleIcons=this.iconList.length);c.some(this.iconList,function(b,d){if(b.visible)return a=d,!0});d=a+this.visibleIcons-1;d>=this.iconList.length&&(d=this.iconList.length-
1,a=d-this.visibleIcons+1);this.iconMargin=Math.floor((b-40*this.visibleIcons)/(this.visibleIcons+1));this._adjustIconStyle(a,d)},_previous:function(){var b=-1,d=-1,a=[];this.enablePrevious&&(c.some(this.iconList,function(a,d){if(a.visible)return b=d-1,!0},this),0<=b&&(d=b+this.visibleIcons,a=a.concat(this.iconList[d].hideAnim(this.iconMargin),this.iconList[b].showAnim(this.iconMargin)),q.combine(a).play(),this.enableNext=!0,g.add(this.nextButton,"enabled"),0===b&&(this.enablePrevious=!1,g.remove(this.previousButton,
"enabled"))))},_next:function(){var b=-1,a=-1,e=[];this.enableNext&&(c.some(this.iconList,function(a,d){if(a.visible)return b=d,!0},this),0<=b&&(a=b+this.visibleIcons,e=e.concat(this.iconList[b].hideAnim(this.iconMargin),this.iconList[a].showAnim(this.iconMargin)),q.combine(e).play(),this.enablePrevious=!0,g.add(this.previousButton,"enabled"),a===this.iconList.length-1&&(this.enableNext=!1,g.remove(this.nextButton,"enabled"))))},_getGroupPanelPosition:function(b,a){var d={};b=f.position(b.iconItemNode);
var c=f.getContentBox(jimuConfig.mapId);d.top=b.y-a.h-8;d.left=window.isRTL?b.x<a.w+8?8:b.x-a.w+b.w:b.x+a.w+8>c.w?c.w-a.w-8:b.x;return d},_getOffPanelPosition:function(b,a){var d={},c=f.position(b.iconItemNode),e=f.getContentBox(jimuConfig.mapId);d.bottom=e.h-(c.y+8)+20;window.isRTL?d.right=c.x<a.w+8?e.w-a.w-8:c.x-a.w:d.left=c.x+a.w+8>e.w?e.w-a.w-8:c.x;b.config.position&&(d.relativeTo=b.config.position.relativeTo);return d},_createPopupMoreNodes:function(){this.popupMore||(this._createCoverNode(),
this.popupMore=new u,this.popupMore.placeAt(jimuConfig.mapId),m.after(this.popupMore,"show",h.hitch(this,function(){e.set(this.moreIconPaneCoverNode,"display","")}),!0),m.after(this.popupMore,"hide",h.hitch(this,function(){e.set(this.moreIconPaneCoverNode,"display","none")}),!0))},_onShowMoreNodeClick:function(b,a){this._createPopupMoreNodes();b.isOpen?(this.popupMore.setForIcon(b),this.popupMore.setNodes(a),this.popupMore.show()):this.popupMore.hide()},_getIconItemById:function(b){var a=null;c.some(this.iconList,
function(d){if(d.config.id===b)return a=d,!0});null===a&&c.some(this.groupList,function(d){return c.some(d.getItemList(),function(d){if(d.config.id===b)return a=d,!0})});return a},_addToOpenedIds:function(b){-1===this.openedIds.indexOf(b)&&this.openedIds.push(b)},_removeFromOpenedIds:function(b){b=this.openedIds.indexOf(b);-1!==b&&(this.openedIds[b]=void 0)},_onGroupNodeClick:function(b,a){var d;b.isOpen?(d=this._getGroupPanelPosition(b,a.box),a.setPosition(d),a.open(),this._addToOpenedIds(b.config.id)):
(a.close(),this._removeFromOpenedIds(b.config.id))},_onDockableNodeClick:function(b){var a,c;!1===b.config.inPanel?b.isOpen?this.widgetManager.loadWidget(b.config).then(h.hitch(this,function(a){this._addToOpenedIds(b.config.id);var d=this._getOffPanelPosition(b,this.widgetManager.getWidgetMarginBox(a));d.zIndex=100;a.setPosition(d,this.containerNode);this.widgetManager.openWidget(a);this.own(m.after(a,"onClose",h.hitch(this,function(){b.setOpened(!1);this._removeFromOpenedIds(b.config.id)})))})):
(this.widgetManager.closeWidget(b.config.id),this._removeFromOpenedIds(b.config.id)):(a=b.config.id+"_panel",b.isOpen?(b.setPanelIndex(this._calPanelIndex()),c=b.getConfigForPanel(),this.panelManager.showPanel(c).then(h.hitch(this,function(a){a.setPosition(c.panel.position);m.after(a,"onClose",h.hitch(this,function(){b.setOpened(!1);this._removeFromOpenedIds(b.config.id)}))})),this.popupMore&&this.popupMore.hide(),this._addToOpenedIds(b.config.id)):(this.panelManager.closePanel(a),this._removeFromOpenedIds(b.config.id)))},
_calPanelIndex:function(){var b=[],a,e;c.forEach(this.iconList,function(a){!a.isGroup()&&!1!==a.config.inPanel&&a.isOpen&&b.push(a.getPanelIndex())});c.forEach(this.groupList,function(a){c.forEach(a.getItemList(),function(a){!1!==a.config.inPanel&&a.isOpen&&b.push(a.getPanelIndex())})});if(0===b.length)return 0;b.sort(function(b,a){return b-a});if(0<b[0])return 0;a=0;for(e=b.length-1;a<e;a++)if(1<b[a+1]-b[a])return b[a]+1;return b[e]+1},_createCoverNode:function(){this.moreIconPaneCoverNode=n.create("div",
{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)},_resizeOpenedPanel:function(){var b;c.forEach(this.iconList,function(a){if(!a.isGroup()&&!1!==a.config.inPanel&&a.isOpen&&(b=this.panelManager.getPanelById(a.config.id+"_panel")))b.onWindowResize()},this);c.forEach(this.groupList,function(a){c.forEach(a.getItemList(),function(a){if(!1!==a.config.inPanel&&a.isOpen&&(b=this.panelManager.getPanelById(a.config.id+"_panel")))b.onWindowResize()},this)},this)},_makeIconVisible:function(a){var b;this.visibleIcons!==
this.iconList.length&&(a-=Math.floor(this.visibleIcons/2),a=0<=a?a:0,b=a+this.visibleIcons-1,b>=this.iconList.length&&(b=this.iconList.length-1,a=b-this.visibleIcons+1),this._adjustIconStyle(a,b))},_adjustIconStyle:function(a,d){var b;c.forEach(this.iconList,function(c,f){c.visible=f>=a&&f<=d;b={position:"",left:"",top:"",display:c.visible?"":"none"};window.isRTL?b["margin-right"]=this.iconMargin+"px":b["margin-left"]=this.iconMargin+"px";e.set(c.domNode,b);e.set(c.iconItemNode,{width:"40px",height:"40px"});
e.set(c.imgNode,{width:"20px",height:"20px"})},this);d<this.allConfigs.length-1?(g.add(this.nextButton,"enabled"),this.enableNext=!0):(g.remove(this.nextButton,"enabled"),this.enableNext=!1);0<a?(this.enablePrevious=!0,g.add(this.previousButton,"enabled")):(this.enablePrevious=!1,g.remove(this.previousButton,"enabled"))}})});