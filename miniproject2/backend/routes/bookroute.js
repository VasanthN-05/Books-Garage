const express = require('express')
const router = express.Router()
const Book = require('../models/Books')
const { default: mongoose } = require('mongoose')

router.post('/createbook',async(req,res)=>{
    const bookdetails = req.body
    bookdetails.storename = new mongoose.Types.ObjectId(req.body.storename)
    const book = await Book.create(bookdetails)
    return res.status(200).send({success:true,book})
})
router.get('/getbooks',async(req,res)=>{
    const books = await Book.find().populate('storename')
    return res.status(200).send(books)
})
module.exports = router