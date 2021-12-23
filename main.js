function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses(results)
{
    console.log(results);
    if(results.length > 0)
    {
        console.log(results);
        
        lWX = results[0].pose.leftWrist.x; 
        rWX = results[0].pose.rightWrist.x;
        var difference = floor(lWX - rWX);
        console.log("Left wrist X = " + lWX + ", and right right x = " + rWX + ". The difference is" + difference + ".");
    }
}

function draw()
{
    background("#6C91C2");

    textSize(difference);
    fill("#FFE787");
    stroke("#F90093");
    text("Shrish", 50, 400);
}