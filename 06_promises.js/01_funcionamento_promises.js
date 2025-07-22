
// Funcionamento das promises
// - São assincronos

// Interface de uma Promise
new Promise((resolve, reject) => {
    // faço o meu processamento.
    // Se der certo eu chamo o resolve
    resolve()
    // Se der errado, chamo o reject
    reject()
})

// Nem sempre será assincrono

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((erros) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou!')
    })

// simulando o assincronismo

const promessaDeUmNumeroQualquerAssincrono = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000) // só dará a resposta após 1000 milisegundos
})

promessaDeUmNumeroQualquerAssincrono
    .then((value) => {
        console.log(value)
    })
    .catch((erros) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou!')
    })

// mains de um then

// simulando o assincronismo

const promessaDeUmNumeroQualquerThens = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000) // só dará a resposta após 1000 milisegundos
})

promessaDeUmNumeroQualquerThens
    .then((value) => {
        console.log(value)
        return value + 10
    })
    .then((value) => {
        console.log(value)
    })
    .catch((erros) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou!')
    })