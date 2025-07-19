

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

const lilian = new Pessoa('lilian', 36)
lilian.falar()

// 2) call

function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa2.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

const lilian2 = {
    genero: 'feminino'
}

Pessoa2.call(lilian2, 'Lilian2', 36)
console.log(lilian2)

// criiando um método novo de enriquecimento de string, por exemplo -> 

String.prototype.qqNome = function () {
    return `P ${this}`
}

console.log('teste'.qqNome())