const fs = require("fs");
//1: create a forlder named it Ranjeet
//fs.mkdirSync("Ranjeet");

/*fs.mkdir('Ranjeet',(err)=>{
    console.log('folder is created');
})*/
//2: create a file in it named bio.txt and data into it.
//fs.writeFileSync("Ranjeet/bio.txt", "My name is Ranjeet Kumar yadav");
  
//by asyn fs
/*fs.writeFile('./Ranjeet/bio.txt',"my name is Ranjeet kumar",(err)=>{
    console.log("file created");
})*/


//3:Add more data into the file at the end of existing data.
//fs.appendFileSync("Ranjeet/bio.txt","  Welocme to coding world");

/*fs.appendFile("./Ranjeet/bio.txt",'  Welcome to bihar',
(err)=>{
    console.log("file data appended");
})*/


//read data without getting the buffer data at first 
//const data= fs.readFileSync("Ranjeet/bio.txt","utf-8");
//console.log(data);

/*fs.readFile('./Ranjeet/bio.txt','utf-8',(err,data)=>{
    console.log(data);
})*/

//Rename the file name to mybio.txt
//fs.renameSync("Ranjeet/bio.txt", "Ranjeet/mybio.txt");


//delete the file
//fs.unlinkSync("Ranjeet/mybio.txt");

//delete the folder
//fs.rmdirSync("Ranjeet");
