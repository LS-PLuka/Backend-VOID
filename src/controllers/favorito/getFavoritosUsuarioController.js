import { getFavoritosByUsuarioId } from "../../models/favoritoModel.js";

export async function getFavoritosUsuarioController(req, res) {
    const usuarioId = parseInt(req.params.usuarioId)

    try {
        const favoritos = await getFavoritosByUsuarioId(usuarioId)
        res.status(200).json(favoritos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
