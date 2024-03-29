function preload() {

}

function setup(){
   canvas=createCanvas(302,302);
   canvas.center();
  video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotposes);
}

function draw(){
image(video,0,0,300,300);
}

function takesnapshot(){
  save('mustache_filter.png')  
}

function modelLoaded(){
 console.log("model loaded"); 
}
function gotposes(results){
if(results.length > 0){
console.log(results);
console.log("Nose X = " + results[0].pose.nose.x);
console.log("Nose Y = " + results[0].pose.nose.y);  
}
}