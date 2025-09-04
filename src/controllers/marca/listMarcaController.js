import { list } from "../../models/marcaModel.js";

export async function listMarcaController(req, res) {
    try {
        const marcas = await list();
        res.status(200).json(marcas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
