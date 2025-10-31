export class Pessoa {
  #nome;
  #idade;
  #altura;

  constructor(nome, idade, altura) {
    this.#nome = nome;
    this.#idade = idade;
    this.#altura = altura;
  }

  get nome() { return this.#nome; }
  set nome(valor) { this.#nome = valor; }

  get idade() { return this.#idade; }
  set idade(valor) { this.#idade = valor; }

  get altura() { return this.#altura; }
  set altura(valor) { this.#altura = valor; }

  falar() {
    return `${this.#nome} está falando!`;
  }
}
