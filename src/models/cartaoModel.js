import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Funções CRUD Cartão
export async function create(dados) {
    try {
        const cartao = await prisma.cartao.create({
            data: {
                usuarioId: dados.usuarioId,
                numero: dados.numero,
                nomeTitular: dados.nomeTitular,
                validadeMes: dados.validadeMes,
                validadeAno: dados.validadeAno,
                codigoSeguranca: dados.codigoSeguranca
            },
            select: {
                id: true,
                usuarioId: true,
                numero: true,
                nomeTitular: true,
                validadeMes: true,
                validadeAno: true,
                usuario: {
                    select: {
                        id: true,
                        nome: true,
                        email: true
                    }
                }
            }
        })

        return cartao
    } catch (error) {
        throw new Error("Erro ao criar cartão: " + error.message)
    }
}

export async function listCartoesUsuario(usuarioId) {
    try {
        const cartoes = await prisma.cartao.findMany({
            where: { usuarioId: Number(usuarioId) },
            select: {
                id: true,
                numero: true,
                nomeTitular: true,
                validadeMes: true,
                validadeAno: true
            }
        })

        return cartoes
    } catch (error) {
        throw new Error("Erro ao buscar cartões do usuário: " + error.message)
    }
}

export async function getCartaoById(id) {
    try {
        const cartao = await prisma.cartao.findUnique({
            where: { id: Number(id) },
            select: {
                id: true,
                numero: true,
                nomeTitular: true,
                validadeMes: true,
                validadeAno: true,
                usuarioId: true
            }
        })

        return cartao
    } catch (error) {
        throw new Error("Erro ao buscar cartão: " + error.message)
    }
}

export async function edit(id, dados) {
    try {
        const cartao = await prisma.cartao.update({
            where: { id: Number(id) },
            data: {
                numero: dados.numero,
                nomeTitular: dados.nomeTitular,
                validadeMes: dados.validadeMes,
                validadeAno: dados.validadeAno,
                codigoSeguranca: dados.codigoSeguranca
            },
            select: {
                id: true,
                numero: true,
                nomeTitular: true,
                validadeMes: true,
                validadeAno: true,
                usuarioId: true
            }
        })

        return cartao
    } catch (error) {
        throw new Error("Erro ao editar cartão: " + error.message)
    }
}

export async function remove(id) {
    try {
        const cartao = await prisma.cartao.delete({
            where: { id: Number(id) },
            select: {
                id: true,
                numero: true,
                nomeTitular: true
            }
        })

        return cartao
    } catch (error) {
        throw new Error("Erro ao excluir cartão: " + error.message)
    }
}
