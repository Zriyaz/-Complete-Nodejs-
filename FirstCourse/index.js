
const path =require('path')
const express=require('express')
const bodyParser = require('body-parser')
const admitRoutes=require('./routes/admi')
const srouter=require('./routes/shop')
const app=express()
const adminData=require('./routes/admi')
const shopRoutes=require('./routes/shop')
app.set('view engine','pug')
app.set('view','view')


app.use(bodyParser.urlencoded({extended:false}))

app.use(admitRoutes,adminData.router)
app.use(srouter)

app.use('/',(req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'view','404.html'))
})
app.listen(3000)
