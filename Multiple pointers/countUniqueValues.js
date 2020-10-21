/* Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.*/

function countUniqueValues(sortedArray) {
    if (sortedArray.length == 0) return 0;
    let i = 0, j = 1

    while (j < sortedArray.length) { // Till j reaches towards end of array
        if (sortedArray[i] === sortedArray[j]) {
            j++;
        } else {
            ++i; // Increase first pointer then
            sortedArray[i] = sortedArray[j]; // replace the found different element at i position
            j++;
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

function countUniqueValues1(sortedArray) {
    if (sortedArray.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < sortedArray.length; j++) {
        if (sortedArray[i] != sortedArray[j]) {
            i++;
            sortedArray[i] = sortedArray[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));