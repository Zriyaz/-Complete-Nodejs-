const fs=require('fs')
const http=require("http")
const server=http.createServer(function(req,res){

//file read method
fs.readFile(__dirname +"/public/hello.txt","utf8",(err,data)=>{
  res.writeHead(200,{"content-type":"text/plain"})
  res.write(data)
  res.end()
  
})
}).listen(3000,()=>console.log("Server running on port 3000"))

//file deletion method
/*fs.unlink(__dirname+"/public/hello.txt",(err,data)=>{
  if(arr) throw err
  console.log("file deleted")
})*/