
// map



class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const Lista = [new Pessoa('Ludson'), new Pessoa('Lilian'), new Pessoa('Luzia'), new Pessoa('Nelson')]

console.log(Lista)

// Ex: Transformar um objeto em outro

// forma convencional

const listaNomes = []

for (let i = 0; i < Lista.length; i++) {
    const element = Lista[i];
    listaNomes.push(element.name)
}

console.log(listaNomes)

// com map

const listaNomesMap = Lista.map((element, i) => {
    return `${i} - ${element.name}`
})

console.log(listaNomesMap)

// transformando em html com map

const listaHtml = Lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
})

console.log(listaHtml)