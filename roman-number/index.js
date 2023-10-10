/*
* Berilgan rim raqamlarini oldin obyekt ko'rinishida har biriga o'z raqamlarini biriktirib chiqildi va umumiy hisob uchun
* o'zgaruvchi e'lon qilindi va kirib kelgan S raqamni uzunligi bo'yicha aylanib,
*  xar bir aylanishda xozirgi sonni qiymati va undan keyingi sonning qiymati aniqlandi.
* if operatori orqali shart bilan tekshirilib, agar xozirgi raqam o'zidan keyingi raqamdan katta bo'ladigan bo'lsa
*  kattasidan kichigini ayirib e'lon qilingan o'zgaruvchiga qo'shiladi, aksi bo'lsa
* hozirgi raqam e'lon qilingan o'zgaruvchiga o'zi qo'shiladi
* */

const romanToInt = function (s) {

    let amount = 0;

    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]]
        const next = sym[s[i + 1]]

        if(cur < next){
            amount += next - cur;
            i++
        } else {
            amount += cur
        }
    }

    return amount;
};

console.log("III: 3-> ", romanToInt('III'))
console.log("MDCI: 1601 -> ", romanToInt('MDCI'))
console.log("MCMXCIV: 1994 -> ", romanToInt('MCMXCIV'))