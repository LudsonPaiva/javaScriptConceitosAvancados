// First Class Functions
// Higher Order Function

// - podem ser atribuídas a variáveis

function falarMeuNome() {
    console.log('Meu nome é Ludson')
}

const referencaNova = falarMeuNome

referencaNova()

// - funnções podem ser passadas a outras funções

function falarMeuNome2() {
    console.log('Meu nome é Ludson')
}

function falarMeuNomeCompleto(falarMeuNome2) {
    falarMeuNome2()
    console.log('Paiva')
}

falarMeuNomeCompleto(falarMeuNome2)
