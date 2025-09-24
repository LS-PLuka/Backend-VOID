import { remove } from "../../models/marcaModel.js";

export async function removeMarcaByIdController(req, res) {
    const { id } = req.params;

    try {
        const marca = await remove(id);
        
        let result = marca ? marca : { message: "Marca não encontrada" };
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
