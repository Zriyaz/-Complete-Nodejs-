const http=require("http")


const server=http.createServer((req,res)=>{
  
  res.setHeader('Content-type','text/html')
  //console.log(req.url,req.method,req.header)
  //process.exit()
  res.write('<html>')
   res.write('<head><title>My first page</title></head>')
   res.write('<body><h1>Hi I am Riyaz</h1></body>')
  res.write('</html>')
  res.end()

  })
server.listen(3000)