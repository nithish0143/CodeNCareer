const express=require('express')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud')
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))

//model defining
const crudSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
})

const crud=mongoose.model('data',crudSchema)

//create
app.post('/create',async(req,res)=>{
    const {title,text}=req.body
    if(!text||!title){
        return res.json({msg:"empty input"})
    }
    try{
        const data=new crud({title:title,text:text})
        await data.save()
        return res.json({msg:"text added"})
    }catch(err){
        console.log(err)
    }
})

//update
app.put('/update',async(req,res)=>{
    const {preTitle,title,upt}=req.body
    if(!preTitle|| !title||!upt){
        return res.json({msg:"give present and updated text"})
    }
    try{
        let data=await crud.findOne({title:preTitle})
        data.text=upt
        data.title=title
        await data.save()
        return res.json({msg:'updated'})
    }catch(err){
        console.log(err)
    }
})

//read
app.get('/read',async(req,res)=>{
    try{
        const data=await crud.find({})
        if(!data){
            return res.json({msg:'crud empty'})
        }
        return res.json({data:data})
    }catch(err){ console.log(err) }
})

//delete
app.delete('/delete',async(req,res)=>{
    const {title}=req.body
    if(!title){
        return res.json({msg:'enter title'})
    }
    try{
        const data=await crud.findOneAndDelete({title:title})
        if(!data){
            return res.json({msg:'no data found'})
        }
        return res.json({msg:'deleted'})
    }catch(err){console.log(err)}
})



app.listen(2000,()=>console.log('server is listening on port 2000'))