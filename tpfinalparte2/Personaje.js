class Personaje {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.rescatado = false;
    this.miColor = color(0, 0, 255);
  }

  dibujar() {
    if (!this.rescatado) {
      image(imgVaca, this.posX - 10, this.posY - 10, 50, 50);
    }
  }
}
