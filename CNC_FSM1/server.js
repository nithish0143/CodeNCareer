const express=require('express')
const server=express()
server.use(express.json())

server.get('/hello',(req,res)=>{
    return res.json({msg:"Hello World"})
})

server.listen(2000,()=>console.log('listening'))