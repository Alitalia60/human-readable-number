const i_01_09 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

const i_11_19 = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

const dozens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
const levels = ["", "hundred", "thousand", "million", "billion"];
let res = "";

function numberToWord(number) {
    let level = 0;
    do {
        let lastDigit = number - Math.floor(number / 10) * 10;
        number = Math.floor(number / 10);
        res = sayDigits(lastDigit) + levels[level] + " " + res;
        //if level =0,  digits
        level = level == 2 ? 0 : level;
    } while (number >= 1);
    return res;
}

let n = 909;
let strN = String(n);

if (n === 0) {
    console.log("zero");
    return "zero";
}

console.log("входное число =", strN);

let triadaCount = Math.ceil(strN.length / 3);
let arrayOfTriple = [];
while (triadaCount > 0) {
    let triada = strN.slice(strN.length - 3);
    switch (triada.length) {
        case 1:
            triada = "00" + triada;
            break;
        case 2:
            triada = "0" + triada;
            break;
        default:
            break;
    }
    arrayOfTriple.push(triada);
    strN = strN.slice(0, strN.length - 3);
    triadaCount--;
}

for (let level = 1; level <= arrayOfTriple.length; level++) {
    res = "";
    const triada = arrayOfTriple[level - 1];
    console.log("level=", level, "разбор=", triada);

    if (Number(triada) >= 100) {
        res += i_01_09[Number(triada[0])] + " " + levels[level] + " ";
        //проверка числа сотен
        // console.log(i_01_09[Number(triada[0])], levels[level]);

        //проверка числа десятков
    }
    if (Number(triada.slice(1)) >= 20) {
        res += dozens[Number(triada[1])] + "-";
    } else if (Number(triada.slice(1)) >= 10) {
        res += i_11_19[Number(triada.slice(1)) - 10] + " ";
    } else {
        res += i_01_09[Number(triada[2])] + " ";
    }

    console.log(res);
}

// numberToWord(123456)
// console.log(numberToWord(618604283947))
// console.log(from1to19(1));
// console.log(from1to19(5));
// console.log(from1to19(8));
// console.log(from1to19(9));
// console.log(from1to19(10));
// console.log(from1to19(12));
// console.log(from1to19(13));
// console.log(from1to19(16));
// console.log(from1to19(19));
// console.log(from1to19(20));
