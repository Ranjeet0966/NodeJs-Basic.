const fs = require('fs')

/*fs.writeFile('read.txt',"Today is friday" ,(err)=>{
console.log("file is completed");
console.log(err);
});*/

//about Async fs-
//we pass them a function as an argument - a callback - that gets called when that task completes.

//The callback has an argument that tells you whether the operation completed successfully.
//Now we need to say what to do when fs.writeFile has completed(even if it's nothing), and start checking for errors.


/*fs.appendFile('read.txt','Welcome to bihar',()=>{
    console.log('completed');
})*/

//fs.readFile('read.txt','utf-8',(err,data)=>{
  //  console.log(data);
//})


