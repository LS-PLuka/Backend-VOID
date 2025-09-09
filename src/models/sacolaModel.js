import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Funções CRUD para Sacola
export async function getSacolaByUsuarioId(usuarioId) {
    try {
        const sacola = await prisma.sacola.findUnique({
            where: { usuarioId: Number(usuarioId) },
            include: {
                itens: { include: { produto: true } }
            }
        })
        return sacola
    } catch (error) {
        throw new Error('Erro ao buscar sacola do usuário: ' + error.message)
    }
}

export async function addItemSacola(usuarioId, produtoId, quantidade) {
    try {
        const sacola = await prisma.sacola.findUnique({
            where: { usuarioId: Number(usuarioId) }
        })

        if (!sacola) throw new Error('Sacola não encontrada para o usuário.')

        const itemExistente = await prisma.itemSacola.findFirst({
            where: {
                sacolaId: sacola.id,
                produtoId: Number(produtoId)
            }
        })

        if (itemExistente) {
            return await prisma.itemSacola.update({
                where: { id: itemExistente.id },
                data: { quantidade: itemExistente.quantidade + Number(quantidade) }
            })
        } else {
            return await prisma.itemSacola.create({
                data: {
                    sacolaId: sacola.id,
                    produtoId: Number(produtoId),
                    quantidade: Number(quantidade)
                }
            })
        }
    } catch (error) {
        throw new Error('Erro ao adicionar item na sacola: ' + error.message)
    }
}

export async function removeItemSacola(itemId) {
    try {
        return await prisma.itemSacola.delete({
            where: { id: Number(itemId) }
        })
    } catch (error) {
        throw new Error('Erro ao remover item da sacola: ' + error.message)
    }
}

export async function clearSacola(usuarioId) {
    try {
        const sacola = await prisma.sacola.findUnique({
            where: { usuarioId: Number(usuarioId) }
        })

        if (!sacola) throw new Error('Sacola não encontrada para este usuário')

        await prisma.itemSacola.deleteMany({
            where: { sacolaId: sacola.id }
        })

        return { message: 'Sacola esvaziada com sucesso' }
    } catch (error) {
        throw new Error('Erro ao limpar sacola: ' + error.message)
    }
}
