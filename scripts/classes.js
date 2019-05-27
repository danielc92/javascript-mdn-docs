/*
CLASSES, CONSTRUCTORS, INHERTIANCE
SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
*/



// Classes
class Car {
    constructor (name, transmission, milleage) {
        this.name = name;
        this.transmission = transmission;
        this.milleage = milleage;
    }

    isOld () {
        if ((this.milleage > 10000)) {
            return `This car (${this.name}) is old...`;
        } else {
            return `This car (${this.name}) is relatively new...`;
        }
    }
}

car = new Car(name='Mazda', transmission='Auto', milleage=40000);
console.log(car.transmission, car.name);
console.log(car.isOld());



// Inheritance
class UsedCar extends Car {
    constructor(sale_price) {
        super(name, transmission, milleage);

        this.sale_price = sale_price;
    }
}

used_car = new UsedCar(name='Ford', transmission='Manual', milleage=60000, sale_price=3320.50);
console.log(used_car);
console.log(used_car.isOld());
console.log(used_car.prototype.getTransmission());