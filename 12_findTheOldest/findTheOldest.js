const findTheOldest = function (people) {
    let oldest = {
        name: "",
        age: 0,
    };
    for (let person of people) {
        (person.yearOfDeath == undefined) ?
            person.age = new Date().getFullYear() - person.yearOfBirth :
            person.age = person.yearOfDeath - person.yearOfBirth;
        if (person.age > oldest.age) {
            oldest.name = person.name;
            oldest.age = person.age;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
