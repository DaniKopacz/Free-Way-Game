
function setup() {
    createCanvas(500,400);
    trackSound.loop()
}

function draw() {
    background(freeWayImage);
    actorShow();
    carShow();
    moveCar();
    moveActor();
    carReset();
    colissionVerify();
    includesPoints();
    scorePoints();
}







