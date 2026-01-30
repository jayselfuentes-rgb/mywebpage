gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDCoinsObjects1= [];
gdjs.Game_32SceneCode.GDCoinsObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDSmall_9595Green_9595PlatformObjects1= [];
gdjs.Game_32SceneCode.GDSmall_9595Green_9595PlatformObjects2= [];
gdjs.Game_32SceneCode.GDForest_9595BackgroundObjects1= [];
gdjs.Game_32SceneCode.GDForest_9595BackgroundObjects2= [];
gdjs.Game_32SceneCode.GDSunken_9595ChestObjects1= [];
gdjs.Game_32SceneCode.GDSunken_9595ChestObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_32SceneCode.GDCoinsObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSunken_95959595ChestObjects1Objects = Hashtable.newFrom({"Sunken_Chest": gdjs.Game_32SceneCode.GDSunken_9595ChestObjects1});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_32SceneCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{


gdjs.Game_32SceneCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sunken_Chest"), gdjs.Game_32SceneCode.GDSunken_9595ChestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSunken_95959595ChestObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", false);
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDSmall_9595Green_9595PlatformObjects1.length = 0;
gdjs.Game_32SceneCode.GDSmall_9595Green_9595PlatformObjects2.length = 0;
gdjs.Game_32SceneCode.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDSunken_9595ChestObjects1.length = 0;
gdjs.Game_32SceneCode.GDSunken_9595ChestObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects2.length = 0;

gdjs.Game_32SceneCode.eventsList1(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDSmall_9595Green_9595PlatformObjects1.length = 0;
gdjs.Game_32SceneCode.GDSmall_9595Green_9595PlatformObjects2.length = 0;
gdjs.Game_32SceneCode.GDForest_9595BackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDForest_9595BackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDSunken_9595ChestObjects1.length = 0;
gdjs.Game_32SceneCode.GDSunken_9595ChestObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595Ground2Objects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
