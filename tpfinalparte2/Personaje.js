class Personaje {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.rescatado = false;
    this.miColor = color(0, 0, 255);
  }

  dibujar() {
    if (!this.rescatado) {
      fill(this.miColor);
      rect(this.posX, this.posY, 20, 20);
    }
  }
}
