NoseX=0;
NoseY=0;
Difference=0;
leftWristX=0;
rightWristX=0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

function draw() {
    background('#7393B3');
    fill('#FFFFFF');
    stroke('#FFFFFF');
    square(NoseX, NoseY, Difference);
}

function modelLoaded() {
    console.log('PoseNet Initialized successfully.');
}

function gotPoses(results) {
  if(results.length > 0)
  {
    console.log(results);
    NoseX = results[0].pose.nose.x
    NoseY = results[0].pose.nose.y
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    Difference = floor(leftWristX - rightWristX);
    console.log("LeftHand = " + leftWristX + "RightHand = " + rightWristX + "Difference = " + Difference);
  }

  

}



