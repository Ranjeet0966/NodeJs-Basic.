const path = require('path');

console.log(path.dirname('C:/Users/CODER/Desktop/NodeJs-basic/PathMOdule/path.js'));
console.log(path.extname('C:/Users/CODER/Desktop/NodeJs-basic/PathMOdule/path.js'))
console.log(path.basename('C:/Users/CODER/Desktop/NodeJs-basic/PathMOdule/path.js'))

//console.log(path.parse('C:/Users/CODER/Desktop/NodeJs-basic/PathMOdule/path.js'));

//for access property one by one
const myPath = path.parse('C:/Users/CODER/Desktop/NodeJs-basic/PathMOdule/path.js');
console.log(myPath.name);
console.log(myPath.root);
