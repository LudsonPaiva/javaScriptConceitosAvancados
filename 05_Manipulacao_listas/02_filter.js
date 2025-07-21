
// filter

const Lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// No forEach estamos percorrendo a lista. No filter estamos criando uma nova lista
const listaNumerosPares = Lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(listaNumerosPares)