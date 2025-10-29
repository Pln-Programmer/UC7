import { Usuario } from "../data/banco.js";

export default class UsuarioModel {
  static listar() {
    return Usuario;
  }
  static buscarPorId(id) {
    return Usuario.find((u) => u.id === parseInt(id));
  }
  static criar() {
    Usuario.push(Usuario);
    return Usuario;
  }
  static atualizar(id, novoUsuario) {
    const index = Usuario.findIndex((u) => u.id === parseInt(id));
    if (index === -1) {
      return null;
    }
    return (Usuario[index] = { ...Usuario[index], ...novoUsuario });
  }
  static deletar() {
    const index = Usuario.findIndex((u) => u.id === parseInt(id));
    if (index === -1) {
      return false;
    }
    Usuario.splice(index, 1);
    return true;
  }
  static buscarPorLocalidade(localidade) {
    return Usuario.filter(
      (u) => u.localidade.toUpperCase() === localidade.toUpperCase()
    );
  }
  static buscarPorCep(cep) {
    return Usuario.filter((u) => u.cep.toUpperCase() === cep.toUpperCase());
  }
  static buscarPorEstado(estado) {
    return Usuario.filter(
      (u) => u.estado.toUpperCase() === estado.toUpperCase()
    );
  }
  static OrdemAlfabetica() {
    return Usuario.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  static buscarPorBairro(bairro) {
    return Usuario.filter((u) => u.bairro === bairro);
  }
  static estatisticas(){
 let cidades = [];
    let estados = [];

    Usuario.forEach(usuario => {
      if (usuario.localidade && !cidades.includes(usuario.localidade)) {
        cidades.push(usuario.localidade);
      }
      if (usuario.estado && !estados.includes(usuario.estado)) {
        estados.push(usuario.estado);
      }
    });

    const estatisticas = {
      usuarios: Usuario.length,
      cidades: cidades.length,
      estados: estados.length
    };

    return estatisticas;
  }
}
