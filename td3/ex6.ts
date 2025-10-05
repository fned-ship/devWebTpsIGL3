class Person {
    constructor(public name: string, private age: number) {}

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    getAge(): number {
        return this.age;
    }
}

class Student extends Person {
    constructor(name: string, age: number, public school: string) {
        super(name, age);
    }

    study(): void {
        console.log(`${this.name} is studying at ${this.school}.`);
    }
}

const fned = new Student("youssef fned", 21, "fst");
fned.greet();   
fned.study();   




abstract class Shape {
    constructor(public name: string) {}

    abstract area(): number;

    display(): void {
        console.log(`This is a ${this.name}.`);
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super("Circle");
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super("Rectangle");
    }

    area(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
console.log(`Circle Area: ${circle.area()}`);

const rect = new Rectangle(10, 5);
console.log(`Rectangle Area: ${rect.area()}`);




interface Drivable {
    speed: number;
    drive(distance: number): void;
}

class Car implements Drivable {
    public speed: number = 0;

    constructor(private model: string) {}

    drive(distance: number): void {
        this.speed = 60; 
        console.log(`The ${this.model} is driving ${distance} km at ${this.speed} km/h.`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`The ${this.model} has stopped.`);
    }
}

const myCar = new Car("Mclaren");
myCar.drive(150); 
myCar.stop();