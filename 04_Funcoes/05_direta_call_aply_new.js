
// Invocação direta, call, apply e operador new

// - Invocação direta
function teste() {
    console.log('teste')
}

teste()

// - Apply & call
const pessoa = {
    nome: 'Ludson',
    idade: 30
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olaaaa']) // Com apply conseguimos colocar uma função dentro do contexto do objeto
gritar.call(pessoa, 'Olaaaaaaa') // bem parecido com o apply, mas pode receber vários argumentos separados por vírgula

// - new = Quando fazemos por uma função construtora