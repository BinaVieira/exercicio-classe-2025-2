export class Produto {
  #nome;
  #preco;
  #quantidade;

  constructor(nome, preco, quantidade) {
    this.#nome = nome;
    this.#preco = preco;
    this.#quantidade = quantidade;
  }

  get nome() { return this.#nome; }
  set nome(valor) { this.#nome = valor; }

  get preco() { return this.#preco; }
  set preco(valor) { this.#preco = valor; }

  get quantidade() { return this.#quantidade; }
  set quantidade(valor) { this.#quantidade = valor; }

  calcularTotal() {
    return this.#preco * this.#quantidade;
  }
}
