const searchInsert = function (nums, target) {

    if (nums.find(item => item === target)) {
        return nums.indexOf(target)
    } else {
        nums.push(target)
        return nums.sort((a, b) => a - b).indexOf(target)
    }
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === target) {
    //         return i
    //     } else {
    //         nums.push(target)
    //         return nums.sort((a, b) => a - b).indexOf(target)
    //     }
    // }
};

console.log("2: ", searchInsert([1, 3, 5, 6], 5))
console.log("1: ", searchInsert([1, 3, 5, 6], 2))
console.log("4: ", searchInsert([1, 3, 5, 6], 7))