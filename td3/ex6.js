var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, " is studying at ").concat(this.school, "."));
    };
    return Student;
}(Person));
var fned = new Student("youssef fned", 21, "fst");
fned.greet();
fned.study();
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.display = function () {
        console.log("This is a ".concat(this.name, "."));
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, "Circle") || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this, "Rectangle") || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var circle = new Circle(5);
console.log("Circle Area: ".concat(circle.area()));
var rect = new Rectangle(10, 5);
console.log("Rectangle Area: ".concat(rect.area()));
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.speed = 0;
    }
    Car.prototype.drive = function (distance) {
        this.speed = 60;
        console.log("The ".concat(this.model, " is driving ").concat(distance, " km at ").concat(this.speed, " km/h."));
    };
    Car.prototype.stop = function () {
        this.speed = 0;
        console.log("The ".concat(this.model, " has stopped."));
    };
    return Car;
}());
var myCar = new Car("Mclaren");
myCar.drive(150);
myCar.stop();
