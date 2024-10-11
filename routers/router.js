const { Router } = require('express')
const Controller = require('../controllers/routeController')
const router = Router()

router.get("/weapon", (req, res) => {
    const info = Controller.getting("weapon")
    info.then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error.message))
})

router.get("/protection", (req, res) => {
    const info = Controller.getting("protection")
    info.then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error.message))
})

router.get("/item", (req, res) => {
    const info = Controller.getting("item")
    info.then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error.message))
})

router.post("/weapon", (req, res) => {
    const data = req.body
    const responde = Controller.putting(data, 'weapon')
    responde.then(response => res.status(201).json(response))
    .catch(error => res.status(201).json(error.message))
})

router.post("/protection", (req, res) => {
    const data = req.body
    const responde = Controller.putting(data, 'protection')
    responde.then(response => res.status(201).json(response))
    .catch(error => res.status(201).json(error.message))
})

router.post("/item", (req, res) => {
    const data = req.body
    const responde = Controller.putting(data, 'item')
    responde.then(response => res.status(201).json(response))
    .catch(error => res.status(201).json(error.message))
})

router.put("/weapon/:id", (req, res) => {
    const data = req.body
    const info = req.params.id

    const responde = Controller.updating(data, info, 'weapon')
    responde.then(response => res.status(200).json(response))
    .catch(error => res.status(404).json(error.message))
})

router.put("/protection/:id", (req, res) => {
    const data = req.body
    const info = req.params.id

    const responde = Controller.updating(data, info, 'protection')
    responde.then(response => res.status(200).json(response))
    .catch(error => res.status(404).json(error.message))
})

router.put("/item/:id", (req, res) => {
    const data = req.body
    const info = req.params.id

    const responde = Controller.updating(data, info, 'item')
    responde.then(response => res.status(200).json(response))
    .catch(error => res.status(404).json(error.message))
})

router.delete("/weapon/:id", (req, res) => {
    const info = req.params.id
    
    const responde = Controller.deleting(info, 'weapon')
    responde.then(response => res.status(200).json(response))
    .catch(error => res.status(400).json(error.message))
})

router.delete("/protection/:id", (req, res) => {
    const info = req.params.id

    const responde = Controller.deleting(info, 'protection')
    responde.then(response => res.status(200).json(response))
    .catch(error => res.status(400).json(error.message))
})

router.delete("/item/:id", (req, res) => {
    const info = req.params.id
    
    const responde = Controller.deleting(info, 'item')
    responde.then(response => res.status(200).json(response))
    .catch(error => res.status(400).json(error.message))
})

module.exports = router