const i_01_09 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const i_11_19 = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const levels = ['', 'hundred', 'thousand', 'million', 'billion']
let res = '';

function numberToWord(number) {

    let level = 0;
    do {
        let lastDigit = number - Math.floor(number / 10) * 10;
        number = Math.floor(number / 10);
        res = sayDigits(lastDigit) + levels[level] + ' ' + res;
        //if level =0,  digits
        level = (level == 2) ? 0 : level;
    } while (number >= 1);
    return res
}

let n = 140
let strN = String(n)

console.log(strN);

let triadaCount = Math.ceil(strN.length / 3)
let arrayOfTriple = [];
while (triadaCount > 0) {
    arrayOfTriple.push(strN.slice(strN.length - 3))
    strN = strN.slice(0, strN.length - 3)
    triadaCount--
}

// console.log(arrayOfTriple);

let arrOfThree = []

for (let level = 1; level <= arrayOfTriple.length; level++) {
    res = ''
    const triada = arrayOfTriple[level - 1];
    console.log('triada=', triada);

    if (Number(triada) >= 100) {

        res += i_01_09[Number(triada[0])] + ' ' + levels[level] + ' '
            //проверка числа сотен
            // console.log(i_01_09[Number(triada[0])], levels[level]);

        //проверка числа десятков
    }
    if (Number(triada.slice(1)) >= 20) {
        res += dozens[Number(triada[1])] + '-'
            // console.log(dozens[Number(triada[1])]);
    }

    res += i_01_09[Number(triada[2])] + ' '
        // console.log(i_01_09[Number(triada[2])]);

    arrOfThree.unshift(res)
}

console.log(arrOfThree);
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