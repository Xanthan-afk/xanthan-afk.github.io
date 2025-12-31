gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDRabbitObjects1= [];
gdjs.Untitled_32sceneCode.GDRabbitObjects2= [];
gdjs.Untitled_32sceneCode.GDRabbitObjects3= [];
gdjs.Untitled_32sceneCode.GDGroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGroundObjects2= [];
gdjs.Untitled_32sceneCode.GDGroundObjects3= [];
gdjs.Untitled_32sceneCode.GDCave_9595BackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDCave_9595BackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDCave_9595BackgroundObjects3= [];
gdjs.Untitled_32sceneCode.GDMoleObjects1= [];
gdjs.Untitled_32sceneCode.GDMoleObjects2= [];
gdjs.Untitled_32sceneCode.GDMoleObjects3= [];
gdjs.Untitled_32sceneCode.GDDEATHObjects1= [];
gdjs.Untitled_32sceneCode.GDDEATHObjects2= [];
gdjs.Untitled_32sceneCode.GDDEATHObjects3= [];
gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects1= [];
gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects2= [];
gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects3= [];
gdjs.Untitled_32sceneCode.GDGEM_9595DISPLAyObjects1= [];
gdjs.Untitled_32sceneCode.GDGEM_9595DISPLAyObjects2= [];
gdjs.Untitled_32sceneCode.GDGEM_9595DISPLAyObjects3= [];
gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects1= [];
gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects2= [];
gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects3= [];
gdjs.Untitled_32sceneCode.GDTime2Objects1= [];
gdjs.Untitled_32sceneCode.GDTime2Objects2= [];
gdjs.Untitled_32sceneCode.GDTime2Objects3= [];
gdjs.Untitled_32sceneCode.GDBGObjects1= [];
gdjs.Untitled_32sceneCode.GDBGObjects2= [];
gdjs.Untitled_32sceneCode.GDBGObjects3= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRabbitObjects2[k] = gdjs.Untitled_32sceneCode.GDRabbitObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRabbitObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9139468);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDRabbitObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "tlv1_SFX walking_1.mp3", false, 40, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRabbitObjects2[k] = gdjs.Untitled_32sceneCode.GDRabbitObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRabbitObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRabbitObjects2[k] = gdjs.Untitled_32sceneCode.GDRabbitObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRabbitObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10432844);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDRabbitObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("Animation").setAnimationName("Walk");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRabbitObjects2[k] = gdjs.Untitled_32sceneCode.GDRabbitObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRabbitObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRabbitObjects2[k] = gdjs.Untitled_32sceneCode.GDRabbitObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRabbitObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRabbitObjects2[k] = gdjs.Untitled_32sceneCode.GDRabbitObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRabbitObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13128036);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDRabbitObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRabbitObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRabbitObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRabbitObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRabbitObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMoleObjects1Objects = Hashtable.newFrom({"Mole": gdjs.Untitled_32sceneCode.GDMoleObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects = Hashtable.newFrom({"Rabbit": gdjs.Untitled_32sceneCode.GDRabbitObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMoleObjects1Objects = Hashtable.newFrom({"Mole": gdjs.Untitled_32sceneCode.GDMoleObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects = Hashtable.newFrom({"Rabbit": gdjs.Untitled_32sceneCode.GDRabbitObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects = Hashtable.newFrom({"Rabbit": gdjs.Untitled_32sceneCode.GDRabbitObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDEATHObjects1Objects = Hashtable.newFrom({"DEATH": gdjs.Untitled_32sceneCode.GDDEATHObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects = Hashtable.newFrom({"Rabbit": gdjs.Untitled_32sceneCode.GDRabbitObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEmerald_95959595GemObjects1Objects = Hashtable.newFrom({"Emerald_Gem": gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects = Hashtable.newFrom({"Rabbit": gdjs.Untitled_32sceneCode.GDRabbitObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCave_95959595Background_95959595HoleObjects1Objects = Hashtable.newFrom({"Cave_Background_Hole": gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + 2, (( gdjs.Untitled_32sceneCode.GDRabbitObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDRabbitObjects1[0].getPointX("")), 0.05), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 2, (( gdjs.Untitled_32sceneCode.GDRabbitObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDRabbitObjects1[0].getPointY("")), 0.05), "", 0);
}
}

}


{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "ambient - starscape.mp3");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13021212);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "ambient - starscape.mp3", true, 40, 1);
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Mole"), gdjs.Untitled_32sceneCode.GDMoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMoleObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRabbitObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDRabbitObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRabbitObjects1[k] = gdjs.Untitled_32sceneCode.GDRabbitObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRabbitObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mole"), gdjs.Untitled_32sceneCode.GDMoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDMoleObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRabbitObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRabbitObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRabbitObjects1[k] = gdjs.Untitled_32sceneCode.GDRabbitObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRabbitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13063108);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDMoleObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDRabbitObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMoleObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMoleObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRabbitObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRabbitObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRabbitObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRabbitObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DEATH"), gdjs.Untitled_32sceneCode.GDDEATHObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDEATHObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Emerald_Gem"), gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEmerald_95959595GemObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "tlv1_SFX ui_notif.mp3", false, 40, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cave_Background_Hole"), gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rabbit"), gdjs.Untitled_32sceneCode.GDRabbitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRabbitObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCave_95959595Background_95959595HoleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDRabbitObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "2f097d4e-d4b8-41bd-950c-8151055c98dc", Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) * 1000) - (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 100), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRabbitObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRabbitObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2f097d4e-d4b8-41bd-950c-8151055c98dc", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewLoaded();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Leaderboard");
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDRabbitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRabbitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRabbitObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595BackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595BackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595BackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMoleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMoleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMoleObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDEATHObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDEATHObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDEATHObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGEM_9595DISPLAyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGEM_9595DISPLAyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGEM_9595DISPLAyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTime2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDTime2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDTime2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDRabbitObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRabbitObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRabbitObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595BackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595BackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595BackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMoleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMoleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMoleObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDEATHObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDEATHObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDEATHObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEmerald_9595GemObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGEM_9595DISPLAyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGEM_9595DISPLAyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGEM_9595DISPLAyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCave_9595Background_9595HoleObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTime2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDTime2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDTime2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
