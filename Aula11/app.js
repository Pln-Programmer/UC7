import UsuarioRoutes from "./src/routes/UsuarioRoutes.js"
import express from "express"
import "dotenv/config"
const app = express()
const port = process.env.port

app.use(express.json())

app.get("/", (req,res) =>{
    res.status(200).json({msg:"Rota Home!"})
})
app.use("/usuarios", UsuarioRoutes)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})