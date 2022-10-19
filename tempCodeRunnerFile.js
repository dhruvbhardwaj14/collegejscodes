const prompt=require("prompt-sync")();
let n=parseInt(prompt("Enter total number of units: "))
let a=[];
for (let i = 0; i < n; i++) {
    let obj={};
    obj.name=prompt("Enter unit name: ");
    obj.speed=parseInt(prompt("Enter unit speed: "));
    obj.hp=parseInt(prompt("Enter unit hp: "));
    a.push(obj);
}
function js(a){
    let b=[];
    for (var i = 0; i < a.length; i++) {
        if(a[i]["speed"]==0 && a[i]["hp"]>0){
            b.push(a[i]);
        }
    }
    return b;
}
console.log("List of alive and Immovable units:");
console.log(js(a));