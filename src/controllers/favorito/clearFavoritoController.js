import { clearFavoritosByUsuarioId } from "../../models/favoritoModel.js";

export async function clearFavoritoController(req, res) {
    try {
        const { usuarioId } = req.params;
        
        const result = await clearFavoritosByUsuarioId(usuarioId);
        res.status(200).json({ message: 'Favoritos limpos com sucesso', resultado: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
