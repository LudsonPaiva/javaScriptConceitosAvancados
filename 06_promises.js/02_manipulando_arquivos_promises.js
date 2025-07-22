
// Manipulando arquivos através de Promises

const fs = require('fs') // biblioteca do note para leitura de arquivo "file system"
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaDaLeituraDoArquivo= fs.promises.readFile(filePath)

promessaDaLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf8')) // utf8 é para caso tenha acesso
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1)) // divide o texto em linhas diferentes e exclui a primeira linha
    .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Deu Erro', error))