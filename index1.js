class Vehicle {
    constructor(make, model, year){
        this.make= make;
        this.model=model;
        this.year=year;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, fuelType, engineSize ){
        super(make, model, year);
        this.fuelType =fuelType;
        this.engineSize= engineSize;
    }

    calculateMaxSpeed() {
        if (this.fuelType === "Gasoline"){
            return this.engineSize * 24;
        }

        else if (this.fuelType === "Electric"){
            return this.engineSize *30;
        }
    }
    calculateMilesPerGallon(){
        if (this.fuelType === "Gasoline"){
            return this.engineSize * 30;
        }
        else if (this.fuelType === "Electric"){
            return this.engineSize * 38;
        }
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year, engineType){
        super(make, model, year)
            this.engineType = engineType;
    }
    calculateMaxSpeed(){
        if (this.engineType === "Gasoline"){
            return 10;
        }

        else if (this.engineType === "Gasoline"){
            return 49;
        }
    }

    calculateMilesPerGallon(){
        if (this.engineType === "Gasoline"){
            return 14;
        }

        else if (this.engineType === "Gasoline"){
            return  44;
        }
    }
}

class Bicycle extends Vehicle{
    constructor(make, model, year, type){
        super(make, model, year)
            this.type = type;     
    }

    calculateMaxSpeed(){
        return 14;
    }
}

const myCar = new Car("toyota", "camry", 2020, "Gasoline", 2.5);
const myMotorcycle = new Motorcycle("Okada Honda", 2021, "Gasoline");
const myBicycle = new Bicycle("Bike Bicycle", 2022, "Leg Pressure");

console.log(myCar.calculateMaxSpeed())
console.log(myMotorcycle.calculateMaxSpeed())
console.log(myBicycle.calculateMaxSpeed())


// Form Validation

document.getElementById("myForm").addEventListener("submit", 
function(event){
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    if(!nameInput.checkValidity()){
        // alert("Name is Invalid");
        nameError.textContent = "Please Enter a Valid Name";
        nameError.style.display = "block";
        event.preventDefault();
    }

    else{
        nameError.textContent = "";
        nameError.style.display = "none";
    }

    if(!emailInput.checkValidity()){
        // alert("Email is Invalid");
        emailError.textContent= "Please Enter a Valid Email Address";
        emailError.style.display = "block";
        event.preventDefault();
    }

    else{
        emailError.textContent = "";
        emailError.style.display = "none";
    }
}
)