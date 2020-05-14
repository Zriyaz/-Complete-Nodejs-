const events=require("events")
const event = new events.EventEmitter()

event.on('Click',(e,a,b)=>{console.log(a+b)})
event.emit('Click',"My Event",2,5)
