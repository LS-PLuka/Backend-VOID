import express from 'express'

// Importando Controllers
import { getSacolaUsuarioController } from '../controllers/sacola/getSacolaUsuarioController.js'
import { addItemSacolaUsuarioController } from '../controllers/sacola/addItemSacolaUsuarioController.js'
import { removeItemSacolaUsuarioController } from '../controllers/sacola/removeItemSacolaUsuarioController.js'
import { clearSacolaUsuarioController } from '../controllers/sacola/clearSacolaUsuarioController.js'

// Criando Rotas
const router = express.Router()

router.get('/:usuarioId', getSacolaUsuarioController)
router.post('/item', addItemSacolaUsuarioController)
router.delete('/item/:itemId', removeItemSacolaUsuarioController)
router.delete('/clear/:usuarioId', clearSacolaUsuarioController)

export default router
