import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Funções CRUD Marca
export async function create(dados) {
    try {
        const marca = await prisma.marca.create({
            data: {
                nome: dados.nome,
                descricao: dados.descricao,
                imagemUrl: dados.imagemUrl
            }
        })

        return marca
    } catch (error) {
        throw new Error("Erro ao criar marca: " + error.message);
    }
}

export async function list() {
    try {
        const marcas = await prisma.marca.findMany()
        return marcas
    } catch (error) {
        throw new Error("Erro ao listar marcas: " + error.message);
    }
}

export async function getMarca(id) {
    try {
        const marca = await prisma.marca.findUnique({
            where: { id: Number(id)}
        })
        
        return marca
    } catch (error) {
        throw new Error("Erro ao buscar marca por ID: " + error.message);
    }
}

export async function remove(id) {
    try {
        await prisma.produto.deleteMany({ where: { marcaId: Number(id) } });
        
        const marca = await prisma.marca.delete({
            where: { id: Number(id) },
        })

        return marca
    } catch (error) {
        throw new Error("Erro ao deletar marca: " + error.message);
    }
}
