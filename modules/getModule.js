const connection = require('../conexao/connection')

const consultar_arma = () => {
    let sql = "SELECT * FROM weapon"
    
    return new Promise((resolve, reject) => {
        connection.query(sql, {}, (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            }
            console.log(res)
            resolve(res)
        })
    })
}

const consultar_protection = () => {
    let sql = "SELECT * FROM protection"
    
    return new Promise((resolve, reject) => {
        connection.query(sql, {}, (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            }
            console.log(res)
            resolve(res)
        })
    })
}

const consultar_item = () => {
    let sql = "SELECT * FROM item"
    
    return new Promise((resolve, reject) => {
        connection.query(sql, {}, (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            }
            console.log(res)
            resolve(res)
        })
    })
}

module.exports = {
    consultar_arma,
    consultar_protection,
    consultar_item,
}