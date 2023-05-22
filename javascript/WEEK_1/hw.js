function solution(s) {
    let arr = s.split("")
    let findp = arr.filter(function (item) {
        return item === 'p' || item === 'P'
    })
    let findy = arr.filter(function (item) {
        return item === 'y' || item === 'Y'
    })
    if ((findp.length == findy.length) || (findp.length == 0 && findy.length == 0)) {
        return true
    } else {
        return false
    }
}

function solution(absolutes, signs) {
    let sum = 0
    for (i = 0; i < signs.length; i++) {
        if (signs[i] == false) {
            let absolutesminus = absolutes[i] - (absolutes[i] * 2)
            absolutes.splice(i, 1, absolutesminus)
        }
    }
    for (i = 0; i < absolutes.length; i++) {
        sum = sum + absolutes[i]
    }

    return sum;
}