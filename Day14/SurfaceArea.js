var Square = "Surface Area of a square ";
var Rectangle = "Surface Area of a Rectangular ";
var Triangle = "Surface Area of a Triangle";
//Math.round(num * 100) / 100
//numb.toFixed(2);
var a = 10.555;
var b = 24.155;
var c = 10.565;
var h = 20.155;
var square = 6 * a * a;
var rectangle = 2 * a * b + 2 * b * c + 2 * a * c;
var triangle = a * b + 3 * b * h;
console.log(Square + " " + square.toFixed(2));
console.log(Rectangle + " " + rectangle.toFixed(2));
console.log(Triangle + " " + triangle.toFixed(2));
