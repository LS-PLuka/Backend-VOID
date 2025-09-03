import { remove } from "../../models/usuarioModel.js";

export async function deleteUsuarioController(req, res) {
    const { id } = req.params;

    try {
        const usuario = await remove(id);
        
        let result = usuario ? usuario : { message: "Usuário não encontrado" };
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
