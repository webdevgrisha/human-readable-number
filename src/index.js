const numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(num) {
    const numStringRep = String(num);
    const numCount = numStringRep.length;

    if (num in numbers) return numbers[num];

    const readableNumber = numStringRep
        .replace(/1[1-9]$|\d/g, (match, offset) => {
            const clearNum = match * 10 ** (numCount - offset - 1);
            let clearNumStringRep = "";

            if (match == 0) return "";
            if (match >= 11) return `${numbers[match]} `;

            if (clearNum >= 100) {
                clearNumStringRep = `${numbers[match]} hundred`;
            } else {
                clearNumStringRep = numbers[clearNum];
            }

            return clearNumStringRep + " ";
        })
        .trim();

    return readableNumber;
};
