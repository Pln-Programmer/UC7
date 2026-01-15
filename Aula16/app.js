import express from "express";
import "dotenv/config";
import usuarioRoutes from "./src/routes/usuarioRoutes.js";
import cursoRoutes from "./src/routes/CursoRoutes.js";

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/usuarios", usuarioRoutes);
app.use("/cursos", cursoRoutes);

app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
})
