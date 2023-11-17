const mongoose=require("mongoose")

const userDetails=new mongoose.Schema({
    email:String,
    password:String
})
const userdetail=mongoose.model("userdata",userDetails)
module.exports=userdetail