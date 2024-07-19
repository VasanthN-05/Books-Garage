const mongoose  = require('mongoose')
const { Schema } = mongoose;
//creating a schema for user 
const bookSchema = new Schema({

    bookname:{
        type : String,
        required : true
    },
    quantity:{
        type : Number,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    storename:{
        type:mongoose.Types.ObjectId, 
        ref:'store'
    }
});
const Book = mongoose.model('book',bookSchema)
module.exports = Book