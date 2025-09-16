import { create } from '../../models/cartaoModel.js'

export async function createCartaoController(req, res) {
    try {
        const cartao = await create(req.body);
        res.status(201).json(cartao);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}
