//https://youtu.be/uEtCh9sKP7o

let img;
let cuadradosX, cuadradosY;
let anchoCuadrados, altoCuadrados;
let luz, sombra;

function setup() {
  createCanvas(800, 400);
  img = loadImage('op.jpg', img => {
    image(img, 0, 0, 400, 400);
  });
  cuadradosX = 12;
  cuadradosY = 12;
  luz = color(185, 172, 208);
  sombra = color(80, 70, 140);
  calcularTamanosCuadrados();
}

function draw() {
  background(255);

  image(img, 0, 0, 400, 400);

  for (let i = 0; i < cuadradosX; i++) {
    for (let j = 0; j < cuadradosY; j++) {
      let x = width / 2 + anchoCuadrados * i;
      let y = altoCuadrados * j;
      if (x >= 400) {
        let d = calcularDistancia(x + anchoCuadrados / 2, y + altoCuadrados / 2);
        if (d < 55) {
          fill(220, 90, 10);
        } else if (d < 150) {
          fill(190, 0, 10);
        } else if (d < 200) {
          fill(139, 0, 0);
        } else {
          fill(80, 20, 10);
        }
        noStroke();
        rect(x, y, anchoCuadrados, altoCuadrados);
      }

      if (i < 6 && j < 6) {
        seccionSuperiorIzquierda(x, y);
      } else if (i >= 6 && j < 6) {
        seccionSuperiorDerecha(x, y);
      } else if (i < 6 && j >= 6) {
        seccionInferiorIzquierda(x, y);
      } else {
        seccionInferiorDerecha(x, y);
      }
    }
  }
}
