
x = 50, y= 50;
const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

class Polygon {
    constructor(w=10, h=10){
        this.width = w;
        this.height = h;
    }
    getArea(){
        return this.width * this.height;
    }
    drawShape()
    {
        drawRect(this.width, this.height);
        x=x+this.width+20
    }
}

class Rectangle extends Polygon{
    constructor(width, height){
        super(width, height);
    }
    toString(){
        return `The rectangle has width: ${this.width}, height: ${this.height} and its area = ${this.getArea()}`
    }
}
class Square extends Polygon{
    constructor(line){
        super(line, line)
    }
    toString(){
        return `The square has sides of: ${this.width} cm and its area = ${this.getArea()}`
    }
}
class Triangle extends Polygon{
    constructor(base, height){
        super(base, height)
    }
    getArea(){
        return 0.5*this.width * this.height;
    }
    toString(){
        return `The triangle has base of: ${this.width}, height: ${this.height} and its area = ${this.getArea()}`
    }
    drawShape(){
        drawTriangle(new Point(x, y+this.height), new Point(x+this.width, y+this.height), new Point(x+0.5* this.width, y) )
        x=x+2*this.width
    }
}
class Circle extends Polygon{
    constructor(radius){
        super(radius, radius)
    }
    getArea(){
        return this.height* this.height* Math.PI
    }
    toString(){
        return `The circle has radius of: ${this.width} and its area = ${this.getArea().toFixed(2)}`
    }
    drawShape(){
        drawCircle(this.width)
    }
}
class Point{
    constructor(x, y){
        this.x = x, this.y = y
    }
}

function drawRect(width = 50, height=50) {
    if (canvas.getContext) {
      ctx.strokeRect(x, y, width, height);
    //   ctx.fillRect(x, y, width, height);
    //   ctx.strokeRect(100, 100, 50, 50);
    }
}

function drawTriangle(point1, point2, point3, filled) {
    ctx.beginPath();
    ctx.moveTo(point1.x, point1.y);
    ctx.lineTo(point2.x, point2.y);
    ctx.lineTo(point3.x, point3.y);
    ctx.closePath();
    filled ? ctx.fill() : ctx.stroke();
}
function drawCircle(radius){
    ctx.beginPath();
    ctx.arc(x, y+radius, radius, 0, 2 * Math.PI);
    ctx.stroke(); 
}


var square = new Square(60);
console.log(square.toString());
square.drawShape();
var rect = new Rectangle(70, 25);
console.log(rect.toString());
rect.drawShape();
var triangle = new Triangle(50,30);
console.log(triangle.toString());
triangle.drawShape();
var circle = new Circle(30);
console.log(circle.toString());
circle.drawShape();

