/*
if (true) {
    var var1 = 10;
}

console.log(var1); //o var VAZA ESCOPOS POR CONTA DO HOSTING = mesmo sendo declarado fora do if (OU BLOCO DE CÓDIGO) ele funciona. Exceto em uma função
*/

//Ex:
function teste() {
    var var1 = 10;
}

teste();

console.log(var1);
// retorno: var1 is not defined

/*
LET
- o Let se mantem no escopo do bloco e não é afetado pelo hosting. Ele se mantem no escopo do bloco
*/

//Ex:
if (true){
    let var1 = 10;
}
console.log(var1);
// Resposta: var1 is not defined

/*
CONST
- Se comporta igual ao let
*/