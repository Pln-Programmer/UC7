function permitirPerfil(perfisPermitidos) {
    let lista = []
    if (Array.isArray(perfisPermitidos)) {
        lista = perfisPermitidos
    }else{
        lista = [perfisPermitidos]
    }

    return (req, res, next) => {
        const perfil = req.usuario && req.usuario.perfil;
        if(lista.includes(perfil)){
            return next();
        }
        return res.status(403).json ({erro: "Acesso negado. Você não tem acesso a esse serviço"});
    }
}

export const autorization = {
    admin: permitirPerfil(["admin"]),
    seller: permitirPerfil(["seller"]),
    client: permitirPerfil(["client"])
}

export { permitirPerfil}
export default autorization