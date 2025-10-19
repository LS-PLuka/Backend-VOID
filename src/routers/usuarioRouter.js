import express from 'express'

// Importando Controllers
import { createUsuarioController } from '../controllers/usuario/createUsuarioController.js'
import { listUsuarioController } from '../controllers/usuario/listUsuarioController.js'
import { getByIdUsuarioController } from '../controllers/usuario/getByIdUsuarioController.js'
import { editUsuarioController } from '../controllers/usuario/editUsuarioController.js'
import { deleteUsuarioController } from '../controllers/usuario/deleteUsuarioController.js'
import { loginUsuarioController } from '../controllers/usuario/loginUsuarioController.js'

// Importando Middleware de Autenticação
import { authMiddleware } from '../middlewares/auth.js'

// Criando Rotas
const router = express.Router()

router.post('/', createUsuarioController)
router.post('/login', loginUsuarioController)

// Rotas protegidas (token JWT)
router.get('/', authMiddleware, listUsuarioController)
router.get('/:id', authMiddleware, getByIdUsuarioController)
router.put('/:id', authMiddleware, editUsuarioController)
router.delete('/:id', authMiddleware, deleteUsuarioController)

export default router
