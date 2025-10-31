export class Computador {
  #marca;
  #processador;
  #memoriaRAM;

  constructor(marca, processador, memoriaRAM) {
    this.#marca = marca;
    this.#processador = processador;
    this.#memoriaRAM = memoriaRAM;
  }

  get marca() { return this.#marca; }
  get processador() { return this.#processador; }
  get memoriaRAM() { return this.#memoriaRAM; }

  ligar() {
    return `O computador ${this.#marca} está ligando...`;
  }
}
