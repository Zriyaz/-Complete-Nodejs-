const express=require('express')
const app=express()
app.use('/static', express.static('public'))

const validation = (req,res, next)=>{
  console.log('middleware Working')
  next()
}
const userValidation = (req,res, next)=>{
  if(req.params.userName=='Riyaz'){
    res.send('<h1> Valid User:</h1>')
  }
  res.send('<h1>Invalid User:')
  next()


  console.log('User Validaton middleware Working '+req.params.userName)
  next()
}

//app.use(validation)

app.get('/',validation,(req,res)=>{
  res.send("<h1>Hello</h1>")
})

app.get('/user/:userName',userValidation,(req,res,next)=>{
  res.send("<h1>Users: </h1>")
})
app.listen(3000,()=>console.log('Server running on...3000'))