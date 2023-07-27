x = 0;
y = 0;
length1 = 0;

function setup(){
    canvas = createCanvas(600,480);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(639,480)
    video.center()

    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("Model Loaded")
}
function draw(){
    background("lightblue");
    fill("pink");
    stroke("black")
    square( x, y, length1);

    document.getElementById("whs").innerHTML = "Width And Height Of Square is :- "+length1+"px";
}

function gotPoses(result){
    if(result.length != 0){
        console.log(result);

        x = result[0].pose.nose.x;
        y = result[0].pose.nose.y;
        length1 = floor(result[0].pose.leftWrist.x - result[0].pose.rightWrist.x);
    }
}