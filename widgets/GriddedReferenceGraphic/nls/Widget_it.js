// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GriddedReferenceGraphic/nls/strings":{_widgetLabel:"Grafico di riferimento a griglia",newGRGFromAreaButtonLabel:"Definisci una griglia da un\u2019area",newGRGFromPointButtonLabel:"Definisci una griglia da un punto",newGRGFromAreaTitle:"Definisci una griglia da un\u2019area",newGRGFromPointTitle:"Definisci una griglia da un punto",newGRGBySizeButtonLabel:"Per dimensione",newGRGFromRefSystemButtonLabel:"Per sistema di riferimento",newGRGByTimeLabel:"Per tempo e velocit\u00e0",newGRGFromNonStandardButtonLabel:"Definisci griglia non standard",
newGRGAreaBySizeTitle:"GRG da superficie per dimensione",newGRGAreaBySizeDefineAreaLabel:"Superficie GRG",addGRGAreaPolygonToolTip:"Disegna superficie GRG usando un poligono",addGRGAreaExtentToolTip:"Disegna superficie GRG usando un\u2019estensione",rotation:"Rotazione griglia",numberRowsColumnsLabel:"Definisci numero di righe e colonne",newGRGAreaByRefSystemTitle:"GRG da superficie per sistema di riferimento",gridSize:"Indice Spaziale",UTMZoneandBand:"Zona della griglia","100000m":"100.000 metri",
"10000m":"10.000 metri","1000m":"1000 metri","100m":"100 metri","10m":"10 metri",clipGrid:"Ritaglia griglia da superficie GRG",newGRGAreaFromNonStandardTitle:"Nuovo NRG",newGRGPointBySizeTitle:"GRG da punto per dimensione",newGRGPointByRefSystemTitle:"GRG da punto per sistema di riferimento",newGRGPointByTimeTitle:"GRG da punto usando tempo e velocit\u00e0",time:"Tempo",rate:"Velocit\u00e0",hours:"Ore",minutes:"Minuti",seconds:"Secondi",ftPerSec:"Piedi al secondo",ftPerHour:"Piedi all\u2019ora",kmPerSec:"Chilometri al secondo",
kmPerHour:"Chilometri all'ora",mPerSec:"Metri al secondo",mPerHour:"Metri all\u2019ora",miPerSec:"Miglia al secondo",miPerHour:"Miglia all\u2019ora",nMPerSec:"Miglia nautiche al secondo",nMPerHour:"Miglia nautiche all\u2019ora",settingsTitle:"Impostazioni",labelSettingsLabel:"Impostazioni etichetta",labelSettingsButtonLabel:"Configura impostazioni etichetta",gridSettingsLabel:"Impostazioni griglia",gridSettingsButtonLabel:"Configura impostazioni griglia",transparency:"Trasparenza",labelStyle:"Stile etichetta",
font:"Carattere",textSize:"Dimensione testo",textColor:"Colore del testo",halo:"Alone",show:"Mostra",lockSettings:"Le impostazioni sono state bloccate dal proprietario dell'app",gridSettings:{cellShape:"Forma della cella",cellUnits:"Unit\u00e0 della cella",cellOutline:"Impostazioni del bordo delle celle",cellFill:"Impostazioni di riempimento della cella",gridReferenceSystem:"Sistema di riferimento",gridDatum:"Datum: WGS85",labelStartPosition:"Origine etichetta",labelType:"Tipo di etichetta",labelDirection:"Direzione etichetta",
gridOrigin:"Origine griglia","default":"Rettangolo",hexagon:"Esagono",miles:"Miglia",kilometers:"Chilometri",feet:"Piedi",meters:"Metri",yards:"Iarde","nautical-miles":"Miglia nautiche",lowerLeft:"In basso a sinistra",lowerRight:"In basso a destra",upperLeft:"In alto a sinistra",upperRight:"In alto a destra",center:"Centrato",alphaNumeric:"Alfanumerico",alphaAlpha:"Alfabetico",numeric:"Numerico",horizontal:"Orizzontale",vertical:"Verticale",MGRS:"MGRS",USNG:"USNG",showLabels:"Mostra Etichette"},publishTitle:"Pubblica GRG sul portale",
publishGRGBtn:"Pubblica",GRGLayerName:"Nome layer del GRG pubblicato",invalidGRGLayerName:"Il nome del layer deve contenere soltanto caratteri alfanumerici e sottolineature",missingGRGLayerName:"Inserire un nome per il GRG",publishingFailedLayerExists:"Pubblicazione non riuscita: esiste gi\u00e0 un feature service chiamato {0}. Scegliere un altro nome.",checkService:"Verifica servizio: {0}",createService:"Crea servizio: {0}",unableToCreate:"Creazione non riuscita: {0}",addToDefinition:"Aggiungi a definizione: {0}",
successfullyPublished:"Web Layer pubblicato con successo{0}Gestisci  Web Layer",userRole:"Impossibile creare il servizio poich\u00e9 l\u2019utente non dispone delle autorizzazioni.",createGRGBtn:"Crea GRG",clearGRGBtn:"Cancella",labelFormat:"Formato etichetta",helpIconTooltip:"Z: Designatore zona griglia (GZD)\nS: Identificazione quadrato griglia di 100.000 metri (GSID)\nX: Direzione est (coordinata X)\nY: Direzione nord (coordinata Y)\n\nEsempi:\nZSXY \u00e8 15SWC8081751205\nZS X,Y \u00e8 15SWC 80817,51205",
addPointToolTip:"Aggiungi origine GRG",cellWidth:"Larghezza cella (x)",cellHeight:"Altezza cella (x)",invalidNumberMessage:"Il valore immesso non \u00e8 valido",invalidRangeMessage:"Il valore deve essere maggiore di 0",gridAngleInvalidRangeMessage:"Il valore deve essere compreso tra -89,9 e 89,9",formatIconTooltip:"Input formato",coordInputLabel:"Origine GRG (DD)",setCoordFormat:"Imposta stringa di formato coordinata",prefixNumbers:"Aggiungere il prefisso '+/-' ai numeri positivi e negativi",cancelBtn:"Annulla",
applyBtn:"Applica",comfirmInputNotation:"Confermare l'input annotato.",notationsMatch:"Notazioni corrispondenti all'input. Confermare quale si desidera utilizzare:",numberOfCellsHorizontal:"# Celle orizzontali",numberOfCellsVertical:"# Celle verticali",gridAngle:"Rotazione griglia",tooManyCellsErrorMessage:"Si sta tentando di creare una griglia contenente oltre 2.000 celle. Si consiglia di ridurre il numero delle celle modificando la dimensione della griglia o la superficie della stessa.",missingParametersMessage:"\x3cp\x3eIl modulo di creazione del GRG contiene parametri mancanti o non validi. Verificare:\x3c/p\x3e\x3cul\x3e\x3cli\x3eDi aver disegnato una superficie GRG.\x3c/li\x3e\x3cli\x3eChe l\u2019altezza e la larghezza della cella contengano valori validi.\x3c/li\x3e\x3c/ul\x3e",
missingOriginParametersMessage:"\x3cp\x3eIl modulo di creazione del GRG contiene parametri mancanti o non validi. Verificare:\x3c/p\x3e\x3cul\x3e\x3cli\x3eChe sia stata impostata un\u2019origine del GRG.\x3c/li\x3e\x3cli\x3eChe gli input di tempo, velocit\u00e0 e angolazione contengano valori validi.\x3c/li\x3e\x3c/ul\x3e",invalidWidthHeightParametersMessage:"\x3cp\x3eIl modulo di creazione del GRG contiene parametri mancanti o non validi. Verificare che gli input di larghezza e altezza della cella contengano valori validi.\x3c/p\x3e",
invalidHorizontalVerticalParametersMessage:"\x3cp\x3eIl modulo di creazione del GRG contiene parametri mancanti o non validi. Verificare che gli input orizzontali e verticali del numero di celle contengano valori validi.\x3c/p\x3e",drawPointToolTip:"Fare clic per aggiungere un punto di origine del GRG",missingLayerNameMessage:"\u00c8 necessario inserire un nome valido per il layer prima della pubblicazione",parseCoordinatesError:"Impossibile analizzare le coordinate. Controllare l'input.",grgPolarRegionError:"L'estensione del GRG si trova all'interno di una regione polare. Le celle all\u2019interno della regione polare non verranno create.",
grgPolarOriginError:"Il punto di origine del GRG non pu\u00f2 trovarsi all\u2019interno di una regione polare quando si crea un GRG mediante sistema di riferimento.",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Gradi decimali - Latitudine/Longitudine",DDLongLatNotation:"Gradi decimali - Longitudine/Latitudine",DDMLatLongNotation:"(DDM) Degrees Decimal Minutes - Latitude/Longitude",
DDMLongLatNotation:"(DDM) Degrees Decimal Minutes - Longitude/Latitude",DMSLatLongNotation:"(DDS) Degrees Minutes Seconds - Latitude/Longitude",DMSLongLatNotation:"(DDS) Degrees Minutes Seconds - Longitude/Latitude",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - Band Letter",UTMHemNotation:"UTM - Hemisphere (N/S)",_localized:{}}});