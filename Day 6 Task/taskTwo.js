class Circle {
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }

    getArea(){
        // Area of a circle = π * r^2
    console.log( Math.PI * Math.pow(this.radius, 2));
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    getCircumstance(){
        // Circumference of a circle = 2 * π * r
        return 2 * Math.PI * this.radius;
    }
    setColor(newColor) {
        // Set the color of the circle
        this.color = newColor;
    }

    setRadius(newRadius) {
        // Set the radius of the circle
        this.radius = newRadius;
    }
    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
}

let circle = new Circle();

console.log("***************************circle properties*****************************************");

console.log(circle);
console.log("************************radius********************************************");
console.log(circle.getRadius());
console.log("***************************color*****************************************");
console.log(circle.getColor());
console.log("*************************changed radius and color*******************************************");
let circle3 = new Circle(6,'yellow');
console.log(circle3);
console.log("***************set color and set radius*****************************************************");
circle.setColor('blue');
circle.setRadius(2);

console.log(circle);
console.log("********************toString************************************************");
console.log(circle.toString());
console.log("*********************Area***********************************************");
circle.getArea();
console.log("***********************Circumstances*********************************************");
console.log(circle.getCircumstance());

console.log("*********************Area of changed radius***********************************************");
let circle2 = new Circle(4);
console.log(circle2);
circle2.getArea();





