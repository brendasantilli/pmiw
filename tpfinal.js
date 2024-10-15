let pantallaActual = 0;
let misPantallas = [];
let imagenes = [];
let textos = [];
let desiciones = {
  4: [5, 8],      
  9: [10, 11],     
  12: [13, 15]
};

function preload() {
  for (let i = 1; i <= 17; i++) { 
    imagenes[i] = loadImage("data/pantalla " + i + ".jpeg");
  }
  textos = loadStrings('data/textos.txt');
}

function setup() {
  createCanvas(640, 480);
  misPantallas[0] = PantallaInicio;
  misPantallas[18] = PantallaCreditos; 
}

function draw() {
  background(220);

  if (pantallaActual > 0 && pantallaActual <= 17) {
    image(imagenes[pantallaActual], 0, 0, width, height);
    
    if (textos[pantallaActual]) {
      DibujarTextoConFondo(textos[pantallaActual]);
    }
  }

  if (desiciones[pantallaActual]) {
    DibujarBotones();
  }

  if (misPantallas[pantallaActual]) {
    misPantallas[pantallaActual]();
  }
}

function DibujarTextoConFondo(texto) {
  let padding = 20; // Espacio adicional alrededor del texto
  let rectX = 10; // Ajusta el margen del rectángulo
  let rectY = height - 150; // Ajustar la altura para que no esté tan abajo

  // Calcula el ancho del rectángulo basado en el texto
  let textoAncho = textWidth(texto);
  let rectWidth = width - padding * 2; // Mantener el ancho para casi toda la pantalla
  
  // Establece la altura del rectángulo
  let lineHeight = 24; // Altura de una línea de texto
  let rectHeight = lineHeight; // Altura base

  // Dibuja el rectángulo de fondo
  fill(0, 0, 0, 150); // Fondo semi-transparente
  noStroke();
  rect(rectX, rectY, rectWidth, rectHeight + padding);

  // Dibuja el texto encima del rectángulo
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(texto, width / 2, rectY + rectHeight / 2);
}

function DibujarBotones() {
  fill(255, 0, 255);
  rect(width / 2 - 100, height - 40, 100, 30); 
  rect(width / 2 + 100, height - 40, 100, 30);  
  noStroke();
  fill(255);
  text("Opción A", width / 2 - 100, height - 30);
  text("Opción B", width / 2 + 100, height - 30);
}

function PantallaInicio() {
  background(255, 182, 193); 
  fill(0);
  textAlign(CENTER);
  textSize(32);
  text("Kiki's Delivery Service", width / 2, height / 2 - 50);

  fill(255);
  rectMode(CENTER);
  rect(width / 2, height / 2 + 20, 150, 50);
  fill(0);
  textSize(20);
  text("Iniciar", width / 2, height / 2 + 30);
}

function PantallaCreditos() {
  background(50);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Alexia Roberts", width / 2, height / 2 - 20);
  text("Brenda Santilli", width / 2, height / 2 + 20);

  stroke(0); 
  fill(255); 
  rectMode(CENTER);
  rect(width / 2, height / 2 + 80, 200, 50); 

  noStroke();
  fill(0); 
  textSize(15);
  text("Presiona ENTER para reiniciar", width / 2, height / 2 + 85);
}

function keyPressed() {
  if (pantallaActual === 18 && keyCode === ENTER) {
    pantallaActual = 0;  // Volver a la pantalla de inicio
  } else if (pantallaActual === 18) {
    // No hacer nada si estamos en la pantalla de créditos (deshabilitar flechas)
    return;
  } else if (pantallaActual === 18 && keyCode === RIGHT_ARROW) {
    pantallaActual = 6;  // Regresar a la pantalla 6 si estamos en la pantalla 18
  } else if (keyCode === RIGHT_ARROW && (pantallaActual === 7 || pantallaActual === 10 || pantallaActual === 14)) {
    pantallaActual = 18;  // Ir a la pantalla de créditos después de 7, 10 o 14
  } else if (!desiciones[pantallaActual]) {
    if (keyCode === RIGHT_ARROW && pantallaActual < 18) {  // Ajustar el límite a 18
      pantallaActual++;
    } else if (keyCode === LEFT_ARROW && pantallaActual > 0) {
      pantallaActual--;
    }
  }
}

// Controlar clicks en botones de decisiones
function mousePressed() {
  let decisionesPantalla = obtenerDecisiones(pantallaActual);
  if (decisionesPantalla) {
    if (mouseX > width / 2 - 150 && mouseX < width / 2 - 50 && mouseY > height - 50 && mouseY < height - 20) {
      pantallaActual = decisionesPantalla[0];  // Opción A
    } else if (mouseX > width / 2 + 50 && mouseX < width / 2 + 150 && mouseY > height - 50 && mouseY < height - 20) {
      pantallaActual = decisionesPantalla[1];  // Opción B
    }
  } else if (pantallaActual === 0) {
    pantallaActual = 1;  // Ir a la pantalla 1 desde la pantalla de inicio
  }
}

// Obtener decisiones para la pantalla actual
function obtenerDecisiones(pantalla) {
  return desiciones[pantalla] || null;
}
