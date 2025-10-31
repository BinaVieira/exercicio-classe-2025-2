export class Smartphone {
  #modelo;
  #sistemaOperacional;
  #bateria;

  constructor(modelo, sistemaOperacional, bateria) {
    this.#modelo = modelo;
    this.#sistemaOperacional = sistemaOperacional;
    this.#bateria = bateria;
  }

  get modelo() { return this.#modelo; }
  get sistemaOperacional() { return this.#sistemaOperacional; }
  get bateria() { return this.#bateria; }

  carregar() {
    this.#bateria = 100;
    return `${this.#modelo} foi totalmente carregado!`;
  }
}
