import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Funções CRUD Usuario
export async function create(dados) {
  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha,
        role: dados.role || "cliente",
      },
    });

    return usuario;
  } catch (error) {
    throw new Error("Erro ao criar usuário: " + error.message);
  }
}

export async function list() {
    try {
        const usuarios = await prisma.usuario.findMany();
        return usuarios;
    } catch (error) {
        throw new Error("Erro ao listar usuários: " + error.message);
    }
}

export async function getUser(id) {
    try {
        const usuario = await prisma.usuario.findUnique({
            where: { id: Number(id) },
        });
        return usuario;
    } catch (error) {
        throw new Error("Erro ao buscar usuário por ID: " + error.message);
    }
}

export async function edit(id, dados) {
    try {
        const usuario = await prisma.usuario.update({
            where: { id: Number(id) },
            data: {
                nome: dados.nome,
                email: dados.email,
                senha: dados.senha,
            }
        });
        return usuario;
    } catch (error) {
        throw new Error("Erro ao editar usuário: " + error.message);
    }
}

export async function remove(id) {
    try {
        const usuario = await prisma.usuario.delete({
            where: { id: Number(id) },
        });
        return usuario;
    } catch (error) {
        throw new Error("Erro ao deletar usuário: " + error.message);
    }
}
