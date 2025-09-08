import { removeItemSacola } from "../../models/sacolaModel.js";

export async function removeItemSacolaUsuarioController(req, res) {
    const { itemId } = req.params;

    try {
        await removeItemSacola(itemId);
        res.status(200).json({ message: 'Item removido da sacola com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
