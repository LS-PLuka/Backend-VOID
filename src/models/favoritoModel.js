import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Funções CRUD Favoritos
export async function getFavoritosByUsuarioId(usuarioId) {
    try {
        return await prisma.favorito.findMany({
            where: { usuarioId },
            include: { produto: true }
        })
    } catch (error) {
        throw new Error('Erro ao buscar favoritos: ' + error.message)
    }
}   

export async function addFavorito(usuarioId, produtoId) {
    try {
        const favoritoExistente = await prisma.favorito.findUnique({
            where: {
                usuarioId_produtoId: { 
                    usuarioId: usuarioId,
                    produtoId: produtoId
                }
            }
        });

        if (favoritoExistente) {
            return { message: 'Produto já está nos favoritos' };
        }

        return await prisma.favorito.create({
            data: {
                usuarioId,
                produtoId
            }
        });
    } catch (error) {
        throw new Error('Erro ao adicionar favorito: ' + error.message);
    }
}

export async function removeFavorito(usuarioId, produtoId) {
    try {
        return await prisma.favorito.deleteMany({
            where: { usuarioId, produtoId }
        })
    } catch (error) {
        throw new Error('Erro ao remover favorito: ' + error.message)
    }
}

export async function clearFavoritosByUsuarioId(usuarioId) {
    try {
        return await prisma.favorito.deleteMany({
            where: { usuarioId }
        })
    } catch (error) {
        throw new Error('Erro ao limpar favoritos: ' + error.message)
    }
}
