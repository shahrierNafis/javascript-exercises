const repeatString = function (string, number) {
    if (number < 0) {
        return 'ERROR';
    }

    let newString = "";

    while (number) {
        newString = newString.concat(string);
        number--;
    }
    return newString;
};
// Do not edit below this line
module.exports = repeatString;
