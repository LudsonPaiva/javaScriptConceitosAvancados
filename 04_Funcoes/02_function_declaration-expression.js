// São duas formas de se invocar uma função:
// - Function expression - No hosting a declaração da constante é qque é jogada para cima - O Hosting pode dar problema, dependendo do código
// - Function declaration (Mais convencional) - É uma unidade só. Quando sofre hosting todas as declarações vão para cima

// Function declaration
function nomeDaFuncao() {
    console.log('nomeDaFuncao')
}

// Function expression
const nomeDeOutraFuncao = function () {
    console.log('nomeDeOutraFuncao')
}

nomeDaFuncao()
nomeDeOutraFuncao()