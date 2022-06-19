const Express = require('express')
const Rotas = Express.Router()

Rotas.get('/usuario', function(req, res){
    res.send("LISTA DE USUÁRIOS")
})

Rotas.post('/usuario', function(req, res){
    res.send("INSERIR NOVO USUÁRIO")
})

Rotas.put('/usuario/:id', function(req, res){
    res.send(`ALTERAR USUÁRIO ${req.params.id}`)
})

Rotas.delete('/usuario/:id', function(req, res){
    res.send(`DELETAR USUÁRIO ${req.params.id}`)
})

module.exports = Rotas