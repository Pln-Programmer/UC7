import "dotenv/config"
import express from "express"
import sequelize from "./src/Data/Config.js"

import ClienteRoutes from "./src/routes/ClienteRoutes.js"
import UsuarioRoutes from "./src/routes/UsuarioRoutes.js"
import VeiculoRoutes from "./src/routes/VeiculoRoutes.js"
import VendaRoutes from "./src/routes/VendaRoutes.js"

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

app.listen(port, async ()=>{
    await sequelize.sync({ force: true, aleter: true });
    console.log(`http://localhost:${port}`)
})