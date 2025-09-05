import { clearSacola } from "../../models/sacolaModel";

export async function clearSacolaUsuarioController(req, res) {
    const { usuarioId } = req.params;

    try {
        await clearSacola(usuarioId);
        res.status(200).json({ message: 'Sacola limpa com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
