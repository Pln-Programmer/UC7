import express from "express";
import "dotenv/config";
import AlunoRoutes from "./src/routes/AlunoRoutes.js";

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/alunos", AlunoRoutes);

app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
})