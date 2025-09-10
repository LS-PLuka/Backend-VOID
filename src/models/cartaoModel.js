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
            include: {
                usuario: true
            }
        })

        return cartao
    } catch (error) {
        throw new Error("Erro ao criar cartão" + error.message);
    }
}
