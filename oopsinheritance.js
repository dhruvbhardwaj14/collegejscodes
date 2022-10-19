console.log("This is tutorial 30");

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates harry object
let harry = Object.create(proto);
harry.name = "harry";
harry.role = "Programmer";
// harry.changeName("Harry2")
// console.log(harry)

// This also creates harry object
const harry1 = Object.create(proto, {
    name: { value: "harry", writable: true },
    role: { value: "Programmer" },
});
harry1.changeName("Harry2")
// console.log(harry1)


// Employee constructor
class Employee {
    constructor(name, salary, experience) {
        this.name = name;
        this.salary = salary;
        this.experience = experience;
    }
    // Slogan
    slogan() {
        return `This company is the best. Regards, ${this.name}`;
    }
}


// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan())

// Programmer
class Programmer {
    constructor(name, salary, experience, language) {
        Employee.call(this, name, salary, experience);
        this.language = language;
    }
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);


