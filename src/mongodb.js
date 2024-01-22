const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://adil75way:adil786@cluster0.0bjdxrg.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongo connected")
})
.catch(()=>{
    console.log("failed to connected")
})


const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    hobbies:[{
        type:String,
        required:true,
    }],
    Gender:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",loginSchema)
module.exports=collection