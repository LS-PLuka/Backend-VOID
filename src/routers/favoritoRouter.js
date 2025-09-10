import express from 'express'

// Importando Controllers
import { getFavoritosUsuarioController } from '../controllers/favorito/getFavoritosUsuarioController.js'
import { addFavoritoController } from '../controllers/favorito/addFavoritoController.js'
import { removeItemFavoritoController } from '../controllers/favorito/removeItemFavoritoController.js'
import { clearFavoritoController } from '../controllers/favorito/clearFavoritoController.js'

// Criando Rotas
const router = express.Router()

router.get('/:usuarioId', getFavoritosUsuarioController)
router.post('/', addFavoritoController)
router.delete('/', removeItemFavoritoController)
router.delete('/:usuarioId', clearFavoritoController)

export default router
