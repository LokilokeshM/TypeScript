let Square = "Surface Area of a square ";

let Rectangle = "Surface Area of a Rectangular "; 

let Triangle ="Surface Area of a Triangle"; 

//Math.round(num * 100) / 100
//numb.toFixed(2);
let a:number = 10.555;
let b:number = 24.155;
let c:number = 10.565;
let h:number = 20.155;

let square = 6*a*a;
let rectangle= 2*a*b + 2*b*c + 2*a*c;
let triangle = a*b + 3*b*h;
console.log(Square + " "+ square.toFixed(2));
console.log(Rectangle + " " + rectangle.toFixed(2));
console.log(Triangle + " " + triangle.toFixed(2));
