import { autores } from "../data/banco.js"

export default class AutorModel{
    static listar(){
        return autores;
    }
    static buscarPorId(id){
        return autores.find(a => a.id === Number (id))
    }
    static buscarPorNacionalidade(nacionalidade){
        return autores.filter(a => a.nacionalidade.toUpperCase() === nacionalidade.toUpperCase())
    }
    static buscarPorNome(nome){
        return autores.filter(a => a.nome.toUpperCase() === nome.toUpperCase())
    }
    static criar(autor){
        autores.push(autor)
        return autor
    }
    static atualizar(id, dados){
        const index = autores.findIndex(a => a.id === Number (id))
        if(index === -1){
            return null
        }
        autores[index] = {...autores[index], ...dados}
        return autores[index]
    }
    static deletar(id){
        const index = autores.findIndex(a => a.id === Number (id))
        if(index === -1){
            return false
        }
        autores.splice(index,1)
        return true
    }


}