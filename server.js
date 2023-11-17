const express=require("express")
const mongoose=require("mongoose")
const Userdata=require('./models/userdatas')
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/users')

app.post('/register',(req,res)=>{
    Userdata.create(req.body)
    .then(registers=>res.json(registers))
    .catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    Userdata.findOne({email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("Invalid Email")
        }
    })
})

app.listen(3003,()=>console.log("Server is running"))