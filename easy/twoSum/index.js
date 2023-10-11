/*  Kiritilgan nums array ichidan qo'shilmasi target ga teng bo'lgan sonlar ni qaytarish kerak,
        const twoSum = function(nums, target) {
              let in1 = 0
              let in2 = 0
              for (let i = 0; i < nums.length; i++) {
                  if (nums[i] + nums[i+1] === target){
                        in1 = i
                        in2 = i + 1
                  }
              }
        }
  Misolni ushbu ko'rinishda yozish oson, kelgan array ning ichini biz qidirgan sonlar chiqmaguncha aylanish!
  Bu to'g'ri yechim, ammo bu juda ko'p vaqt sarflaydi va xotiradan ortiqcha joy egallaydi!

  Biz bergan massivning har bir elementini aylanib chiqib shart orqali target ga teng bo'lsa qaytargin deb
  aylanib chiqish shart emas, numObj o'zgaruvchi obyekti yasalgan va kelgan arrayni aylanib, target dan
  aylanayotgan index dagi sonni ayirib, yasalgan numObj obyekt ichida bor yoki yo'qligini tekshirib olamiz.

  Bor bo'lsa aynan biz qidirayotgan elementlar topildi va qaytaramiz!

  Yo'q bo'lsa aylanayotgan elementni numObj obyektiga qo'shib qo'yamiz!

  Bu algoritm siz qidirayotgan elementlarni topish ishini ancha tezlashtiradi!
*
* */
const twoSum = function(nums, target) {
    let numObj = {}
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (numObj[complement] !== undefined){
            return [numObj[complement], i]
        }

        numObj[nums[i]] = i
    }
}

console.log("26 - > ", twoSum([2,7,11,15], 26))
// console.log("6 - > ", twoSum([3,2,4], 6))