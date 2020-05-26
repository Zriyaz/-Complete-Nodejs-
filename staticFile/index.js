const express =require('express')
const app =express()
const path =require('path')

app.set('view engine', 'hbs')
const staticdir = path.join(__dirname,'./public')


app.use(express.static(staticdir))

app.get('',(req,res)=>{
  res.render('index',{
    title: 'Weather app',
    name: 'Md Riyaz Ansari'
  })
})

app.use(express.static(staticdir))
app.use(express.static(staticdir))
app.get('/product',(req,res)=>{
  res.send('<ul><li>List<li><li>Notes</li></ul>')
})

app.listen(3000,()=>console.log('Server is running...'))