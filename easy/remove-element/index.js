const removeElement = function (nums, val) {
    // nums = nums.filter((item) => item !== val)
    // return nums.length

    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }

    //nums.length = j; // Chop the surplus values - not needed for LC submission
    return j;
};

console.log("2: ", removeElement([3, 2, 2, 3], 3))
console.log("5: ", removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))