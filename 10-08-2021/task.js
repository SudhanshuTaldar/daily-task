//union 
// function start(
//     arg: string | string[] | (() => string) | { s: string }
// ): string {
//     // this is super common in JavaScript
//     if (typeof arg === "string") {
//         return commonCase(arg);
//     } else if (Array.isArray(arg)) {
//         return arg.map(commonCase).join(",");
//     } else if (typeof arg === "function") {
//         return commonCase(arg());
//     } else {
//         return commonCase(arg.s);
//     }
var sns = map(function (n) { return n.toString(); }, [1, 2, 3]);
console.log(sns);
