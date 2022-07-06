status = "";
video = "";
input = "";
objects = [];

function setup(){
    canvas = createCanvas(400, 275);
    canvas.position(425, 225);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 275);

    if (status != ""){
        objectDetector.detect(video, gotResult);

        for(var i = 0; i< objects.length; i++){
            document.getElementById("objectStatus").innerHTML = "Status: Object Detected";

            fill("red");
            percentage = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percentage + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult(error, result){
if (error){
    console.error(error);
}
else{
    console.log(result);
    objects = result;
}
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("objectStatus").innerHTML = "Status: Object Detecting";
    input = document.getElementById("objectInput").value;

    if(object[i].label == object_name){
        document.getElementById("objectFound").innerHTML = "A " + input + " has been detected.";
        utterThis = new SpeechSynthesisUtterance("Object Metioned Found");
        synth.speak(utterThis);
    }
    else{
        document.getElement("objectStatus").innerHTML = "Object Mentioned Not Found!";
    }
}

function modelLoaded(){
    console.log("Model is Currently Initialized.")
    status = true;
}
