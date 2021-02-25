class car{
    carName:string;
    carColor:string;
    carEngineCapacity:string;
    NoofCylinders:number;
    constructor(carName:string,carClor:string,carEngineCapacity:string,NoofCylinders:number)
    {
        this.carName = carName;
        this.carColor = carClor;
        this.carEngineCapacity =carEngineCapacity;
        this.NoofCylinders = NoofCylinders;
    }

    StartCar():void{
        console.log("Your Car is Running......");
    }
    
    AccelerateCar():void{
        console.log("Acclerate Your Car......");
    }
    OpenCarLock():void{
        console.log(" Your Car Lock is opened......");
    } 
    CloseCarLock():void{
        console.log(" Your Car locked......");
    }

    StopCar():void{
        console.log(" Your Car stop Running......");
    } 
}

let car1 = new car("Sumo","Red","12L",4);

car1.StartCar();
car1.AccelerateCar();
car1.OpenCarLock();
car1.CloseCarLock();
car1.StopCar();