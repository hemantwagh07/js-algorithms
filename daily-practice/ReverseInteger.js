var reverse = function (x) {
    let numArr = [];
    let negative = false;
    if (x === 0) return x;

    if (x < 0) {
        x = Math.abs(x);
        negative = true;
    }
    while (x) {
        numArr.push(x % 10);
        x = Math.floor(x / 10);
    }
    let reverse = parseInt(numArr.join(''))

    if (reverse > 0x7FFFFFFF) { // For max 32-bit integer i.e. 2^32
        return 0;
    }
    return (negative) ? -1 * reverse : reverse;
};

console.log(reverse(-123));
