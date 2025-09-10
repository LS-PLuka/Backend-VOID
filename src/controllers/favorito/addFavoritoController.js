import { addFavorito } from "../../models/favoritoModel.js";

export async function addFavoritoController(req, res) {
    const { usuarioId, produtoId } = req.body
    
    try {
        const novoFavorito = await addFavorito(usuarioId, produtoId)
        res.status(201).json(novoFavorito)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
