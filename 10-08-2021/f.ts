// declare function map<T, U>(ts: T[], f: (t: T) => U): U[];
// let sns = map([1,2,3],(n) => n);
// console.log(sns)
// console.log("ds")
type Shape = {
    val: string;
}
interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PaintOptions) {
    // ...
}

const shape = getShape();
function getShape() {
    console.log("hello")
}
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });