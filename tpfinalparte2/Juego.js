class Juego {
  constructor(cantidadAliens, cantidadPersonajes) {
    this.estado = "inicio"; // Estado inicial
    this.cantidadAliens = cantidadAliens;
    this.cantidadPersonajes = cantidadPersonajes;
    this.aliens = [];
    this.balas = [];
    this.personajes = [];
    this.crearAliens();
    this.crearNave();
    this.crearPersonajes();
    principal = new Principal(this, width / 2, height / 2); // Instancia de Principal
  }

  dibujar() {
    if (this.estado === "inicio") {
      principal.dibujarInstrucciones();  // Dibujar instrucciones
    } else if (this.estado === "juego") {
      this.nave.dibujar();
      this.dibujarAliens();
      this.dibujarBalas();
      this.dibujarPersonajes();
    } else if (this.estado === "creditos") {
      principal.dibujarCreditos();  // Dibujar créditos
    }
  }

  actualizar() {
    this.verificarColisiones();
    this.verificarColisionesAliensVacas();
  }

  verificarColisionesAliensVacas() {
    for (let i = 0; i < this.aliens.length; i++) {
      if (this.aliens[i].vida) {
        for (let j = 0; j < this.personajes.length; j++) {
          if (!this.personajes[j].rescatado && this.verificarColision(this.aliens[i], this.personajes[j])) {
            this.personajes[j].rescatado = true;
          }
        }
      }
    }
  }

  verificarColision(alien, personaje) {
    let distancia = dist(alien.posX, alien.posY, personaje.posX, personaje.posY);
    return distancia < 40;
  }

  verificarColisiones() {
    for (let i = 0; i < this.aliens.length; i++) {
      for (let j = 0; j < this.balas.length; j++) {
        if (this.aliens[i].fueDisparado(this.balas[j])) {
          this.aliens[i].vida = false;
          this.balas[j].disparada = false;
        }
      }
    }
  }

  crearAliens() {
    for (let i = 0; i < this.cantidadAliens; i++) {
      let x = random(width);
      let y = random(-200, 0);
      this.aliens.push(new Alien(x, y));
    }
  }

  crearPersonajes() {
    for (let i = 0; i < this.cantidadPersonajes; i++) {
      let x = random(width);
      let y = random(height - 100, height - 50);
      this.personajes.push(new Personaje(x, y));
    }
  }

  crearNave() {
    this.nave = new Nave(width / 2, height - 50, this);
  }

  dispararBala(x, y) {
    this.balas.push(new Bala(x, y));
  }

  dibujarAliens() {
    for (let i = 0; i < this.aliens.length; i++) {
      this.aliens[i].dibujar();
    }
  }

  dibujarBalas() {
    for (let i = 0; i < this.balas.length; i++) {
      this.balas[i].dibujar();
    }
  }

  dibujarPersonajes() {
    for (let i = 0; i < this.personajes.length; i++) {
      if (!this.personajes[i].rescatado) {
        this.personajes[i].dibujar();
      }
    }
  }
}
