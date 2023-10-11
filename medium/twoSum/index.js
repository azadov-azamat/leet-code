const twoSum = function(numbers, target) {
    let numObj = {}
    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i]
        if (numObj[complement] !== undefined) {
            return [numObj[complement] + 1, i + 1]
        }
        numObj[numbers[i]] = i
    }
};

console.log("26 - > ", twoSum([2,7,11,15], 26))