class Personaje {
  constructor() {
    this.posX = 100;
    this.posY = 100;
    this.miColor = color (255, 0, 0);
    this.vida = 1;

  }
  dibujar() {
    rect(this.posX, this.posY, 50, 50);
  }

  moverDerecha() {
  }

  moverIzquierda() {
  }

  estaVivo() {
  }
}
