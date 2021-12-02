var express = require("express");
var app = express();

app.get("/", function (request, response){
response.sendFile(__dirname+"/test.html");
});

app.get("/getsum", function (request, response){
var num1 = parseInt(request.query.Num1);
var num2 = parseInt(request.query.Num2);

var sum = num1 + num2;
response.send("sum:"+sum)

});
app.listen(3001);

console.log("check at http://localhost:3001");