

const pessoa = {
    idade: 18
}

const ludson = {
    nome: 'ludson',
    idade: 41,
    __proto__: pessoa
}

// primeiro procura no objeto e depois no protótipo
console.log(ludson.idade)