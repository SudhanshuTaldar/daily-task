// function start(
//     arg: string | string[] | (() => string) | { s: string  }
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
//     function commonCase(s: string): string {
//         // finally, just convert a string to another string
//         return s;
//     }
// }
// console.log(start("hello"));
// console.log(start(["st", "1"]));
// console.log(start(() => {
//     return "hello";
// }));
// console.log(sta  rt({s:"1"}))
// type test={status:boolean};
// let t:test={status: true};
// type One = { p: string };
// interface Two {
//   p: string;
// }
// class Three {
//   p = "Hello";
// }
// let x: One = { p: "hi" };
// console.log(x)
// let two: Two = x;
// console.log(two)
// two = new Three();
// console.log(two)
//intersection
// type Combined = { a: number } & { b: string };
// let x: Combined = { a: 45, b: "kjkjj" };
// type Conflicting = { a: number } & { a: string };
// let y: Conflicting = { a: 23, a: "dsf" };
// let y: Conflicting = {a:"fdsf"};
// console.log()
// type hello = hi :[];
//
// declare function pad(s: string, n: number, direction: "left" | "right"):string;
// let x: y = 
// let x: Widget = pad("hi", 10, "left");
// declare function getWidget(n: number): Widget;
// declare function getWidget(s: string): Widget[];
// let x: Widget = getWidget(43);
// let arr: Widget[] = getWidget("all of them");
// type GreetingLike = string | (() => string) | MyGreeter;
// declare function greet(g: GreetingLike): void;
// function getGreeting() {
//     return "howdy";
// }
// class MyGreeter extends Greeter { }
// greet("hello");
// greet(getGreeting);
// greet(new MyGreeter());
//in the Everyday Types => The primitives:string,number, and boolean, Arrays, any, 
//Type Annotations on Variables, Functions
//String, Number, Boolean, Array
var a = "hello";
var b = 34;
var ar = [2, 23, 32]; //can not add other data type 
var a2 = ["asd", undefined, null, 23, 32]; //can add other data type 
var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
//obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
//When you don’t specify a type, and TypeScript can’t infer 
//it from context, the compiler will typically default to any.
function fn(s) {
    // it will show the error
    console.log(s.subtr(3));
}
fn(42);
//sometime we dont want to add data type depending upon the declared value to
//the variable it will use that data type
var st = "hello";
//function type
//we can add the data type as arguments which we want to use
//also we can add return type which we want to add
function greet(name) {
    return name;
}
greet(12);
//Anonymous Functions
// No type annotations here, but TypeScript can spot the bug
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
    // console.log(s.toUppercase());
});
// Contextual typing also applies to arrow functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
//Object Types
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: "hello", y: 7 });
//Optional Properties
//use ? as optional 
function printName(obj) {
    var _a;
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
