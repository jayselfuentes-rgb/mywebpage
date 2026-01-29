gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.idToCallbackMap = new Map();
gdjs.introCode.GDplayObjects1= [];
gdjs.introCode.GDplayObjects2= [];
gdjs.introCode.GDsettings2Objects1= [];
gdjs.introCode.GDsettings2Objects2= [];
gdjs.introCode.GDsettings4Objects1= [];
gdjs.introCode.GDsettings4Objects2= [];
gdjs.introCode.GDNewTiledSpriteObjects1= [];
gdjs.introCode.GDNewTiledSpriteObjects2= [];


gdjs.introCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.introCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDplayObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDplayObjects1[k] = gdjs.introCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDplayObjects1.length = 0;
gdjs.introCode.GDplayObjects2.length = 0;
gdjs.introCode.GDsettings2Objects1.length = 0;
gdjs.introCode.GDsettings2Objects2.length = 0;
gdjs.introCode.GDsettings4Objects1.length = 0;
gdjs.introCode.GDsettings4Objects2.length = 0;
gdjs.introCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.introCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.introCode.eventsList0(runtimeScene);
gdjs.introCode.GDplayObjects1.length = 0;
gdjs.introCode.GDplayObjects2.length = 0;
gdjs.introCode.GDsettings2Objects1.length = 0;
gdjs.introCode.GDsettings2Objects2.length = 0;
gdjs.introCode.GDsettings4Objects1.length = 0;
gdjs.introCode.GDsettings4Objects2.length = 0;
gdjs.introCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.introCode.GDNewTiledSpriteObjects2.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
