import { getCartaoById } from "../../models/cartaoModel.js";

export async function getCartaoController(req, res) {
    const { id } = req.params
    
    try {
        const cartao = await getCartaoById(id)

        let result = cartao ? cartao : { message: "Cartão não encontrado" }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
