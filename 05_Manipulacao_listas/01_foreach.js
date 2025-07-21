
const Lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 
Lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef)
})

// É uma sintaxe reduzida para percorrermos a lista

const cb = (value, i, listRef) => {
    console.log(value + i)
}

Lista.forEach(cb) // é um pouco mais lento que um for convencional

// faz a mesma coisa que o for
// for (let i=0; i < Lista.length; i++) {
//     const element = array[i];
//     cb(element, i, Lista)
// }