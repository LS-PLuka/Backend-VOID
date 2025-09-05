import { addItemSacola } from "../../models/sacolaModel.js";

export async function addItemSacolaUsuarioController(req, res) {
    const { usuarioId, produtoId, quantidade } = req.body
    
    try {
        const novoItem = await addItemSacola(usuarioId, produtoId, quantidade)
        res.status(201).json(novoItem)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
