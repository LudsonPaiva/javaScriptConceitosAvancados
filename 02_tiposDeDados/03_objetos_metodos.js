
/* ==>> OBJETO
- coleção dinâmica de chave e valor
*/ 

const x = {} // já é um objeto

const y = { // objeto com atributos
    nome: "Ludson",
    idade: 41,
    "endereco": "Arraial" // o atributo também pode estar entre aspas. Útil quando ele tem mais de uma palavra
}

x.sobrenome = 'Paiva' // atribuindo mais chaves
y.sobrenome = 'Paiva'

y['nome'] = 'Jose' // Alterando o valor de um atributo

console.log(x, y)
console.log(y.nome) // acessando apenas um atributo
console.log(y['nome']) // outra forma de acessar

const z = {
    nome: "Lilian",
    idade: 36
}

// Os atributos de um objeto também podem ser funções
z.falar = function() {
    console.log('teste')
}

z.falar()

const pessoa ={
    nome: "Luzia",
    idade: 66,
    falar: function() {
        console.log(`Meu nome é ${this.nome}`) // função dentro do objeto, pode-se utilizar o this
    }
}

pessoa.falar()




