var fs = require("fs");
var data = fs.readFileSync('input.js');

console.log(data.toString());

console.log("Program Ended");
var main = data.toString();
fs.writeFileSync("op.JSON",JSON.stringify(main))
// console.log(JSON.stringify(main));