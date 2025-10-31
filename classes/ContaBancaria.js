export class ContaBancaria {
  #numero;
  #titular;
  #saldo;

  constructor(numero, titular, saldo) {
    this.#numero = numero;
    this.#titular = titular;
    this.#saldo = saldo;
  }

  get numero() { return this.#numero; }
  get titular() { return this.#titular; }
  get saldo() { return this.#saldo; }

  depositar(valor) {
    this.#saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    } else {
      console.log("Saldo insuficiente!");
    }
  }
}
