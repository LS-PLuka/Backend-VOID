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

// Usando Routers
app.use('/usuarios', usuarioRouter)
