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

//     function commonCase(s: string): string {
//         // finally, just convert a string to another string
//         return s;
//     }
// }

// console.log(start("hello"));
// console.log(start(["as","23"]));
// console.log(start(()=>{return "fds"}))
// console.log(start({s:"sd"}));

//Intersections
// type Combined = { a: number } & { b: string };
// let x:Combined = {a:23, b:"fsd"}
// console.log(x);

//unit types
// declare function hello():any{
//     console.log("hello")
// };
//declare function pad(s: string, n: number, direction: "left" | "right"): string;
//     return direction;
// };
//pad("hi", 10, "left");

//Contextual typing
// function map<T, U>(f: (t: T) => U, ts: T[]): U[];
// let sns = map((n) => n.toString(), [1, 2, 3]);
// console.log(sns);

//Discriminated Unions
// type Shape =
//     | { kind: "circle"; radius: number }
//     | { kind: "square"; x: number }
//     | { kind: "triangle"; x: number; y: number };

// function area(s: Shape) {
//     if (s.kind === "circle") {
//         return Math.PI * s.radius * s.radius;
//     } else if (s.kind === "square") {
//         return s.x * s.x;
//     } else {
//         return (s.x * s.y) / 2;
//     }
// }

// function height(s: Shape) {
//     if (s.kind === "circle") {
//         return 2 * s.radius;
//     } else {
//         // s.kind: "square" | "triangle"
//         return s.x;
//     }
// }

//type Parameters
// function firstish<T extends { length: number }>(t1: T, t2: T): T {
//     return t1.length > t2.length ? t1 : t2;
// }

// Module system
// JavaScript’s modern module syntax is a bit like Haskell’s, except that
//any file with import or export is implicitly a module

//readonly and const
// const a = [1, 2, 3];
// a.push(102); // ):
// a[0] = 101; // D:

// interface Rx {
//     readonly x: number;
// }
// let rx: Rx = { x: 1 };
// rx.x = 12; // error

// interface X {
//     x: number;
// }
// let rx: Readonly<X> = { x: 1 };
// rx.x = 12; // error

//Static type-checking
// const message = "hello!";

// message();

//Non-exception Failures
// const user = {
//     name: "Daniel",
//     age: 26,
//   };
//   user.location; // returns undefined

//how tp run ts file


//in the Everyday Types => The primitives:string,number, and boolean, Arrays, any, 
//Type Annotations on Variables, Functions
//String, Number, Boolean, Array
// let a: string = "hello";
// let b: number = 34;
// let ar: number[] = [2, 23, 32];//can not add other data type 
// let a2: any[] = ["asd", undefined, null, 23, 32];//can add other data type 

// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
//obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;


//When you don’t specify a type, and TypeScript can’t infer 
//it from context, the compiler will typically default to any.
// function fn(s) {
//     // it will show the error
//     console.log(s.subtr(3));
// }
// fn(42);


//sometime we dont want to add data type depending upon the declared value to
//the variable it will use that data type
//let st = "hello";

//function type
//we can add the data type as arguments which we want to use
//also we can add return type which we want to add
// function greet(name: number): number {
//     return name;
// }
// greet(12);


//Anonymous Functions
// No type annotations here, but TypeScript can spot the bug
//const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
// names.forEach(function (s) {
//     // console.log(s.toUppercase());
// });

// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//     console.log(s.toUpperCase());
// });

// //Object Types
// // The parameter's type annotation is an object type
// function printCoord(pt: { x: string; y: number }) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: "hello", y: 7 });

//Optional Properties
//use ? as optional 


// function printName(obj: { first: string; last?: string }) {
//     // Error - might crash if 'obj.last' wasn't provided!
//     console.log(obj.last.toUpperCase());

//     if (obj.last !== undefined) {
//         // OK
//         console.log(obj.last.toUpperCase());
//     }

//     // A safe alternative using modern JavaScript syntax:
//     console.log(obj.last?.toUpperCase());
// }

// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });