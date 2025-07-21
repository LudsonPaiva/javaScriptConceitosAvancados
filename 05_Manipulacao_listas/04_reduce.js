
// Reduce

// - Percorrer a lista e transformá-la em um único valor

const Lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTodosOsNumeros = Lista.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
}, 0) // ",0" podemos passar o valor inicial para caso a lista seja vazia

console.log(somaDeTodosOsNumeros)