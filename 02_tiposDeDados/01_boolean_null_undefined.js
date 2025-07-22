
/* TIPOS PRIMITIVOS: São imutáveis
    boolean = true false
    null
    undefined
    number
    string
    symbol
*/

// object

console.log(10 == '10') // true = desconsidera os tipos para depois comparar
console.log(10 === '10') // false = considera o tipo para comparar

/*==>>> BOOLEAN */
console.log(!'') // converte uma string vazia para booleano // true. Se for apenas o '' será convertido para false
//Ex:
const nome ='' // a pessoa não passa o nome

if (nome) {
    console.log('preenchido')
}
// retorno: vazio

console.log(!!'') // false
console.log('') // vazio
console.log(!!0) // false
console.log(!!10) // true
console.log(!!1) // true
console.log(!!-1) // true

/*==>>> NULL != UNDEFINED
NULL = inexistência de valor
UNDEFINED = Ausência de declaração / não existe
*/

const x = null;
let y;

console.log(x); // null
console.log(y); // undefined

const z = {nome: 'ludson'}

console.log(z.nome); // ludson
console.log(z.idade); // undefined
