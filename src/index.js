const i_01_09 = [
    "",
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
    "ten",
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
const levels = ["", "", "thousand", "million", "billion"];

module.exports = function toReadable(n) {
    let res = "";
    let strN = String(n);

    if (n === 0) {
        return 'zero'
    }

    let triadaCount = Math.ceil(strN.length / 3);
    let arrayOfTriple = [];
    while (triadaCount > 0) {
        let triada = strN.slice(Math.max(0, strN.length - 3));

        triada = triada.padStart(3, "0");

        arrayOfTriple.push(triada);
        strN = strN.slice(0, Math.max(0, strN.length - 3));
        triadaCount--;
    }

    for (let level = arrayOfTriple.length - 1; level >= 0; level--) {
        res += parseTriada(arrayOfTriple[level]) + levels[level + 1] + " "
    }
    return res.trim()
}


function parseTriada(triada) {
    resTriada = "";
    let numTriada = Number(triada);
    if (numTriada >= 100) {
        resTriada += i_01_09[Number(triada[0])] + " hundred ";

        numTriada = numTriada - Number(triada[0]) * 100
    }
    if (numTriada >= 20) {
        resTriada += dozens[Number(triada[1])];
        if (Number(triada[2]) > 0) {
            resTriada += " " + i_01_09[Number(triada[2])]
        }
    } else if (numTriada >= 10) {
        resTriada += i_11_19[numTriada - 10] + " ";
    } else {
        resTriada += i_01_09[Number(triada[2])] + " ";
    }
    return resTriada
}

// console.log(toReadable(323));