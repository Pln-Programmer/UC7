import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('aaa')
})

app.get('/saudacao', (req, res) => {
  res.send('Meu nome é Fulano!')
})

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`)
})
