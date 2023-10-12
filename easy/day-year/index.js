const dayOfYear = function (date) {
    const month = new Date(date).getMonth() + 1
    const year = new Date(date).getFullYear()
    const leap = new Date(year, 1, 29).getDate() === 29;

    let dateCount = 0
    for (let i = 1; i < month; i++) {
        switch (i) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                dateCount += 31
                break
            case 4:
            case 6:
            case 9:
            case 11:
                dateCount += 30
                break
            default:
                dateCount += (leap ? 29 : 28)
        }
    }
    console.log(new Date(date).getDate())
    return dateCount + (new Date(date).getDate())
};

console.log("40: ", dayOfYear("2019-02-09"))