const connection = require("../conexao/connection")

const deletar_arma = (id) => {
    const sql = `DELETE FROM weapon WHERE id=${id}`

    return new Promise((resolve, reject) => {
        connection.query(sql, {}, (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            } else
            console.log(res)
            resolve(res)
        })
    })
}

const deletar_protecao = (id) => {
    const sql = `DELETE FROM protection WHERE id=${id}`

    return new Promise((resolve, reject) => {
        connection.query(sql, {}, (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            } else
            console.log(res)
            resolve(res)
        })
    })
}

const deletar_item = (id) => {
    const sql = `DELETE FROM item WHERE id=${id}`

    return new Promise((resolve, reject) => {
        connection.query(sql, {}, (error, res) => {
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
    deletar_arma,
    deletar_protecao,
    deletar_item
}