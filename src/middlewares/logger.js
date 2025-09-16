/* 
- Middleware que registra no console o método HTTP, o endpoint acessado
e a data/hora da requisição.
*/

export default function logger(req, res, next) {
    console.log(`${req.method} - ${req.originalUrl} ${new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'})}`)
    next()
}
