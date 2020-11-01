// sum(1)(2)(3)(4)(5).....() should return a sum of arguments passed.

function sum(a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    }
}

// ES6 Version
// let sum = a => b => b ? sum(a + b) : a

console.log(sum(1)(2)(3)(4)());