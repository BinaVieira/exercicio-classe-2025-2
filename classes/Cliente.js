export class Cliente {
  #nome;
  #cpf;
  #email;

  constructor(nome, cpf, email) {
    this.#nome = nome;
    this.#cpf = cpf;
    this.#email = email;
  }

  get nome() { return this.#nome; }
  set nome(valor) { this.#nome = valor; }

  get cpf() { return this.#cpf; }
  set cpf(valor) { this.#cpf = valor; }

  get email() { return this.#email; }
  set email(valor) { this.#email = valor; }

  exibirDados() {
    return `Cliente: ${this.#nome} | CPF: ${this.#cpf} | Email: ${this.#email}`;
  }
}
