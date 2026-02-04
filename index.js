let alphabet = [".", ":", ",", " ", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"]
let cipher = ["47", "80", "95", "19", "7", "54", "90", "241", "16", "101", "43", "81", "6", "93", "120", "145", "17", "84", "99", "89", "9", "71", "46", "31", "3", "52", "69", "76", "29", "142", "42", "22", "102", "303", "228", "67"]

let input = ""
let output = ""

let count = 0    //variable to count amount of elements in arr(array to hold cut numbers for input cipher)
let arr = []     //array to hold amount of strings for input cipher
let str = ""     //temporary variable to hold exact numbers

function encode(input) {
  let str = ""
  let step = 0;
  while (step < input.length) {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] == input[step]) {
        str += cipher[i] + " "
      }
    }
    step++
  }
  console.log(str)
}
function uncode(input) {
  debugger
  let str = ""
  let arr = []
  let step = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] != " ") {
      str += input[i] //while counting characters adding them before for statement encounter space 
    }
    if (input[i + 1] == " ") {
      arr.push(str) //if the next symbol is space, push the collected symbols in the array
      str = ""
    }
  }

  while (step < input.length) {
    for (let i = 0; i < alphabet.length; i++) {
      if (cipher[i] == input[step]) {
        str += alphabet[i] + " "
      }
    }
    step++
  }
  console.log(str)
}

encode("бебра")
uncode("54 5 101 54 71 7")

for (let i = 0; i < cipher.length; i++) {
  if (cipher[i] != " ") {
    str += cipher[i] //while counting characters adding them before for statement encounter space 
  }
  if (cipher[i + 1] == " ") {
    arr.push(str) //if the next symbol is space, push the collected symbols in the array
    str = ""
  }
  console.log(cipher[i]) //log out character one by one, just a debug option
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]) //log out every string we pushed in arr, just for a debug and count elements
  count++
}
console.log(count);
//debug option!
function similarFind(targetArr) {
  let similarCount = 0;

  let usedArr = []

  let step = 0

  let sum = 0;

  while (step < targetArr.length) {
    let target = targetArr[step]

    for (let i = 0; i < targetArr.length; i++) {
      if (target == usedArr[i]) {
        break
      }
      if (target == targetArr[i]) {
        similarCount++
      }
    }

    if (similarCount != 0) {
      console.log("target: " + target + " : " + similarCount)
    }

    usedArr.push(target)

    sum += similarCount
    similarCount = 0
    step++
  }
  console.log("sum: " + sum) //287 symbols, its probably work i think
}
similarFind(arr)
//debug option!