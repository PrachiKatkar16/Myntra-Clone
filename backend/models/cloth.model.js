const mongoose=require('mongoose')

const clothSchema=mongoose.Schema({
    category:{
        type:String,
        enum:["Mens","Womens","Child","Home&Living","Beauty","Studio"],
        required:true
    },
    title:{
        type:String,
        required:true
    },
    brand:{
        type:String
    },
    discounted_price:{
        type:String
    },
    sizes:{
        type:[String],
        required:true
    },
    strike_price:{
        type:String
    },
    discount:{
        type:String
    },
    rating:{
        type:String
    },
    rating_count:{
        type:String
    },
    images:{
        type:String,
    }
})
const ClothModel=mongoose.model('Cloth',clothSchema);
module.exports=ClothModel;