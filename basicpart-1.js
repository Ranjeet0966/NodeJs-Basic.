const fs = require("fs");
//1: create a forlder named it Ranjeet
//fs.mkdirSync("Ranjeet");

//2: create a file in it named bio.txt and data into it.
//fs.writeFileSync("Ranjeet/bio.txt", "My name is Ranjeet Kumar yadav");

//3:Add more data into the file at the end of existing data.
//fs.appendFileSync("Ranjeet/bio.txt","  Welocme to coding world");

//read data without getting the buffer data at first 
//const data= fs.readFileSync("Ranjeet/bio.txt","utf-8");
//console.log(data);

//Rename the file name to mybio.txt
//fs.renameSync("Ranjeet/bio.txt", "Ranjeet/mybio.txt");

//
//fs.unlinkSync("Ranjeet/mybio.txt");

// delete both the file and the folder
fs.rmdirSync("Ranjeet");