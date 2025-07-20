// Forma de declarar funções:
// - Declaração explicita
// - Arrow Functions

function funcao1 () {
    console.log(this)
}

// não tem um contexto. Não trem o this
const funcao2 = () => {
    console.log(this)
}

const ludson = {
    nome: 'Ludson',
    funcao1,
    funcao2
}

ludson.funcao1()
/* Retorno:
{
  nome: 'Ludson',
  funcao1: [Function: funcao1],
  funcao2: [Function: funcao2]
}
*/

ludson.funcao2()
/* Retorno:
{}
*/

