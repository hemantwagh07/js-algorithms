var twoSum = function (nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
    console.log(map);
}

console.log(twoSum([2, 7, 11, 15], 9));// Return the index of 2 numbers whose sum is 9