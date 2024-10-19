let pantallaActual = 0;
let imagenes = [];
let textos = [];
let Pantallas = ["inicio", 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, "creditos"];
let decisiones = {4:
[5, 8], 9:
[10, 11], 12:
[13, 15]};
let anchoBotones;
let altoBotones;
let botonesY;
let botonSigX;

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
  if (Pantallas[pantallaActual] === "inicio") {
    PantallaInicio();
  } else  if (Pantallas[pantallaActual] === 4 || Pantallas[pantallaActual] === 9 || Pantallas[pantallaActual] === 12 ) {
    dibujarPantallas();
    dibujarBotonesDecision();
  } else  if (Pantallas[pantallaActual] === 7 || Pantallas[pantallaActual] === 10 || Pantallas[pantallaActual] === 14 ) {
    dibujarPantallas();
    botonReiniciar()
  } else if (Pantallas[pantallaActual] === "creditos") {
    PantallaCreditos();
    botonReiniciar()
  } else {
    dibujarPantallas();
    botonSiguiente();
  }
}

function mousePressed() {
  if (Pantallas[pantallaActual] === "inicio") {
    if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= height / 2 - 25 && mouseY <= height / 2 + 25) {
      pantallaActual = 1;
    }
  } else if (Pantallas[pantallaActual] === "creditos" || pantallaActual === 7 || pantallaActual === 10 || pantallaActual === 14) {
    if (mouseX >= width / 2 - 100 && mouseX <= width / 2 + 100 && mouseY >= height / 2 + 120 && mouseY <= height / 2 + 180) {
      pantallaActual = 0;
    }
  } else {
    if (mouseY >= botonesY - (altoBotones / 2) && mouseY <= botonesY + (altoBotones / 2)) {
      if (mouseX >= botonSigX - (anchoBotones / 2) && mouseX <= botonSigX + (anchoBotones / 2)) {
        irPantallaSiguiente();
      }
    }

    let decisionY = height - 100;
    let botonA_X = width / 2 - 70;
    let botonB_X = width / 2 + 70;

    if (mouseX >= botonA_X - 60 && mouseX <= botonA_X + 60 && mouseY >= decisionY - 20 && mouseY <= decisionY + 20) {
      pantallaActual = decisiones[Pantallas[pantallaActual]][0];
    } else if (mouseX >= botonB_X - 60 && mouseX <= botonB_X + 60 && mouseY >= decisionY - 20 && mouseY <= decisionY + 20) {
      pantallaActual = decisiones[Pantallas[pantallaActual]][1];
    }
  }
}
