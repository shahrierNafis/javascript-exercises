const fibonacci = function (number) {
    if (number < 0) return "OOPS";
    let n1 = 1, n2 = 1, nextTerm = n1 + n2;
    const array = [n1, n2]
    for (let i = 1; i <= number; i++) {
        array.push(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
    return array[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
