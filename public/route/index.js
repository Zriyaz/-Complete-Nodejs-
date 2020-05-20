const express=require('express')
const bodyParser = require('body-parser')
const admitRoutes=require('./routes/admi')
const srouter=require('./routes/shop')
const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(admitRoutes)
app.use(srouter)

/*app.use('/',(req,res,next)=>{
  res.status(404).send('<h1>Page not found !</h1>')
})*/

app.listen(3000)
