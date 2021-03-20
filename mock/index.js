const admin = require("./data/admin_login.json")
const vip = require("./data/vip_login.json")
const express = require('express')
const app = express()
const url = require("url")

app.get('/login',(req,res)=>{
    const user = url.parse(req.url,true).query.user
    if(user=='admin'){
        res.send(admin)
    }else{
        res.send(vip)
    }
})

app.listen(3300,()=>{
    console.log('服务器运行在http://localhost:3300')
})