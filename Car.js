//Código do carro
const xCars = [600,600,600,600,600,600];
const yCars = [40,96,150,210,270,310];
const speedCars = [2,2.5,3.2,2.5,5,2];
const widthCar = 50;
const heightCar = 40;


function carShow() {
    for (let i = 0; i < xCars.length; i++) {
       image(carImages[i], xCars[i], yCars[i], widthCar, heightCar)
    }
}
function moveCar() {
    for (let i = 0; i < xCars.length; i++) {
        xCars[i] -= speedCars[i]
    }
}
function carReset() {
    for (let i = 0; i < xCars.length; i++) {
       if(passedThroughScreen(xCars[i])) {
        xCars[i] = 600;
       }
    }
}
function passedThroughScreen(xCar) {
    return xCar < -50;
}

