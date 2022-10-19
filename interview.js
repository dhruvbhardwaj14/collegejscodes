// s
// Finds the unit with minimum speed. 
// If there are more than 1 units then the first occured
 // For an empty list the function returns null

MAX_NUMBER = Math.pow(2, 32) - 1; 
function findSlowestUnit(units) {
    var slowestUnit = null;
    var minSpeed = MAX_NUMBER;
    for (var i = 0; i < units.length; i++) {
        var currentUnit = units[i];
        if (currentUnit.speed < minSpeed) {
            slowestUnit = currentUnit;
            minSpeed = currentUnit.speed;
        }
    }
    return slowestUnit;
} 
