var fs = require('fs');
var string  = fs.readFileSync("text1.txt")

function change(str){
    var ogstr = str.toString();
    var str = ogstr.replace(/[aeiou]/ig,"");
    return str;
}
var res = change(string);
fs.writeFileSync("text2.txt",res.toString());