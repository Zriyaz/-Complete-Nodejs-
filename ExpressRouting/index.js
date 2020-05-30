const express =require('express')
const app =express()
const path =require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


//define path  for express config
const staticdir = path.join(__dirname,'./public')
const viewspath = path.join(__dirname,'./templates/views')
const partialPath = path.join(__dirname,'./templates/partials')


//setup handlerbars engine and view location   
app.set('view engine', 'hbs')
app.set('views',viewspath)
hbs.registerPartials(partialPath)
//setup static directries tio serve
app.use(express.static(staticdir))


app.get('',(req,res)=>{
  res.render('index',{
    title: 'Weather Application',
    name: 'Md Riyaz Ansari'
  })
})
app.get('/about', (req,res)=>{
  res.render('about',{
    title: 'Weather Application',
    name : 'Md Riyaz Ansari'
  })
})
app.get('/contact',(req,res)=>{
  res.render('contact',{
    name:'Md Riyaz Ansari',
    title:'Weather Application',
    mob:9708855861
  })
})
app.get('/weather',(req,res)=>{
  if(!req.query.address){
    return res.send({
      error:'You must provides an address'
    })
  }
    geocode(req.query.address,(error,{latitude,longitude, location})=>{
      if(error){
        return res.send({error}) 
      }
      forecast(latitude, longitude, (error, forecastData)=>{
        if(error){
          return res.send({error})
        }
        res.send({
          forecast:forecastData,
          location,
          address:req.query.address

        })
      })
    })
})

app.get('/about/*',(req,res)=>{
 res.render('404',{
   title: '404',
   name: 'Md Riyaz Ansari',
   errorMessage:'Page article not found.!!'
 })  
})
app.get('/products',(req,res)=>{
  if(!req.query.search){
    return res.send({
      error:'you must provides a search term'
    })
  }
  console.log("output : ",req.query.search)
  res.send({
    products:[]
  })
})
app.get('*',(req,res)=>{
 res.render('404',{
   title: '404',
   name: 'Md Riyaz Ansari',
   errorMessage:'page not found.!'
 })  
})
 
app.listen(3000,()=>console.log('Server is running...'))