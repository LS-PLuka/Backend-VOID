import { getMarca } from "../../models/marcaModel.js";

export async function getByIdMarcaController(req, res) {
    const { id } =  req.params

    try {
        const marca = await getMarca(id)

        let result = marca ? marca : { message: "Marca não encontrada" }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
