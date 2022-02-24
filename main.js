function setup() 
{

    canvas = createCanvas(600 , 480);
    canvas.position(510 , 250);
    video = createCapture(VIDEO);
    video.hide();


}

function draw() 
{

    image(video, 0, 0, 640, 480);
    fill(52, 0, 0);
    stroke(52, 0, 0);
    circle(18 ,0 ,0 );

}

function take_snapshot() 
{

    save('pic.png');

}



