// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","esri/request"],function(k,h,f,g,l){return k("WeatherInfo",null,{constructor:function(c,b,a){this.container=c;this.parent=a;this.weatherURL=b;this.weatherDict={119:["Cloudy","cloudy5.png","cloudy5.png"],377:["Moderate or heavy showers of ice pellets","hail.png","hail.png"],374:["Light showers of ice pellets","hail.png","hail.png"],350:["Ice pellets","hail.png","hail.png"],353:["Light rain shower","light_rain.png",
"light_rain.png"],302:["Moderate rain","light_rain.png","light_rain.png"],296:["Light rain","light_rain.png","light_rain.png"],293:["Patchy light rain","light_rain.png","light_rain.png"],266:["Light drizzle","light_rain.png","light_rain.png"],263:["Patchy light drizzle","light_rain.png","light_rain.png"],122:["Overcast","overcast.png","overcast.png"],359:["Torrential rain shower","shower3.png","shower3.png"],308:["Heavy rain","shower3.png","shower3.png"],365:["Moderate or heavy sleet showers","sleet.png",
"sleet.png"],362:["Light sleet showers","sleet.png","sleet.png"],320:["Moderate or heavy sleet","sleet.png","sleet.png"],317:["Light sleet","sleet.png","sleet.png"],314:["Moderate or Heavy freezing rain","sleet.png","sleet.png"],311:["Light freezing rain","sleet.png","sleet.png"],284:["Heavy freezing drizzle","sleet.png","sleet.png"],281:["Freezing drizzle","sleet.png","sleet.png"],185:["Patchy freezing drizzle nearby","sleet.png","sleet.png"],182:["Patchy sleet nearby","sleet.png","sleet.png"],395:["Moderate or heavy snow in area with thunder",
"snow4.png","snow4.png"],335:["Patchy heavy snow","snow4.png","snow4.png"],230:["Blizzard","snow4.png","snow4.png"],227:["Blowing snow","snow4.png","snow4.png"],371:["Moderate or heavy snow showers","snow5.png","snow5.png"],338:["Heavy snow","snow5.png","snow5.png"],389:["Moderate or heavy rain in area with thunder","tstorm3.png","tstorm3.png"],392:["Patchy light snow in area with thunder","snow2.png","snow2_night.png"],386:["Patchy light rain in area with thunder","tstorm1.png","tstorm1_night.png"],
368:["Light snow showers","snow2.png","snow2_night.png"],356:["Moderate or heavy rain shower","shower2.png","shower2_night.png"],332:["Moderate snow","snow3.png","snow3_night.png"],329:["Patchy moderate snow","snow2.png","snow2_night.png"],326:["Light snow","snow1.png","snow1_night.png"],323:["Patchy light snow","snow1.png","snow1_night.png"],305:["Heavy rain at times","shower2.png","shower2_night.png"],299:["Moderate rain at times","shower2.png","shower2_night.png"],260:["Freezing fog","fog.png",
"fog_night.png"],248:["Fog","fog.png","fog_night.png"],200:["Thundery outbreaks in nearby","tstorm1.png","tstorm1_night.png"],179:["Patchy snow nearby","snow1.png","snow1_night.png"],176:["Patchy rain nearby","shower1.png","shower1_night.png"],143:["Mist","mist.png","mist_night.png"],116:["Partly Cloudy","cloudy3.png","cloudy3_night.png"],113:["Clear/Sunny","sunny.png","sunny_night.png"]}},updateForIncident:function(c){this.container.innerHTML="";f.add(this.container,"loading");var b=c;"point"!==
c.type&&(b=c.getExtent().getCenter());c=b.y+","+b.x;l({url:"Yahoo"===this.parent._weatherSource?this.weatherURL+"\x26q\x3d"+('select wind,item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text\x3d"('+c+')")\x26format\x3djson'):this.weatherURL+"\x26q\x3d"+c+"\x26callbackNode\x3dLocalPerspective",callbackParamName:"callback"},{useProxy:!1}).then(h.hitch(this,function(a){return"Yahoo"===this.parent._weatherSource?this._resultsHandlerYahoo(a):this._resultsHandlerDarkSky(a)}),
h.hitch(this,function(){}))},_resultsHandlerYahoo:function(c){var b,a;f.remove(this.container,"loading");if(c.query.results){var e;b=c.query.results.channel.item.condition;c=c.query.results.channel.wind;this.container.innerHTML="";a=g.create("div",{id:"tpc",style:"width: 100%;"},this.container);f.add(a,"IMT_tabPanelContent");if(b){e=1;var d=b.date.split(" "),h=d[5],d=d[4].split(":"),d=parseInt(d[0],10);if("AM"===h){if(6>d||12===d)e=2}else 6<d&&12>d&&(e=2);1===e?this.parent.spillTime.setValue("DY"):
this.parent.spillTime.setValue("NTE");e=b.temp;b=parseInt(b.code,10);b=this.parent.nls.temperature+"\x3cbr/\x3e\x3cimg style\x3d'height:45px' src\x3d'"+this.parent.folderUrl+"images/w/yahoo/"+b+".png' /\x3e\x3cbr/\x3e"+e+"\x26deg;";b=this.parent.config.celsius?b+" "+this.parent.nls.c:b+" "+this.parent.nls.f;b=g.create("div",{innerHTML:b},a);f.add(b,"ERGcolSmall");b=this.parent.nls.wind+"\x3cbr/\x3e\x3cspan style\x3d'font-size: 30px; line-height:47px'\x3e"+"N NNE NE ENE E ESE SE SSE S SSW SW WSW W WNW NW NNW".split(" ")[Math.floor(c.direction/
22.5+.5)%16]+"\x3c/span\x3e\x3cbr/\x3e"+c.speed+" MPH";a=g.create("div",{innerHTML:b},a);f.add(a,"ERGcolSmall");this.parent.windDirection.setValue(parseFloat(c.direction));6>=c.speed?this.parent.windSpeed.setValue("LOW"):6<c.speed&&12>=c.speed?this.parent.windSpeed.setValue("MOD"):this.parent.windSpeed.setValue("HI");this._addCredits(this.parent._weatherSource)}}else this._resetWeatherInfo(this.parent._weatherSource,this.parent.nls.weatherErrorMessage)},_resultsHandlerDarkSky:function(c){var b=c.data.current_condition;
this.container.innerHTML="";f.remove(this.container,"loading");c=g.create("div",{id:"tpc",style:"width: 100%;"},this.container);f.add(c,"IMT_tabPanelContent");var a,e;if(0<b.length){var b=b[0],d=1;a=b.localObsDateTime.split(" ");e=a[2];a=a[1].split(":");a=parseInt(a[0],10);if("AM"===e){if(6>a||12===a)d=2}else 6<a&&12>a&&(d=2);1===d?this.parent.spillTime.setValue("DY"):this.parent.spillTime.setValue("NTE");e=b.temp_F;this.parent.config.celsius&&(e=b.temp_C);a=b.weatherCode;a=this.weatherDict[parseInt(a,
10)];a=this.parent.nls.temperature+"\x3cbr/\x3e\x3cimg style\x3d'height:45px' src\x3d'"+this.parent.folderUrl+"images/w/"+a[d]+"' /\x3e\x3cbr/\x3e"+e+"\x26deg;";a=this.parent.config.celsius?a+" "+this.parent.nls.c:a+" "+this.parent.nls.f;d=g.create("div",{innerHTML:a},c);f.add(d,"ERGcolSmall");d=b.windspeedMiles;a=" MPH";this.parent.config.celsius&&(d=b.windspeedKmph,a=" KMPH");e=b.winddir16Point;a=this.parent.nls.wind+"\x3cbr/\x3e\x3cspan style\x3d'font-size: 30px; line-height:47px'\x3e"+e+"\x3c/span\x3e\x3cbr/\x3e"+
d+a;c=g.create("div",{innerHTML:a},c);f.add(c,"ERGcolSmall");switch(e){case "N":this.parent.windDirection.setValue("180.0");break;case "NNE":this.parent.windDirection.setValue("202.5");break;case "NE":this.parent.windDirection.setValue("225.0");break;case "ENE":this.parent.windDirection.setValue("247.5");break;case "E":this.parent.windDirection.setValue("270.0");break;case "ESE":this.parent.windDirection.setValue("292.5");break;case "SE":this.parent.windDirection.setValue("315.0");break;case "SSE":this.parent.windDirection.setValue("337.5");
break;case "S":this.parent.windDirection.setValue("0.0");break;case "SSW":this.parent.windDirection.setValue("22.5");break;case "SW":this.parent.windDirection.setValue("45.0");break;case "WSW":this.parent.windDirection.setValue("67.5");break;case "W":this.parent.windDirection.setValue("90.0");break;case "WNW":this.parent.windDirection.setValue("112.5");break;case "NW":this.parent.windDirection.setValue("135.0");break;case "NNW":this.parent.windDirection.setValue("157.5")}6>=b.windspeedMiles?this.parent.windSpeed.setValue("LOW"):
6<d&&12>=d?this.parent.windSpeed.setValue("MOD"):this.parent.windSpeed.setValue("HI")}this._addCredits(this.parent._weatherSource)},_resetWeatherInfo:function(c,b){this.container.innerHTML="";var a=g.create("div",{id:"tpc",style:"width: 100%;"},this.container);f.add(a,"IMT_tabPanelContent");var e=g.create("div",{innerHTML:"\x3cimg style\x3d'height:76px' src\x3d'"+this.parent.folderUrl+"images/w/dunno.png' /\x3e"},a);f.add(e,"ERGcolSmallUnknown");b=g.create("div",{innerHTML:"\x3cspan\x3e"+b+"\x3c/span\x3e"},
a);f.add(b,"ERGcolSmall");this._addCredits(c)},_addCredits:function(c){c=g.create("div",{innerHTML:"Yahoo"===c?"\x3ca style\x3d'color:#6e6e6e;text-decoration:none'href\x3d'https://www.yahoo.com/news/weather/' title\x3d'Yahoo Weather' target\x3d'_blank'\x3e\x3cimg style\x3d'height:36px;margin-top: 10px;' src\x3d'"+this.parent.folderUrl+'images/yahoo.png\' /\x3e\x3cbr /\x3e\x3cspan style\x3d"font-size:11px;color:#6e6e6e"\x3ePowered by\x3cbr/\x3eYahoo\x3c/a\x3e\x3c/span\x3e':"\x3ca style\x3d'color:#6e6e6e;text-decoration:none'href\x3d'https://darksky.net/poweredby/' title\x3d'Dark Sky' target\x3d'_blank'\x3e\x3cimg style\x3d'height:36px;margin-top: 10px;' src\x3d'"+
this.parent.folderUrl+'images/darksky.png\' /\x3e\x3cbr /\x3e\x3cspan style\x3d"font-size:11px;color:#6e6e6e"\x3ePowered by\x3cbr/\x3eDark Sky\x3c/a\x3e\x3c/span\x3e'},tpc);f.add(c,"ERGcolSmall");f.add(c,"ERGcolLast")},_errorHandler:function(){f.remove(this.container,"loading")}})});