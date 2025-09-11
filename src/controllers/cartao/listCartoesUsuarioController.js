import { listCartoesUsuario } from '../../models/cartaoModel.js'

export async function listCartoesUsuarioController(req, res) {
    const { usuarioId } = req.params
    
    try {
        const cartoes = await listCartoesUsuario(usuarioId)
        res.status(200).json(cartoes)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
