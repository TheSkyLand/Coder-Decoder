let alphabet = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х","ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"]
let cipher = "90 19 17 89 99 16 89 99 101 19 9 89 145 7 6 75 90 7 17 93 19 16 93 145 93 74 19 6 90 101 71 101 120 19 93 19 6 7 19 46 84 89 31 71 101 99 102 101 19 54 71 7 17 93 19 16 101 99 102 241 7 84 93 19 93 17 93 19 46 89 54 7 145 7 84 93 19 93 19 145 89 29 145 7 84 93 19 99 7 19 145 89 71 84 19 16 93 145 93 84 19 6 90 101 71 67 84 47 19 89 16 99 89 84 3 19 123 101 17 89 90 101 145 3 19 6 7 74 89 31 101 17 89 46 102 19 9 89 241 17 67 16 101 31 102 19 6 90 101 71 101 120 80 19 89 99 19 3 74 90 7 31 93 17 19 99 7 19 3 17 93 76 101 19 46 89 54 7 123 89 99 145 3 19 93 19 9 71 93 99 101 46 19 101 43 19 90 19 6 90 101 71 93 99 101 76 47 19 101 241 89 19 9 3 46 31 93 17 93 19 46 84 89 31 71 101 31 102 39 19 7 19 46 89 54 7 123 89 99 145 3 19 90 6 67 17 93 19 93 19 54 71 89 46 93 17 93 19 90 19 145 17 101 31 145 3 19 145 89 19 17 102 90 3 19 99 7 19 46 42 101 16 101 99 102 101 47 "

let count = 0

let arr = []
let str = ""

for (let i = 0; i < cipher.length; i++) {
    if (cipher[i] != " ") {
        str += cipher[i]
    }

    if (cipher[i + 1] == " ") {
        arr.push(str)
        str = ""
    }

    console.log(cipher[i])
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    count++
}

function similarFind(targetArr) {


    let similarCount = 0;

    let usedArr = []

    step = 0

    while (step < targetArr.length) {
        let target = targetArr[step]

        for (let i = 0; i < targetArr.length; i++) {
            if (target == targetArr[i]) {
                similarCount++
            }
        }

        console.log("current target: " + target + " : " + similarCount)

        usedArr.push(target)

        similarCount = 0
        step++
    }
}

similarFind(arr)

console.log(count);
//work in progress
