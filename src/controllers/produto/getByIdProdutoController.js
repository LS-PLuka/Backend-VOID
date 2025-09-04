import { getProduto } from "../../models/produtoModel.js";

export async function getByIdProdutoController(req, res) {
    const { id } = req.params

    try {
        const produto = await getProduto(id)

        let result = produto ? produto : { message: "Produto não encontrado" }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
