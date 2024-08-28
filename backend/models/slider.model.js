const mongoose=require('mongoose')

const sliderSchema=mongoose.Schema({
    imgUrl:{
        type:String,
        required:true
    },
    altName:{
        type:String
    },
    category:{
        type:String,
        enum:["homepage-slider","biggest-deal","categories-to-bag","shopbycategory"]
    }
})

const SliderModel=mongoose.model('Slider',sliderSchema)
module.exports=SliderModel;