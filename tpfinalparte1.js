let pantallaActual = 0;
let imagenes = [];
let textos = [];
let sonidos = {};
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
    soundFormats('mp3');
  sonidos['inicio'] = loadSound('data/inicio.mp3');
  sonidos['boton'] = loadSound('data/boton.mp3');
  sonidos['creditos'] = loadSound('data/creditos.mp3');
}

function setup() {
  createCanvas(640, 480);
  anchoBotones = 100;
  altoBotones = 40;
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
    botonReiniciar();
  } else {
    dibujarPantallas();
    botonSiguiente();
  }
}
function mousePressed() {
  if (Pantallas[pantallaActual] === "inicio") {
    if (mouseDentroDeRect(width / 2 - 75, height / 2 - 25, 150, 50)) {
      pantallaActual = 1;
    }
  } else if (Pantallas[pantallaActual] === "creditos" || pantallaActual === 7 || pantallaActual === 10 || pantallaActual === 14) {
    if (mouseDentroDeRect(width / 2 - 100, height / 2 + 120, 200, 60)) {
      pantallaActual = 0;
    }
  } else {
    if (mouseDentroDeRect(botonSigX - (anchoBotones / 2), botonesY - (altoBotones / 2), anchoBotones, altoBotones)) {
      irPantallaSiguiente();
    }

    let decisionY = height - 100;
    let botonA_X = width / 2 - 70;
    let botonB_X = width / 2 + 70;

    if (mouseDentroDeRect(botonA_X - 60, decisionY - 20, 120, 40)) {
      pantallaActual = decisiones[Pantallas[pantallaActual]][0];
    } else if (mouseDentroDeRect(botonB_X - 60, decisionY - 20, 120, 40)) {
      pantallaActual = decisiones[Pantallas[pantallaActual]][1];
    }
  }
}

function mouseDentroDeRect(x, y, ancho, alto) {
  return mouseX >= x && mouseX <= x + ancho && mouseY >= y && mouseY <= y + alto;
}
