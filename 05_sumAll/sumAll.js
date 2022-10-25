const sumAll = function (start, end) {
    if (!(Number.isInteger(start) && Number.isInteger(end)
        && start > -1 && end > -1)) {
        return 'ERROR';
    }
    let sum = 0;
    start < end ? end++ : end--;
    while (start !== end) {
        sum += start;
        start < end + 1 ? start++ : start--;
    }
    return sum;
};
sumAll(4, 1);
// Do not edit below this line
module.exports = sumAll;
