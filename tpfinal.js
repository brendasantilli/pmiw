let pantallaActual = 0;
/*
let misPantallas = {
"inicio": "pantalla0",
"pantalla1": "pantalla1",
"creditos": "pantalla creditos"

}
*/
let imagenes = [];
let textos = [];
/*
let nombresonido;
*/
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
 
 /* SONIDOS, copiar libreria de p5js p sonidos, crear en  un txt llamado p5.sound.js y pegarlo ahi, modificar en el NO CHANGES UNTIL I SAY SO
  soundFormats('mp3');
  soundFile = loadSound('data/nombresonido.mp3');
*/
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
  if (pantallaActual === 16 && keyCode === RIGHT_ARROW) {
    pantallaActual = 6;
  } else if (keyCode === ENTER && (pantallaActual === 6 || pantallaActual === 8 || pantallaActual === 13)) {
    pantallaActual = 0;
  } else if (!desiciones[pantallaActual]) {
    if (keyCode === RIGHT_ARROW && pantallaActual < 16) {
      pantallaActual++;
    } else if (keyCode === LEFT_ARROW && pantallaActual > 0) {
      pantallaActual--;
    }
  }
}
  
/*SONIDOS PLAY
 nombresonido.loop();

DESPUES EN UN mouseReleased*() hacer esto:
sounFile.play();
sounFile.pause();

*/

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
