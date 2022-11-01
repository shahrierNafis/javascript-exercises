const palindromes = function (str) {
    str = str.replace(/[!,. ]/g, '').toLowerCase();
    return str == str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
