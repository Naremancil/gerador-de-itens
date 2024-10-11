const connection = require("../conexao/connection")

const update_arma = (info, id) => {
    const sql = `UPDATE weapon SET ? WHERE id = ?`

    return new Promise((resolve, reject) => {
        connection.query(sql, [info, id], (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            } else
            console.log(res)
            resolve(res)
        })
    })
}

const update_protecao = (info, id) => {
    const sql = `UPDATE protection SET ? WHERE id = ?`

    return new Promise((resolve, reject) => {
        connection.query(sql, [info, id], (error, res) => {
            if(error){
                console.log(error)
                reject(error)
            } else
            console.log(res)
            resolve(res)
        })
    })
}

const update_item = (info, id) => {
    const sql = `UPDATE item SET ? WHERE id = ?`

    return new Promise((resolve, reject) => {
        connection.query(sql, [info, id], (error, res) => {
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
    update_arma,
    update_protecao,
    update_item
}