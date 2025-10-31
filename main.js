import { Produto } from "./classes/Produto.js";
import { Funcionario } from "./classes/Funcionario.js";
import { Cliente } from "./classes/Cliente.js";
import { Pedido } from "./classes/Pedido.js";
import { ContaBancaria } from "./classes/ContaBancaria.js";
import { Pessoa } from "./classes/Pessoa.js";
import { Aluno } from "./classes/Aluno.js";
import { Professor } from "./classes/Professor.js";
import { Computador } from "./classes/Computador.js";
import { Smartphone } from "./classes/Smartphone.js";

// Produto
const p1 = new Produto("Mouse", 50, 2);
console.log("Total produto:", p1.calcularTotal());

// Funcionario
const f1 = new Funcionario("João", "Analista", 3000);
f1.aumentarSalario(10);
console.log("Novo salário:", f1.salario);

// Cliente
const c1 = new Cliente("Maria", "123.456.789-00", "maria@email.com");
console.log(c1.exibirDados());

// Pedido
const ped1 = new Pedido(101, "30/10/2025", 500);
ped1.aplicarDesconto(10);
console.log("Valor com desconto:", ped1.valorTotal);

// ContaBancaria
const conta = new ContaBancaria("0001", "Carlos", 1000);
conta.depositar(500);
conta.sacar(300);
console.log("Saldo final:", conta.saldo);

// Pessoa
const pessoa = new Pessoa("Ana", 25, 1.68);
console.log(pessoa.falar());

// Aluno
const aluno = new Aluno("Pedro", "A123", [8, 9, 10]);
console.log("Média:", aluno.calcularMedia());

// Professor
const prof = new Professor("Laura", "Matemática", 40);
console.log(prof.darAula());

// Computador
const pc = new Computador("Lenovo", "i7", "16GB");
console.log(pc.ligar());

// Smartphone
const cel = new Smartphone("Samsung S23", "Android", 75);
console.log(cel.carregar());
