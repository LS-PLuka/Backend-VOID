import { getSacolaByUsuarioId } from "../../models/sacolaModel.js";

export async function getSacolaUsuarioController(req, res) {
    const { usuarioId } = req.params

    try {
        const sacola = await getSacolaByUsuarioId(usuarioId)

        let result = sacola ? sacola : { message: 'Sacola não encontrada para o usuário.' }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
