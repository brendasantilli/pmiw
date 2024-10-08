let pantallaActual = 0;
let imagenes = [];
let textos = [];
let desiciones = {
  3: [4, 7],      
  8: [9, 10],     
  11: [12, 14]
};

function preload() {
  for (let i = 0; i < 17; i++) {
    imagenes[i] = loadImage("data/pantalla " + (i + 1) + ".jpeg");
  }
  textos = loadStrings('data/textos.txt');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(220);
  image(imagenes[pantallaActual], 0, 0, width, height);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  if (pantallaActual < 17) {
    text(textos[pantallaActual], width / 2, height - 100);
  }

  if (desiciones[pantallaActual]) {
    DibujarBotones();
  }
}

function DibujarBotones() {
  fill(255, 0, 255);
  rect(width / 2 - 150, height - 50, 100, 30); 
  rect(width / 2 + 50, height - 50, 100, 30);  
  noStroke();
  fill(255);
  text("Opción A", width / 2 - 100, height - 30);
  text("Opción B", width / 2 + 100, height - 30);
}

function keyPressed() {
  if (pantallaActual === 6 || pantallaActual === 8 || pantallaActual === 13 || pantallaActual === 16) {
    if (keyCode === ENTER && pantallaActual !== 16) {
      pantallaActual = 0; 
    } else if (pantallaActual === 16 && keyCode === RIGHT_ARROW) {
      pantallaActual = 6; 
    }
  } else if (!desiciones[pantallaActual]) {
    if (keyCode === RIGHT_ARROW && pantallaActual < 17) { 
      pantallaActual++;
    } else if (keyCode === LEFT_ARROW && pantallaActual > 0) { 
      pantallaActual--;
    }
  }
}

function mousePressed() {
  let decisionesPantalla = obtenerDecisiones(pantallaActual); 
  if (decisionesPantalla) {
    if (mouseX > width / 2 - 150 && mouseX < width / 2 - 50 && mouseY > height - 50 && mouseY < height - 20) {
      pantallaActual = decisionesPantalla[0];
    } else if (mouseX > width / 2 + 50 && mouseX < width / 2 + 150 && mouseY > height - 50 && mouseY < height - 20) {
      pantallaActual = decisionesPantalla[1]; 
    }
  }
}

function obtenerDecisiones(pantalla) {
  return desiciones[pantalla] || null;
}
