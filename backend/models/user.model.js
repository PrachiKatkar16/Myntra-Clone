const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }

})
const UserModel=mongoose.model('User',userSchema);
module.exports=UserModel;