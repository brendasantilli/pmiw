/* Alee descargate de nuevo la carpeta data porque modifique los nombres de las img para que sea mas simple

pude arreglar:
los textos que se adapten al ancho y sus contenedores (los rects de color para poder leer)
tambien los botones que avanzan/retroceden de pantallas
estoy viendo como hacer lo de dibujarpantallas como un arreglo asociativo (el ejemplo que paso de p1 p2 etc a discord)
asi podriamos sumar pantalla 0 (inicio) y 18 (creditos)
ver refes en https://p5js.org/es/reference/p5/Array/

lo que queda:
agregar las pantallas de inicio y creditos
dibujar las pantallas de decisiones con botones OPCIONA y OPCIONB

*/
let pantallaActual = 0;
let imagenes = [];
let textos = [];
let Pantallas = ["inicio", "pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5", "pantalla6", "pantalla7", "pantalla8", "pantalla9", "pantalla10", "pantalla11", "pantalla12", "pantalla13", "pantalla14", "pantalla15", "pantalla16", "pantalla17", "creditos"];

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
  } else if (Pantallas[pantallaActual] === "pantalla1") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla2") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla3") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla4") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla5") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla6") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla7") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla8") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla9") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla10") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla11") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla12") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla13") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla14") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla15") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla16") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "pantalla17") {
    dibujarPantallas();
    dibujarBotones();
    dibujarBotonesDecision();
  } else if (Pantallas[pantallaActual] === "creditos") {
    PantallaCreditos();
  }
}

function mousePressed() {
  if (Pantallas[pantallaActual] === "inicio") {
    if (mouseX >= width / 2 - 75 && mouseX <= width / 2 + 75 && mouseY >= height / 2 - 25 && mouseY <= height / 2 + 25) {
      pantallaActual = 1;
    }
  } else if (Pantallas[pantallaActual] !== "creditos") {
    if (mouseY >= botonesY - (altoBotones / 2) && mouseY <= botonesY + (altoBotones / 2)) {
      if (mouseX >= botonSigX - (anchoBotones / 2) && mouseX <= botonSigX + (anchoBotones / 2)) {
        irPantallaSiguiente();
      }
    }
    let decisionY = height - 100;
    let botonA_X = width / 2 - 70;
    let botonB_X = width / 2 + 70;
    if (mouseX >= botonA_X - 60 && mouseX <= botonA_X + 60 && mouseY >= decisionY - 20 && mouseY <= decisionY + 20) {
    } else if (mouseX >= botonB_X - 60 && mouseX <= botonB_X + 60 && mouseY >= decisionY - 20 && mouseY <= decisionY + 20) {
    }
  }
}

function irPantallaSiguiente() {
  if (pantallaActual < 18) {
    pantallaActual++;
  }
}
