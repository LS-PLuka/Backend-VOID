import { create } from "../../models/produtoModel.js";

export async function createProdutoController(req, res) {
    try {
        const produto = await create(req.body);
        res.status(201).json(produto);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }  
}
