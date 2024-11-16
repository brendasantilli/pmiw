class Principal {
  constructor(juego, x, y) {
    this.juego = juego;
    this.x = x;
    this.y = y;
    this.bienvenida = "¡Bienvenido a Aliens vs Vacas!";
    this.conflicto = "Los aliens están invadiendo nuestro campo y necesitamos tu ayuda.";
    this.instrucciones = "Tenés que eliminar a los aliens y evitar que se lleven a todas las vaquitas. Movete con las flechas de derecha a izquierda y apretá la barra espaciadora para disparar.";
    this.perdiste = "¡Perdiste! Los aliens secuestraron a todas las vaquitas.";
    this.ganaste = "¡Ganaste! Salvaste a las vaquitas del ataque alienígena.";
    this.reiniciar = "¿Querés volver a jugar?";
    this.creditos = "Santilli Brenda y Roberts Alexia";
    this.botonX = this.x - 100;
    this.botonY = this.y + 100;
    this.botonAncho = 200;
    this.botonAlto = 50;
  }

  dibujarInicio() {
    background(196, 229, 56);
    textSize(36);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.bienvenida, this.x, this.y - 50);
    textSize(20);
    text(this.conflicto, this.x, this.y - 20);
    text(this.instrucciones, this.x, this.y + 30);
    this.dibujarBoton();
  }

  dibujarPerdiste() {
    background(100);
    textSize(36);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.perdiste, this.x, this.y - 50);
    textSize(16);
    text(this.reiniciar, this.x, this.y + 30);
    this.dibujarBoton();
    text(this.creditos, this.x, this.y + 60);

    if (!sonidoPerdiste.isPlaying()) {
      sonidoPerdiste.play();
    }
  }

  dibujarGanaste() {
    background(56, 229, 56);
    textSize(36);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.ganaste, this.x, this.y - 50);
    textSize(16);
    text(this.reiniciar, this.x, this.y + 30);
    this.dibujarBoton();
    text(this.creditos, this.x, this.y + 60);

    if (!sonidoGanaste.isPlaying()) {
      sonidoGanaste.play();
    }
  }

  dibujarBoton() {
    fill(68, 189, 50);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto);
    fill(255);
    textSize(18);
    text("Jugar", this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }
  mousePressed() {
    if (mouseX > this.botonX &&
      mouseX < this.botonX + this.botonAncho &&
      mouseY > this.botonY &&
      mouseY < this.botonY + this.botonAlto) {
      console.log("Botón presionado");
      this.juego.iniciar();  // Reiniciar el juego
      this.juego.estado = "juego";  // Cambiar al estado de juego
    }
  }
}
