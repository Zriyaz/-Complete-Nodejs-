const express=require('express')

const app=express()
app.use('/static', express.static('public'))
  
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/main.html')
  console.log(req.params)
})
app.get('/user/:id?' , (req,res)=>{
  if(req.params.id===undefined){
    res.send("All data Accessed")
  }
  res.send('<h1>hello user</h1>'+ req.params.id)
})
app.get('/flight/:From?.:To?',(req,res)=>{
  console.log(req.params)
  res.send("<h1>Search for flights</h1>"+"From:"+req.params.From +"To:"+req.params.To)
})
app.listen(3000,()=>console.log('Server running on...3000'))