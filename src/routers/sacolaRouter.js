import express from 'express'

// Importando Controllers
import { getSacolaUsuarioController } from '../controllers/sacola/getSacolaUsuarioController.js'
import { addItemSacolaUsuarioController } from '../controllers/sacola/addItemSacolaUsuarioController.js'
import { removeItemSacolaUsuarioController } from '../controllers/sacola/removeItemSacolaUsuarioController.js'
import { clearSacolaUsuarioController } from '../controllers/sacola/clearSacolaUsuarioController.js'

// Criando Routers
const router = express.Router()

router.get('/:usuarioId', getSacolaUsuarioController)
router.post('/:usuarioId/itens', addItemSacolaUsuarioController)
router.delete('/:usuarioId/itens/:itemId', removeItemSacolaUsuarioController)
router.delete('/:usuarioId/itens', clearSacolaUsuarioController)

export default router
