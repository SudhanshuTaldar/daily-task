var obj = [{
    id: 2,
    name: "Karan"
},
{
    id: 1,
    name: "Aakash"
}];
var o = { n: 1, xs: obj };
console.log(o.xs[0]["id"]);
console.log(o.xs[0]["name"]);
console.log(o.xs[1]["id"]);
console.log(o.xs[1]["name"]);