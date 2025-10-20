import express from "express"
import 'dotenv/config'
const app = express()
const port = process.env.port
import autorRoutes from "./src/routes/autorRoutes.js"
import categoriaRoutes from "./src/routes/categoriaRoutes.js"

app.use(express.json())
app.use("/autores", autorRoutes)

app.use(express.json())
app.use("/categoria", categoriaRoutes)


app.listen(port, ()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`)
})