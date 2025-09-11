import { edit } from "../../models/cartaoModel.js";

export async function editCartaoController(req, res) {
    const { id } = req.params
    const dados = req.body

    try {
        const cartaoAtualizado = await edit(id, dados)
        res.status(200).json(cartaoAtualizado)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
