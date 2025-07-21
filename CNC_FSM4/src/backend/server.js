import express from 'express'
import cors from 'cors'
const app=express()
app.use(express.json())
app.use(cors())
const port=3000

app.get('/welcome/:name',(req,res)=>{
    const name=req.params.name || 'no one'
    console.log(name)
    return res.json({msg:`hello ${name}, from server`})
})


app.listen(port,()=>console.log('app is listening'))