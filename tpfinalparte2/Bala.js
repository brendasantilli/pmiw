class Bala {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.activa = true;
  }

  dibujar() {
    if (this.activa) {
      fill(0);
      ellipse(this.posX, this.posY, 10, 10);
    }
  }

  mover() {
    this.posY -= 5;
    if (this.posY < 0) {
      this.activa = false;
    }
  }
}
