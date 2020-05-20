const express= require('express')

const router = express.Router()

router.get('/add-product',(req,res,next)=>{
  res.send('<form action="/admi/add-product" method="POST"><input type="text" name="title"><button type="submit">add</button></form>')
})

router.post('/product',(req,res,next)=>{
  console.log(req.body)
  console.log('Admin is Running....')
  res.redirect('/')
})

module.exports=router