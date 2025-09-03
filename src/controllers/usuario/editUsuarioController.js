import { edit } from "../../models/usuarioModel.js";

export async function editUsuarioController(req, res) {
    const { id } = req.params;
    const dados = req.body;

    try {
        const usuarioAtualizado = await edit(id, dados);
        res.status(200).json(usuarioAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
