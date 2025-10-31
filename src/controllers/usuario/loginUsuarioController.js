import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

export async function loginUsuarioController(req, res) {
    const { email, senha } = req.body;

    try {
        const user = await prisma.usuario.findUnique({ where: { email } });
        if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

        const senhaOk = await bcrypt.compare(senha, user.senha);
        if (!senhaOk) return res.status(401).json({ error: 'Credenciais inválidas' });

        const payload = { id: user.id, email: user.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.json({
            token,
            id: user.id,
            nome: user.nome,
            email: user.email
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
