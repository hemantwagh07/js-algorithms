function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2)); // [20,30,10,40,50] 
console.log(move([10, 20, 30, 40, 50], -1, -2)); // [10,20,30,50,40]
console.log(move([10, 20, 30, 40, 50], 3, 2)); // [10, 20, 40, 30, 50]