import express from 'express'

const app = express()
const port = 3333

app.use(express.json())

//Teste de Server
app.listen(port, () => {
  console.log(`API Rodando em http://localhost:${port}`)  
})

// Importando Routers
import usuarioRouter from './routers/usuarioRouter.js'
import marcaRouter from './routers/marcaRouter.js'
import produtoRouter from './routers/produtoRouter.js'
import sacolaRouter from './routers/sacolaRouter.js'

// Usando Routers
app.use('/usuarios', usuarioRouter)
app.use('/marcas', marcaRouter)
app.use('/produtos', produtoRouter)
app.use('/sacolas', sacolaRouter)
