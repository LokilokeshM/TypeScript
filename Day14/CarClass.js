var car = /** @class */ (function () {
    function car(carName, carClor, carEngineCapacity, NoofCylinders) {
        this.carName = carName;
        this.carColor = carClor;
        this.carEngineCapacity = carEngineCapacity;
        this.NoofCylinders = NoofCylinders;
    }
    car.prototype.StartCar = function () {
        console.log("Your Car is Running......");
    };
    car.prototype.AccelerateCar = function () {
        console.log("Acclerate Your Car......");
    };
    car.prototype.OpenCarLock = function () {
        console.log(" Your Car Losk is opened......");
    };
    car.prototype.CloseCarLock = function () {
        console.log(" Your Car locked......");
    };
    car.prototype.StopCar = function () {
        console.log(" Your Car stop Running......");
    };
    return car;
}());
var car1 = new car("Sumo", "Red", ";12L", 4);
car1.StartCar();
car1.AccelerateCar();
car1.OpenCarLock();
car1.CloseCarLock();
car1.StopCar();
