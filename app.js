const express = require('express')
const app = express()
const routing = require('./routers/router')

app.use(express.json())
app.use(routing)

// Mapeamento de portas
app.listen('3000', (error) => {
    if(error){
        console.log(error)
        return;
    }
    console.log('Server iniciado!')
})