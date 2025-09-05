import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Funções CRUD sacola
export async function getSacolaByUsuarioId(usuarioId) {
    try {
        const sacola = await prisma.sacola.findUnique({
            where: { usuarioId: Number(usuarioId) },
            include: {
                itens: {
                    include: { produto: true }
                }
            }
        })
        
        return sacola
    } catch (error) {
        throw new Error('Erro ao buscar sacola do usuario: ' + error.message)
    }
}

export async function addItemSacola(usuarioId, produtoId, quantidade) {
    try {
        let sacola = await prisma.sacola.findUnique({
            where: { usuarioId: Number(usuarioId) }
        })

        if (!sacola) {
            throw new Error('Sacola não encontrada para o usuário.')
        }

        const itemExistente = await prisma.sacolaItem.findFirst({
            where: {
                sacolaId: sacola.id,
                produtoId: Number(produtoId)
            }
        })

        if (itemExistente) {
            return await prisma.sacolaItem.update({
                where: { id: itemExistente.id },
                data: { quantidade: itemExistente.quantidade + quantidade }
            })
        } else {
            return await prisma.sacolaItem.create({
                data: {
                    sacolaId: sacola.id,
                    produtoId: Number(produtoId),
                    quantidade: quantidade
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
        throw new Error("Erro ao remover item da sacola: " + error.message)
    }
}

export async function clearSacola(usuarioId) {
    try {
        const sacola = await prisma.sacola.findUnique({
            where: { usuarioId: Number(usuarioId) }
        })

        if (!sacola) {
            throw new Error("Sacola não encontrada para este usuário")
        }

        await prisma.itemSacola.deleteMany({
            where: { sacolaId: sacola.id }
        })

        return { message: "Sacola esvaziada com sucesso" }
    } catch (error) {
        throw new Error("Erro ao limpar sacola: " + error.message)
    }
}
