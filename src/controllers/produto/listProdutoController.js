import { list } from "../../models/produtoModel.js";

export async function listProdutoController(req, res) {
    try {
        const produtos = await list();
        res.status(200).json(produtos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
