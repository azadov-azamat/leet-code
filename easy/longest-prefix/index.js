/* Kiritilgan array ichidan prefix bo'lgan eng uzun string ni qaytarish yoki bo'sh string qaytishi kerak
oldin shart berib srrayning birinchi elementi bor yo'qligi va bo'sh string emasligi, array ning uzunligi 1 dan katta ekanligi tekshirildi
while orqali kelgan array ning aylanib shart berildi, 0 chi array ning i chi elementi bor ekanligi va array ichidagi boshqa
string ning i elementi 0 chi index dagi string ning i elementiga teng ekanligi tekshirildi, shart qanoatlantirsa
e'lon qilingan i o'zgaruvchisi 1 taga oshiriladi. Oxirida esa array ning 0 indexdagi string ni i index gacha qirqib
olinib ekranga chop etildi
* */

const longestCommonPrefix = function(strs) {

    if (!strs[0] || strs.length ===  1) return strs[0] || "";

    let i = 0;

    while(strs[0][i] && strs.every(w => w[i] === strs[0][i]))
        i++;

    return strs[0].substr(0, i);
};

console.log("fl", longestCommonPrefix(["flower","flow","flight"]))
console.log("d", longestCommonPrefix(["dbg","dacecar","dr"]))