const express=require('express')

const router=express.Router()
router.use(express.static('routes'))

router.get('/', (req,res,next)=>{
  console.log('Shop page running....')
  res.sendFile(__dirname +'/shop.html')
}) 

module.exports=router