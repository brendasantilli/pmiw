/* Alee descargate de nuevo la carpeta data porque modifique los nombres de las img para que sea mas simple

pude arreglar:
los textos que se adapten al ancho y sus contenedores (los rects de color para poder leer)
tambien los botones que avanzan/retroceden de pantallas

lo que queda:
agregar las pantallas de inicio y creditos
estoy viendo como hacer lo de dibujarpantallas como un arreglo asociativo (el ejemplo que paso de p1 p2 etc a discord) ver refes en https://p5js.org/es/reference/p5/Array/
dibujar las pantallas de decisiones con botones OPCIONA y OPCIONB

*/
let pantallaActual = 1;
let imagenes = [];
let textos = [];
let anchoBotones = [];
let altoBotones = [];
let botonesY = [];
let botonSigX = [];
let botonAntX = [];
let desiciones = {
  4:
[5, 8],
  9:
[10, 11],
  12:
[13, 15]
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
  dibujarPantallas();
  dibujarBotones();
}

function dibujarPantallas() {
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
  anchoBotones = 100;
  altoBotones = 40;
  botonSigX = width - 120;
  botonesY = height - 60;
  botonAntX = 100;
  fill(0, 255, 0);
  rect(botonSigX, botonesY, anchoBotones, altoBotones);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Siguiente", botonSigX, botonesY);

  if (pantallaActual > 1) {
    fill(255, 0, 0);
    rect(botonAntX, botonesY, anchoBotones, altoBotones);
    fill(255);
    text("Anterior", botonAntX, botonesY);
  }
}

function mousePressed() {
  if (mouseY >= botonesY - (altoBotones/2) && mouseY <=botonesY + (altoBotones/2)) {
    if (mouseX >= botonSigX - (anchoBotones/2) && mouseX <= botonSigX + (anchoBotones/2)) {
      irPantallaSiguiente();
    } else if (mouseX >= botonAntX - (anchoBotones/2) && mouseX <= botonAntX + (anchoBotones/2)) {
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
