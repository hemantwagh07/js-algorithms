function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) { // Start with 2nd element
        currentVal = arr[i]; // store current element
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) { // iterate through sorted array from last to compare current element
            arr[j + 1] = arr[j] // if current element < arr[j] then put arr[j] at j+1
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([81, 55, 7, 45, 33]));