//Find n consecutive numbers from given array with highest sum
//maxSubarraySum(array, n) 

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {// Find sum of first n consecutive numbers
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) { // Start from n
        tempSum = tempSum - arr[i - num] + arr[i]; // subtract old last number and add new next number
        maxSum = Math.max(maxSum, tempSum);// Compare sum of first n consecutive numbers with current n consecutive numbers
    }
    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)) 
