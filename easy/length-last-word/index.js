const lengthOfLastWord = function(s) {
    console.log(s.trim().split(" "))
    const words = s.trim().split(" ");
    return words.length > 0 ? words[words.length - 1].length : 0;
};

console.log("5: ", lengthOfLastWord("Hello World"))
console.log("4: ", lengthOfLastWord("   fly me   to   the moon  "))
console.log("6: ", lengthOfLastWord("luffy is still joyboy"))