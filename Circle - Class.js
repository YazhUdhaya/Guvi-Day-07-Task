// Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    Circle(){
        return `This is Circle`;
    }
    Circle(radius){
        return this.radius;
    }
    Circle(radius,color){
        return this.radius,this.color;
    }
    getRadius(){
        return `The circle of radius is ${this.radius}`;
    }
    setRadius(newradius){
        return `New Radius is ${this.radius = newradius}`;
    }
    getColor(){
        return `The circle color is ${this.color}`;
    }
    setColor(newcolor){
        return `New Color is ${this.color = newcolor}`;
    }
    getArea(){
        return `The Circle of the Area is ${Number(Math.PI*Math.pow(this.radius,2))}`;
    }
    getCircumference(){
        return `The Circumferenec of the Circle is ${2*Math.PI*this.radius}`;
    }
}

let newCircle = new Circle(5,"red");
console.log(newCircle.getRadius());
console.log(newCircle.setRadius(10));
console.log(newCircle.getRadius());
console.log(newCircle.getColor());
console.log(newCircle.setColor("yellow"));
console.log(newCircle.getColor());
console.log(newCircle.getArea());
console.log(newCircle.getCircumference());