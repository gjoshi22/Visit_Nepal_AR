// -----JS CODE-----
// @input SceneObject[] sceneObjects
// @input Component.AudioComponent[] audioComponents

var audioComponent = null;
var currIndex = 0;

function onTurnOn( eventData )
{
global.touchSystem.touchBlocking = true; 

global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);


global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);

//turn off all the scenes when camera opens    
for( var i = 0; i < script.sceneObjects.length; i++ ) {
script.sceneObjects[i].enabled = false; 
}
}
var turnOn = script.createEvent("TurnOnEvent");
turnOn.bind(onTurnOn);

//on every tap, disable all scenes and enables the indexed scene
function onTap( eventData )
{
for( var i = 0; i < script.sceneObjects.length; i++ ) {
script.sceneObjects[i].enabled = false; 
}

for( var i = 1; i < script.audioComponents.length; i++ ) {
script.audioComponents[i].stop(false); 
}

currIndex++;
    //reset to default when length is exceeded
if( currIndex >= script.sceneObjects.length ) {
currIndex = 0;
}

// Show scene object -> 1 scene per tap
if( script.sceneObjects[currIndex] ) 
{
script.sceneObjects[currIndex].enabled = true;
}

// Play sound
if( currIndex < script.audioComponents.length && 
script.audioComponents[currIndex] ) 
{
script.audioComponents[currIndex].play( 1 ); 
}
}
var tap = script.createEvent("TapEvent");
tap.bind(onTap);