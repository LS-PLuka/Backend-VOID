import express from 'express'

// Importando Controllers
import { createMarca } from '../controllers/marca/createMarcaController.js'
import { listMarcaController } from '../controllers/marca/listMarcaController.js'
import { getByIdMarcaController } from '../controllers/marca/getByIdMarcaController.js'
import { removeMarcaByIdController } from '../controllers/marca/removeMarcaByIdController.js'

// Criando Rotas
const router = express.Router()

router.post('/', createMarca)
router.get('/', listMarcaController)
router.get('/:id', getByIdMarcaController)
router.delete('/:id', removeMarcaByIdController)

export default router
