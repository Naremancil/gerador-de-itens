const getModule = require('../modules/getModule')
const postModule = require('../modules/postModule')
const updateModule = require('../modules/updateModule')
const deleteModule = require('../modules/deleteModule')

const getting = (tipo) => {
    switch (tipo){
        case "weapon":    
            return getModule.consultar_arma()
            
        case "protection":
            return getModule.consultar_protection()
            
        case "item":
            return getModule.consultar_item()
        default: null
    }
}

const putting = (req, tipo) => {
    switch (tipo){
        case "weapon":    
            return postModule.inserir_arma(req, tipo)
            
        case "protection":
            return postModule.inserir_protecao(req, tipo)
            
        case "item":
            return postModule.inserir_item(req, tipo)
        default: null
    }
}

const updating = (data, id, tipo) => {
    switch (tipo){
        case "weapon":
            return updateModule.update_arma(data, id)
            
        case "protection":
            return updateModule.update_protecao(data, id)
            
        case "item":
            return updateModule.update_item(data, id)
        default: null
    }
}

const deleting = (id, tipo) => {
    switch (tipo){
        case "weapon":    
            return deleteModule.deletar_arma(id)
            
        case "protection":
            return deleteModule.deletar_protecao(id)
            
        case "item":
            return deleteModule.deletar_item(id)
        default: null
    }
}

module.exports = {
    getting, 
    putting, 
    deleting, 
    updating
}