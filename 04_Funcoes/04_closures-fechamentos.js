
// closures ou fechamentos
// - Ao declarar uma função ela se lembra do contexto que ela foi declarada

function soma(x) {
    return function (y) {
        return x + y;
    }
}

console.log(soma(10)(20)) // retorno 30

const somaParcial = soma(10)

// A função se lembra do valor de x = característica de closer *** muito utilizada
console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))