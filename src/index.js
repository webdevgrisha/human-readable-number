module.exports = function toReadable(number) {
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
        20: "twenty",
        30: "thity",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hondred",
        1000: "thousand",
    };

    let result;

    if (number < 14) {
        return numbers[String(number)];
    } else if (number >= 14 && number < 20) {
        result = numbers[String(number % 10)];
        result = result.at(-1) === "e" ? result.slice(0, -1) : result;

        return result + "teen";
    } else if (number >= 20 && number < 100) {
        let remainder = number % 10;

        if (remainder === 0) {
            result = numbers[String(number)];
        } else {
            let decimal = numbers[String(Math.trunc((number / 10) * 10))];

            result = decimal + " " + numbers[String(remainder)];
        }
    } else if (number >= 100 && number < 1000) {
        let unitsRemainder = number % 10;
        let hundredRemainder = number % 100;
        let hundredCount = Math.trunc(number / 100);

        if (hundredRemainder === 0) {
            result = numbers[String(hundredCount)] + " " + "hundred";
        } else {
            let decimal = numbers[String(Math.trunc((number / 10) * 10))];

            console.log(hundredCount);
            result =
                numbers[String(hundredCount)] +
                " " +
                "hundred" +
                " " +
                decimal +
                " " +
                numbers[String(unitsRemainder)];
        }
    }

    return result;
};
