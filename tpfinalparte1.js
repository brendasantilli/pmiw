let pantallaActual = 0;
let imagenes = [];
let textos = [];
let sonidos = [];
let Pantallas = ["inicio", 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, "creditos"];
let decisiones = {4:
[5, 8],
  9:
[10, 11],
  12:
[13, 15]
  };
let anchoBotones = 100;
let altoBotones = 40;
let botonesY;
let botonSigX;

function preload() {
  for (let i = 1; i <= 17; i++) {
    imagenes[i] = loadImage("data/pantalla" + i + ".jpeg");
  }
  textos = loadStrings('data/textos.txt');

  soundFormats('mp3');

  sonidos[0] = loadSound('data/sonido_fondo.mp3');
  sonidos[1] = loadSound('data/sonido_decisiones.mp3');
  sonidos[2] = loadSound('data/sonido_finales.mp3');
}

function setup() {
  createCanvas(640, 480);
  sonidos[0].loop();
}

function draw() {
  background(220);
  if (Pantallas[pantallaActual] === "inicio") {
    PantallaInicio();
  } else  if (Pantallas[pantallaActual] === 4 || Pantallas[pantallaActual] === 9 || Pantallas[pantallaActual] === 12 ) {
    dibujarPantallas();
    if (!sonidos[1].isPlaying()) {
      sonidos[0].stop();
      sonidos[1].play();
    }
    dibujarBotonesDecision();
  } else  if (Pantallas[pantallaActual] === 7 || Pantallas[pantallaActual] === 10 || Pantallas[pantallaActual] === 14 ) {
    dibujarPantallas();
    if (!sonidos[2].isPlaying()) {
      sonidos[0].stop();
      sonidos[2].play();
    }
    botonCreditos();
  } else if (Pantallas[pantallaActual] === "creditos") {
    PantallaCreditos();
    botonReiniciar();
  } else {
    dibujarPantallas();
    botonSiguiente();
    if (!sonidos[0].isPlaying()) {
      sonidos[0].loop();
    }
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
