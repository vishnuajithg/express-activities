const express = require('express')
const app = express()

app.use(express.json())



app.get('/',(req,res)=>{
    res.send('book review')
})

app.post('/',(req,res)=>{
    res.send('send success')
    console.log(req.body)
})

app.listen(3000,()=>console.log('app running on 3000'))