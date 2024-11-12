class Nave {
  constructor(x, y, juego) {
    this.posX = x;
    this.posY = y;
    this.miColor = color(255, 0, 0);
    this.juego = juego;
  }

  dibujar() {
    image(imgNave, this.posX - 25, this.posY - 10, 80, 50);
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
    sonidoBala.play();
  }
}
