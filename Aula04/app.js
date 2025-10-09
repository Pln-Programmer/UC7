import express from "express";
const app = express()
const port = 3000
import { fileURLToPath } from "url"
import path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



let produtos = [
    {produto: 'Macarão', 
    preço: 'R$2,50',
    peso: '80g',
    codigo: 'Ca900'},
    
    {produto: 'Molho de Tomate', 
    preço: 'R$2,00',
    peso: '100ml',
    codigo: 'Ca901'}
]

// Rota com send (texto simples)
app.get('/texto', (req, res) => {
  res.send('Respostas em texto simples')
})

// Rota com json
app.get('/json', (req, res) => {
  res.send({mensagem: 'Respota em JSON', tempo: Date.now()});
})

//Rota com status + jason
app.post('/criar', (req, res) => {
    res.status(201).json({sucesso: true, mensagem: 'Recurso Criado!'})
})

// Rota com erro
app.get('/erro', (req, res) => {
    res.status(400).json({erro: 'Requisição invalida'})
})

// Rota de redirecionamento
app.get('/redirect', (req, res) => {
    res.redirect('/json')
})

//Rota sem conteúdo
app.get('/no-content', (req, res) => {
    res.sendStatus(204);
})

app.get('/produto', (req, res) => {
    res.json(produtos)
})

app.get('/download', (req, res) => {
    const caminho = path.join(__dirname, "teste.txt");
    res.download(caminho, "arquivo-exemplo.txt", (err) =>{
        console.error("Erro ao enviar o arquivo:", err);
        res.status(500).send("Erro ao fazer o download!")
    })
})



app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`)
})