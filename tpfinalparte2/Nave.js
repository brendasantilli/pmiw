class Nave {
  constructor(x, y, juego) {
    this.posX = x;
    this.posY = y;
    this.miColor = color(255, 0, 0);
    this.juego = juego;
  }
  
  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, 50, 20);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW) && this.posX > 0) {
      this.posX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && this.posX < width - 50) {
      this.posX += 5;
    }
  }
  
    disparar() {
    this.juego.dispararBala(this.posX + 25, this.posY);
  }
}

function keyPressed() {
  if (key === ' ') {
    objJuego.nave.disparar();
  }
}
