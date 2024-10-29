class Alien {
  constructor() {
    this.posX = 200;
    this.posY = 200;
    this.miColor = color (0, 255, 0);
    this.vida = 1;
  }
  dibujar() {
    fill(this.miColor);
        ellipse(this.posX, this.posY, 50, 50);
  }

  moverDerecha() {
  }

  moverIzquierda() {
  }

  estaVivo() {
  }
}
