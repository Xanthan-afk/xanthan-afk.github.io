gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.idToCallbackMap = new Map();
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDNewTextObjects1= [];
gdjs.TitleCode.GDNewTextObjects2= [];
gdjs.TitleCode.GDPlayer_9595NameObjects1= [];
gdjs.TitleCode.GDPlayer_9595NameObjects2= [];
gdjs.TitleCode.GDBGObjects1= [];
gdjs.TitleCode.GDBGObjects2= [];


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Name"), gdjs.TitleCode.GDPlayer_9595NameObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.TitleCode.GDPlayer_9595NameObjects1.length === 0 ) ? "" :gdjs.TitleCode.GDPlayer_9595NameObjects1[0].getText()));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDPlayer_9595NameObjects1.length = 0;
gdjs.TitleCode.GDPlayer_9595NameObjects2.length = 0;
gdjs.TitleCode.GDBGObjects1.length = 0;
gdjs.TitleCode.GDBGObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDPlayer_9595NameObjects1.length = 0;
gdjs.TitleCode.GDPlayer_9595NameObjects2.length = 0;
gdjs.TitleCode.GDBGObjects1.length = 0;
gdjs.TitleCode.GDBGObjects2.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
