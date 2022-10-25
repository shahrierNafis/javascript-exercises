const removeFromArray = function () {
    let array = arguments[0];
    for (const value of arguments) {
        if (typeof (value) == typeof (array)) continue;
        let indexOfValue = array.indexOf(value)
        while (indexOfValue !== -1) {
            array.splice(indexOfValue, 1);
            indexOfValue = array.indexOf(value)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
