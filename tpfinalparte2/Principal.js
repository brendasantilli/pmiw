class Principal {
  constructor(juego, x, y) {
    this.juego = juego;
    this.x = x;
    this.y = y;
    this.bienvenida = "¡Bienvenido al Juego!";
    this.instrucciones = "Deslízate de derecha a izquierda y presiona Enter para disparar a los aliens y evitar que las vacas sean secuestradas.";
    this.perdiste = "Perdiste!";
    this.nombres = "Santilli Brenda y Roberts Alexia";
    this.botonX = this.x - 100;
    this.botonY = this.y + 100;
    this.botonAncho = 200;
    this.botonAlto = 50;
  }

  dibujarInstrucciones() {
    background(150);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.bienvenida, this.x, this.y - 50);
    textSize(20);
    text(this.instrucciones, this.x, this.y + 30);
    textSize(16);
    this.dibujarBoton();
  }

  dibujarCreditos() {
    background(100);
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.perdiste, this.x, this.y - 50);
    textSize(16);
    text(this.nombres, this.x, this.y + 30);
    text("Presiona 'B' para volver", this.x, this.y + 60);
  }

  dibujarBoton() {
    fill(0, 200, 0);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto);
    fill(255);
    textSize(18);
    // Ajustamos la posición del texto para que esté centrado en el botón
    text("Comenzar", this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }

  mousePressed() {
    if (
      mouseX > this.botonX && mouseX < this.botonX + this.botonAncho &&
      mouseY > this.botonY && mouseY < this.botonY + this.botonAlto
    ) {
      this.juego.estado = "juego";
    }
  }
}
