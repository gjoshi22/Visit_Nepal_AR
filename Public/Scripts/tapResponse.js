// -----JS CODE-----
// Script responsible for basic tap function of the application 
// @input SceneObject[] sceneObjects
// @input SceneObject[] sceneTutorials
// @input Component.AudioComponent[] audioComponents
var audioComponent = null;
var currIndex = 0;

//function runs when application starts 
function onTurnOn(eventData) {
    // disables all built-in touch functions so that it does not interfere with user experience
    global.touchSystem.touchBlocking = true;

    global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);


    global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);

    //turn off all the scenes when camera opens    
    for (var i = 0; i < script.sceneObjects.length; i++) {
        script.sceneObjects[i].enabled = false;
    }

    // turn of all the scene tutorials when camera opens    
    for (var i = 0; i < script.sceneTutorials.length; i++) {
        script.sceneTutorials[i].enabled = false;
    }
}
var turnOn = script.createEvent("TurnOnEvent");
turnOn.bind(onTurnOn);

//function runs on every tap on the green arrow button to change scene
function onTap(eventData) {
    //on tap, disable all the scenes 
    for (var i = 0; i < script.sceneObjects.length; i++) {
        script.sceneObjects[i].enabled = false;
    }

    //on tap, disable all scene tutorials     
    for (var i = 0; i < script.sceneTutorials.length; i++) {
        script.sceneTutorials[i].enabled = false;
    }

    //on tap, disable all audio   
    for (var i = 1; i < script.audioComponents.length; i++) {
        script.audioComponents[i].stop(false);
    }

    //increase the current index on tap     
    currIndex++;

    //reset current index to default when taps are greater than total scene count
    if (currIndex >= script.sceneObjects.length) {
        currIndex = 0;
    }

    // Show scene object -> 1 scene per tap
    if (script.sceneObjects[currIndex]) {
        script.sceneObjects[currIndex].enabled = true;
    }
    // Show scene tutorial -> 1 scene per tap    
    if (script.sceneTutorials[currIndex]) {
        script.sceneTutorials[currIndex].enabled = true;
    }


    // Play sound -> 1 scene per tap
    if (currIndex < script.audioComponents.length &&
        script.audioComponents[currIndex]) {
        script.audioComponents[currIndex].play(1);
    }
}
//respond to global trigger when tap on the green arrow button is detected, responds to custom trigger scene_change
global.behaviorSystem.addCustomTriggerResponse("scene_change", onTap);
