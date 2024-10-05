let pantallaActual = 0;
let imagenes = [];
let sonidos = [];
let textos = [];

function preload() {

for (let i = 0; i < 17; i++) {
    imagenes[i] = loadImage("data/pantalla "+ (i + 1) + ".jpeg");
  }
 
 textos = loadStrings('data/textos.txt');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(220);
  image(imagenes[pantallaActual], 0, 0, width, height); // Mostrar la imagen de la pantalla actual

  // Mostrar texto y opciones según la pantalla actual
  fill(0);
  textSize(20);
  textAlign(CENTER);

  if (pantallaActual == 0) {
 text(textos[pantallaActual], width / 2, height - 100);

  } else if (pantallaActual == 1) {
    text(textos[pantallaActual], width / 2, height - 100);
  } else if (pantallaActual == 2) {
    text(textos[pantallaActual], width / 2, height - 100);
  } else if (pantallaActual == 3) {
    text(textos[pantallaActual], width / 2, height - 100);
  }

  // Finales
  if (pantallaActual == 14) {
    text("¡Final Alternativo 1!", width / 2, height - 100);
    text("Presiona ENTER para reiniciar", width / 2, height - 60);
  } else if (pantallaActual == 15) {
    text("¡Final Alternativo 2!", width / 2, height - 100);
    text("Presiona ENTER para reiniciar", width / 2, height - 60);
  } else if (pantallaActual == 16) {
    text("¡Final Alternativo 3!", width / 2, height - 100);
    text("Presiona ENTER para reiniciar", width / 2, height - 60);
  }
}

function keyPressed() {
  // Avanzar con ENTER
  if (keyCode === ENTER) {
    if (pantallaActual == 14 || pantallaActual == 15 || pantallaActual == 16) {
      pantallaActual = 0; // Reiniciar el juego si se llega a un final
    } else {
      pantallaActual++;
    }
  }



  // Tomar decisiones en la pantalla 2
  if (pantallaActual == 1 && key === 'A') {
    pantallaActual = 2; // Camino A
  } else if (pantallaActual == 1 && key === 'B') {
    pantallaActual = 3; // Camino B
  }
}
