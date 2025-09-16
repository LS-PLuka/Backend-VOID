import { create } from "../../models/usuarioModel.js";

export async function createUsuarioController(req, res) {
  try {
    const usuario = await create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}
