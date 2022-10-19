console.log("This is tutorial 28");

// Object literal : Object.prototype
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}

class Obj {
    constructor(givenName) {
        this.name = givenName;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}



let obj2 = new Obj("Rohan Das");
console.log(obj2);
 