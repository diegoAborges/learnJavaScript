// SALVAR ARQUIVO, PERSISTIR OBJ
const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})


// OPEN ARQUIVO, ABRIR ARQUIVO EXISTENTE
const fs = require('fs')
const caminho = __dirname + '/arquivo.json'
// modo sincrono... (evitar)
  const conteudo = fs.readFileSync(caminho, 'utf-8')
  console.log(conteudo)
// modo assincrono... (usar esse)
  fs.readFile(caminho, 'utf-8', (err, conteudo) => {
     const config = JSON.parse(conteudo)
     console.log(`${config.db.host}:${config.db.port}`)
  })
// modo direto, tbm sicrono... 
  const config = require('./arquivo.json')
  console.log(config.db)
  fs.readdir(__dirname, (err, arquivos) => {
     console.log('Conteúdo da pasta...')
     console.log(arquivos)
  })
