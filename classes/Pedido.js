export class Pedido {
  #numero;
  #data;
  #valorTotal;

  constructor(numero, data, valorTotal) {
    this.#numero = numero;
    this.#data = data;
    this.#valorTotal = valorTotal;
  }

  get numero() { return this.#numero; }
  set numero(valor) { this.#numero = valor; }

  get data() { return this.#data; }
  set data(valor) { this.#data = valor; }

  get valorTotal() { return this.#valorTotal; }
  set valorTotal(valor) { this.#valorTotal = valor; }

  aplicarDesconto(percentual) {
    this.#valorTotal -= this.#valorTotal * (percentual / 100);
  }
}
