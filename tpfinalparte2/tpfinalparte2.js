let objJuego;
let imgAlien, imgNave, imgVaca, sonidoBala;

function preload() {
  imgAlien = loadImage('data/alien.png');
  imgNave = loadImage('data/nave.png');
  imgVaca = loadImage('data/vaca.png');
  sonidoBala = loadSound('data/sonidoBala.mp3');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(10, 5);
}

function draw() {
  background(200);
  objJuego.actualizar(); 
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}

function keyReleased() {
  objJuego.teclaSoltada(keyCode);
}
