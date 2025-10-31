export class Professor {
  #nome;
  #disciplina;
  #cargaHoraria;

  constructor(nome, disciplina, cargaHoraria) {
    this.#nome = nome;
    this.#disciplina = disciplina;
    this.#cargaHoraria = cargaHoraria;
  }

  get nome() { return this.#nome; }
  get disciplina() { return this.#disciplina; }
  get cargaHoraria() { return this.#cargaHoraria; }

  darAula() {
    return `${this.#nome} está dando aula de ${this.#disciplina}.`;
  }
}
