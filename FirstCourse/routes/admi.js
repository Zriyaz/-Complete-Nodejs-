
const express= require('express')
const router = express.Router()
const path = require('path')
const rootDir=require('../util/path')

const products =[]


router.get('/add-product',(req,res,next)=>{
  /*res.sendFile(path.join(__dirname, '../','view','add-product.html'))*/
  res.sendFile(path.join(rootDir,'view','add-product.html'))
})

router.post('/product',(req,res,next)=>{
  //console.log(req.body)
  products.push({title: req.body.title})
  console.log('Admin is Running....')
  res.redirect('/')
})

exports.router=router
exports.products=products