function bubbleSort(arr) {
    // Start from end towards the beginning. Because after each iteration largest element will be moved to last
    // So in next iteration we dont have to go till end
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) { // Start from beginning toward i
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // Swappiing using ES6 array Destructuring Assignment
            }

        }
    }
    return arr;
}

console.log(bubbleSort([45, 74, 2, 14, 87, 11]));