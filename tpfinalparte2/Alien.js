class Alien {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.vida = true;
  }

  dibujar() {
    if (this.vida) {
      this.mover();
      image(imgAlien, this.posX - 20, this.posY - 20, 60, 60);
    }
  }

  mover() {
    if (this.vida) {
      this.posY += 1;
      if (this.posY > height) {
        this.posY = 0;
      }
    }
  }

  fueDisparado(bala) {
    let distancia = dist(this.posX, this.posY, bala.posX, bala.posY);
    return distancia < 20;
  }
}
