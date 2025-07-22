
// Async & await
// - São açúcares sintáticos. 
// - melhores formas de se escrever a Promise

const fs = require('fs') // biblioteca do note para leitura de arquivo "file system"
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath) // await = só continuará a função após ler todo o arquivo. O resultado dele vai para dentro da variável
        const textoDoArquivo = arquivo.toString('utf-8')
        console.log(textoDoArquivo)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finalizou!')
    }
} // o await tirou a complexividade dos callbacks

buscarArquivo()