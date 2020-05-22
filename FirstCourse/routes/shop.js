const path=require('path')
const express=require('express')

const router=express.Router()
const rootDir=require('../util/path')

const adinData=require('./admi')

router.get('/', (req,res)=>{
  console.log('Shop page running....')
  console.log(adinData.products)
  res.sendFile(path.join(rootDir,'view','shop.html'))
  //res.send('<h1>Shop is running</h1>')
}) 
module.exports=router