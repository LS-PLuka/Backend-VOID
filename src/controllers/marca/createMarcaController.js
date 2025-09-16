import { create } from "../../models/marcaModel.js";

export async function createMarca(req, res) {
  try {
    const marca = await create(req.body);
    res.status(201).json(marca);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}
