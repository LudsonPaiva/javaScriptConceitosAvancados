
// join

const Lista = [1, 2, 3]

console.log(Lista.join('/'))

// Exemplo 2

const Lista2 = [{nome: 'Ludson'}, {nome: 'Lilian'}, {nome: 'Luzia'}, {nome: 'Adriana'}, {nome: 'Amanda'}]

console.log(Lista2.map((e) => e.nome).join('; '))

// Exemplo com filter

console.log(
    Lista2.map(e => e.nome)
        .filter((e) => e.startsWith('A'))
        .join('; ')
)

// Exemplo transformando em html

const elementosEmHtml = Lista2
        .filter((e) => e.nome.startsWith('L'))
        .map(e => `<li>${e.nome}</li>`)
        .join('; ')

console.log(elementosEmHtml)


