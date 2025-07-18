// HOSTING


var teste1 = function() {
    console.log('teste1');
}

function teste2() {
    console.log('teste2');
}

teste1();
teste2();
// executando antes da execução = funciona ok

teste1();
teste2();

var teste1 = function() {
    console.log('teste1');
}

function teste2() {
    console.log('teste2');
}

// executando depois da execução = teste2 funciona ok, mas no testte1 dá erro, pois o JS jogou a declaração para cima e não a atribuição
