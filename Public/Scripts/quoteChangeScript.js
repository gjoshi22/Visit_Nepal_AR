// -----JS CODE-----
// @input Asset.Texture[] quotes[]
// @input Component.Image quoteImage
// @input Component.Image buddhaImage

var index = 0;

//function to change the quote texture on every tap on Buddha's statue
function quoteTextureChange(){
    //initialise quoute and buddha image placeholder
    var quoteImage = script.quoteImage
    var buddhaImage = script.buddhaImage
    //change the texture of the quote placeholder to current quote
    quoteImage.mainPass.baseTex = script.quotes[index];
    index++;
    //check if index exceeds the total number of quotes, if so, reset it to default value of 0
    if(index > 2){
        index = 0;
    }
}
//respond to global trigger when tap on the Buddha's statue is detected, responds to custom trigger change_quote
global.behaviorSystem.addCustomTriggerResponse("change_quote", quoteTextureChange);