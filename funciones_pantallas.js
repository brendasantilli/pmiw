
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
  text("Iniciar", width / 2, height /2 +25);
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

function PantallaCreditos() {
  background(50);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Alexia Roberts", width / 2, height / 2 - 20);
  text("Brenda Santilli", width / 2, height / 2 + 20);
}

function irPantallaSiguiente() {
  if (pantallaActual < 18) {
    pantallaActual++;
  }
}
