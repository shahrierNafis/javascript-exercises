const reverseString = function(string) {
    arrayString = string.split("");
    arrayString.reverse();
    string = arrayString.join("");
    return string;
};

// Do not edit below this line
module.exports = reverseString;
