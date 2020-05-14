const fs=require("fs")
//Synchronyously Reading File data
try{
 const data=fs.readFileSync(__dirname + "/public/hello.txt","utf8")
 console.log(data)
}catch(e){
  console.log(e)
}
// Asynchronously readFile Data
/*fs.readFile(__dirname + "/public/hello.txt","utf8",(err,data)=>{
  if(err)throw err
  console.log(data)
})*/
console.log("File Ended Sucessfully...")