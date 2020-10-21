//From the given sorted array find out the pair which has sum zero

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [ -2, 2 ] with O(n^2)

function sumZeroRefactor(arr) {
    let left = 0; // To start from left
    let right = arr.length - 1; // To start from Right

    while (left < right) {
        let sum = arr[left] + arr[right]; // sum of left and right item from array
        if (sum === 0) {
            return [arr[left], arr[right]]; // if it zero the return that pair
        } else if (sum > 0) {
            right--; // Move right pointer one step towards left
        } else {
            left++; // Move left pointer one step towards right
        }
    }
}

console.log(sumZeroRefactor([-4, -3, -2, -1, 0, 1, 2, 5])) // [ -2, 2 ] with O(n)