import { addItemSacola } from "../../models/sacolaModel.js";

export async function addItemSacolaUsuarioController(req, res) {
    const { usuarioId, produtoId, quantidade } = req.body;

    if (!usuarioId || !produtoId || !quantidade) {
        return res.status(400).json({ error: "usuarioId, produtoId e quantidade são obrigatórios" });
    }

    try {
        const novoItem = await addItemSacola(Number(usuarioId), Number(produtoId), Number(quantidade));
        res.status(201).json(novoItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
