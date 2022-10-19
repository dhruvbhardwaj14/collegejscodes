// Object Literal for creating objects
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function() {
    console.log("car is running");
  }
};
// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
class GeneralCar {
    constructor(givenName, givenSpeed) {
        this.name = givenName;
        this.topSpeed = givenSpeed;
        this.run = function () {
            console.log(`${this.name} Is Running`);
        };
        this.analyze = function () {
            console.log(
                `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
            );
        };
    }
}
car = new GeneralCar("Nissan", 180);
car = new GeneralCar("Marutu Alto", 80);
car = new GeneralCar("Mercedes", 200);
console.log(car, car, car);
car.analyze();
console.log(car.name);

 