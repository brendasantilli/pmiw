class Juego {
  constructor() {
    this.crearAliens();
    this.crearNave();
    this.crearPersonajes();
    this.balas = [];
  }

  dibujar() {
    this.nave.dibujar();
    this.nave.mover();

    for (let i = 0; i < 10; i++) {
      if (this.aliens[i] && this.aliens[i].vida) {
        this.aliens[i].mover();
        this.aliens[i].dibujar();

        for (let j = 0; j < 20; j++) {
      if (this.balas[j] && this.aliens[i].estaVivo(this.balas[j])) {
        this.balas[j].activa = false;
          }
        }
      }
    }

    for (let i = 0; i < 5; i++) {
      if (this.aliens[i].vida) {
        for (let j = 0; j < 3; j++) {
          if (this.aliens[i].posY + 20 > this.personajes[j].posY) {
            this.personajes[j].rescatado = true;
          }
        }
      }
    }

    for (let i = 0; i < 20; i++) {
      if (this.balas[i] && this.balas[i].activa) {
        this.balas[i].dibujar();
        this.balas[i].mover();
      }
    }
    for (let i = 0; i < 3; i++) {
      this.personajes[i].dibujar();
    }
  }

  crearAliens() {
    this.aliens = [];
    for (let i = 0; i < 10; i++) {
      let x = random(width);
      let y = random(-200, 0);
      this.aliens.push(new Alien(x, y));
    }
  }

  crearPersonajes() {
    this.personajes = [];
    for (let i = 0; i < 5; i++) {
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
}
