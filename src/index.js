const express=require('express')
const app=express();
const path=require('path')
const hbs=require('hbs')
const collection=require('./mongodb');
const { copyFileSync } = require('fs');

const templatePath= path.join(__dirname,'../templates')
app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.post("/signup",async (req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password,
        Gender:req.body.Gender
    }
    await collection.insertMany([data]) 
console.log("login successfull")    
    res.render("login")
})
app.post("/login",async (req,res)=>{        
    
    try{
         const check=await collection.findOne({name:req.body.name})
        if(check.password===req.body.password){
        res.render("home")
        }
        else{
            res.send("wrong password")
        }
    }
    catch{
        res.send("wrong details")
    }
})
app.get('/users',(req,res)=>{
    const searchField=req.query.hobbies;
    collection1.find({name:{$regex: searchField,$options:'$i'}})
    .then(data=>{
        res.send(data)
    })
})
app.listen(4000,()=>{
    console.log("port connected")
})