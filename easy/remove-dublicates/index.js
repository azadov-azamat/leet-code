const removeDuplicates = function (nums) {
    let numsLength = nums.length;
    const data = nums
    for (let i = 0; i < numsLength; i++) {
        if (i >= data.length) {
            break;
        }
        if (data[i] === data[i + 1]) {
            // data[i] = "_"
            nums.splice(i, 1);
            i--;
        }
    }
    return data.sort()
};

console.log('2, nums = [1,2,_]: ', removeDuplicates([1, 1, 2]))
console.log("5, [ 0, 1, 2, 3, 4 ]: ", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// console.log([0, 0, 1, 1, 1, 2, 2, 3, 3, 4].splice(3, 1))