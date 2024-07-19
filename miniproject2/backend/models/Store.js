const mongoose = require('mongoose')
const {Schema} = mongoose


const storeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phnno:{
        type:Number,
        required:true,
    },
    flatno:{
        type:Number,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
        required:true
    },
    ownername:{
        type:String,
        required:true
    }
}
)
const Store = mongoose.model('store',storeSchema)
module.exports = Store