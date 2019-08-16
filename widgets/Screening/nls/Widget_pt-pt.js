// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/nls/strings":{_widgetLabel:"Controlo",geometryServicesNotFound:"Servi\u00e7o de geometria n\u00e3o dispon\u00edvel.",unableToDrawBuffer:"Imposs\u00edvel desenhar o buffer. Por favor, tente novamente.",invalidConfiguration:"Configura\u00e7\u00e3o inv\u00e1lida.",clearAOIButtonLabel:"Come\u00e7ar Novamente",noGraphicsShapefile:"A shapefilhe carregada n\u00e3o cont\u00e9m quaisquer gr\u00e1ficos",zoomToLocationTooltipText:"Efectuar Zoom para a localiza\u00e7\u00e3o",noGraphicsToZoomMessage:"N\u00e3o foram encontrados quaisquer gr\u00e1fcos para ampliar.",
placenameWidget:{placenameLabel:"Procurar uma localiza\u00e7\u00e3o"},drawToolWidget:{useDrawToolForAOILabel:"Selecionar modo de desenho",toggleSelectability:"Clicar para alternar possibilidade de selecionar",chooseLayerTitle:"Escolher camada selecion\u00e1vel",selectAllLayersText:"Selecionar Tudo",layerSelectionWarningTooltip:"Pelo menos uma camada deveria ser selecionada para criar AOI"},shapefileWidget:{shapefileLabel:"Carregar uma shapefile compactada em ZIP",uploadShapefileButtonText:"Carregar",
unableToUploadShapefileMessage:"N\u00e3o \u00e9 poss\u00edvel compactar a Shapefile."},coordinatesWidget:{selectStartPointFromSearchText:"Definir um ponto de partida",addButtonTitle:"Adicionar",deleteButtonTitle:"Remover",mapTooltipForStartPoint:"Clique no mapa para definir um ponto de partida",mapTooltipForUpdateStartPoint:"Clique no mapa para atualizar o ponto de partida",locateText:"Localizar",locateByMapClickText:"Selecionar coordenadas iniciais",enterBearingAndDistanceLabel:"Introduzir suporte e dist\u00e2ncia at\u00e9 ao ponto de partida",
bearingTitle:"Suporte",distanceTitle:"Dist\u00e2ncia",planSettingTooltip:"Planear Defini\u00e7\u00f5es",invalidLatLongMessage:"Por favor, introduza valores v\u00e1lidos."},bufferDistanceAndUnit:{bufferInputTitle:"Dist\u00e2ncia de buffer (opcional)",bufferInputLabel:"Exibir resultados dentro de"},traverseSettings:{bearingLabel:"Suporte",lengthLabel:"Comprimento",addButtonTitle:"Adicionar",deleteButtonTitle:"Remover"},planSettings:{expandGridTooltipText:"Expandir grelha",collapseGridTooltipText:"Fechar grelha",
directionUnitLabelText:"Unidade de Dire\u00e7\u00f5es",distanceUnitLabelText:"Unidades de Dist\u00e2ncia e Comprimento",planSettingsComingSoonText:"Brevemente"},newTraverse:{invalidBearingMessage:"Suporte Inv\u00e1lido.",invalidLengthMessage:"Comprimento Inv\u00e1lido.",negativeLengthMessage:"Comprimento Negativo"},reportsTab:{aoiAreaText:"\u00c1rea AOI",downloadButtonTooltip:"Descarregar",printButtonTooltip:"Imprimir",uploadShapefileForAnalysisText:"Carregar Shapefile para incluir na an\u00e1lise",
uploadShapefileForButtonText:"Procurar",downloadLabelText:"Selecionar Formato:",downloadBtnText:"Descarregar",noDetailsAvailableText:"N\u00e3o foram encontrados resultados",featureCountText:"Contagem",featureAreaText:"\u00c1rea",featureLengthText:"Comprimento",attributeChooserTooltip:"Selecionar atributos a exibir",csv:"CSV",filegdb:"Geodatabase de Ficheiros",shapefile:"Shapefile",noFeaturesFound:"N\u00e3o foram encontrados resultados para o formato de ficheiro selecionado",selectReportFieldTitle:"Selecionar campos",
noFieldsSelected:"Sem campos selecionados",intersectingFeatureExceedsMsgOnCompletion:"A contagem m\u00e1xima de registo foi atingida para uma ou mais camadas.",unableToAnalyzeText:"N\u00e3o \u00e9 poss\u00edvel analisar, a contagem m\u00e1xima de registo foi atingida.",errorInPrintingReport:"N\u00e3o \u00e9 poss\u00edvel imprimir o relat\u00f3rio. Por favor, verifique se as defini\u00e7\u00f5es de relat\u00f3rio s\u00e3o v\u00e1lidas.",aoiInformationTitle:"Informa\u00e7\u00f5es de \u00c1rea de Interesse (Area of Interest -- AOI)",
summaryReportTitle:"Resumo",notApplicableText:"N/D",downloadReportConfirmTitle:"Confirmar transfer\u00eancia",downloadReportConfirmMessage:"Tem a certeza que pretende transferir?",noDataText:"Nenhuns Dados",createReplicaFailedMessage:"A opera\u00e7\u00e3o de transfer\u00eancia falhou para a(s) seguinte(s) camada(s) \x3cbr/\x3e ${layerNames}",extractDataTaskFailedMessage:"A opera\u00e7\u00e3o de transfer\u00eancia falhou.",printLayoutLabelText:"Layout",printBtnText:"Imprimir",printDialogHint:"Nota : O t\u00edtulo e os coment\u00e1rios do relat\u00f3rio podem ser editados na pr\u00e9-visualiza\u00e7\u00e3o do relat\u00f3rio.",
unableToDownloadFileGDBText:"N\u00e3o \u00e9 poss\u00edvel transferir File Geodatabase para uma AOI que contenha localiza\u00e7\u00f5es de ponto ou de linhas.",unableToDownloadShapefileText:"N\u00e3o \u00e9 poss\u00edvel transferir Shapefiles para uma AOI que contenha localiza\u00e7\u00f5es de ponto ou de linhas.",analysisUnitLabelText:"Exibir resultados em :",analysisUnitButtonTooltip:"Selecionar unidades para an\u00e1lise",analysisCloseBtnText:"Fechar",feetUnit:"P\u00e9s / P\u00e9s Quadrados",milesUnit:"Milhas / Acres",
metersUnit:"Metros / Metros Quadrados",kilometersUnit:"Quil\u00f3metros / Quil\u00f3metros Quadrados",hectaresUnit:"Quil\u00f3metros / Hectares",hectaresAbbr:"hectares",layerNotVisibleText:"N\u00e3o \u00e9 poss\u00edvel analisar, a camada encontra-se desativada ou est\u00e1 fora do raio de visibilidade da escala.",refreshBtnTooltip:"Atualizar relat\u00f3rio",featureCSVAreaText:"\u00c1rea de Interse\u00e7\u00e3o",featureCSVLengthText:"Comprimento de Interse\u00e7\u00e3o",errorInFetchingPrintTask:"Erro ao obter informa\u00e7\u00f5es de tarefa de impress\u00e3o. Por favor, tente novamente"},
_localized:{}}});