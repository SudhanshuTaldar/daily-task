
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

