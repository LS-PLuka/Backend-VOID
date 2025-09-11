import { remove } from "../../models/cartaoModel.js";

export async function deleteCartaoController(req, res) {
    const { id } = req.params

    try {
        const cartao = await remove(id)
        
        let result = cartao ? cartao : { message: "Cartão não encontrado" }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
