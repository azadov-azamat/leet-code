const strStr = function (haystack, needle) {
    //returns -1 if not in index else returns the index
    return haystack.indexOf(needle);


    // const h = haystack.length
    // const n = needle.length
    // for (let i = 0; i < h - n; i++) {
    //     if (haystack.substring(i, n) === needle)
    //         return i
    //     return -1
    // }
};

console.log("0: ", strStr("sadbutsad", "sad"))
console.log("-1: ", strStr("leetcode", "leeto"))
console.log("2: ", strStr("hello", "ll"))
console.log("undefined: ", strStr("aaaaa", "bba"))