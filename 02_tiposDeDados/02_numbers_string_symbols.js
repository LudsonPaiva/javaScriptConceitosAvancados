
/*dados que também são number:
+Infinity
-Infinity
NaN = not a number
*/

/* Double Precision 64-bit binary format IEEE 754 = linguagem de representação de números 
Algumas operações com números não saem de forma precisa, pois a lunguagem humana é diferente da de máquina
> 0.1 - 0.3 = -0.19999999999999998
https://0.30000000000000004.com/
Utilizar bibliotecas para resolver este problema, como a decimal js = https://mikemcl.github.io/decimal.js/
*/

/* ==>> STRING
"texto"
'texto'
`texto` // template literals
*/

console.log("<div id=\"10\">teste<div>"); //para que o código entenda a segunda aspa como texto, adicionar a barra antes.
console.log('<div id="10">teste<div>'); // ou usar aspas simples e aspas duplas. - Recomenda-se

const id = 20;
console.log('div id="' + id + '">teste<div>');
console.log(`div id="${id}">teste<div>`); // template literals

/* ==>> SYMBOL
- objeto imutável único
*/

const x = Symbol('10');
const y = Symbol('10');

console.log(x === y); // false, pois o symbol é unico. Serve para identificaor de algo
