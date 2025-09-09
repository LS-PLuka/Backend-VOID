import { getSacolaByUsuarioId } from "../../models/sacolaModel.js";

export async function getSacolaUsuarioController(req, res) {
    const { usuarioId } = req.params;

    if (!usuarioId) return res.status(400).json({ error: "ID do usuário é obrigatório" });

    try {
        const sacola = await getSacolaByUsuarioId(usuarioId);
        if (!sacola) return res.status(404).json({ message: "Sacola não encontrada para o usuário." });

        res.status(200).json(sacola);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
