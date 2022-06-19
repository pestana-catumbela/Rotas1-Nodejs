const Express = require('express')
const AppRotas1 = Express()
const userRoutes = require('./userRoutes')

AppRotas1.use('/', userRoutes)

AppRotas1.listen(3000, () => {
    console.log("Servidor rodando...")
})