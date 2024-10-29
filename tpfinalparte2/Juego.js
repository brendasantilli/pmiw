class Juego {
  constructor() {
    this.crearPersonaje();
    this.crearAliens();
    this.crearNave();
  }

  dibujar() {
    this.nave.dibujar();

    for (let i=0; i<10; i++) {
      this.aliens[i].dibujar();
    }

    for (let i=0; i<10; i++) {
      this.personajes[i].dibujar();
    }
  }

  iniciar() {
  }

  crearAliens() {
    this.aliens = [];
    for (let i=0; i<10; i++) {
      this.aliens[i] = new Alien();
    }
  }

  crearPersonajes() {
    this.personajes = [];
    for (let i=0; i<10; i++) {
      this.personajes[i] = new Personaje();
    }
  }

  crearNave() {
    this.nave = new Nave();
  }
}
