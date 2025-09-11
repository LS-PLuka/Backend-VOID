import express from 'express'

// Importando Controllers
import { createCartaoController } from '../controllers/cartao/createCartaoController.js'
import { listCartoesUsuarioController } from '../controllers/cartao/listCartoesUsuarioController.js'
import { getCartaoController } from '../controllers/cartao/getCartaoController.js'
import { editCartaoController } from '../controllers/cartao/editCartaoController.js'
import { deleteCartaoController } from '../controllers/cartao/deleteCartaoController.js'

// Criando Rotas
const router = express.Router()

router.post('/', createCartaoController)
router.get('/:usuarioId', listCartoesUsuarioController)
router.get('/:id', getCartaoController)
router.put('/:id', editCartaoController)
router.delete('/:id', deleteCartaoController)

export default router
