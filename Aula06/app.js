import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;

let contatos = [
  {
    id: 1,
    nome: "Pedro Lucas",
    telefone: "98274-0198",
    email: "pedrolucaspl@gmail.com",
  },
  {
    id: 2,
    nome: "Pedro Eduarda",
    telefone: "98761-2345",
    email: "mariaeduarda@gmail.com",
  },
  {
    id: 3,
    nome: "Pedro Vitor",
    telefone: "98123-4567",
    email: "joaovitor@hotmail.com",
  },
  {
    id: 4,
    nome: "Pedro Beatriz",
    telefone: "98456-7890",
    email: "anabeatriz@yahoo.com",
  },
  {
    id: 5,
    nome: "Lucas Henrique",
    telefone: "98567-1122",
    email: "lucashenrique@gmail.com",
  },
  {
    id: 6,
    nome: "Carla Souza",
    telefone: "98745-3321",
    email: "carlasouza@outlook.com",
  },
  {
    id: 7,
    nome: "Rafael Santos",
    telefone: "98321-9087",
    email: "rafaelsantos@gmail.com",
  },
  {
    id: 8,
    nome: "Fernanda Lima",
    telefone: "98211-7744",
    email: "fernandalima@gmail.com",
  },
  {
    id: 9,
    nome: "Gabriel Oliveira",
    telefone: "98100-5566",
    email: "gabrieloliveira@hotmail.com",
  },
  {
    id: 10,
    nome: "Juliana Alves",
    telefone: "98888-2233",
    email: "julianaalves@gmail.com",
  },
];

app.get("/contatos", (req, res) => {
    res.status(200).json(contatos)
});


app.get("/contatos/:id", (req, res) => {
    try{
    const id = parseInt(req.params.id)
    const contato = contatos.find ((c) => c.id === id)
    if(!contatos){
        res.status(404).json({msg: "O id informado não está resistrado em nosso servidor!"})
    }
    res.status(200).json(contato)
    }catch(error) {
        res.status(500).json({erro: error.mensage})
    }
});


app.post("/contatos", (req, res) => {
    try {
        const {nome, telefone, email} = req.body
        const index = contatos.findIndex((p) => p.email === email);

        if(!nome || !telefone || !email){
            res.status(400).json({msg: "Erro! informações invalidas ou não informadas"})
        }
        if(index !== -1){
            res.status(400).json({msg: "Email já cadastrado!"})
        }
        if (telefone.length !== 9){
            res.status(400).json({msg: "Numero de caracteres invalido!"})
        }
        const novoContato = {
            id: contatos.length + 1,
            nome: nome,
            telefone: telefone,
            email: email
        }
        contatos.push(novoContato)
        res.status(201).json({msg: "Contato adicionado com sucesso!", novoContato})

    } catch (error) {
        res.status(500).json({erro: error.mensage})
    }
});

app.put("/contatos/:id", (req, res) => {
    try {
        const {nome, telefone, email} = req.body
        const id = parseInt(req.params.id)
          const contato = contatos.find ((c) => c.id === id)
        if(!contato){
            res.status(400).json({msg: "Contato não encontrado!"})
        }

        if (nome) contato.nome = nome;
        if (telefone) contato.telefone = telefone;
        if (email) contato.email = email;
        res.status(200).json({msg: "Contato atualizado com sucesso!", contato})

    } catch (error) {
        res.status(500).json({erro: error.mensage})
    }
});


app.delete("/contatos/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = contatos.findIndex((c) => c.id === id);

        if (index === -1) {
            res.status(404).json({ msg: "Contato não encontrado!" });
        }

        const removido = contatos.splice(index, 1);
        res.status(200).json({
            msg: "Contato removido com sucesso!",
            contatoRemovido: removido[0]
        });

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});


app.get ("/contatos/nome/:nome", (req, res) => {
    try {
        const nomes = req.params.nome.toLowerCase()
        const resultado = contatos.filter(c => c.nome.toLowerCase().includes(nomes))

        if(resultado.length === 0){
            res.status(404).json({ msg: "Contato não encontrado!" });
        }
        res.status(200).json({msg: "Contatos encontrados!", resultado})
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
})





app.listen(PORT, () => {
  console.log(`Servidor rodando http://localhost:${PORT}`);
});
