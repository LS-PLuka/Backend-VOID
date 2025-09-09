import { clearSacola } from "../../models/sacolaModel.js";

export async function clearSacolaUsuarioController(req, res) {
    const { usuarioId } = req.params;

    if (!usuarioId) return res.status(400).json({ error: "ID do usuário é obrigatório" });

    try {
        await clearSacola(Number(usuarioId));
        res.status(200).json({ message: "Sacola limpa com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
