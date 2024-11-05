class Alien {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.miColor = color(0, 255, 0);
    this.vida = true;
  }

  dibujar() {
    if (this.vida) {
      fill(this.miColor);
      ellipse(this.posX, this.posY, 40, 40);
    }
  }

  mover() {
    this.posY += 1;
    if (this.posY > height) {
      this.posY = 0;
    }
  }

  estaVivo(bala) {
    if (this.vida) {
      let distancia = dist(this.posX, this.posY, bala.posX, bala.posY);
      if (distancia < 20) {
        this.vida = false;
        return true;
      }
    }
    return false;
  }
}
