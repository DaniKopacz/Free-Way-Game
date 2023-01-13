//Código do Ator
let xActor = 100;
let yActor = 366;
let collide = false;
let myPoints = 0;

function actorShow() {
    image(actorImage, xActor, yActor, 30, 30)
}
function moveActor() {
    if (keyIsDown(UP_ARROW)){
        yActor -= 2.5;
    }
    if (keyIsDown(DOWN_ARROW)){
        if(canMoveDown()){
            yActor += 2.5;
        }
    }
    if (keyIsDown(LEFT_ARROW)){
        if (canMoveLeft()) {
            xActor -= 2.5;    
        }
    }
    if (keyIsDown(RIGHT_ARROW)){
        if (canMoveRight()) {
            xActor += 2.5;
        }
    }
}
function colissionVerify() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < xCars.length; i++) {
        collide = collideRectCircle(xCars[i], yCars[i], widthCar, heightCar, xActor, yActor, 15)
        if(collide){
            collided();
            collidedSound.play();
            if (myPoints > 0) {
                myPoints -= 1;
            }
        }
    }
}
function collided() {
    yActor = 366;
}
function includesPoints() {
    textAlign(CENTER);
    textSize(25);
    text(myPoints, width / 5, 25)
}
function scorePoints() {
    if(yActor < 15){
    myPoints++;
    collided();
    scoreSound.play();
    }
}
function canMoveDown() {
    return yActor < 366;
}
function canMoveLeft() {
    return xActor > 0;
}
function canMoveRight() {
    return xActor < 470;
}