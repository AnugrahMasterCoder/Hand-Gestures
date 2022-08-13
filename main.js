prediction_1 = ""
prediction_2 = ""
Webcam.set({
width:350,
height:300,
image_format: 'png',
png_quality:100
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    }
    )};
    
    console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zaXexLqQ3/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded !');
}

function speak() {

    var synth = window.speechSynthesis;
speak_data = "the first prediction is"+prediction_1;
speak_data_1="and the second prediction is"+prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data+speak_data_1);

synth.speak(utterThis);}

function check() {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {

if(error) {
    console.log(error);

}else{
    console.log(results);
    document.getElementById("result_HandGestures_name").innerHTML = results[0].label;
    document.getElementById("result_HandGestures_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "peace"){
        document.getElementById("update_HandGestures").innerHTML = "&#9996;"; 
    }

    if(results[0].label == "good"){
        document.getElementById("update_HandGestures").innerHTML = "&#128077;"; 
    }

    if(results[0].label == "amazing"){
        document.getElementById("update_HandGestures").innerHTML = "&#128076;"; 
    }

    if(results[1].label == "peace"){
        document.getElementById("update_HandGestures2").innerHTML = "&#9996;"; 
    }

    if(results[1].label == "good"){
        document.getElementById("update_HandGestures2").innerHTML = "&#128077;"; 
    }

    if(results[1].label == "amazing"){
        document.getElementById("update_HandGestures2").innerHTML =  "&#128076;"; 
    }
}
}