function setup() {
    canvas = ccreatCanva(300, 300)
    canvas.center();
    video.createCapure(VIDEO);
    video.hide();
    classsifier = ml5.imageClasifier('MobileNet',modeLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

var previousResult = '';
    
function gotResult(error, result){
    if(error) {
        console.error(error);
    }  else {
        if ((result[0].connfidence >  0.5) && (previosuResult != result[0].label)){
            console.log(result);
            previosuResult = results[0];
            var synth =  window.speechSynthesis;
            speakData = '0 Objeto detectado ê - '+result[0].label;
            var uthersis = new SpeechSynthesisUtterance(spaekData);
            synth.speak

            document.getElementById("resultObjectName").innerHTML = result[0].label
            document.getElementById("resultObjectaccuracy").innerHTML = result[0].confidence.toFixed[3]
        }
    }
}