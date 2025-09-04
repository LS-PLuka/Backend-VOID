import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Funções CRUD Produto
export async function create(dados) {
    try {
        const produto = await prisma.produto.create({
            data: {
                nome: dados.nome,
                descricao: dados.descricao,
                preco: dados.preco,
                estoque: dados.estoque,
                imagem1Url: dados.imagem1Url,
                imagem2Url: dados.imagem2Url,
                marcaId: dados.marcaId,
            },
            include: {
                marca: true
            }
        })

        return produto
    } catch (error) {
        throw new Error("Erro ao criar produto: " + error.message);
    }
}

export async function list() {
    try {
        const produtos = await prisma.produto.findMany({
            include: {
                marca: true
            }
        })
        
        return produtos
    } catch (error) {
        throw new Error("Erro ao listar produtos: " + error.message);
    }
}

export async function getProduto(id) {
    try {
        const produto = await prisma.produto.findUnique({
            where: { id: Number(id) }
        })

        return produto
    } catch (error) {
        throw new Error("Erro ao buscar produto: " + error.message);
        
    }
}
