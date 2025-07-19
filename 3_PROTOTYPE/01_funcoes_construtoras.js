// Orientação a Protótipo

// Protótipo é alguém que o objeto está se baseando
// Forma de fazer herança no javaScript
// É basicamente um objeto onde o objeto está se baseando

//PROTÓTIPO
const pessoa = {
    genero: 'masculino'
}

//Objeto
const ludson = {
    nome: 'ludson',
    idade: 30,
    __proto__: pessoa
}

// Primeiro procura no objeto, depois no protótipo 
console.log(ludson.genero)

//--------------------------------------

//FUNÇÃO CONSTRUTORA

// Sempre que uma função começa com a letra maiúscula ela é uma função construtora
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const lilian = new Pessoa('lilian', 36)

console.log(lilian)

// Alterando o protótipo e inserindo uma função
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

lilian.falar()

//NOVA FORMA DE FAZER - com açúcares sintáticos

class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    falar2() {
    console.log(`Meu nome é: ${this.nome}`)
    }
}

const luzia = new Pessoa2('luzia', 67)

luzia.falar2()