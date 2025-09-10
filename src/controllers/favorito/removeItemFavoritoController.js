import { removeFavorito } from "../../models/favoritoModel.js";

export async function removeItemFavoritoController(req, res) {
    const { usuarioId, produtoId } = req.body;

    try {
        const result = await removeFavorito(usuarioId, produtoId);
        if (result.count > 0) {
            res.status(200).json({ message: 'Produto removido dos favoritos com sucesso' });
        } else {
            res.status(404).json({ message: 'Produto não encontrado nos favoritos' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
