import express from "express";
const app = new express();
const port = 3000;

// Middleware para interpretat JSON no corpo da requisição
app.use(express.json());

// Array que simula um banco de dados
let produtos = [
  { id: 1, nome: "Arroz", preco: 10.5 },
  { id: 2, nome: "Feijão", preco: 8.5 },
];

app.get("/", (req, res) => {
  res.status(200).send("Hello Word!");
});

// Read - Listar todos os produtos
app.get("/produtos", (req, res) => {
  res.status(200).json(produtos);
});

// Read - Buscar produto por ID
app.get("/produtos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const produto = produtos.find((p) => p.id === id);
    if (!produto) {
      res.status(404).json({ msg: "Produto não encostrado" });
    }
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// CREATE - Adicionar um novo produto
app.post("/produtos", (req, res) => {
  try {
    const { nome, preco } = req.body;
    // Validação simples
    if (!nome || !preco) {
      res.status(400).json({ msg: "Nome de Preço são obrigatorios" });
    }
    const novoProduto = {
      id: produtos.length + 1,
      nome: nome,
      preco: Number(preco),
    };
    produtos.push(novoProduto);
    res.status(201).json({ msg: "Produto criado com sucesso!", novoProduto });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Delete - remover produtos por ID
app.delete("/produtos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex((p) => p.id === id);

    if (index === -1) {
      return res.status(404).json({ msg: "Produto não encontrado" });
    }

    const removido = produtos.splice(index, 1);
    res.status(200).json({ msg: "Produto removido com sucesso", removido });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// UPDATE - Roata para atualizar um produto por ID
app.put("/produtos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    const produto = produtos.find((p) => p.id === id);
    if (!produto) {
      res.status(404).json({ msg: "Produto não encostrado" });
    }
    // Atualiza apenas se vierem novos valores
    if (nome) produto.nome = nome;
    if (preco) produto.preco = Number(preco);
    res.json({ msg: "produto atualizado com sucesso!", produto });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
