
// 1) Objeto Literal

const pessoa = {
    genero: 'masculino'
}
const ludson = {
    nome: 'Ludson',
    __proto__: pessoa
}

console.log(ludson)
console.log(ludson.genero)

// 2) Object.create()

const pessoa2 = {
    genero: 'masculino'
}

// através de objetos instanciados utilizamos o pessoa.__proto__ para acessar e nas funções construtoras utilizamos o prototype

const ludson2 = Object.create(pessoa2) 

ludson2.nome = 'Ludson2'

console.log(ludson2)
console.log(ludson2.genero)