// -----JS CODE-----

// @input SceneObject task_3
// @input SceneObject task_3_banana
// @input SceneObject task_3_can
// @input SceneObject task_3_paper
// @input SceneObject task_3_bottle
// @input Component.Text task3_instruction_text

var task_3_completed = false;
var task_3_banana_completed = false;
var task_3_can_completed = false;
var task_3_bottle_completed = false;
var task_3_paper_completed = false;
var task_3_started = false;

//Disables "Thank you for keeping Everest clean" message at the beginning 
script.task3_instruction_text.enabled = false;

//respond to global trigger when tap on each trash component is detected, 
//responds to custom triggers- onTap_can, onTap_bottle, onTap_banana, onTap_paper
 
global.behaviorSystem.addCustomTriggerResponse("onTap_can", onTap_can);
global.behaviorSystem.addCustomTriggerResponse("onTap_bottle", onTap_bottle);
global.behaviorSystem.addCustomTriggerResponse("onTap_banana", onTap_banana);
global.behaviorSystem.addCustomTriggerResponse("onTap_paper", onTap_paper);

//function to start dispose animation for banana peel 
function onTap_banana() {
    //calls animation to pick the peel from the ground
    global.tweenManager.startTween(script.task_3_banana, "transform_banana_throw");
    //once pick animation ends, calls drop animation function to drop the peel into the trashcan
    global.tweenManager.startTween(script.task_3_banana, "transform_banana_throw", onMoveFinish_Banana);
    task_3_started = true;
}

//function to start dispose animation for can  
function onTap_can() {
     //calls animation to pick the can from the ground
    global.tweenManager.startTween(script.task_3_can, "transform_can_throw");
    //once pick animation ends, calls drop animation function to drop the can into the trashcan
    global.tweenManager.startTween(script.task_3_can, "transform_can_throw", onMoveFinish_Can);
    task_3_started = true;
}

//function to start dispose animation for paper 
function onTap_paper() {
    //calls animation to pick the paper from the ground
    global.tweenManager.startTween(script.task_3_paper, "transform_paper_throw");
    //once pick animation ends, calls drop animation function to drop the paper into the trashcan
    global.tweenManager.startTween(script.task_3_paper, "transform_paper_throw", onMoveFinish_Paper);
    task_3_started = true;
}

//function to start dispose animation for plastic bottle 
function onTap_bottle() {
    //calls animation to pick the plastic bottle from the ground
    global.tweenManager.startTween(script.task_3_bottle, "transform_bottle_throw");
    //once pick animation ends, calls drop animation function to drop the plastic bottle into the trashcan
    global.tweenManager.startTween(script.task_3_bottle, "transform_bottle_throw", onMoveFinish_Bottle);
    task_3_started = true;
}

//function to start drop animation 
function onMoveFinish_Can() {
    //calls animation to drop the can into the bin
    global.tweenManager.startTween(script.task_3_can, "transform_can_drop");
    task_3_can_completed = true;
    check_task_3_completeness();
}

function onMoveFinish_Paper() {
    //calls animation to drop the paper into the bin
    global.tweenManager.startTween(script.task_3_paper, "transform_paper_drop");
    task_3_paper_completed = true;
    check_task_3_completeness();
}

function onMoveFinish_Bottle() {
    //calls animation to drop the plastic bottle into the bin
    global.tweenManager.startTween(script.task_3_bottle, "transform_bottle_drop");
    task_3_bottle_completed = true;
    check_task_3_completeness();
}

function onMoveFinish_Banana() {
    //calls animation to drop the peel into the bin
    global.tweenManager.startTween(script.task_3_banana, "transform_banana_drop");
    task_3_banana_completed = true;
    check_task_3_completeness();
}

//function to check if all disposal is completed 
function check_task_3_completeness() {
    if (task_3_banana_completed &&
        task_3_can_completed &&
        task_3_bottle_completed &&
        task_3_paper_completed) {
        task_3_completed = true;
        //if all tasks is completed, display the "Thank you" message
        script.task3_instruction_text.text = "Thank you for keeping the Everest clean!";
        script.task3_instruction_text.enabled = true;
    }
}


