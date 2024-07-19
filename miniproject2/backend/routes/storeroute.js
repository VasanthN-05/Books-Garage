const express = require('express')
const router = express.Router()
const Store = require('../models/Store')

router.post('/register/:name', async (req, res) => {
    const name = req.params.name
    let storedetails = req.body
    storedetails.ownername = name
    const store = await Store.findOne({ phnno: req.body.phnno })
    if (store) {
        return res.status(200).send({"error":"a user with this phn no already exsists"})
    }
    const storecreated = await Store.create(storedetails)
    return res.status(200).send({ success: true, storecreated })
})

router.post('/getstore', async (req, res) => {
    try {
        const {name} = req.body
        const store = await Store.findOne({ ownername: name})
        return res.status(200).send(store)
    } catch (error) {
        return res.status(400).send(error)
    }

})

module.exports = router