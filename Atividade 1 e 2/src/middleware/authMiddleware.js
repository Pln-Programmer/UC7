import jwt from "jsonwebtoken";
import "dotenv/config";

export default function autenticar(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ msg: "Token não fornecido" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json("Token mal não fornecido" );
    }
    try {
        const usuario = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = usuario;
        return next();
    } catch (error) {
        return res.status(403).json({ msg: "Token inválido ou expirado" });
    }
}
