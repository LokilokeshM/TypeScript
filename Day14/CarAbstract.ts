abstract class Car
{
    abstract name:string;
    abstract carModelNum:number;
    display():void {
        console.log(this.name + this.carModelNum);
    }
    StartCar(){
        console.log("Your car is Started......");
    }
    StopCar(){
        console.log("Your car is Stoped......");
    }
    
}
class SUV extends Car
{
    name: string;
    carModelNum:number;
    constructor(name:string,carModelNum:number)
    {
        super();
        this.name = name;
        this.carModelNum=carModelNum;
    }
    
}
class HatchBack extends Car
{
    name: string;
    carModelNum: number;
    constructor(name:string,carModelNum:number)
    {
        super();
        this.name = name;
        this.carModelNum=carModelNum;
    }

}
class Sedan extends Car
{
    name: string;
    carModelNum: number;
    constructor(name:string,carModelNum:number)
    {
        super();
        this.name = name;
        this.carModelNum=carModelNum;
    }

}
let cars:Car = new SUV("SUV",5446);
cars.display();
cars.StartCar();
cars.StopCar();
let cars1:Car = new HatchBack("HatchBack",5446);
cars1.display();
cars1.StartCar();
cars1.StopCar();
let cars2:Car = new Sedan("Sedan",5446);
cars2.display();
cars2.StartCar();
cars2.StopCar();


 