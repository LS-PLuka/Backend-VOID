import { removeItemSacola } from "../../models/sacolaModel.js";

export async function removeItemSacolaUsuarioController(req, res) {
    const { itemId } = req.params;

    if (!itemId) return res.status(400).json({ error: "ID do item é obrigatório" });

    try {
        await removeItemSacola(Number(itemId));
        res.status(200).json({ message: "Item removido da sacola com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
