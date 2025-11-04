import { create } from "../../models/usuarioModel.js";
import bcrypt from 'bcryptjs';

export async function createUsuarioController(req, res) {
    try {
      const dados = { ...req.body };
      dados.senha = await bcrypt.hash(dados.senha, 10);      
      
      const usuario = await create(dados);
      
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
}
