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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.display = function () {
        console.log(this.name + this.carModelNum);
    };
    Car.prototype.StartCar = function () {
        console.log("Your car is Started......");
    };
    Car.prototype.StopCar = function () {
        console.log("Your car is Stoped......");
    };
    return Car;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(name, carModelNum) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.carModelNum = carModelNum;
        return _this;
    }
    return SUV;
}(Car));
var HatchBack = /** @class */ (function (_super) {
    __extends(HatchBack, _super);
    function HatchBack(name, carModelNum) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.carModelNum = carModelNum;
        return _this;
    }
    return HatchBack;
}(Car));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(name, carModelNum) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.carModelNum = carModelNum;
        return _this;
    }
    return Sedan;
}(Car));
var cars = new SUV("SUV", 5446);
cars.display();
cars.StartCar();
cars.StopCar();
var cars1 = new HatchBack("HatchBack", 5446);
cars1.display();
cars1.StartCar();
cars1.StopCar();
var cars2 = new Sedan("Sedan", 5446);
cars2.display();
cars2.StartCar();
cars2.StopCar();
