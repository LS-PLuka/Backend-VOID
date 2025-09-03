import express from 'express'

// Importando Controllers
import { createUsuario } from '../controllers/usuario/createUsuarioController.js'
import { listUsuarioController } from '../controllers/usuario/listUsuarioController.js'
import { getByIdUsuarioController } from '../controllers/usuario/getByIdUsuario.js'
import { editUsuarioController } from '../controllers/usuario/editUsuarioController.js'
import { deleteUsuarioController } from '../controllers/usuario/deleteUsuarioController.js'

// Criando Rotas
const router = express.Router()

router.post('/', createUsuario)
router.get('/', listUsuarioController)
router.get('/:id', getByIdUsuarioController)
router.put('/:id', editUsuarioController)
router.delete('/:id', deleteUsuarioController)

export default router
