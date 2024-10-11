const connection = require('../conexao/connection')

const inserir_arma = (data, tabela) => {
    let sql = `INSERT INTO ${tabela} SET ?`
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            } else 
            console.log(res)
            resolve(res)
        })
    })
}

const inserir_protecao = (data, tabela) => {
    let sql = `INSERT INTO ${tabela} SET ?`
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            } else 
            console.log(res)
            resolve(res)
        })
    })
}

const inserir_item = (data, tabela) => {
    let sql = `INSERT INTO ${tabela} SET ?`
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            } else 
            console.log(res)
            resolve(res)
        })
    })
}

module.exports = {
    inserir_arma,
    inserir_protecao,
    inserir_item
}