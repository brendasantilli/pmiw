let pantallaActual = 1; 
let imagenes = [];
let textos = [];
let desiciones = {
  4: [5, 8],
  9: [10, 11],
  12: [13, 15]
};

function preload() {
  for (let i = 1; i <= 17; i++) {
    imagenes[i] = loadImage("data/pantalla" + i + ".jpeg");
  }
  textos = loadStrings('data/textos.txt');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(220);
  DibujarTextoConFondo();
  dibujarBotones();
}

function DibujarTextoConFondo() {
  image(imagenes[pantallaActual], 0, 0, width, height);

  let padding = 30;
  let texto = textos[pantallaActual];
  let anchoTextoMaximo = 580;
  let rectX = width / 2; 
  let rectY = height - 200;

  fill(0, 0, 0, 150);
  noStroke();
  rectMode(CENTER, CENTER);
  rect(rectX, rectY, anchoTextoMaximo + padding, 80 + padding); 
  
  fill(255);
  textSize(20);
  textAlign(CENTER, TOP); 
  textWrap(WORD);
  text(texto, rectX, rectY - padding, anchoTextoMaximo); 
}

function dibujarBotones() {

  fill(0, 255, 0); 
  rect(width - 120, height - 60, 100, 40); 
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Siguiente", width - 120, height - 60); 

  if (pantallaActual > 1) {
    fill(255, 0, 0); 
    rect(100, height - 60, 100, 40); 
    fill(255);
    text("Anterior", 100, height - 60); 
  }
}

function mousePressed() {
  if (mouseY >= height - 60 && mouseY <= height - 20) {
    if (mouseX >= width - 120 && mouseX <= width - 20) {
      irPantallaSiguiente();
    } else if (pantallaActual > 1 && mouseX >= 20 && mouseX <= 120) { // Posiciones ajustadas para el botón "Anterior"
      irPantallaAnterior();
    }
  }
}

function irPantallaAnterior() {
  if (pantallaActual > 1) {
    pantallaActual--;
  }
}

function irPantallaSiguiente() {
  if (pantallaActual < 17) {
    pantallaActual++;
  }
}
