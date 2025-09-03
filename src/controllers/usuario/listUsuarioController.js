import { list } from '../../models/usuarioModel.js'

export async function listUsuarioController(req, res) {
    try {
        const usuarios = await list()
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
