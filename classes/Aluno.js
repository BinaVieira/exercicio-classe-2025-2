export class Aluno {
  #nome;
  #matricula;
  #notas;

  constructor(nome, matricula, notas) {
    this.#nome = nome;
    this.#matricula = matricula;
    this.#notas = notas;
  }

  get nome() { return this.#nome; }
  get matricula() { return this.#matricula; }
  get notas() { return this.#notas; }

  calcularMedia() {
    return this.#notas.reduce((a, b) => a + b, 0) / this.#notas.length;
  }
}
