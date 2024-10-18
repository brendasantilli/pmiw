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
  text("Gracias por jugar", width / 2, height / 2 + 85);
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
  fill(255, 182, 193);
  rect(botonSigX, botonesY, anchoBotones, altoBotones);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Siguiente", botonSigX, botonesY);
}

function dibujarBotonesDecision() {
  let decisionY = height - 100;
  let botonA_X = width / 2 - 70;
  let botonB_X = width / 2 + 70;
  fill(216, 191, 216);
  rect(botonA_X, decisionY, 120, 40);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Opción A", botonA_X, decisionY);
  fill(216, 191, 216);
  rect(botonB_X, decisionY, 120, 40);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Opción B", botonB_X, decisionY);
}
