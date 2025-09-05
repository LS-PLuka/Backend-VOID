import express from 'express'

// Importando Controllers
import { getSacolaUsuarioController } from '../controllers/sacola/getSacolaUsuarioController.js'
import { addItemSacolaUsuarioController } from '../controllers/sacola/addItemSacolaUsuarioController.js'

// Criando Rotas
const router = express.Router()

router.get('/:usuarioId', getSacolaUsuarioController)
router.post('/item', addItemSacolaUsuarioController)

export default router
