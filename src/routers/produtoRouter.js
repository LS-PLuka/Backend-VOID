import express from 'express'

// Importando Controllers
import { createProdutoController } from '../controllers/produto/createProdutoController.js'
import { listProdutoController } from '../controllers/produto/listProdutoController.js'
import { getByIdProdutoController } from '../controllers/produto/getByIdProdutoController.js'

// Criando Rotas
const router = express.Router()

router.post('/', createProdutoController)
router.get('/', listProdutoController)
router.get('/:id', getByIdProdutoController)

export default router
