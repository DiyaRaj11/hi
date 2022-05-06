Webcam.attach('#camera')
camera=document.getElementById("camera")
Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90
})
function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfieimage">'
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gWlA7Sggh/model.json",modelloaded)
function modelloaded(){
    console.log("modelloaded")

    
}
function check(){
    img=document.getElementById("selfieimage")
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
if (error) {
    console.log(error)
} else {
    console.log(results)
    document.getElementById("resultobject").innerHTML=results[0].label
    document.getElementById("resultobjectaccuracy").innerHTML=(results[0].confidence).toFixed(2)
}
}