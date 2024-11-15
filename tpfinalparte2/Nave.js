class Nave {
  constructor(x, y, juego) {
    this.posX = x;
    this.posY = y;
    this.juego = juego;
    this.movIzquierda = false;
    this.movDerecha = false;
  }

  // Dibuja la nave y actualiza el movimiento
  dibujar() {
    image(imgNave, this.posX - 25, this.posY - 10, 80, 50);
    this.actualizarMovimiento();
  }

  // Mover la nave hacia la izquierda
  moverIzquierda() {
    this.posX -= 5;
  }

  // Mover la nave hacia la derecha
  moverDerecha() {
    this.posX += 5;
  }

  // Actualizar el movimiento basado en las teclas presionadas
  actualizarMovimiento() {
    if (this.movIzquierda) {
      this.posX -= 5;
    }
    if (this.movDerecha) {
      this.posX += 5;
    }
  }

  // Disparar una bala
  disparar() {
    this.juego.dispararBala(this.posX + 25, this.posY);
    if (sonidoBala.isLoaded()) {
      sonidoBala.play();
    }
  }
}
