import { getUser } from "../../models/usuarioModel.js";

export async function getByIdUsuarioController(req, res) {
    const { id } = req.params;

    if (Number(id) !== req.user.id) {
        return res.status(403).json({ error: "Acesso negado" });
    }

    try {
        const usuario = await getUser(id);
        const result = usuario ? usuario : { message: "Usuário não encontrado" };
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
