//Intersection Types
//interfaces allowed us to build up new types from other types by extending them
// TypeScript provides another construct called intersection types that is mainly 
//used to combine existing object types.

// interface Colorful {
//     color: string;
// }
// interface Circle {
//     radius: number;
// }

// type ColorfulCircle = Colorful & Circle;
// & will word fpr both and can acces every method which is added
// let x : ColorfulCircle = {color:"red",radius:20};
// console.log(x);
// console.log(x.color);
// console.log(x.radius);

// type ColorfulCircle = Colorful & Circle;
// let y : ColorfulCircle = {color:"red",radius:20};
// | will work as or but it will used for accesing the  perticuler property of x
//console.log(y);
// console.log(x.color);
// console.log(x.radius);

// function draw(circle: Colorful & Circle) {
//     console.log(`Color was ${circle.color}`);
//     console.log(`Radius was ${circle.radius}`);
// }

// // okay
// draw({ color: "blue", radius: 42 });

// // oops
// draw({ color: "red", raidus: 42 });



//Interfaces vs. Intersections
//we could use an extends clause to extend from other types, 
//and we were able to do something similar with intersections and name the 
//result with a type alias. The principle difference between the two is how 
//conflicts are handled, and that difference is typically one of the main reasons
// why you’d pick one over the other between an interface and a type alias of an 
//intersection type.



//Generic Object Types
// interface Box {
//     contents: any;
// }

// interface Box {
//     contents: unknown;
// }

// let x: Box = {
//     contents: "hello world",
// };

// // we could check 'x.contents'
// if (typeof x.contents === "string") {
//     console.log(x.contents.toLowerCase());
// }

// // or we could use a type assertion
// console.log((x.contents as string).toLowerCase());

// interface NumberBox {
//     contents: number;
// }

// interface StringBox {
//     contents: string;
// }

// interface BooleanBox {
//     contents: boolean;
// }
// function setContents(box: StringBox, newContents: string): void;
// function setContents(box: NumberBox, newContents: number): void;
// function setContents(box: BooleanBox, newContents: boolean): void;
// function setContents(box: { contents: any }, newContents: any) {
//     box.contents = newContents;
// }

//it cause a problem beacuse we have to creat diffent boxs for differnt data types 
// interface Box<Type> {
//     contents: Type;
// }
// interface StringBox {
//     contents: string;
// }

// let boxA: Box<string> = { contents: "hello" };
// console.log(boxA.contents);

// let boxC: Box<number> = { contents: 34 };
// console.log(boxC.contents);

// let boxB: StringBox = { contents: "world" };
// console.log(boxB.contents);

// type Box<Type> = {
//     contents: Type;
// };

// type OrNull<Type> = Type | null;

// type OneOrMany<Type> = Type | Type[];
// type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
//in this one OneOrManyOrNull<Type> if we add string then
// OneOrMany<string> = string | string[] this will add in OrNull<OneOrMany<Type>>
// OrNull<string | string[]> = string | string[] | null 
// let x:OneOrManyOrNull<string> = [""];
// let x:OneOrManyOrNull<string> = null;
// let x:OneOrManyOrNull<string> = "";



//TheArrayType
// function doSomething(value: Array<string>) {
//     // ...
// }

// let myArray: string[] = ["hello", "world"];

// // either of these work!
// doSomething(myArray);
// doSomething(new Array("hello", "world"));

//The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.
// function doStuff(values: ReadonlyArray<string>) {
//     // We can read from 'values'...
//     const copy = values.slice();
//     console.log(`The first value is ${values[0]}`);

//     // ...but we can't mutate 'values'.
//     values.push("hello!");
// }

//ReadonlyArray<Type> with readonly Type[].
//work same 



//Tuple Types
//tuple type is another sort of Array type that knows exactly how many elements it contains, 
//and exactly which types it contains at specific positions.
// function doSomething(pair: [string, number]) {
//     const a = pair[0];


//     const b = pair[1];

//     // ...
//   }

//   doSomething(["hello", 42]);
// function doSomething(stringHash: [string, number]) {
//     const [inputString, hash] = stringHash;

//     console.log(inputString);


//     console.log(hash);
// }


//The typeof type operator
// console.log(typeof "Hello world");
// let s = "hello";
// let n: typeof s;
// type Predicate = (x: unknown) => boolean;
// type K = ReturnType<Predicate>;
//returnType<T>. It takes a function type and produces its return type:
// function f() {
//     return { x: 10, y: 3 };
//   }
//   type P = ReturnType<f>;
//   function f() {
//     return { x: 10, y: 3 };
//   }
//   type P = ReturnType<typeof f>;
//let shouldContinue: typeof msgbox("Are you sure you want to continue?");