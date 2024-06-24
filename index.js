const express = require('express')
const morgan = require('morgan')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({extened:false}))
app.use(bodyParser.json())

app.get('/*',(req,res) => {
    res.status(200)
    res.send({success:true})
})

app.post('/*',(req,res)=>{
    res.status(300)
    console.log(req.body)
    res.send(req.body)
})

app.listen(port,()=>{
    console.log(`example app listeing in por ${port}`)
})