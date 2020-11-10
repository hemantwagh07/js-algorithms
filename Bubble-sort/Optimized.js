//For nearly sorted data if in any iteration if there is no swapping that means array is sorted. So break the loop
function bubbleSort(arr) {
    // Start from end towards the beginning. Because after each iteration largest element will be moved to last
    // So in next iteration we dont have to go till end
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) { // Start from beginning toward i
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // Swappiing using ES6 array Destructuring Assignment
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([2, 4, 6, 88, 10, 44, 33]));