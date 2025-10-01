const fs = require('fs');
const path = require('path')

const argumentos = process.argv.slice(2)

const fileName = argumentos[0]
const filePath = path.resolve(fileName)

//obter informações do arquivo


fs.stat(filePath, (err, stats) =>{
    if(err){
    console.error('erro ao obter os dados do arquivo: ', err);
    return
    }
    console.log('=== Informações do Arquivo ===')
    console.log(`Caminho absoluto: ${filePath}`)
    console.log(`Tamanho: ${stats.size} bytes`)
    console.log(`Data de criação: ${stats.birthtime}`)
    console.log(`Ultima atualização: ${stats.mtime}`)
  console.log(`É um arquivo? ${stats.isFile()}`)

})
