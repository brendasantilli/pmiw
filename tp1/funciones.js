function calcularDistancia(x, y) {
  return dist(x, y, width * 0.75, height * 0.5);
}

function calcularTamanosCuadrados() {
  anchoCuadrados = (width / 2) / cuadradosX;
  altoCuadrados = height / cuadradosY;
}

function seccionSuperiorIzquierda(x, y) {
  fill(luz);
  quad(x + anchoCuadrados / 2, y, x + anchoCuadrados, y,
    x + anchoCuadrados, y + altoCuadrados, x + anchoCuadrados / 2, y + altoCuadrados);
  fill(sombra);
  quad(x, y, x + anchoCuadrados, y,
    x + anchoCuadrados / 2, y + altoCuadrados / 2, x, y + altoCuadrados / 2);
}

function seccionSuperiorDerecha(x, y) {
  fill(luz);
  quad(x + anchoCuadrados / 2, y, x + anchoCuadrados, y,
    x + anchoCuadrados, y + altoCuadrados, x + anchoCuadrados / 2, y + altoCuadrados);
  fill(sombra);
  quad(x, y + altoCuadrados / 2, x + anchoCuadrados / 2, y + altoCuadrados / 2,
    x + anchoCuadrados, y + altoCuadrados, x, y + altoCuadrados);
}

function seccionInferiorIzquierda(x, y) {
  fill(luz);
  quad(x, y, x, y + altoCuadrados,
    x + anchoCuadrados / 2, y + altoCuadrados,
    x + anchoCuadrados / 2, y + altoCuadrados / 2);
  fill(sombra);
  quad(x, y, x + anchoCuadrados, y,
    x + anchoCuadrados, y + altoCuadrados / 2,
    x + anchoCuadrados / 2, y + altoCuadrados / 2);
}

function seccionInferiorDerecha(x, y) {
  fill(luz);
  quad(x, y, x, y + altoCuadrados,
    x + anchoCuadrados / 2, y + altoCuadrados, x + anchoCuadrados / 2, y);
  fill(sombra);
  quad(x + anchoCuadrados / 2, y + altoCuadrados / 2,
    x + anchoCuadrados, y + altoCuadrados / 2,
    x + anchoCuadrados, y + altoCuadrados, x, y + altoCuadrados);
}

function mousePressed() {
  cuadradosX = int(random(6, 18));
  cuadradosY = int(random(6, 18));
  calcularTamanosCuadrados();
}

function reiniciarVariables() {
  cuadradosX = 12;
  cuadradosY = 12;
  calcularTamanosCuadrados();
}

function keyPressed() {
  if (key === 'r') {
    reiniciarVariables();
  }
}
