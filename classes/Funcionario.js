export class Funcionario {
  #nome;
  #cargo;
  #salario;

  constructor(nome, cargo, salario) {
    this.#nome = nome;
    this.#cargo = cargo;
    this.#salario = salario;
  }

  get nome() { return this.#nome; }
  set nome(valor) { this.#nome = valor; }

  get cargo() { return this.#cargo; }
  set cargo(valor) { this.#cargo = valor; }

  get salario() { return this.#salario; }
  set salario(valor) { this.#salario = valor; }

  aumentarSalario(percentual) {
    this.#salario += this.#salario * (percentual / 100);
  }
}
