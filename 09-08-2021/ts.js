//let fst: (a: any, b: any) => any = (a, b) => a;
// let fst: <T, U>(a: T, b: U) => T = (a, b) => a;
// console.log(fst<number,number>(23,23));
var obj = [{
        id: 2,
        name: "Karan"
    },
    {
        id: 1,
        name: "Aakash"
    }];
// var obj[2][2] = {
//     {
//         name: "Aakash"
//     },
//     {
//         name: "Karn"
//     }
// };
var o = { n: 1, xs: obj };
console.log(o.xs[0]["id"]);
console.log(o.xs[0]["name"]);
console.log(o.xs[1]["id"]);
console.log(o.xs[1]["name"]);
// console.log(o.xs[0][0]["id"]);
// console.log(o.xs[0][0]["name"]);
// console.log(o.xs[0][1]["id"]);
// console.log(o.xs[0][1]["name"]);
// console.log(o.xs[0]["name"]);
// const obj = { name: "Aman", id: 10 };
// //console.log(obj.id);
// let o: (b: object) => object = (b) => {  return b["id"]; }
// console.log(o(obj));
