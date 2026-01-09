import ClienteRoutes from "./src/routes/ClienteRoutes.js"
import UsuarioRoutes from "./src/routes/UsuarioRoutes.js"
import VeiculoRoutes from "./src/routes/VeiculoRoutes.js"
import VendaRoutes from "./src/routes/VendaRoutes.js"
import express from "express"
import "dotenv/config"
const app = express()
const port = process.env.PORT

app.use(express.json())

app.get("/", (req,res) =>{
    res.status(200).json({msg:"Bem Vindo!"})
})

app.use("/cliente", ClienteRoutes)
app.use("/usuarios", UsuarioRoutes)
app.use("/veiculo", VeiculoRoutes)
app.use("/venda", VendaRoutes)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})