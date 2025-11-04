import { edit } from "../../models/usuarioModel.js";
import bcrypt from "bcryptjs";

export async function editUsuarioController(req, res) {
    const { id } = req.params;
    const dados = req.body;

    if (dados?.senha)
    dados.senha = await bcrypt.hash(dados.senha, 10);

    if (Number(id) !== req.user.id && req.user.role !== 'admin') {
        return res.status(403).json({ error: "Acesso negado" });
    }

    try {
        const usuarioAtualizado = await edit(id, dados);
        res.status(200).json(usuarioAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
