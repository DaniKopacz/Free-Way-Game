//Images
let freeWayImage;
let actorImage;
let carImages;
let trackSound;
let scoreSound;
let collidedSound;

function preload() {
    freeWayImage = loadImage("Imagens/estrada.png")
    actorImage = loadImage("Imagens/ator-1.png")
    carImages = [loadImage("Imagens/carro-1.png"), loadImage("Imagens/carro-2.png"), loadImage("Imagens/carro-3.png"), loadImage("Imagens/carro-1.png"), loadImage("Imagens/carro-2.png"), loadImage("Imagens/carro-3.png")]
    
    trackSound = loadSound("Sounds/trilha.mp3")
    collidedSound = loadSound("Sounds/colidiu.mp3")
    scoreSound = loadSound("Sounds/pontos.wav")
}
